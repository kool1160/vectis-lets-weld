# V2-M4 — Test Coupon Linkage From Baseline Range

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the V2 structure that links a reference-only baseline range entry to a test coupon without allowing the baseline range to become approved, locked, or production-ready.

## Locked Context

V1 is complete / closed.

V2-M1 baseline range table structure is locked / passed.

V2-M2 source label and confidence model is locked / passed.

V2-M3 baseline range entry form structure is locked / passed.

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
- Test coupon linkage structure only
- No recommendation logic
- No production-ready baseline claims

## Data / Schema File

Created:

`data/v2/baseline-to-test-coupon-linkage.json`

## Required Linkage Fields

- baseline_range_id
- test_coupon_id
- linkage_status
- created_from_baseline_range
- source_label
- confidence_level
- requiresTestCoupon
- test_coupon_required
- test_coupon_created
- test_coupon_created_by
- test_coupon_created_date
- linked_test_coupon_id
- linked_locked_recipe_id
- approval_status
- production_ready
- notes

## Required Statuses

- baseline_reference_only
- test_coupon_required
- test_coupon_created
- test_in_progress
- test_completed
- test_failed
- test_passed
- approval_required
- approved_for_lock
- locked_recipe

## Required Defaults

- `linkage_status`: `test_coupon_required`
- `created_from_baseline_range`: `true`
- `requiresTestCoupon`: `true`
- `test_coupon_required`: `true`
- `test_coupon_created`: `false`
- `linked_test_coupon_id`: `null`
- `linked_locked_recipe_id`: `null`
- `approval_status`: `not_approved`
- `production_ready`: `false`

## Conversion / Request Fields

- baseline_range_id
- requested_test_coupon_id
- requested_by
- requested_date
- reason_for_test
- test_priority
- target_material
- target_thickness
- target_joint_type
- target_weld_position
- target_mode
- notes

## Linkage Rules

- Baseline range cannot become approved directly.
- Baseline range cannot become locked directly.
- Baseline range cannot become production-ready directly.
- Test coupon must be created before any approval step.
- Passing test result must exist before approval.
- Approval must exist before locked recipe.

A baseline range may request or create a linked test coupon, but the baseline range itself remains reference-only.

Approval and locking occur only after a passing tested result and approval record.

## Required Next Step Before Approval

A test coupon is the required next step before approval.

The baseline range is only the source reference.

The test coupon becomes the controlled test object.

The tested result records what actually happened.

Only after approval can a separate locked recipe be created.

## Controls Preserved

- Do not create recommendation logic.
- Do not add real weld setting ranges.
- Do not rank settings.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2-M1, V2-M2, and V2-M3 locked control rules.

## V2-M4 Result

V2-M4 is complete. The project now has a safe baseline-range-to-test-coupon linkage structure that keeps baseline ranges reference-only while creating the required path toward testing, approval, and eventual locked recipe creation.
