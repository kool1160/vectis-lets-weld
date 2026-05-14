# V3-M6 — What Worked Review Behavior

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V3  
Status: Complete

## Purpose

Create a What Worked review behavior so saved local trial history can be reviewed by pass/fail outcome without ranking, recommending, or auto-selecting settings.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Local/static behavior only
- No recommendation logic
- No ranking
- No auto-select settings

## App File Updated

- `src/main.tsx`

## What Worked Review Behavior Created

The What Worked screen now reviews saved local trial history from browser localStorage.

The screen separates saved trial evidence into:

- Passed Trial Evidence
- Failed / Needs Review Trial Evidence

## Passed vs Failed / Unclear Grouping

Passed trials are identified from saved records where either:

- pass_fail includes pass
- test_status includes pass

All other saved records remain visible under Failed / Needs Review.

## Saved Trial Summary Cards

The screen reuses saved trial summary cards showing:

- Test coupon ID
- Date
- Operator
- Material
- Thickness
- Joint type
- Mode
- Wire diameter
- Test status
- Pass/fail status
- Result notes
- Evidence-only status labels

## Evidence-Only Status Labels

The review screen preserves labels including:

- Tested Result
- Evidence Only
- Not Approved
- Not Locked Recipe

## Empty States

If no saved passed trials exist, the screen shows:

No saved passed trials yet. Save a trial with a pass result to review it here as evidence.

If no failed or unclear trials exist, the screen shows:

No failed or unclear saved trials to review.

## What Worked Boundary

“Worked” means passed trial evidence only.

It does not mean:

- best
- ideal
- approved
- locked
- production-ready
- recommended
- auto-selected

## Locked Control Path Preserved

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Controls Preserved

- Do not rank saved trials.
- Do not call any saved trial best, ideal, approved, locked, or production-ready.
- Do not create recommendation logic.
- Do not create cloud/backend storage.
- Do not add print/export logic.
- Preserve V3-M1 through V3-M5 behavior.

## V3-M6 Result

V3-M6 is complete. The app now has a What Worked review screen that groups saved trial evidence by passed vs failed/unclear outcome without ranking, recommending, auto-selecting, approving, locking, or creating production-ready claims.
