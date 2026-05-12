# V2-M5 — Tested Result History Structure

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the V2 tested result history structure for recording what actually happened when a baseline range or test coupon is welded and evaluated.

## Locked Context

V1 is complete / closed.

V2-M1 baseline range table structure is locked / passed.

V2-M2 source label and confidence model is locked / passed.

V2-M3 baseline range entry form structure is locked / passed.

V2-M4 test coupon linkage from baseline range is locked / passed.

Core locked rule:

Baseline range = starting reference only.

Tested result = what actually happened.

Locked recipe = approved production record.

## Required Control Path

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Tested result history structure only
- No recommendation logic
- No production-ready baseline claims

## Data / Schema File

Created:

`data/v2/tested-result-history.json`

## Required Fields

- tested_result_id
- baseline_range_id
- test_coupon_id
- recipe_attempt_id
- test_date
- operator
- job_number
- job_name
- part_description
- part_number
- material
- thickness
- joint_type
- weld_position
- wire_type
- wire_diameter
- gas
- mode
- wfs
- voltage_or_trim
- travel_speed
- weave_type
- weave_parameters
- ctwd
- torch_angle
- fit_up_condition
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
- notes
- photo_evidence_available
- photo_evidence_reference
- approval_required
- approved_by
- approval_date
- linked_locked_recipe_id
- production_ready

## Field Groups

### Result Identification

- tested_result_id
- recipe_attempt_id
- test_date
- operator

### Traceability

- baseline_range_id
- test_coupon_id
- job_number
- job_name
- part_description
- part_number

### Weld Settings Used During Test

- material
- thickness
- joint_type
- weld_position
- wire_type
- wire_diameter
- gas
- mode
- wfs
- voltage_or_trim
- travel_speed
- weave_type
- weave_parameters
- ctwd
- torch_angle

### Fit-Up / Conditions

- fit_up_condition

### Inspection / Result Fields

- visual_result
- tie_in_result
- undercut_result
- overlap_result
- spatter_result
- porosity_result
- burn_through_result
- distortion_result
- penetration_result

### Pass / Fail

- pass_fail

### Photo / Evidence Fields

- photo_evidence_available
- photo_evidence_reference

### Approval Linkage

- approval_required
- approved_by
- approval_date
- linked_locked_recipe_id
- production_ready

## Traceability Rule

Job number is optional / if applicable.

Every tested result must include at least one traceable identifier:

- job_number
- job_name
- part_description
- part_number
- test_coupon_id

This prevents tested results from becoming orphan records.

## Required Defaults

- `approval_required`: `true`
- `linked_locked_recipe_id`: `null`
- `production_ready`: `false`

## Result Rules

- Tested result does not automatically become approved.
- Passing test does not automatically create a locked recipe.
- Approval must happen before locked recipe creation.
- Tested result records what happened, not what is recommended.
- Tested result is evidence, not automatic production approval.

## Controls Preserved

- Do not create recommendation logic.
- Do not rank settings.
- Do not call tested results best, ideal, or production-ready unless separately approved and locked.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2-M1 through V2-M4 locked control rules.

## V2-M5 Result

V2-M5 is complete. The project now has a tested result history structure for recording actual weld test outcomes while keeping approval, locking, and production readiness as separate controlled steps.
