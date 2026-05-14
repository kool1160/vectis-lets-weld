# V4-M7A — Wire Baseline Selection / Trial Handoff Into App Screen

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Blocked

## Goal

Wire the V4-M7 baseline reference selection / trial handoff shell into the working app screen without overwriting or breaking the existing V3/V4 app flow.

## Scope

- Small correction task only
- Update `src/main.tsx` safely
- Preserve current Baseline Reference filters from V4-M6
- Add manual select action for displayed starting-reference records
- Carry selected reference identity into Trial Result Entry
- Show selected reference context in Trial Result Entry
- Preserve manual trial entry if no reference is selected
- No data model redesign
- No new numeric weld values
- No approval or locking behavior

## Blocker

The GitHub tool returned the large `src/main.tsx` file content and the V4-M6 app commit patch, but did not expose the current editable blob SHA needed for a safe `update_file` operation.

Because `src/main.tsx` is the working app file and contains the V3/V4 workflow, this task was not completed to avoid a blind overwrite.

## Required App Wiring Still Needed

- Add selected reference state in `App`.
- Allow `LookupRecordCard` to accept a manual select callback.
- Add a `Use This Starting Reference` button on displayed baseline records.
- Carry selected reference identity into `TrialResultScreen`.
- Show selected reference context in Trial Result Entry.
- Add selected reference ID/type/status to saved trial payload when possible.
- Preserve manual Trial Result Entry with no selected reference.
- Preserve Miller/Vectis visual separation.

## Required Display Language

- Starting Reference — Verify With Test Weld
- Not an approved production recipe

## Controls Preserved

- Do not invent Miller or Vectis numeric values.
- Do not recommend a record.
- Do not rank records.
- Do not create best-match behavior.
- Do not mark anything approved, locked, proven, ideal, best, or production-ready.
- Preserve V3 working app flow.
- Preserve V4-M1 through V4-M7 data structures.
- Keep Miller machine settings separate from Vectis motion/weave guardrails.
- No auto-selecting.
- No auto-approval.
- No auto-locking.

## Result

V4-M7A is blocked at app wiring because the app file could not be safely edited through the current tool response without risking a blind overwrite.
