# V3-M5 — Local History Save / Review Behavior

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V3  
Status: Complete

## Purpose

Create local history save/review behavior so a user can save trial weld entries locally and review what was tried later.

## Locked Context

V1 is complete / closed.

V2 is complete / closed.

V3-M1 navigation/screen flow is locked / passed.

V3-M2/M2A Setup Entry is locked / passed.

V3-M3 Baseline Reference is locked / passed.

V3-M4 Trial Result Entry is locked / passed.

## Core Use Case

A user standing at the Vectis cobot / Miller 352 MPa should be able to save a trial weld result locally and later review the saved trial history.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Local history save/review behavior only
- Local/static storage is acceptable
- No cloud sync required
- No recommendation logic
- No ranking
- No auto-select settings
- No production-ready claims

## App Files Updated

- `src/main.tsx`
- `src/styles.css`

## Local Save Behavior Created

Trial Result Entry now saves a local evidence record to browser localStorage.

Storage key:

`vectis-weld-v3-trial-history`

Saving a trial record sends the user to the Local History screen for review.

## Local History Review List Created

The Local History screen now displays saved trial weld records as review cards.

Each saved trial remains evidence only.

## Required Saved Record Fields Supported

- test_coupon_id
- recipe_attempt_id
- operator
- date
- traceable_identifier_type
- traceable_identifier_value
- material
- thickness
- joint_type
- mode
- wire_diameter
- gas
- wfs
- voltage_or_trim
- travel_speed
- weave_type
- pass_fail
- test_status
- result_notes

## Saved Record Summary Cards

Saved record cards show:

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

## Empty State

If no saved trial history exists, the Local History screen shows an empty state:

No saved trial weld history yet. Save a Trial Result Entry to review it here later.

## Required Safety Labels

- Tested Result
- Evidence Only
- Not Approved
- Not Production Ready
- Not Locked Recipe
- Approval Required Before Lock

## Local History Boundary

Local history is review evidence only.

Saving history does not:

- approve a result
- create a locked recipe
- make a passing result production-ready
- recommend settings
- rank saved trials
- auto-select the best trial

## Locked Control Path Preserved

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Controls Preserved

- Saving history must not approve a result.
- Saving history must not create a locked recipe.
- Passing result remains evidence only.
- Do not create recommendation logic.
- Do not rank saved trials.
- Do not auto-select best trial.
- Do not add cloud/backend storage.
- Do not add print/export sheet logic.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2 complete / closed status.
- Preserve V3-M1 through V3-M4 locked behavior.

## V3-M5 Result

V3-M5 is complete. The app can now save trial weld entries locally and review saved history cards while preserving the evidence-only boundary and locked control path.
