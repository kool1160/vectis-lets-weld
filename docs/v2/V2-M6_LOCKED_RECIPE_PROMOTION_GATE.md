# V2-M6 — Locked Recipe Promotion Gate

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the V2 locked recipe promotion gate that controls when a tested result can be promoted into a locked production recipe.

## Locked Context

V1 is complete / closed.

V2-M1 baseline range table structure is locked / passed.

V2-M2 source label and confidence model is locked / passed.

V2-M3 baseline range entry form structure is locked / passed.

V2-M4 test coupon linkage from baseline range is locked / passed.

V2-M5 tested result history structure is locked / passed.

Core locked rule:

Baseline range = starting reference only.

Tested result = what actually happened.

Locked recipe = approved production record.

## Required Control Path

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Locked recipe promotion gate structure only
- No recommendation logic
- No automatic locking

## Data / Schema File

Created:

`data/v2/locked-recipe-promotion-gate.json`

## Required Promotion Fields

- promotion_gate_id
- tested_result_id
- baseline_range_id
- test_coupon_id
- promotion_status
- test_status
- pass_fail
- approval_required
- approval_status
- approved_by
- approval_date
- lock_authorized_by
- lock_date
- locked_recipe_id
- production_ready
- rejection_reason
- retest_required
- notes

## Required Statuses

- promotion_not_started
- promotion_review_required
- promotion_blocked
- rejected
- retest_required
- approved_for_lock
- locked_recipe_created

## Required Defaults

- `promotion_status`: `promotion_review_required`
- `approval_required`: `true`
- `approval_status`: `not_approved`
- `locked_recipe_id`: `null`
- `production_ready`: `false`
- `retest_required`: `false`

## Required Lock Conditions

A tested result may only be promoted if:

- tested_result_id exists
- test_status is completed
- pass_fail is pass
- approval_status is approved_for_lock
- approved_by is present
- approval_date is present
- lock_authorized_by is present
- locked_recipe_id is created during lock step
- production_ready becomes true only after lock

## Blocked / Rejected Promotion Fields

- promotion_gate_id
- tested_result_id
- promotion_status
- rejection_reason
- retest_required
- notes

## Promotion Rules

- Tested result cannot become locked recipe automatically.
- Passing result cannot become locked recipe automatically.
- Approval must happen before lock.
- Failed results must be blocked or require retest.
- Rejected results must not become locked recipes.
- Baseline range cannot bypass tested result history.
- `production_ready` cannot become true before locked recipe creation.

## Approval Boundary

A tested result is evidence.

A passed test result is stronger evidence.

A locked recipe is an approved production record.

The promotion gate exists so the app does not confuse those stages.

## Controls Preserved

- Do not create recommendation logic.
- Do not rank settings.
- Do not add real baseline range data.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2-M1 through V2-M5 locked control rules.

## V2-M6 Result

V2-M6 is complete. The project now has a locked recipe promotion gate that prevents automatic promotion from tested result to locked production recipe and requires approval plus lock authorization before production readiness.
