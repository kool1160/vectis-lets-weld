# V3-M7 — Approval / Locked Gate Display

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V3  
Status: Complete

## Purpose

Create an Approval / Locked Gate display that clearly shows saved trial results cannot become locked production recipes without approval.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Display/gate visibility only
- No actual production lock creation
- No recommendation logic
- No ranking
- No auto-select settings

## App File Updated

- `src/main.tsx`

## Approval / Locked Gate Behavior Created

The Approval / Locked Gate screen now reads saved local trial evidence and displays whether the gate is:

- Promotion Blocked
- Eligible For Approval Review

This is display-only in V3.

## Gate Requirement Checklist

Required gate requirements shown:

- Tested result exists
- Pass result exists
- Approved by is required
- Approval date is required
- Lock authorization is required
- Locked recipe ID is not created automatically

## Blocked State

The gate remains blocked when required evidence or approval requirements are missing.

If no saved trial evidence exists, the screen shows:

No saved trial evidence exists yet. Gate remains blocked.

## Eligible-For-Review State

The gate may show eligible for approval review when:

- saved tested result evidence exists
- a pass result exists

Eligible for review does not mean approved, locked, recommended, or production-ready.

## Safety Labels

The gate displays safety/status labels:

- Not Approved
- Not Production Ready
- Not Locked Recipe
- No Auto-Lock

## Saved Trial Evidence Display

Saved trial cards can be reviewed inside the gate screen.

Saved trials can support an approval review, but they do not create approval, lock authorization, or a locked recipe ID.

## V3 Boundary

Approval / lock is display-only in V3.

V3 does not create:

- real locked recipe behavior
- auto-approval
- auto-locking
- recommendation logic
- ranking
- production-ready claims

## Locked Control Path Preserved

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Controls Preserved

- Do not create real locked recipe behavior.
- Do not auto-approve results.
- Do not auto-lock recipes.
- Do not rank or recommend settings.
- Do not call saved trials production-ready.
- Preserve V3-M1 through V3-M6 behavior.

## V3-M7 Result

V3-M7 is complete. The app now has a display-only Approval / Locked Gate that shows saved trial evidence, blocked/eligible-for-review states, and missing lock requirements without creating real production lock behavior.
