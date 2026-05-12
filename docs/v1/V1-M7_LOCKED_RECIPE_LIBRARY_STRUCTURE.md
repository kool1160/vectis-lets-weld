# V1-M7 — Locked Recipe Library Structure

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1  
Status: Complete

## Purpose

Create the locked recipe library structure that stores only tested, approved, production-ready weld recipes.

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
- No untested baseline rows
- No unapproved test coupon rows

## Locked Recipe Data File

Created:

`data/v1/locked-recipes.json`

## Required Locked Recipe Fields

- locked_recipe_id
- recipe_name
- baseline_id
- test_coupon_id
- approval_record_id
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
- approved_by
- approved_date
- lock_authorized_by
- lock_date
- production_ready
- revision
- active_status
- notes

## Traceability Requirement

Every locked recipe must trace back to:

1. `baseline_id`
2. `test_coupon_id`
3. `approval_record_id`

This prevents baseline rows or test coupons from being mistaken for reusable production records.

## Locked Recipe Rules

- Locked recipes must trace back to a passed test coupon and approval record.
- Baseline rows cannot appear as locked recipes.
- Test coupon rows cannot appear as locked recipes.
- `production_ready` may only be true for locked recipe records.
- A locked recipe must be intentionally authorized for production reuse.

## Library Starting State

The locked recipe library starts empty:

`locked_recipes: []`

This is intentional. V1 does not add fake locked recipes or untested production recipes.

## Preserved Workflow

Collect → Test → Approve → Lock → Reuse

## V1-M7 Result

V1-M7 is complete. The app now has a locked recipe library structure reserved only for tested, approved, production-ready weld recipes.
