# V2-M2 — Mild Steel Baseline Source Label Model

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the source label and confidence model for mild steel baseline range data so every future baseline row clearly identifies where it came from and how much trust it should receive.

## Locked Context

V1 is complete / closed.

V2-M1 created the mild steel baseline range table structure and kept it reference-only by default.

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
- Source/confidence model only
- No large weld data dump
- No real weld setting ranges yet
- No recommendation logic
- No production-ready recipe claims

## Data File

Created:

`data/v2/source-confidence-model.json`

## Required Source Labels

- `MILLER_MACHINE_REFERENCE`
- `VECTIS_MANUAL_GUARDRAIL`
- `SHOP_SCREENSHOT_REFERENCE`
- `SHOP_REFERENCE`
- `PUBLIC_REFERENCE`
- `TEST_COUPON_RESULT`
- `LOCKED_RECIPE_RECORD`

## Source Label Rules

### MILLER_MACHINE_REFERENCE

Machine-side arc reference data.

This is not a proven Vectis production recipe unless it is tested and approved.

### VECTIS_MANUAL_GUARDRAIL

Vectis cobot setup, process, weave, or motion guardrail.

This is not a full production weld chart.

### SHOP_SCREENSHOT_REFERENCE

Captured shop screen or setting image.

Useful reference, but not approved until tied to test results.

### SHOP_REFERENCE

Shop-known reference setting or process memory.

Not production-ready unless tested and approved.

### PUBLIC_REFERENCE

Internet, vendor, or public reference source.

Starting reference only.

### TEST_COUPON_RESULT

Actual tested weld result from a controlled coupon or test event.

This is tested data, not automatically locked production data.

### LOCKED_RECIPE_RECORD

Approved production record created only after test pass and lock authorization.

## Required Confidence Levels

- `REFERENCE_ONLY`
- `SHOP_REFERENCE`
- `SHOP_SCREENSHOT_REFERENCE`
- `TESTED_RESULT`
- `LOCKED_RECIPE`

## Confidence Level Rules

### REFERENCE_ONLY

Starting reference data only.

Requires testing before approval or locking.

### SHOP_REFERENCE

Shop-sourced reference data.

Still requires test coupon and approval before locking.

### SHOP_SCREENSHOT_REFERENCE

Reference captured from screenshot/photo evidence.

Still requires test coupon and approval before locking.

### TESTED_RESULT

Actual recorded test result.

Not locked until approval and lock authorization are complete.

### LOCKED_RECIPE

Approved production record.

Must trace back to a passed test coupon and approval record.

## Required Source Metadata Fields

- source_label
- source_name
- source_type
- source_notes
- captured_from
- captured_by
- captured_date
- confidence_level
- requiresTestCoupon
- linked_test_coupon_id
- linked_locked_recipe_id
- approval_status
- production_ready

## Required Defaults For Baseline Rows

- `confidence_level`: `REFERENCE_ONLY`
- `requiresTestCoupon`: `true`
- `linked_test_coupon_id`: `null`
- `linked_locked_recipe_id`: `null`
- `approval_status`: `not_approved`
- `production_ready`: `false`

## Source Labels Do Not Equal Approval

A source label describes where data came from.

It does not approve the data.

It does not lock the data.

It does not make the data production-ready.

## Confidence Labels Do Not Equal Production Approval

A confidence label describes how much trust the record has.

Only `LOCKED_RECIPE` may represent approved production use.

Baseline rows must not use `LOCKED_RECIPE` unless they have passed the complete control path and have been intentionally promoted into a separate locked recipe record.

## Controls Preserved

- Do not create a large baseline data table.
- Do not add real weld setting ranges yet.
- Do not treat source labels as approval.
- Do not treat confidence labels as production approval.
- Do not mark Miller data as locked recipe data.
- Do not mark Vectis manual guidance as locked recipe data.
- Do not mark shop screenshots as locked recipe data.
- Do not create recommendation logic.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2-M1 locked table structure.

## V2-M2 Result

V2-M2 is complete. The project now has a source label and confidence model that keeps future mild steel baseline range rows honest, traceable, and separate from tested or locked production data.
