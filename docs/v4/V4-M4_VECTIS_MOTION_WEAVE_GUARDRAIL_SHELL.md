# V4-M4 — Vectis Motion / Weave Guardrail Shell

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Complete

## Purpose

Create a controlled Vectis-side motion and weave guardrail structure that stays separate from Miller machine baseline settings.

## Goal

Prepare the app to store safe Vectis cobot motion/weave setup references later without mixing them into Miller arc settings.

## Scope

- Vectis cobot side only
- Mild steel only
- Motion / weave / travel setup structure only
- MIG/CV and Pulse MIG compatible structure
- .035 ER70S-6 and .045 ER70S-6 compatible structure
- Guardrail shell only
- No numeric motion values unless already verified in repo
- No Miller machine setting rows
- No locked recipes
- No recommendation logic
- No ranking

## Data File

Created:

`data/v4/vectis-motion-weave-guardrail-shell.json`

## Supported Field Groups

- Vectis setup identity
- Process compatibility
- Wire compatibility
- Joint / weld type compatibility
- Travel mode
- Torch angle notes
- Stickout / contact tip notes
- Weave pattern type
- Weave width status
- Weave frequency status
- Travel speed status
- Motion notes
- Source / evidence tracking
- Test weld requirement
- Approval / lock control

## Required Defaults

- `source_type`: `VECTIS_MANUAL_GUARDRAIL`
- `confidence_level`: `STARTING_REFERENCE`
- `requires_test_weld`: `true`
- `approval_status`: `not_approved`
- `production_ready`: `false`
- `locked_recipe_id`: `null`
- `value_status`: `missing_unverified`

## Allowed Weave Pattern Types

- No Weave
- Zig-Zag
- Sine
- InLine
- Other / Shop Defined

## Required Control Language

All guardrail records remain:

Starting Reference — Verify With Test Weld

## Miller / Vectis Separation Rule

Vectis motion/weave guardrails are setup references only and must remain separate from Miller machine-side arc baseline settings.

Miller machine data owns arc/machine-side fields.

Vectis guardrails own travel, weave, motion, robot stability, programming cautions, and setup-reference notes.

## Guardrail Boundary

The Vectis guardrail shell does not create:

- Miller machine baseline rows
- locked recipes
- approved rows
- production-ready rows
- recommendations
- rankings
- best / ideal / proven claims
- auto-selecting
- auto-approval
- auto-locking

## Controls Preserved

- Keep Vectis motion/weave guardrails separate from Miller machine baseline settings.
- Do not invent Vectis motion numbers.
- Do not mark anything approved, locked, proven, ideal, best, or production-ready.
- Use Starting Reference — Verify With Test Weld.
- Preserve V4-M1, V4-M2, and V4-M3 structures.
- Preserve V3 working app flow.
- No recommendation logic.
- No ranking.
- No auto-selecting.
- No auto-approval.
- No auto-locking.

## V4-M4 Result

V4-M4 is complete. The project now has a controlled Vectis-side motion/weave guardrail shell that can later hold verified cobot setup references without mixing them into Miller machine arc baseline data.
