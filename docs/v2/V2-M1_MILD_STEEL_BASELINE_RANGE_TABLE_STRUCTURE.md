# V2-M1 — Mild Steel Baseline Range Table Structure

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the safe data structure for holding mild steel baseline high/low weld setting ranges by weld type without creating proven production recipes.

## V1 Locked Context

V1 is complete / closed.

V2 carries forward the locked V1 rule:

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
- Baseline range table structure only
- No large weld data dump yet
- No recommendation logic
- No production-ready recipe claims

## Data File

Created:

`data/v2/baseline-range-table.json`

## Required Fields

- baseline_range_id
- material
- thickness
- gauge
- joint_type
- weld_size
- weld_position
- wire_type
- wire_diameter
- gas
- mode
- wfs_low
- wfs_high
- voltage_low
- voltage_high
- trim_or_arc_length_low
- trim_or_arc_length_high
- travel_speed_low
- travel_speed_high
- weave_type
- weave_parameter_range
- ctwd_low
- ctwd_high
- torch_work_angle_range
- push_pull_angle_range
- source_type
- confidence_level
- requiresTestCoupon
- baseline_status
- linked_test_coupon_id
- linked_locked_recipe_id
- notes

## Required Defaults

- `baseline_status`: `REFERENCE_ONLY`
- `requiresTestCoupon`: `true`
- `linked_test_coupon_id`: `null`
- `linked_locked_recipe_id`: `null`

## Required Separation

The baseline range table must stay separate from:

- Tested result history
- Locked production recipes
- Rejected settings
- Superseded settings

Baseline range rows are not tested results.

Baseline range rows are not locked recipes.

Baseline range rows are not rejected/superseded production records.

## Source / Confidence Controls

Allowed source types:

- `miller_machine_baseline`
- `vectis_manual_guardrail`
- `public_reference`
- `shop_reference`
- `shop_screenshot_reference`
- `mixed_reference`

Allowed confidence levels for baseline ranges:

- `REFERENCE_ONLY`
- `SHOP_REFERENCE`
- `SHOP_SCREENSHOT_REFERENCE`

Disallowed confidence levels for baseline ranges:

- `TESTED_RESULT`
- `LOCKED_RECIPE`

## Example Row Rule

One example structure row was added only to show safe field shape.

The example row is clearly marked:

- Example only
- No real weld values
- `confidence_level`: `REFERENCE_ONLY`
- `requiresTestCoupon`: `true`
- `baseline_status`: `REFERENCE_ONLY`
- `linked_test_coupon_id`: `null`
- `linked_locked_recipe_id`: `null`

## Controls Preserved

- Do not create a giant weld settings table yet.
- Do not add real baseline rows unless they are clearly labeled reference-only.
- Do not mark any baseline range as approved.
- Do not mark any baseline range as locked.
- Do not call any range ideal, best, proven, or production-ready.
- Do not create recommendation logic.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.

## V2-M1 Result

V2-M1 is complete. The project now has a safe mild steel baseline range table structure for future high/low reference ranges without creating false production recipes.
