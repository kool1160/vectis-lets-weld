import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const recipeStatuses = ['REFERENCE', 'DRAFT', 'TESTED', 'APPROVED', 'LOCKED'];

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">AI-Weld Settings Library</p>
        <h1>Vectis Lets Weld</h1>
        <p className="hero-copy">
          Mild steel weld recipe control for the Vectis cobot and Miller 352 MPa.
        </p>
        <div className="workflow">Collect → Test → Approve → Lock → Reuse</div>
      </section>

      <section className="grid">
        <article className="panel">
          <h2>V1 Scope</h2>
          <ul>
            <li>Mild steel only</li>
            <li>Vectis cobot only</li>
            <li>Miller 352 MPa only</li>
            <li>MIG / Pulse MIG only</li>
            <li>.035 and .045 ER70S-6 wire</li>
          </ul>
        </article>

        <article className="panel">
          <h2>Recipe Status</h2>
          <div className="status-list">
            {recipeStatuses.map((status) => (
              <span key={status}>{status}</span>
            ))}
          </div>
          <p className="note">No production recipe can be locked without test result approval.</p>
        </article>

        <article className="panel wide">
          <h2>Weave Modes</h2>
          <div className="weave-grid">
            <div>
              <strong>No Weave</strong>
              <p>Straight ahead stringer path.</p>
            </div>
            <div>
              <strong>Zig-Zag</strong>
              <p>Side-to-side weave for coverage and tie-in.</p>
            </div>
            <div>
              <strong>InLine</strong>
              <p>Forward/back stepping along the weld path.</p>
            </div>
          </div>
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
