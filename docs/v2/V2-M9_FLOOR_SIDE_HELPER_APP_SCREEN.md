# V2-M9 — Floor-Side Helper App Screen

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the first usable floor-side helper app screen for the Vectis weld settings app.

## Use Case

A user is standing at the Vectis cobot / Miller 352 MPa while writing or adjusting a weld program and needs a quick app screen to:

- select mild steel setup context
- enter actual machine/cobot settings being tried
- mark the data as reference/test only
- capture basic trial weld result notes
- preserve the rule that nothing is approved or locked automatically

## Locked Context

V1 is complete / closed.

V2-M1 through V2-M8 are locked / passed.

The app is a floor-side setup helper, not a print/export sheet.

Baseline ranges remain reference-only.

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
- One floor-side helper screen only
- Local/static app behavior is acceptable
- No recommendation logic
- No ranking
- No auto-selecting settings
- No production-ready baseline claims

## App Files Updated

- `src/main.tsx`
- `src/styles.css`

## App Screen Sections Created

### 1. Setup Context

Includes:

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

### 2. Actual Settings Being Tried

Includes:

- wfs
- voltage_or_trim
- travel_speed
- ctwd
- torch_work_angle
- push_pull_angle
- pass_count
- notes

### 3. Cobot Motion / Weave Setup

Includes:

- weave_type
- weave_parameters
- weave_width
- weave_length_or_step
- weave_frequency_or_pause

### 4. Trial Weld Result

Includes:

- test_status
- visual_result
- tie_in_result
- undercut_result
- overlap_result
- spatter_result
- porosity_result
- burn_through_result
- distortion_result
- pass_fail
- result_notes
- photo evidence available
- photo evidence reference

### 5. Safety / Status Labels

Includes:

- Reference / Test Only
- Requires Test Coupon
- Not Approved
- Not Production Ready
- Not Locked Recipe

### 6. Save / Review Later

Includes a local/static placeholder action:

- Save Test Notes

This placeholder records reference/test notes only and does not approve, lock, recommend, rank, auto-select, or mark anything production-ready.

## Screen Boundary

This screen is a shop-floor helper.

It is not:

- a print/export sheet
- a recommendation engine
- a ranking tool
- an auto-selection tool
- an approved weld procedure
- a locked recipe creator

## Controls Preserved

- Do not create print/export sheet logic.
- Do not create recommendation logic.
- Do not rank settings.
- Do not auto-select settings.
- Do not call any value best, ideal, proven, approved, locked, or production-ready.
- Do not add real baseline range data.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2-M1 through V2-M8 locked control rules.

## V2-M9 Result

V2-M9 is complete. The app now has its first usable floor-side helper screen for mild steel Vectis / Miller 352 MPa setup work while preserving all reference-only, test, approval, and locked recipe boundaries.
