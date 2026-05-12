# V1-DOC-R2 — Baseline / Tested / Locked Data Separation Correction

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1 Supplemental Correction  
Type: Documentation / Data-Control Correction  
Status: Complete

## Purpose

Update the V1 documentation/data model so the app clearly separates baseline reference data, shop reference data, tested results, and locked production recipes.

This correction prevents Miller data, Vectis manual guidance, public data, or shop screenshots/settings from being treated as proven Vectis production recipes.

## Core Corrected Model

Baseline → Test → Record Result → Learn → Lock Better Settings

## Source Separation

| Source | Meaning | Allowed Use |
|---|---|---|
| Miller data | Machine-side arc baseline | Reference starting point only |
| Vectis manual | Cobot/weave/process guardrails | Process and motion guidance only |
| Shop screenshots/settings | Shop reference data | Reference input for future testing |
| Test coupon results | Tested data | Evidence from actual weld testing |
| Approved production use | Locked recipe data | Reusable production recipe only after approval |

## Data Confidence Levels

### REFERENCE_ONLY

General baseline reference data. Not tested. Not approved. Not production-ready.

### SHOP_REFERENCE

Shop-known setting or process reference. Useful for setup memory, but still not automatically approved.

### SHOP_SCREENSHOT_REFERENCE

A screenshot or captured shop setting. Must be treated as reference data until connected to a test result.

### TESTED_RESULT

A recorded weld test result from a test coupon or approved test event.

### LOCKED_RECIPE

A tested, approved, intentionally locked production recipe.

## Source Type Definitions

- `miller_machine_baseline`
- `vectis_manual_guardrail`
- `public_reference`
- `shop_reference`
- `shop_screenshot_reference`
- `test_coupon_result`
- `approved_locked_recipe`

## Vectis Manual Correction Note

The Vectis manual does not provide a full thickness-by-thickness weld settings chart.

The manual provides setup rules, process guardrails, and weave motion examples.

Vectis manual information must not be treated as a complete production weld recipe table.

## Arc Seam Tracking / ArcPilot Correction

Arc Seam Tracking / ArcPilot is optional.

Current shop default:

- `arcSeamTrackingInstalled`: `false`
- `arcSeamTrackingActive`: `false`

Tracking rules only apply if Arc Seam Tracking / ArcPilot is installed and active.

If not installed or not active, tracking fields must not be used as required production recipe logic.

## Weave Guardrail References

These values are guardrail references from Vectis weave guidance, not locked production settings.

### Zig-Zag / Sine Guardrail Reference

- Travel speed: 12 ipm
- Weave length: 3 mm / about 0.11 in
- Weave width: 4 mm / about 0.16 in
- Frequency: about 1.69 Hz

### InLine Guardrail Reference

- Travel speed: 10 ipm
- Forward step: 6 mm / about 0.24 in
- Back step: 2 mm / about 0.08 in
- Back step pause: 0.20 s

## Poor Weave Motion Warning Conditions

Flag or review the setup if any of the following are observed:

- Zig-Zag weave length too short
- Zig-Zag frequency too high for travel speed and width
- InLine forward/back step too high for travel speed
- Too much tool reorientation between Weld points with weave active
- Jerky or violent robot motion
- Cart-base shake during weave motion

These warnings indicate that motion quality may be poor and the setup should be reviewed before testing or production use.

## Baseline High / Low Range Rule

Baseline rows may include high/low ranges.

All baseline rows must be labeled:

- `dataConfidenceLevel`: `REFERENCE_ONLY`
- `requiresTestCoupon`: `true`

Baseline high/low ranges are not approved windows.

They are reference windows for testing.

## Traceability Rule

Job number is optional / if applicable.

Every weld record must include at least one of:

- Job Number
- Job Name
- Part Description
- Part Number
- Test Coupon ID

This prevents orphaned weld records that cannot be traced back to a job, part, description, or test.

## Required Fields For Any Weld Setting Record

Every weld setting record must include:

- Material
- Thickness
- Joint Type
- Wire Type
- Wire Diameter
- Gas
- Mode: CV / Pulse
- WFS
- Voltage or Trim
- Travel Speed
- Weave Type
- Operator
- Date

## Required Fields For Approval / Lock

Approval and locking require:

- Test result
- Pass / fail
- Approved by
- Approval date

A record cannot become locked production data without these fields.

## Locked Recipe Protection Rules

- Do not create a proven production settings table from reference data.
- Do not mark Miller data as a locked recipe.
- Do not mark Vectis manual guidance as a locked recipe.
- Do not mark public internet data as a locked recipe.
- Do not mark shop screenshots/settings as locked recipes.
- Do not lock a recipe without test result approval.
- Do not create recommendation logic.

## V1 Closure Protection

This correction does not reopen V1.

This correction does not rename completed milestones.

This correction does not create a proven production settings table.

This correction preserves V1 complete / closed status.

This correction is documentation/data-control cleanup only.
