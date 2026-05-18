import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type TrialRecord = {
  id: string;
  test_coupon_id: string;
  recipe_attempt_id: string;
  operator: string;
  date: string;
  traceable_identifier_type: string;
  traceable_identifier_value: string;
  material: string;
  thickness: string;
  joint_type: string;
  mode: string;
  wire_diameter: string;
  gas: string;
  wfs: string;
  voltage_or_trim: string;
  travel_speed: string;
  weave_type: string;
  pass_fail: string;
  test_status: string;
  result_notes: string;
  selected_baseline_reference_id?: string;
  selected_baseline_reference_type?: string;
  selected_baseline_reference_process?: string;
  selected_baseline_reference_wire_size?: string;
  selected_baseline_reference_value_status?: string;
  created_at: string;
};

type BaselineLookupRecord = {
  id: string;
  record_type: 'Miller Machine Baseline' | 'Vectis Motion / Weave Guardrail';
  title: string;
  scope: string;
  process: 'MIG/CV' | 'Pulse MIG';
  wire_size: '.035 ER70S-6' | '.045 ER70S-6';
  value_status: 'missing_unverified' | 'source_pending' | 'source_verified' | 'shop_corrected_starting_point';
  primary_status: string;
  detail_rows: string[][];
};

const historyStorageKey = 'vectis-weld-v3-trial-history';

const safetyLabels = [
  'Reference Only',
  'Requires Test Coupon',
  'Tested Result',
  'Not Approved',
  'Not Production Ready',
  'Not Locked Recipe',
];

const screens = [
  { id: 'home', label: 'Home / Start' },
  { id: 'setup', label: 'Setup Entry' },
  { id: 'baseline', label: 'Baseline Reference' },
  { id: 'trial', label: 'Trial Result Entry' },
  { id: 'history', label: 'Local History' },
  { id: 'worked', label: 'What Worked Review' },
  { id: 'gate', label: 'Approval / Locked Gate' },
];

const actualSettingFields = [
  'WFS',
  'Voltage or Trim',
  'Travel Speed',
  'CTWD',
  'Torch / Work Angle',
  'Push / Pull Angle',
  'Pass Count',
  'Notes',
];

const weaveFields = [
  'Weave Type',
  'Weave Parameters',
  'Weave Width',
  'Weave Length / Step',
  'Weave Frequency / Pause',
];

const trialIdFields = [
  'Test Coupon ID',
  'Recipe Attempt ID',
  'Operator',
  'Date',
  'Traceable ID Type',
  'Traceable ID Value',
  'Baseline Range ID',
];

const trialSetupSnapshotFields = [
  'Material',
  'Thickness',
  'Joint Type',
  'Mode',
  'Wire Diameter',
  'Gas',
];

const trialResultFields = [
  'Test Status',
  'Visual Result',
  'Tie-In Result',
  'Undercut Result',
  'Overlap Result',
  'Spatter Result',
  'Porosity Result',
  'Burn-Through Result',
  'Distortion Result',
  'Penetration Result',
  'Pass / Fail',
  'Result Notes',
];

const trialSafetyLabels = [
  'Tested Result',
  'Evidence Only',
  'Not Approved',
  'Not Production Ready',
  'Not Locked Recipe',
  'Approval Required Before Lock',
];

const gateRequirements = [
  'Tested result exists',
  'Pass result exists',
  'Approved by is required',
  'Approval date is required',
  'Lock authorization is required',
  'Locked recipe ID is not created automatically',
];

const setupSelectFields = [
  { label: 'Material', value: 'Mild steel', options: ['Mild steel'] },
  { label: 'Wire Type', value: 'ER70S-6', options: ['ER70S-6'] },
  { label: 'Wire Diameter', value: '.035 ER70S-6', options: ['.035 ER70S-6', '.045 ER70S-6'] },
  { label: 'Gas', value: 'Shop-used mild steel gas only', options: ['Shop-used mild steel gas only'] },
  { label: 'Mode', value: 'MIG/CV', options: ['MIG/CV', 'Pulse MIG'] },
  { label: 'Traceable ID Type', value: 'Test Coupon ID', options: ['Job Number', 'Job Name', 'Part Description', 'Part Number', 'Test Coupon ID'] },
];

