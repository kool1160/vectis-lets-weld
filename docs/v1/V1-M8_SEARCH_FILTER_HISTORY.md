# V1-M8 — Search / Filter / History

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1  
Status: Complete

## Purpose

Create the V1 search, filter, and history structure for finding baseline settings, test coupons, approval records, and locked recipes without creating recommendation logic.

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
- No best / better / worse recipe ranking
- No automatic production setting selection

## Search / Filter / History Data File

Created:

`data/v1/search-filter-history.json`

## Required Filters

- material
- thickness
- joint_type
- weld_position
- process
- wire_diameter
- wire_type
- gas
- weave_pattern
- test_status
- approval_status
- production_ready
- active_status
- revision
- date_created
- date_tested
- date_locked

## Search Models Created

### Baseline Settings

Searches baseline reference records only.

Baseline results must not be treated as production-ready recipes.

### Test Coupons

Searches test coupon records and weld test results.

Test coupons must not become locked recipes automatically.

### Approval Records

Searches approval, rejection, and retest records for traceability.

Approval search must not become recommendation logic.

### Locked Recipes

Searches reusable locked production records only after approval and locking.

Locked recipes must not be ranked as best, better, or worse.

## Required History Fields

- history_id
- record_type
- record_id
- action_type
- changed_by
- change_date
- previous_status
- new_status
- revision
- notes

## Supported Record Types

- baseline_setting
- test_coupon
- approval_record
- locked_recipe

## Supported History Actions

- created
- updated
- tested
- approved
- rejected
- retest_required
- locked
- revision_created
- deactivated
- reactivated

## Traceability Rule

Search and history must support traceability across baseline, test coupon, approval, and locked recipe records.

Every history entry must identify:

1. record_type
2. record_id
3. action_type
4. changed_by
5. change_date
6. previous_status
7. new_status
8. revision
9. notes

## Recommendation Boundary

Search helps users find records.

Search does not recommend settings.

Search does not rank recipes.

Search does not auto-select production settings.

The V1 app remains a controlled weld settings library, not an AI weld recommendation system.

## Preserved Workflow

Collect → Test → Approve → Lock → Reuse

## V1-M8 Result

V1-M8 is complete. The app now has search, filter, and history structure for traceability across baseline settings, test coupons, approval records, and locked recipes without creating recommendation logic.
