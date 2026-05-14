# V4-M7 — Baseline Reference Selection / Trial Handoff Shell

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Complete at data/control shell level

## Purpose

Create a controlled handoff path from a selected Baseline Reference record into Trial Result Entry without creating recommendation, ranking, approval, or locked recipe behavior.

## Goal

Allow a floor user to manually choose a starting-reference record, carry its identity into the trial weld workflow, and record what happened during the test weld.

## Scope

- App-facing shell only
- Manual user selection only
- Mild steel only
- Miller 352 MPa machine baseline references
- Vectis motion/weave guardrail references
- MIG/CV and Pulse MIG compatible
- .035 ER70S-6 and .045 ER70S-6 compatible
- Starting Reference — Verify With Test Weld only
- Trial result linkage only
- No auto-selecting
- No recommended setting output
- No ranking
- No scoring
- No approval
- No locking

## Data File

Created:

`data/v4/baseline-reference-selection-trial-handoff-shell.json`

## Required Behavior Supported By Shell

- User can manually select a displayed starting-reference record.
- Selected record identity can be carried into Trial Result Entry.
- Trial Result Entry clearly shows the selected reference is not approved.
- Trial Result Entry preserves `requires_test_weld: true`.
- Trial records should link back to the selected baseline reference ID when possible.
- If no reference is selected, Trial Result Entry must still allow manual entry.
- Miller and Vectis references must remain clearly separated.

## Selected Reference Payload

The shell defines a selected-reference payload with:

- selected_reference_id
- selected_reference_type
- selected_reference_title
- selected_reference_process
- selected_reference_wire_size
- selected_reference_value_status
- selected_reference_control_label
- selected_reference_approval_status
- selected_reference_requires_test_weld
- selected_reference_locked_recipe_id

## Trial Handoff Fields

- selected_reference_id
- selected_reference_type
- baseline_range_id
- test_coupon_id
- traceable_identifier_type
- traceable_identifier_value
- requires_test_weld
- approval_status
- locked_recipe_id

## Required Display Language

- Starting Reference — Verify With Test Weld
- Not an approved production recipe

## App Wiring Note

The data/control shell and documentation were created in this milestone.

Direct `src/main.tsx` wiring was not completed in this pass because the GitHub tool returned the app file content but did not provide a clean editable current SHA after the prior large app update. To avoid a blind overwrite of the working app file, app wiring should be completed in a small follow-up correction task.

## Controls Preserved

- Do not invent Miller or Vectis numeric values.
- Do not recommend a record.
- Do not rank records.
- Do not create best-match behavior.
- Do not mark anything approved, locked, proven, ideal, best, or production-ready.
- Preserve V3 working app flow.
- Preserve V4-M1 through V4-M6 data structures.
- Keep Miller machine settings separate from Vectis motion/weave guardrails.
- No auto-approval.
- No auto-locking.

## V4-M7 Result

V4-M7 is complete at the data/control shell level. The project now defines the controlled selected-reference handoff payload and trial linkage structure while preserving manual selection only and all no-recommendation/no-locking boundaries.
