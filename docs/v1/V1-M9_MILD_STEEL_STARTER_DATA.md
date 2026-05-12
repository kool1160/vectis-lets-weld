# V1-M9 — Mild Steel Starter Data

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1  
Status: Complete

## Purpose

Create controlled mild steel starter data records for the V1 weld settings library without treating them as tested, approved, locked, or recommended production recipes.

## Machine Scope

- Vectis cobot
- Miller 352 MPa

## V1 Material / Process Scope

- Mild steel only
- MIG / Pulse MIG only
- .035 ER70S-6 only
- .045 ER70S-6 only
- Shop-used mild steel gas only

## Exclusions

- No stainless
- No aluminum
- No flux-core
- No metal-core
- No recommendation logic
- No ranked starter settings
- No best / ideal / production-ready starter rows

## Starter Data File

Created:

`data/v1/mild-steel-starter-data.json`

## Required Starter Data Fields

- starter_data_id
- baseline_id
- material
- thickness
- joint_type
- weld_position
- process
- wire_type
- wire_diameter
- gas
- voltage_or_trim
- wire_feed_speed
- amperage_if_available
- travel_speed_ipm
- stickout
- torch_angle
- work_angle
- weave_pattern
- weave_width
- weave_dwell
- pass_count
- source_type
- source_notes
- validation_status
- test_coupon_id
- approval_status
- locked_recipe_id
- notes

## Starter Records Created

Two controlled starter records were created:

1. `MS-SD-001` — linked to `MS-BL-001` for mild steel MIG / ER70S-6 / .035
2. `MS-SD-002` — linked to `MS-BL-002` for mild steel Pulse MIG / ER70S-6 / .045

Both records are clearly labeled as:

- `source_type`: `starter_reference_only`
- `validation_status`: `untested_reference`
- `approval_status`: `not_approved`
- `locked_recipe_id`: `null`

## Required Status Rules

- `validation_status` must start as `untested_reference`.
- `approval_status` must not start as approved.
- `locked_recipe_id` must remain null.
- `production_ready` must not be true for starter data.
- Starter data must not appear as locked recipe data.

## Validation Rule

Starter data is only a controlled reference input for future testing.

Before starter data can become production-ready, it must pass through:

1. Baseline reference
2. Test coupon
3. Approval record
4. Lock authorization
5. Locked recipe library

## Recommendation Boundary

Starter data does not recommend settings.

Starter data does not rank settings.

Starter data does not call any setting best, ideal, or production-ready.

Starter data only gives the app a controlled place to store collected mild steel reference information before testing.

## Preserved Workflow

Collect → Test → Approve → Lock → Reuse

## V1-M9 Result

V1-M9 is complete. The app now has controlled mild steel starter data records that remain untested reference data until validated through the test, approval, and locking workflow.
