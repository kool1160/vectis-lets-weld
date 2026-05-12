# V1-M5 — Test Coupon Entry Screen

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1  
Status: Complete

## Purpose

Create the V1 test coupon entry structure that allows a baseline setting to be tested before it can become an approved or locked weld recipe.

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
- No automatic locked recipes

## Test Coupon Data File

Created:

`data/v1/test-coupons.json`

## Required Test Coupon Fields

- test_coupon_id
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
- test_operator
- test_date
- test_status
- visual_result
- penetration_result
- bead_profile_result
- spatter_level
- undercut_present
- burn_through_present
- fusion_concern_present
- adjustment_notes
- approval_status
- approved_by
- approved_date
- locked_recipe_id
- notes

## Baseline Connection

Each test coupon must include a `baseline_id` so the test result can be traced back to the baseline setting being tested.

The baseline-linked setup fields may be copied from the baseline row or entered during the test when baseline data is still incomplete.

## Starter Test Coupon Rows

Two starter placeholder rows were added:

1. `TC-MS-001` — linked to `MS-BL-001`
2. `TC-MS-002` — linked to `MS-BL-002`

Both rows are clearly controlled with:

- `test_status`: `NOT_TESTED`
- `visual_result`: `NOT_REVIEWED`
- `penetration_result`: `NOT_CHECKED`
- `bead_profile_result`: `NOT_REVIEWED`
- `approval_status`: `NOT_APPROVED`
- `locked_recipe_id`: `null`

## Lock Prevention Rule

A test coupon cannot become a locked recipe automatically.

A locked recipe ID may only be assigned after:

1. The test coupon is completed
2. The weld result passes
3. Visual / penetration / bead profile concerns are resolved
4. Approval is granted
5. The recipe is intentionally locked

## Preserved Workflow

Collect → Test → Approve → Lock → Reuse

## V1-M5 Result

V1-M5 is complete. The app now has a test coupon entry structure that connects baseline rows to actual weld test results while preventing untested or unapproved settings from becoming locked production recipes.
