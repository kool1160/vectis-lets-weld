# V4-M3 — Miller Baseline Source Intake Fields

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Complete

## Purpose

Add a controlled source-intake structure for adding verified Miller 352 MPa baseline values later without creating fake or unsupported weld settings.

## Goal

Create the fields needed to capture where each Miller machine baseline value came from before numeric values are entered.

## Scope

- Mild steel only
- Miller 352 MPa only
- Machine-side arc baseline only
- MIG/CV and Pulse MIG only
- .035 ER70S-6 and .045 ER70S-6 only
- Source tracking / evidence tracking only
- No actual numeric setting population yet unless verified source data already exists in the repo

## Data File

Created:

`data/v4/miller-baseline-source-intake-fields.json`

## Required Source Intake Fields

- source_type
- source_name
- source_reference
- source_date
- source_capture_method
- source_evidence_file
- verified_by
- verification_date
- verification_notes
- value_status
- missing_value_reason
- requires_test_weld
- correction_requires_justification

## Allowed Source Types

- `MILLER_MACHINE_REFERENCE`
- `TRUSTED_PUBLIC_REFERENCE`
- `SHOP_SCREENSHOT_REFERENCE`
- `SHOP_CORRECTED_STARTING_POINT`

## Allowed Source Capture Methods

- `manual_entry_from_miller_machine`
- `manual_entry_from_miller_document`
- `shop_screenshot`
- `trusted_public_reference`
- `shop_corrected_starting_point`

## Allowed Value Statuses

- `missing_unverified`
- `captured_pending_verification`
- `verified_starting_reference`
- `rejected_source`
- `superseded_reference`

## Required Defaults

- `value_status`: `missing_unverified`
- `requires_test_weld`: `true`
- `correction_requires_justification`: `true`
- `confidence_level`: `STARTING_REFERENCE`
- `approval_status`: `not_approved`
- `production_ready`: `false`
- `locked_recipe_id`: `null`

## Intake Boundary

This milestone does not add Miller numeric weld values.

It only creates the controlled structure for entering source/evidence information before values are added.

## Required Control Language

All records remain:

Starting Reference — Verify With Test Weld

## Miller / Vectis Separation

Miller machine baseline source intake remains separate from Vectis weave/motion guardrails.

This milestone is for Miller machine-side arc baseline source tracking only.

## Controls Preserved

- Do not invent Miller numeric values.
- Do not scrape or guess weld settings.
- Do not mark anything approved, locked, proven, ideal, best, or production-ready.
- Keep all records as Starting Reference — Verify With Test Weld.
- Preserve V4-M1 and V4-M2 structures.
- Preserve V3 working app flow.
- Keep Miller machine baseline separate from Vectis weave/motion guardrails.
- No recommendation logic.
- No ranking.
- No auto-selecting.
- No auto-approval.
- No auto-locking.

## V4-M3 Result

V4-M3 is complete. The project now has controlled source-intake and evidence-tracking fields for adding verified Miller baseline values later without creating unsupported weld settings or production claims.
