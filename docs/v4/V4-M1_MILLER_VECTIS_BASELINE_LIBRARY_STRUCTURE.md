# V4-M1 — Miller / Vectis Baseline Library Structure

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Complete

## Purpose

Create the baseline starting-point library structure so the app can hold Miller machine baseline data and Vectis cobot/weave guardrail data for floor-side setup reference.

## Why V4 Exists

V3 created the working floor-side app flow.

V4 adds the starting reference library so users have a useful baseline to begin testing from.

## Core App Identity

A floor-side weld setup reference tool that helps users find a starting point for mild steel Vectis/Miller weld programs.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Baseline library structure only
- No locked recipe claims
- No auto-approval
- No ranking
- No perfect-setting claims

## Data / Schema File

Created:

`data/v4/baseline-library-structure.json`

## Required Source Types

- `MILLER_MACHINE_REFERENCE`
- `VECTIS_MANUAL_GUARDRAIL`
- `TRUSTED_PUBLIC_REFERENCE`
- `SHOP_SCREENSHOT_REFERENCE`
- `SHOP_CORRECTED_STARTING_POINT`

## Required Baseline Labels

- Starting Reference
- Verify With Test Weld
- Not Approved
- Not Production Ready
- Not Locked Recipe

## Required Fields

- baseline_library_id
- source_type
- source_name
- material
- thickness
- gauge
- joint_type
- weld_position
- weld_size
- wire_type
- wire_diameter
- gas
- mode
- wfs_low
- wfs_high
- voltage_low
- voltage_high
- trim_low
- trim_high
- travel_speed_low
- travel_speed_high
- ctwd_low
- ctwd_high
- torch_angle_range
- push_pull_angle_range
- weave_type
- weave_width
- weave_length_or_step
- weave_frequency_or_pause
- intermittent_notes
- source_notes
- confidence_level
- requires_test_weld
- user_correction_allowed
- correction_requires_justification
- approval_status
- production_ready
- locked_recipe_id
- notes

## Required Defaults

- `confidence_level`: `STARTING_REFERENCE`
- `requires_test_weld`: `true`
- `user_correction_allowed`: `true`
- `correction_requires_justification`: `true`
- `approval_status`: `not_approved`
- `production_ready`: `false`
- `locked_recipe_id`: `null`

## Miller / Vectis Separation Rule

Miller machine data is machine-side welding baseline data.

Vectis manual / cobot guardrail data is motion, weave, travel, and robot process guidance.

These must remain separate so the app does not confuse arc/machine starting data with cobot movement guardrails.

## User Correction Rule

Shop-corrected starting points are allowed as future reference records only.

A correction must include justification.

A corrected starting point is still not approved, locked, or production-ready unless it passes the full test and approval path.

## Baseline Library Boundary

The baseline library does not create:

- locked recipes
- approved rows
- production-ready rows
- recommendations
- rankings
- best / ideal / proven claims

## Locked Control Path Preserved

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Controls Preserved

- Do not create locked recipes.
- Do not mark baseline rows as approved.
- Do not call any baseline best, ideal, proven, or production-ready.
- Do not create recommendation logic yet.
- Do not rank settings.
- Keep Miller machine data separate from Vectis motion/weave guardrails.
- Preserve V3 working app flow.

## V4-M1 Result

V4-M1 is complete. The project now has a controlled baseline starting-point library structure for Miller machine baseline data, Vectis cobot/weave guardrails, trusted public references, shop screenshots, and justified shop-corrected starting points without creating approved or locked production recipes.