const setupInputFields = [
  'Thickness',
  'Gauge',
  'Joint Type',
  'Weld Position',
  'Operator',
  'Date',
  'Traceable ID Value',
];

const baselineLookupRecords: BaselineLookupRecord[] = [
  {
    id: 'miller-cv-035-shell',
    record_type: 'Miller Machine Baseline',
    title: 'Miller 352 MPa Machine Baseline Reference',
    scope: 'Machine-side arc setup references only',
    process: 'MIG/CV',
    wire_size: '.035 ER70S-6',
    value_status: 'missing_unverified',
    primary_status: 'Starting Reference — Verify With Test Weld',
    detail_rows: [
      ['Source / Evidence Status', 'Required before numeric values are entered'],
      ['Value Status', 'missing_unverified'],
      ['Test Weld Required', 'true'],
      ['Control', 'Starting Reference — Verify With Test Weld'],
      ['Status', 'Not Approved / Not Production Ready / Not Locked Recipe'],
    ],
  },
  {
    id: 'miller-pulse-045-shell',
    record_type: 'Miller Machine Baseline',
    title: 'Miller 352 MPa Machine Baseline Reference',
    scope: 'Machine-side arc setup references only',
    process: 'Pulse MIG',
    wire_size: '.045 ER70S-6',
    value_status: 'missing_unverified',
    primary_status: 'Starting Reference — Verify With Test Weld',
    detail_rows: [
      ['Source / Evidence Status', 'Required before numeric values are entered'],
      ['Value Status', 'missing_unverified'],
      ['Test Weld Required', 'true'],
      ['Control', 'Starting Reference — Verify With Test Weld'],
      ['Status', 'Not Approved / Not Production Ready / Not Locked Recipe'],
    ],
  },
  {
    id: 'vectis-cv-035-shell',
    record_type: 'Vectis Motion / Weave Guardrail',
    title: 'Vectis Motion / Weave Guardrail',
    scope: 'Cobot-side motion/weave references only',
    process: 'MIG/CV',
    wire_size: '.035 ER70S-6',
    value_status: 'missing_unverified',
    primary_status: 'Starting Reference — Verify With Test Weld',
    detail_rows: [
      ['Weave Pattern Type', 'No Weave / Zig-Zag / Sine / InLine / Other'],
      ['Motion Value Status', 'missing_unverified'],
      ['Test Weld Required', 'true'],
      ['Control', 'Starting Reference — Verify With Test Weld'],
      ['Status', 'Not Approved / Not Production Ready / Not Locked Recipe'],
    ],
  },
  {
    id: 'vectis-pulse-045-shell',
    record_type: 'Vectis Motion / Weave Guardrail',
    title: 'Vectis Motion / Weave Guardrail',
    scope: 'Cobot-side motion/weave references only',
    process: 'Pulse MIG',
    wire_size: '.045 ER70S-6',
    value_status: 'missing_unverified',
    primary_status: 'Starting Reference — Verify With Test Weld',
    detail_rows: [
      ['Weave Pattern Type', 'No Weave / Zig-Zag / Sine / InLine / Other'],
      ['Motion Value Status', 'missing_unverified'],
      ['Test Weld Required', 'true'],
      ['Control', 'Starting Reference — Verify With Test Weld'],
      ['Status', 'Not Approved / Not Production Ready / Not Locked Recipe'],
    ],
  },
];

