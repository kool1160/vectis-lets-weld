# V3-M4 — Trial Result Entry Behavior

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V3  
Status: Complete

## Purpose

Create the Trial Result Entry screen behavior so a user can record what actually happened during a test/trial weld after using setup context and baseline reference guidance.

## Locked Context

V1 is complete / closed.

V2 is complete / closed.

V3-M1 navigation/screen flow is locked / passed.

V3-M2/M2A Setup Entry is locked / passed.

V3-M3 Baseline Reference is locked / passed.

## Core Use Case

A user standing at the Vectis cobot / Miller 352 MPa should be able to enter actual weld settings tried and record the test/trial weld result without automatically approving, locking, ranking, or recommending the setting.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Trial Result Entry screen behavior only
- Local/static behavior is acceptable
- No recommendation logic
- No ranking
- No auto-select settings
- No production-ready claims

## App File Updated

- `src/main.tsx`

## Trial Result Screen Sections Created

### 1. Trial / Test Identification

- test_coupon_id
- recipe_attempt_id
- operator
- date
- traceable_identifier_type
- traceable_identifier_value
- baseline_range_id

### 2. Actual Settings Tried

- wfs
- voltage_or_trim
- travel_speed
- ctwd
- torch_work_angle
- push_pull_angle
- pass_count
- notes

### 3. Cobot Motion / Weave Settings

- weave_type
- weave_parameters
- weave_width
- weave_length_or_step
- weave_frequency_or_pause

### 4. Weld Result Observations

- test_status
- visual_result
- tie_in_result
- undercut_result
- overlap_result
- spatter_result
- porosity_result
- burn_through_result
- distortion_result
- penetration_result
- pass_fail
- result_notes

### 5. Notes / Evidence

- photo_evidence_available
- photo_evidence_reference

### 6. Safety / Status Labels

- Tested Result
- Evidence Only
- Not Approved
- Not Production Ready
- Not Locked Recipe
- Approval Required Before Lock

## Trial Result Boundary

Trial Result Entry records evidence only.

It does not:

- approve a result
- lock a recipe
- recommend settings
- rank settings
- auto-select settings
- mark anything production-ready

A passing result is still evidence only until approval and lock authorization happen through the proper gate.

## Locked Control Path Preserved

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Controls Preserved

- Do not create recommendation logic.
- Do not rank settings.
- Do not auto-select settings.
- Do not allow pass/fail to create approval automatically.
- Do not allow pass result to create locked recipe automatically.
- Do not call any result best, ideal, proven, approved, locked, or production-ready.
- Do not add uncontrolled real baseline range data.
- Do not add print/export sheet logic.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2 complete / closed status.
- Preserve V3-M1 navigation/screen flow.
- Preserve V3-M2/M2A Setup Entry behavior.
- Preserve V3-M3 Baseline Reference behavior.

## V3-M4 Result

V3-M4 is complete. The Trial Result Entry screen now records test/trial weld evidence and actual settings tried while keeping approval, locking, ranking, recommendation, and production-ready status separate.
