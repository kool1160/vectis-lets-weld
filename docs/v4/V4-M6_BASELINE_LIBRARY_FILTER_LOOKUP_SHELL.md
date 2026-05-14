# V4-M6 — Baseline Library Filter / Lookup Shell

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Complete

## Purpose

Add a controlled filter / lookup shell for the Baseline Reference view so floor users can narrow starting-reference records by process, wire size, and record type without creating recommendation or ranking behavior.

## Goal

Help the user quickly find relevant starting references while preserving the rule that records are only Starting Reference — Verify With Test Weld.

## Scope

- App-facing lookup/filter shell only
- Mild steel only
- Miller 352 MPa machine baseline section
- Vectis motion/weave guardrail section
- MIG/CV and Pulse MIG filters
- .035 ER70S-6 and .045 ER70S-6 filters
- Record type filter for Miller Machine Baseline and Vectis Motion / Weave Guardrail
- Value status filter support
- No numeric value creation
- No scoring
- No ranking
- No best match
- No auto-selecting
- No approval or lock action

## Files Changed

- `data/v4/baseline-library-filter-lookup-shell.json`
- `src/main.tsx`

## Filters Added

- Process
  - All
  - MIG/CV
  - Pulse MIG

- Wire Size
  - All
  - .035 ER70S-6
  - .045 ER70S-6

- Record Type
  - All
  - Miller Machine Baseline
  - Vectis Motion / Weave Guardrail

- Value Status
  - All
  - missing_unverified
  - source_pending
  - source_verified
  - shop_corrected_starting_point

## Required Behavior

- Filters may narrow what is displayed.
- Filters must not recommend a setting.
- Filters must not rank records.
- Empty / missing values must remain visibly controlled.
- Records continue showing Starting Reference — Verify With Test Weld.
- Miller records remain separate from Vectis records.

## App View Behavior

The Baseline Reference tab now includes:

- Lookup filter controls
- Miller 352 MPa Machine Baseline References lane
- Vectis Cobot Motion / Weave Guardrails lane
- Empty states when filters return no records
- Control notice preserving Starting Reference — Verify With Test Weld language

## Separation Rule

Miller machine settings remain separate from Vectis motion/weave guardrails.

Filters narrow visible records only and never combine Miller arc settings with Vectis motion/weave values.

## Controls Preserved

- Do not invent Miller or Vectis numeric values.
- Do not mark anything approved, locked, proven, ideal, best, or production-ready.
- Do not create recommendation language.
- Do not create ranking logic.
- Preserve V3 working app flow.
- Preserve V4-M1 through V4-M5 data structures.
- Keep Miller machine settings separate from Vectis motion/weave guardrails.

## V4-M6 Result

V4-M6 is complete. The Baseline Reference view now has controlled lookup/filter behavior that narrows starting-reference records while preserving all safety boundaries and avoiding recommendations, ranking, best-match behavior, approval, or locking.
