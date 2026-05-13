# V2-M8 — Floor-Side Program Setup Helper Structure

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the V2 floor-side program setup helper structure for using the app on the shop floor while writing or adjusting a Vectis weld program without requiring computer access.

## Use Case

A user is at the Vectis cobot / Miller 352 MPa and needs a quick structured helper to:

- select mild steel setup context
- view reference-only baseline guidance
- enter actual machine/cobot settings being tried
- create or link a test coupon
- record what worked or failed
- preserve tested results for future learning

## Locked Context

V1 is complete / closed.

V2-M1 through V2-M7 are locked / passed.

Baseline ranges remain reference-only.

Search/filter finds reference data only.

Locked recipes require tested result, approval, and lock authorization.

Core locked rule:

Baseline range = starting reference only.

Tested result = what actually happened.

Locked recipe = approved production record.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Floor-side helper structure only
- No print/export reference sheet
- No recommendation logic
- No production-ready baseline claims

## Data / Schema File

Created:

`data/v2/floor-side-program-setup-helper.json`

## Required Helper Sections

### 1. Setup Context

- material
- thickness
- gauge
- joint_type
- weld_position
- wire_type
- wire_diameter
- gas
- mode
- operator
- date
- traceable_identifier_type
- traceable_identifier_value

### 2. Baseline Reference

- baseline_range_id
- source_label
- confidence_level
- baseline_status
- requiresTestCoupon
- reference_notes
- safety_labels

### 3. Actual Settings Being Tried

- wfs
- voltage_or_trim
- travel_speed
- ctwd
- torch_work_angle
- push_pull_angle
- weave_type
- weave_parameters
- pass_count
- notes

### 4. Cobot Motion / Weave Setup

- cobot_program_name
- program_step_or_weld_number
- weave_type
- weave_parameters
- travel_speed
- torch_work_angle
- push_pull_angle
- motion_notes

### 5. Test Coupon / Trial Weld

- test_coupon_id
- create_test_coupon_action
- link_existing_test_coupon_action
- test_status

### 6. Result Capture

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
- photo_evidence_available
- photo_evidence_reference
- result_notes

### 7. Save / Review Later

- save_as_tested_result_action
- review_later_status
- approval_required
- linked_locked_recipe_id
- production_ready

## Required Safety Labels

- Reference Only
- Requires Test Coupon
- Not Approved
- Not Production Ready
- Not Locked Recipe

## Helper Boundary

This is a shop-floor setup helper.

It is not:

- a print/export reference sheet
- an approved weld procedure
- a recommendation engine
- a ranking tool
- an auto-selection tool
- a locked recipe generator

The helper records setup context, attempted settings, trial weld results, and evidence for future learning.

## Action Rules

- Create test coupon action may create/link a test coupon workflow only.
- Save as tested result records what happened, not approval.
- The helper cannot approve a setup.
- The helper cannot lock a recipe.
- The helper cannot mark production_ready true.
- The helper cannot recommend or auto-select settings.

## Print / Export Direction

The previous V2-M8 print/export reference sheet idea is removed from this milestone.

V2-M8 is now focused on floor-side program setup support because the app is intended to help at the cobot when a user is writing or adjusting a program on the floor without computer access.

Print/export can be reconsidered later only as a separately scoped milestone if needed.

## Controls Preserved

- Do not create print/export reference sheet logic.
- Do not create recommendation logic.
- Do not rank settings.
- Do not auto-select settings.
- Do not call baseline guidance best, ideal, proven, approved, locked, or production-ready.
- Do not add real baseline range data.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2-M1 through V2-M7 locked control rules.

## V2-M8 Result

V2-M8 is complete. The project now has a floor-side program setup helper structure for shop-floor use while keeping baseline guidance reference-only and separating tested results, approvals, and locked recipes.