function fieldKey(field: string) {
  return field.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function isPassedTrial(record: TrialRecord) {
  const passFail = record.pass_fail.toLowerCase();
  const status = record.test_status.toLowerCase();
  return passFail.includes('pass') || status.includes('pass');
}

function FieldGrid({ fields, prefix = '' }: { fields: string[]; prefix?: string }) {
  return (
    <div className="field-grid">
      {fields.map((field) => (
        <label className="field" key={`${prefix}${field}`}>
          <span>{field}</span>
          <input
            name={`${prefix}${fieldKey(field)}`}
            placeholder="Enter / select"
            aria-label={field}
            type={field === 'Date' ? 'date' : 'text'}
          />
        </label>
      ))}
    </div>
  );
}

function TrialHistoryCard({ record }: { record: TrialRecord }) {
  return (
    <article className="history-card">
      <div>
        <strong>{record.test_coupon_id || 'No test coupon ID entered'}</strong>
        <span>{record.date || 'No date entered'} · {record.operator || 'No operator entered'}</span>
      </div>
      <div className="history-meta">
        <span>{record.material || 'Mild steel'}</span>
        <span>{record.thickness || 'Thickness not entered'}</span>
        <span>{record.joint_type || 'Joint not entered'}</span>
        <span>{record.mode || 'Mode not entered'}</span>
        <span>{record.wire_diameter || 'Wire not entered'}</span>
      </div>
      {record.selected_baseline_reference_id && (
        <div className="reference-summary compact">
          <span>Selected Reference: {record.selected_baseline_reference_id}</span>
          <span>{record.selected_baseline_reference_type}</span>
          <span>{record.selected_baseline_reference_process}</span>
          <span>{record.selected_baseline_reference_wire_size}</span>
        </div>
      )}
      <p>{record.result_notes || 'No result notes entered.'}</p>
      <div className="reference-summary compact">
        <span>{record.test_status || 'Test status not entered'}</span>
        <span>{record.pass_fail || 'Pass/fail not entered'}</span>
        <span>Evidence Only</span>
        <span>Not Approved</span>
      </div>
    </article>
  );
}

function ReferenceTable({ rows }: { rows: string[][] }) {
  return (
    <div className="reference-table" aria-label="Baseline library separated reference fields">
      {rows.map(([label, value]) => (
        <div className="reference-row" key={label}>
          <strong>{label}</strong>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}

function LookupRecordCard({
  record,
  selectedReferenceId,
  onSelectReference,
}: {
  record: BaselineLookupRecord;
  selectedReferenceId?: string;
  onSelectReference?: (record: BaselineLookupRecord) => void;
}) {
  const isSelected = selectedReferenceId === record.id;

  return (
    <article className="history-card">
      <div>
        <strong>{record.title}</strong>
        <span>{record.scope}</span>
      </div>
      <div className="history-meta">
        <span>{record.record_type}</span>
        <span>{record.process}</span>
        <span>{record.wire_size}</span>
        <span>{record.value_status}</span>
      </div>
      <p>{record.primary_status}</p>
      <ReferenceTable rows={record.detail_rows} />
      {onSelectReference && (
        <div className="reference-summary compact">
          <span>{isSelected ? 'Selected for Trial Entry' : 'Manual Selection Only'}</span>
          <span>Not an approved production recipe</span>
          <button type="button" onClick={() => onSelectReference(record)}>
            Use This Starting Reference
          </button>
        </div>
      )}
    </article>
  );
}

function SetupEntryControls() {
  return (
    <div className="field-grid">
      {setupSelectFields.map((field) => (
        <label className="field" key={field.label}>
          <span>{field.label}</span>
          <select aria-label={field.label} defaultValue={field.value}>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}

      {setupInputFields.map((field) => (
        <label className="field" key={field}>
          <span>{field}</span>
          <input
            aria-label={field}
            placeholder={field === 'Traceable ID Value' ? 'Required before setup is complete' : 'Enter value'}
            required={field === 'Traceable ID Value'}
            type={field === 'Date' ? 'date' : 'text'}
          />
        </label>
      ))}
    </div>
  );
}

function BaselineReferenceScreen({
  selectedReference,
  onSelectReference,
}: {
  selectedReference: BaselineLookupRecord | null;
  onSelectReference: (record: BaselineLookupRecord) => void;
}) {
  const [processFilter, setProcessFilter] = useState('All');
  const [wireFilter, setWireFilter] = useState('All');
  const [recordTypeFilter, setRecordTypeFilter] = useState('All');
  const [valueStatusFilter, setValueStatusFilter] = useState('All');

  const filteredRecords = useMemo(() => {
    return baselineLookupRecords.filter((record) => {
      return (
        (processFilter === 'All' || record.process === processFilter) &&
        (wireFilter === 'All' || record.wire_size === wireFilter) &&
        (recordTypeFilter === 'All' || record.record_type === recordTypeFilter) &&
        (valueStatusFilter === 'All' || record.value_status === valueStatusFilter)
      );
    });
  }, [processFilter, wireFilter, recordTypeFilter, valueStatusFilter]);

  const millerRecords = filteredRecords.filter((record) => record.record_type === 'Miller Machine Baseline');
  const vectisRecords = filteredRecords.filter((record) => record.record_type === 'Vectis Motion / Weave Guardrail');

  return (
    <section className="helper-grid">
      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Baseline Library</p>
          <h2>Starting Reference — Verify With Test Weld</h2>
          <p className="panel-note">
            Filters narrow what is displayed only. They do not recommend, rank, score, auto-select, approve, or lock settings.
          </p>
        </div>
        <div className="reference-summary">
          <span>Mild steel only</span>
          <span>MIG/CV + Pulse MIG</span>
          <span>.035 / .045 ER70S-6</span>
          <span>Not Approved</span>
          <span>Not Locked Recipe</span>
        </div>
        {selectedReference && (
          <div className="reference-table" aria-label="Selected starting reference">
            <div className="reference-row">
              <strong>Selected Starting Reference</strong>
              <span>{selectedReference.id}</span>
            </div>
            <div className="reference-row">
              <strong>Record Type</strong>
              <span>{selectedReference.record_type}</span>
            </div>
            <div className="reference-row">
              <strong>Trial Control</strong>
              <span>Starting Reference — Verify With Test Weld / Not an approved production recipe</span>
            </div>
          </div>
        )}
      </article>

      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Lookup Filters</p>
          <h2>Narrow Starting References</h2>
          <p className="panel-note">No best match. No scoring. No auto-selecting. Filtered records remain Starting Reference — Verify With Test Weld.</p>
        </div>
        <div className="field-grid">
          <label className="field">
            <span>Process</span>
            <select value={processFilter} onChange={(event) => setProcessFilter(event.target.value)}>
              <option>All</option>
              <option>MIG/CV</option>
              <option>Pulse MIG</option>
            </select>
          </label>
          <label className="field">
            <span>Wire Size</span>
            <select value={wireFilter} onChange={(event) => setWireFilter(event.target.value)}>
              <option>All</option>
              <option>.035 ER70S-6</option>
              <option>.045 ER70S-6</option>
            </select>
          </label>
          <label className="field">
            <span>Record Type</span>
            <select value={recordTypeFilter} onChange={(event) => setRecordTypeFilter(event.target.value)}>
              <option>All</option>
              <option>Miller Machine Baseline</option>
              <option>Vectis Motion / Weave Guardrail</option>
            </select>
          </label>
          <label className="field">
            <span>Value Status</span>
            <select value={valueStatusFilter} onChange={(event) => setValueStatusFilter(event.target.value)}>
              <option>All</option>
              <option>missing_unverified</option>
              <option>source_pending</option>
              <option>source_verified</option>
              <option>shop_corrected_starting_point</option>
            </select>
          </label>
        </div>
      </article>

      <article className="panel">
        <div className="panel-heading">
          <p className="section-kicker">Miller 352 MPa</p>
          <h2>Machine Baseline References</h2>
          <p className="panel-note">Machine-side arc setup references only. Source, evidence, value status, and test weld requirement stay visible.</p>
        </div>
        <div className="history-list">
          {millerRecords.length === 0 ? <div className="empty-state">No Miller machine baseline references match the current filters.</div> : millerRecords.map((record) => <LookupRecordCard key={record.id} record={record} selectedReferenceId={selectedReference?.id} onSelectReference={onSelectReference} />)}
        </div>
      </article>

      <article className="panel">
        <div className="panel-heading">
          <p className="section-kicker">Vectis Cobot</p>
          <h2>Motion / Weave Guardrails</h2>
          <p className="panel-note">Cobot-side travel, motion, weave, and setup guardrails only. These do not replace Miller machine arc settings.</p>
        </div>
        <div className="history-list">
          {vectisRecords.length === 0 ? <div className="empty-state">No Vectis motion/weave guardrails match the current filters.</div> : vectisRecords.map((record) => <LookupRecordCard key={record.id} record={record} selectedReferenceId={selectedReference?.id} onSelectReference={onSelectReference} />)}
        </div>
      </article>

      <article className="panel wide review-panel">
        <div>
          <p className="section-kicker">Control Notice</p>
          <h2>Starting Reference — Verify With Test Weld</h2>
          <p>
            Use filtered records as starting references only. Test results must be recorded before approval or locking can be considered.
          </p>
        </div>
        <button type="button">Create Test Coupon</button>
      </article>
    </section>
  );
}

function TrialResultScreen({
  selectedReference,
  onSave,
}: {
  selectedReference: BaselineLookupRecord | null;
  onSave: (record: TrialRecord) => void;
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const read = (key: string) => String(formData.get(key) || '').trim();

    onSave({
      id: crypto.randomUUID(),
      test_coupon_id: read('trial_test_coupon_id'),
      recipe_attempt_id: read('trial_recipe_attempt_id'),
      operator: read('trial_operator'),
      date: read('trial_date'),
      traceable_identifier_type: read('trial_traceable_id_type'),
      traceable_identifier_value: read('trial_traceable_id_value'),
      material: read('snapshot_material') || 'Mild steel',
      thickness: read('snapshot_thickness'),
      joint_type: read('snapshot_joint_type'),
      mode: read('snapshot_mode'),
      wire_diameter: read('snapshot_wire_diameter'),
      gas: read('snapshot_gas') || 'Shop-used mild steel gas only',
      wfs: read('actual_wfs'),
      voltage_or_trim: read('actual_voltage_or_trim'),
      travel_speed: read('actual_travel_speed'),
      weave_type: read('weave_weave_type'),
      pass_fail: read('result_pass_fail'),
      test_status: read('result_test_status'),
      result_notes: read('result_result_notes'),
      selected_baseline_reference_id: selectedReference?.id,
      selected_baseline_reference_type: selectedReference?.record_type,
      selected_baseline_reference_process: selectedReference?.process,
      selected_baseline_reference_wire_size: selectedReference?.wire_size,
      selected_baseline_reference_value_status: selectedReference?.value_status,
      created_at: new Date().toISOString(),
    });
  }

  return (
    <form className="helper-grid" onSubmit={handleSubmit}>
      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Trial / Test Identification</p>
          <h2>Record Test Context</h2>
          <p className="panel-note">
            This screen records evidence only. Pass/fail does not approve, lock, rank, recommend, or mark anything production-ready.
          </p>
        </div>
        <div className="reference-summary">
          {trialSafetyLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
          <span>Starting Reference — Verify With Test Weld</span>
          <span>Not an approved production recipe</span>
        </div>
        {selectedReference ? (
          <div className="reference-table" aria-label="Selected starting reference trial context">
            <div className="reference-row">
              <strong>Selected Reference ID</strong>
              <span>{selectedReference.id}</span>
            </div>
            <div className="reference-row">
              <strong>Record Type</strong>
              <span>{selectedReference.record_type}</span>
            </div>
            <div className="reference-row">
              <strong>Process / Wire</strong>
              <span>{selectedReference.process} / {selectedReference.wire_size}</span>
            </div>
            <div className="reference-row">
              <strong>Value Status</strong>
              <span>{selectedReference.value_status}</span>
            </div>
            <div className="reference-row">
              <strong>Approval Status</strong>
              <span>Not Approved / Not Production Ready / Not Locked Recipe</span>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            No starting reference selected. Manual trial entry is still allowed.
          </div>
        )}
        <FieldGrid fields={trialIdFields} prefix="trial_" />
      </article>

      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Setup Snapshot</p>
          <h2>Required Saved Record Context</h2>
        </div>
        <FieldGrid fields={trialSetupSnapshotFields} prefix="snapshot_" />
      </article>

      <article className="panel">
        <div className="panel-heading">
          <p className="section-kicker">Actual Settings Tried</p>
          <h2>Machine Settings</h2>
        </div>
        <FieldGrid fields={actualSettingFields} prefix="actual_" />
      </article>

      <article className="panel">
        <div className="panel-heading">
          <p className="section-kicker">Cobot Motion / Weave</p>
          <h2>Motion Settings</h2>
        </div>
        <FieldGrid fields={weaveFields} prefix="weave_" />
      </article>

      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Weld Result Observations</p>
          <h2>Record What Happened</h2>
        </div>
        <FieldGrid fields={trialResultFields} prefix="result_" />
        <div className="evidence-row">
          <label className="check-field">
            <input name="photo_evidence_available" type="checkbox" />
            <span>Photo evidence available</span>
          </label>
          <label className="field evidence-input">
            <span>Photo Evidence Reference</span>
            <input name="photo_evidence_reference" placeholder="File name / photo note" aria-label="Photo Evidence Reference" />
          </label>
        </div>
      </article>

      <article className="panel wide review-panel">
        <div>
          <p className="section-kicker">Save / Review Later</p>
          <h2>Save Trial Evidence Locally</h2>
          <p>Saved history remains evidence only. It does not approve, lock, rank, recommend, or mark anything production-ready.</p>
        </div>
        <button type="submit">Save Trial Evidence</button>
      </article>
    </form>
  );
}

function LocalHistoryScreen({ records }: { records: TrialRecord[] }) {
  return (
    <section className="helper-grid">
      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Local History</p>
          <h2>Saved Trial Weld Evidence</h2>
          <p className="panel-note">
            Local history is review evidence only. It does not approve, lock, rank, recommend, or auto-select a setting.
          </p>
        </div>
        <div className="reference-summary">
          {trialSafetyLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        {records.length === 0 ? (
          <div className="empty-state">
            No saved trial weld history yet. Save a Trial Result Entry to review it here later.
          </div>
        ) : (
          <div className="history-list">
            {records.map((record) => (
              <TrialHistoryCard key={record.id} record={record} />
            ))}
          </div>
        )}
      </article>
    </section>
  );
}

function WhatWorkedScreen({ records }: { records: TrialRecord[] }) {
  const passedRecords = records.filter(isPassedTrial);
  const failedRecords = records.filter((record) => !isPassedTrial(record));

  return (
    <section className="helper-grid">
      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">What Worked Review</p>
          <h2>Passed Trial Evidence</h2>
          <p className="panel-note">
            “Worked” means passed trial evidence only. It does not mean approved, locked, ranked, recommended, or production-ready.
          </p>
        </div>
        <div className="reference-summary">
          <span>Tested Result</span>
          <span>Evidence Only</span>
          <span>Not Approved</span>
          <span>Not Locked Recipe</span>
        </div>
        {passedRecords.length === 0 ? (
          <div className="empty-state">
            No saved passed trials yet. Save a trial with a pass result to review it here as evidence.
          </div>
        ) : (
          <div className="history-list">
            {passedRecords.map((record) => (
              <TrialHistoryCard key={record.id} record={record} />
            ))}
          </div>
        )}
      </article>

      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Failed / Needs Review</p>
          <h2>Failed or Unclear Trial Evidence</h2>
          <p className="panel-note">
            Failed and unclear trials stay visible for learning. They are not hidden, ranked, or converted into recommendations.
          </p>
        </div>
        {failedRecords.length === 0 ? (
          <div className="empty-state">No failed or unclear saved trials to review.</div>
        ) : (
          <div className="history-list">
            {failedRecords.map((record) => (
              <TrialHistoryCard key={record.id} record={record} />
            ))}
          </div>
        )}
      </article>
    </section>
  );
}

function ApprovalGateScreen({ records }: { records: TrialRecord[] }) {
  const testedResultExists = records.length > 0;
  const passResultExists = records.some(isPassedTrial);
  const eligibleForReview = testedResultExists && passResultExists;

  return (
    <section className="helper-grid">
      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Approval / Locked Gate</p>
          <h2>{eligibleForReview ? 'Eligible For Approval Review' : 'Promotion Blocked'}</h2>
          <p className="panel-note">
            This gate is display-only in V3. It shows what is missing before a tested result could be reviewed for approval and locking.
          </p>
        </div>
        <div className="reference-summary">
          <span>Not Approved</span>
          <span>Not Production Ready</span>
          <span>Not Locked Recipe</span>
          <span>No Auto-Lock</span>
        </div>

        <div className="reference-table" aria-label="Approval gate requirements">
          {gateRequirements.map((requirement) => {
            const met = requirement === 'Tested result exists' ? testedResultExists : requirement === 'Pass result exists' ? passResultExists : false;
            return (
              <div className="reference-row" key={requirement}>
                <strong>{requirement}</strong>
                <span>{met ? 'Available for review' : 'Missing / required before lock'}</span>
              </div>
            );
          })}
        </div>
      </article>

      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Saved Trial Evidence</p>
          <h2>Review Input</h2>
          <p className="panel-note">
            Saved trials can support an approval review, but they do not create approval, lock authorization, or a locked recipe ID.
          </p>
        </div>
        {records.length === 0 ? (
          <div className="empty-state">No saved trial evidence exists yet. Gate remains blocked.</div>
        ) : (
          <div className="history-list">
            {records.map((record) => (
              <TrialHistoryCard key={record.id} record={record} />
            ))}
          </div>
        )}
      </article>
    </section>
  );
}

function PlaceholderPanel({ title, copy, action }: { title: string; copy: string; action: string }) {
  return (
    <article className="panel wide review-panel">
      <div>
        <p className="section-kicker">Placeholder</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <button type="button">{action}</button>
    </article>
  );
}

function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [trialRecords, setTrialRecords] = useState<TrialRecord[]>([]);
  const [selectedReference, setSelectedReference] = useState<BaselineLookupRecord | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(historyStorageKey);
    if (saved) {
      setTrialRecords(JSON.parse(saved) as TrialRecord[]);
    }
  }, []);

  function selectStartingReference(record: BaselineLookupRecord) {
    setSelectedReference(record);
    setActiveScreen('trial');
  }

  function saveTrialRecord(record: TrialRecord) {
    const nextRecords = [record, ...trialRecords];
    setTrialRecords(nextRecords);
    localStorage.setItem(historyStorageKey, JSON.stringify(nextRecords));
    setActiveScreen('history');
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">AI-Weld Settings Library</p>
        <h1>Vectis Floor-Side Workflow</h1>
        <p className="hero-copy">
          V3 turns the floor-side helper into a simple working app flow for mild steel Vectis cobot / Miller 352 MPa setup, trial results, local history, and review.
        </p>
        <div className="workflow">Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe</div>
      </section>

      <nav className="screen-tabs" aria-label="V3 workflow navigation">
        {screens.map((screen) => (
          <button
            className={activeScreen === screen.id ? 'active' : ''}
            key={screen.id}
            type="button"
            onClick={() => setActiveScreen(screen.id)}
          >
            {screen.label}
          </button>
        ))}
      </nav>

      <section className="status-bar" aria-label="Safety status labels">
        {safetyLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </section>

      {activeScreen === 'home' && (
        <section className="helper-grid">
          <PlaceholderPanel
            title="Start Floor-Side Setup"
            copy="Use this workflow to enter setup context, reference baseline ranges, capture trial weld results, save local history, and review what worked. Nothing is approved or locked automatically."
            action="Start Setup"
          />
        </section>
      )}

      {activeScreen === 'setup' && (
        <section className="helper-grid">
          <article className="panel wide">
            <div className="panel-heading">
              <p className="section-kicker">Setup Entry</p>
              <h2>Setup Context</h2>
              <p className="panel-note">
                Controlled mild steel setup only. Traceable ID type and value are required before this setup should move forward.
              </p>
            </div>
            <SetupEntryControls />
          </article>
          <article className="panel">
            <div className="panel-heading">
              <p className="section-kicker">Actual Settings</p>
              <h2>Machine Settings Being Tried</h2>
            </div>
            <FieldGrid fields={actualSettingFields} />
          </article>
          <article className="panel">
            <div className="panel-heading">
              <p className="section-kicker">Motion</p>
              <h2>Cobot Motion / Weave Setup</h2>
            </div>
            <FieldGrid fields={weaveFields} />
          </article>
        </section>
      )}

      {activeScreen === 'baseline' && <BaselineReferenceScreen selectedReference={selectedReference} onSelectReference={selectStartingReference} />}

      {activeScreen === 'trial' && <TrialResultScreen selectedReference={selectedReference} onSave={saveTrialRecord} />}

      {activeScreen === 'history' && <LocalHistoryScreen records={trialRecords} />}

      {activeScreen === 'worked' && <WhatWorkedScreen records={trialRecords} />}

      {activeScreen === 'gate' && <ApprovalGateScreen records={trialRecords} />}
    </main>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
