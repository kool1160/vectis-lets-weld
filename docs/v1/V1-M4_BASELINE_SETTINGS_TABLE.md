# V1-M4 — Baseline Settings Table

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1  
Status: Complete

## Purpose

Create the baseline settings table structure for mild steel weld settings while preserving the V1 rule that baseline rows are reference-only until tested and approved.

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
- No production-ready baseline rows

## Baseline Table File

Created:

`data/v1/baseline-settings.json`

## Required Baseline Fields

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
- test_status
- approval_status
- locked_recipe_id
- notes

## Starter Baseline Rows

Two starter placeholder rows were added:

1. `MS-BL-001` — Mild steel / MIG / ER70S-6 / .035
2. `MS-BL-002` — Mild steel / Pulse MIG / ER70S-6 / .045

Both rows are clearly labeled as:

- `source_type`: `UNTESTED_BASELINE_REFERENCE`
- `test_status`: `UNTESTED_BASELINE_REFERENCE`
- `approval_status`: `NOT_APPROVED`
- `locked_recipe_id`: `null`

## Lock Control Rule

No baseline row may be treated as an approved production recipe.

A row can only become locked after:

1. A test weld is completed
2. Test results are recorded
3. The result is approved
4. A locked recipe ID is assigned

## Preserved Workflow

Collect → Test → Approve → Lock → Reuse

## V1-M4 Result

V1-M4 is complete. The app now has a baseline settings table structure that can hold starter reference rows without allowing untested settings to be mistaken for locked production recipes.
