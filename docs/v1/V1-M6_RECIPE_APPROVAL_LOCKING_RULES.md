# V1-M6 — Recipe Approval / Locking Rules

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1  
Status: Complete

## Purpose

Create the V1 approval and locking rules that control when a tested weld setting can become a locked production recipe.

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

## Approval / Locking Data File

Created:

`data/v1/approval-locking-rules.json`

## Required Statuses

- baseline_reference
- test_required
- test_in_progress
- test_passed
- test_failed
- retest_required
- approved_for_lock
- locked_recipe
- rejected

## Required Approval Fields

- approval_record_id
- baseline_id
- test_coupon_id
- locked_recipe_id
- approval_status
- test_status
- approved_by
- approved_date
- rejection_reason
- retest_required
- lock_authorized_by
- lock_date
- production_ready
- revision
- notes

## Baseline / Test / Lock Relationship

A baseline row is starting reference data only.

A test coupon is the controlled test record tied to the baseline row.

An approval record controls whether a tested setting can be intentionally locked.

A locked recipe is only created after the linked test coupon passes and the approval record is marked approved for lock.

## Locking Rules

- A baseline row cannot become a locked recipe directly.
- A test coupon cannot become a locked recipe automatically.
- A recipe cannot be locked unless `test_status` is `test_passed`.
- A recipe cannot be locked unless `approval_status` is `approved_for_lock`.
- `production_ready` must remain false until the recipe is intentionally locked.
- Rejected or failed tests must require retest before approval.
- `locked_recipe_id` must remain null until test approval and lock authorization are complete.

## Rejection / Retest Rules

If a test fails, is rejected, or needs adjustment:

1. `test_status` must not be `test_passed`
2. `approval_status` must not be `approved_for_lock`
3. `production_ready` must remain false
4. `retest_required` must be true when a revised setup needs another weld test
5. Rejection reason or adjustment notes must be captured before reuse

## Preserved Workflow

Collect → Test → Approve → Lock → Reuse

## V1-M6 Result

V1-M6 is complete. The app now has a controlled approval and locking rule layer that prevents baseline rows or test coupons from becoming production recipes without passing test results and approval for locking.
