import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const safetyLabels = [
  'Reference / Test Only',
  'Requires Test Coupon',
  'Not Approved',
  'Not Production Ready',
  'Not Locked Recipe',
];

const setupContextFields = [
  'Material',
  'Thickness',
  'Gauge',
  'Joint Type',
  'Weld Position',
  'Wire Type',
  'Wire Diameter',
  'Gas',
  'Mode',
  'Operator',
  'Date',
  'Traceable ID Type',
  'Traceable ID Value',
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
  'Pass / Fail',
  'Result Notes',
];

function FieldGrid({ fields }: { fields: string[] }) {
  return (
    <div className="field-grid">
      {fields.map((field) => (
        <label className="field" key={field}>
          <span>{field}</span>
          <input placeholder="Enter / select" aria-label={field} />
        </label>
      ))}
    </div>
  );
}

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">AI-Weld Settings Library</p>
        <h1>Floor-Side Setup Helper</h1>
        <p className="hero-copy">
          Quick mild steel setup support for the Vectis cobot and Miller 352 MPa while writing or adjusting a weld program on the floor.
        </p>
        <div className="workflow">Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe</div>
      </section>

      <section className="status-bar" aria-label="Safety status labels">
        {safetyLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </section>

      <section className="helper-grid">
        <article className="panel wide">
          <div className="panel-heading">
            <p className="section-kicker">1</p>
            <h2>Setup Context</h2>
          </div>
          <FieldGrid fields={setupContextFields} />
        </article>

        <article className="panel">
          <div className="panel-heading">
            <p className="section-kicker">2</p>
            <h2>Actual Settings Being Tried</h2>
          </div>
          <FieldGrid fields={actualSettingFields} />
        </article>

        <article className="panel">
          <div className="panel-heading">
            <p className="section-kicker">3</p>
            <h2>Cobot Motion / Weave Setup</h2>
          </div>
          <FieldGrid fields={weaveFields} />
        </article>

        <article className="panel wide">
          <div className="panel-heading">
            <p className="section-kicker">4</p>
            <h2>Trial Weld Result</h2>
          </div>
          <FieldGrid fields={trialResultFields} />
          <div className="evidence-row">
            <label className="check-field">
              <input type="checkbox" />
              <span>Photo evidence available</span>
            </label>
            <label className="field evidence-input">
              <span>Photo Evidence Reference</span>
              <input placeholder="File name / photo note" aria-label="Photo Evidence Reference" />
            </label>
          </div>
        </article>

        <article className="panel wide review-panel">
          <div>
            <p className="section-kicker">5</p>
            <h2>Save / Review Later</h2>
            <p>
              Saving this screen records reference/test information only. It does not approve, lock, recommend, rank, auto-select, or mark anything production-ready.
            </p>
          </div>
          <button type="button">Save Test Notes</button>
        </article>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
