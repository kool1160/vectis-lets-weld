# V4-M5 — Baseline Library View Separation Shell

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Complete

## Purpose

Create an app-facing baseline library view structure that keeps Miller machine baseline references separate from Vectis motion/weave guardrails.

## Goal

Prepare the floor-side app to display available starting-reference records safely without mixing machine arc settings with cobot motion/weave setup data.

## Scope

- Display/view structure only
- Mild steel only
- Miller 352 MPa machine baseline section
- Vectis motion/weave guardrail section
- MIG/CV and Pulse MIG compatible
- .035 ER70S-6 and .045 ER70S-6 compatible
- Starting Reference — Verify With Test Weld language only
- No numeric value creation
- No locked recipe creation
- No approval action yet
- No recommendation logic
- No ranking
- No auto-selecting

## Files Changed

- `data/v4/baseline-library-view-separation-shell.json`
- `src/main.tsx`

## Required View Sections Created

### 1. Miller Machine Baseline References

Purpose:

Machine-side arc setup references only.

Visible support includes:

- Source / evidence status
- Value status
- Test weld required
- Starting Reference — Verify With Test Weld
- Not Approved
- Not Production Ready
- Not Locked Recipe

### 2. Vectis Motion / Weave Guardrails

Purpose:

Cobot-side motion/weave references only.

Visible support includes:

- Weave pattern type
- Motion value status
- Test weld required
- Starting Reference — Verify With Test Weld
- Not Approved
- Not Production Ready
- Not Locked Recipe

### 3. Control Notice

Display:

Starting Reference — Verify With Test Weld

The notice explains that these are not approved production recipes and that test results must be recorded before approval or locking can be considered.

## App View Update

The existing Baseline Reference tab was updated into a separated baseline library view with two visible lanes:

- Miller 352 MPa — Machine Baseline References
- Vectis Cobot — Motion / Weave Guardrails

## Separation Rule

Miller machine arc references and Vectis cobot motion/weave guardrails are intentionally separated.

The app must not combine Miller machine settings with Vectis weave/motion values.

## Controls Preserved

- Keep Miller and Vectis sections visually and structurally separate.
- Do not combine Miller machine settings with Vectis weave/motion values.
- Do not invent numeric Miller or Vectis values.
- Do not mark anything approved, locked, proven, ideal, best, or production-ready.
- Preserve V3 working app flow.
- Preserve V4-M1 through V4-M4 data structures.
- No recommendation logic.
- No ranking.
- No auto-selecting.
- No auto-approval.
- No auto-locking.

## V4-M5 Result

V4-M5 is complete. The app now has a separated baseline library view shell that displays Miller machine-side starting references and Vectis motion/weave guardrails as separate lanes with clear control language and no production claims.
