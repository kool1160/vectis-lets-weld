import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

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
            </div>
            <FieldGrid fields={setupContextFields} />
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

      {activeScreen === 'baseline' && (
        <section className="helper-grid">
          <PlaceholderPanel
            title="Baseline Reference"
            copy="Baseline ranges are starting reference only. They may help organize setup context, but they are not approved, locked, proven, or production-ready."
            action="Create Test Coupon"
          />
        </section>
      )}

      {activeScreen === 'trial' && (
        <section className="helper-grid">
          <article className="panel wide">
            <div className="panel-heading">
              <p className="section-kicker">Trial Result Entry</p>
              <h2>Record What Happened</h2>
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
        </section>
      )}

      {activeScreen === 'history' && (
        <section className="helper-grid">
          <PlaceholderPanel
            title="Local History"
            copy="Local/static history placeholder for saved trial notes. Future V3 work can add persistence, filtering, and record review."
            action="View Saved Notes"
          />
        </section>
      )}

      {activeScreen === 'worked' && (
        <section className="helper-grid">
          <PlaceholderPanel
            title="What Worked Review"
            copy="Review tested results that worked without ranking, recommending, or calling them production-ready unless they pass approval and lock authorization."
            action="Review Tested Results"
          />
        </section>
      )}

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
