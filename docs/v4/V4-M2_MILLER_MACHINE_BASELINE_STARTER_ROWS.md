# V4-M2 — Miller Machine Baseline Starter Rows

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Complete

## Purpose

Add controlled Miller 352 MPa machine-side baseline starter rows for mild steel MIG/CV and Pulse MIG.

## Scope

- Mild steel only
- Miller 352 MPa
- Machine-side arc baseline only
- MIG/CV and Pulse MIG only
- .035 ER70S-6 and .045 ER70S-6 only
- Starting reference rows only
- No Vectis weave/motion rows yet
- No locked recipes
- No ranking
- No recommendation logic

## Data File

Created:

`data/v4/miller-machine-baseline-starter-rows.json`

## Starter Rows Created

- `MILLER-MS-CV-035-START-001`
- `MILLER-MS-CV-045-START-001`
- `MILLER-MS-PULSE-035-START-001`
- `MILLER-MS-PULSE-045-START-001`

## Important Source Note

Numeric Miller machine baseline values were intentionally left blank/null in this milestone.

Reason:

No verified Miller/shop reference values were safely available in this task.

This prevents the app from creating fake weld charts or unsupported production settings.

Future numeric values may be added only from:

- verified Miller machine/manual data
- trusted public reference data
- shop screenshot reference
- controlled shop-corrected starting point with justification

## Required Row Rules

Every row uses:

- `source_type`: `MILLER_MACHINE_REFERENCE`
- `confidence_level`: `STARTING_REFERENCE`
- `requires_test_weld`: `true`
- `user_correction_allowed`: `true`
- `correction_requires_justification`: `true`
- `approval_status`: `not_approved`
- `production_ready`: `false`
- `locked_recipe_id`: `null`

## Miller / Vectis Separation

These rows are Miller machine-side arc baseline starter shells only.

They do not include Vectis weave, travel motion, or cobot guardrail rows.

Vectis motion/weave guardrails remain separate and should be handled in a later milestone.

## Baseline Boundary

These rows are starting references only.

They are not:

- best
- ideal
- proven
- approved
- locked
- production-ready
- recommendations
- rankings

## Controls Preserved

- Do not create locked recipes.
- Do not mark baseline rows as approved.
- Do not call any row best, ideal, proven, approved, locked, or production-ready.
- Do not create recommendation logic.
- Do not rank settings.
- Keep Miller machine baseline separate from Vectis motion/weave guardrails.
- Preserve V3 working app flow.
- Preserve V4-M1 structure.

## V4-M2 Result

V4-M2 is complete. The project now has controlled Miller 352 MPa machine-side baseline starter row shells for mild steel MIG/CV and Pulse MIG using .035 and .045 ER70S-6, without unsupported numeric settings or production claims.
