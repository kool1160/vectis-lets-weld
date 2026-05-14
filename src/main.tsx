import React, { useEffect, useState } from 'react';
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
  created_at: string;
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

const baselineReferenceRows = [
  ['material', 'Mild steel'],
  ['thickness', 'Reference placeholder'],
  ['gauge', 'Reference placeholder'],
  ['joint_type', 'Reference placeholder'],
  ['weld_position', 'Reference placeholder'],
  ['wire_type', 'ER70S-6'],
  ['wire_diameter', '.035 / .045 ER70S-6 only'],
  ['gas', 'Shop-used mild steel gas only'],
  ['mode', 'MIG/CV or Pulse MIG'],
  ['wfs_low', 'Reference only'],
  ['wfs_high', 'Reference only'],
  ['voltage_low', 'Reference only'],
  ['voltage_high', 'Reference only'],
  ['trim_or_arc_length_low', 'Reference only'],
  ['trim_or_arc_length_high', 'Reference only'],
  ['travel_speed_low', 'Reference only'],
  ['travel_speed_high', 'Reference only'],
  ['weave_type', 'Reference only'],
  ['source_label', 'SHOP_REFERENCE / MILLER_MACHINE_REFERENCE / VECTIS_MANUAL_GUARDRAIL'],
  ['confidence_level', 'REFERENCE_ONLY'],
  ['baseline_status', 'REFERENCE_ONLY'],
  ['requiresTestCoupon', 'true'],
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

function BaselineReferenceScreen() {
  return (
    <section className="helper-grid">
      <article className="panel wide">
        <div className="panel-heading">
          <p className="section-kicker">Baseline Reference</p>
          <h2>Reference-Only Baseline Guidance</h2>
          <p className="panel-note">
            Baseline values are starting references only. They are not approved, locked, ranked, recommended, proven, or production-ready.
          </p>
        </div>

        <div className="reference-summary">
          <span>Mild steel only</span>
          <span>Vectis cobot</span>
          <span>Miller 352 MPa</span>
          <span>Requires Test Coupon</span>
        </div>

        <div className="reference-table" aria-label="Baseline reference fields">
          {baselineReferenceRows.map(([label, value]) => (
            <div className="reference-row" key={label}>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="panel wide review-panel">
        <div>
          <p className="section-kicker">Next Safe Step</p>
          <h2>Create Test Coupon / Trial Weld</h2>
          <p>
            Use baseline guidance to start a test coupon or trial weld only. Tested results must be recorded before approval or locking can be considered.
          </p>
        </div>
        <button type="button">Create Test Coupon</button>
      </article>
    </section>
  );
}

function TrialResultScreen({ onSave }: { onSave: (record: TrialRecord) => void }) {
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
        </div>
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

  useEffect(() => {
    const saved = localStorage.getItem(historyStorageKey);
    if (saved) {
      setTrialRecords(JSON.parse(saved) as TrialRecord[]);
    }
  }, []);

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

      {activeScreen === 'baseline' && <BaselineReferenceScreen />}

      {activeScreen === 'trial' && <TrialResultScreen onSave={saveTrialRecord} />}

      {activeScreen === 'history' && <LocalHistoryScreen records={trialRecords} />}

      {activeScreen === 'worked' && <WhatWorkedScreen records={trialRecords} />}

      {activeScreen === 'gate' && (
        <section className="helper-grid">
          <PlaceholderPanel
            title="Approval / Locked Gate"
            copy="Locked recipes require tested result, approval, approval date, lock authorization, and a locked recipe record. Passing trial results do not lock automatically."
            action="Review Gate Rules"
          />
        </section>
      )}
    </main>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
