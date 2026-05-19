# V4-M8A — Floor-Side Quick Lookup Path

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Runtime update blocked by connector safety layer

## Goal

Add a simple floor-side quick lookup path so a user can quickly search for a starting reference by real shop intent, such as Pulse MIG on 3/8 mild steel, without digging through the full baseline library controls.

## Intended Runtime Behavior

- Add a quick lookup panel near the top of Baseline Reference.
- Keep existing V4-M6 filters.
- Keep Miller / Vectis separation.
- Keep all safety language.
- Narrow displayed starting-reference records by process and wire.
- Capture thickness as lookup context even where no numeric weld values exist yet.
- Keep Use This Starting Reference visible and easy to tap.

## Required Quick Lookup Fields

- Material: Mild steel only
- Thickness: 1/8, 3/16, 1/4, 3/8, 1/2, Other / manual
- Process: MIG/CV, Pulse MIG
- Wire: .035 ER70S-6, .045 ER70S-6
- Joint type: Fillet, Butt, Lap, Other / manual

## Required Display Language

No verified numeric baseline values entered yet. Use this as a controlled starting-reference search context only.

Starting Reference — Verify With Test Weld

Not an approved production recipe

## Blocker

The runtime update to `src/main.tsx` was attempted with the current editable blob SHA, but the connector blocked the update with a safety-layer rejection before commit.

Because the app runtime file could not be updated, V4-M8A is not complete at runtime.

## Controls To Preserve When Reattempted

- Do not invent Miller or Vectis numeric values.
- Do not recommend a setting.
- Do not rank records.
- Do not call anything approved, locked, proven, ideal, best, or production-ready.
- Preserve manual trial entry.
- Preserve selected reference handoff into Trial Result Entry.
- Preserve Local History behavior.
- Preserve V3/V4 working app flow.

## Recommendation

Reattempt this in Codex or a local editor as a small `src/main.tsx` patch. Do not mark V4-M8A passed until the quick lookup panel is visible in the runtime app.
