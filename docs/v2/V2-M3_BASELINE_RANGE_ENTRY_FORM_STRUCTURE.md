# V2-M3 — Baseline Range Entry Form Structure

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the V2 baseline range entry form structure for safely entering mild steel baseline high/low ranges without treating them as approved, locked, recommended, or production-ready recipes.

## Locked Context

V1 is complete / closed.

V2-M1 baseline range table structure is locked / passed.

V2-M2 source label and confidence model is locked / passed.

Core locked rule:

Baseline range = starting reference only.

Tested result = what actually happened.

Locked recipe = approved production record.

## Required Control Path

Reference Data → Test Coupon → Tested Result → Approval → Locked Recipe

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Entry form structure only
- No large weld data dump
- No recommendation logic
- No production-ready recipe claims

## Data / Schema File

Created:

`data/v2/baseline-range-entry-form.json`

## Required Form Field Groups

### 1. Material / Thickness

- material
- thickness
- gauge

### 2. Joint / Weld Type

- joint_type
- weld_size
- weld_position

### 3. Wire / Gas / Mode

- wire_type
- wire_diameter
- gas
- mode

### 4. CV Setting Range Fields

- wfs_low
- wfs_high
- voltage_low
- voltage_high

### 5. Pulse Setting Range Fields

- wfs_low
- wfs_high
- trim_or_arc_length_low
- trim_or_arc_length_high

### 6. Travel / Motion Range Fields

- travel_speed_low
- travel_speed_high

### 7. Weave Range Fields

- weave_type
- weave_parameter_range
- weave_width_low
- weave_width_high
- weave_dwell_low
- weave_dwell_high

### 8. CTWD / Torch Angle Range Fields

- ctwd_low
- ctwd_high
- torch_work_angle_range
- push_pull_angle_range

### 9. Source / Confidence Fields

- source_label
- source_name
- source_type
- source_notes
- captured_from
- captured_by
- captured_date
- confidence_level

### 10. Control / Traceability Fields

- baseline_range_id
- baseline_status
- requiresTestCoupon
- approval_status
- production_ready
- linked_test_coupon_id
- linked_locked_recipe_id

### 11. Notes

- notes

## Required Defaults

- `baseline_status`: `REFERENCE_ONLY`
- `confidence_level`: `REFERENCE_ONLY`
- `requiresTestCoupon`: `true`
- `approval_status`: `not_approved`
- `production_ready`: `false`
- `linked_test_coupon_id`: `null`
- `linked_locked_recipe_id`: `null`

## Required Entry Rules

- User must choose CV or Pulse mode.
- CV rows use voltage low/high.
- Pulse rows use trim or arc length low/high.
- Source label is required.
- Confidence level is required.
- Baseline ranges must require test coupon.
- No entry can be marked approved from the baseline form.
- No entry can be marked locked from the baseline form.
- No entry can be marked production-ready from the baseline form.

## Reference-Only Safety Language

Submitted baseline ranges are starting reference data only.

They remain untested until converted into a test coupon, tested, recorded, approved, and intentionally locked as a separate locked recipe record.

## Submission Result

Submitting the baseline range form creates only:

`baseline_range_reference`

It does not create:

- A test coupon
- A tested result
- An approval record
- A locked recipe
- A production-ready recipe
- A recommendation

## Controls Preserved

- Do not add real weld setting ranges yet.
- Do not create recommendation logic.
- Do not rank settings.
- Do not call entries best, ideal, proven, approved, locked, or production-ready.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2-M1 and V2-M2 locked control rules.

## V2-M3 Result

V2-M3 is complete. The project now has a safe baseline range entry form structure that collects reference-only mild steel baseline range inputs without allowing approval, locking, production-ready claims, ranking, or recommendation logic.
