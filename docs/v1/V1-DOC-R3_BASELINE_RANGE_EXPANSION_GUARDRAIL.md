# V1-DOC-R3 — Baseline Range Expansion Guardrail

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1 Supplemental Correction  
Type: Planning / Data-Control Guardrail  
Status: Complete

## Purpose

Prepare the project for future mild steel baseline high/low range expansion without creating false production recipes.

This document defines how future baseline range rows must be added so reference data remains clearly separated from tested results and locked recipes.

## Core Control Language

Baseline range = starting reference only

Tested result = what actually happened

Locked recipe = approved production record

Recommendation logic is not allowed until enough tested history exists.

## Baseline Range Row Rules

Baseline range rows may be added in a future V2 baseline/reference sheet, but every row must remain controlled as reference data until tested.

Rules:

- Baseline range rows are not production recipes.
- Baseline range rows are not approved settings.
- Baseline range rows are not locked recipes.
- Baseline range rows are not best, ideal, or recommended settings.
- Baseline range rows must require a test coupon before approval.
- Baseline range rows must remain separate from locked recipe records.
- Baseline ranges may show high/low reference windows only.
- High/low ranges are setup starting points, not approved operating windows.
- Any range built from Miller, Vectis, internet, or screenshot data must stay reference-only until tested in the shop.

## Required Baseline Range Fields

Every future baseline range row must include:

- baseline_range_id
- material
- thickness
- joint_type
- weld_position
- process
- mode_cv_or_pulse
- wire_type
- wire_diameter
- gas
- voltage_or_trim_low
- voltage_or_trim_high
- wire_feed_speed_low
- wire_feed_speed_high
- amperage_low_if_available
- amperage_high_if_available
- travel_speed_ipm_low
- travel_speed_ipm_high
- stickout_ctwd
- torch_angle
- work_angle
- weave_type
- weave_width_low
- weave_width_high
- weave_dwell_low
- weave_dwell_high
- pass_count
- source_type
- source_label
- source_notes
- data_confidence_level
- requiresTestCoupon
- production_ready
- approval_status
- locked_recipe_id
- notes

## Required Source Labels

Each baseline range row must identify the source type.

Allowed source labels:

- `miller_machine_baseline`
- `vectis_manual_guardrail`
- `public_reference`
- `shop_reference`
- `shop_screenshot_reference`
- `mixed_reference`

These labels describe where the reference range came from. They do not prove the row is production-ready.

## Required Confidence Labels

Each baseline range row must include a data confidence label.

Allowed confidence labels:

- `REFERENCE_ONLY`
- `SHOP_REFERENCE`
- `SHOP_SCREENSHOT_REFERENCE`

Baseline range rows must not use:

- `TESTED_RESULT`
- `LOCKED_RECIPE`

Those labels belong only to tested records and locked recipe records.

## Required Test-Coupon Flag

Every future baseline range row must include:

`requiresTestCoupon: true`

This flag must remain true until the setup is tested and recorded through the test coupon workflow.

A baseline row cannot change itself into a tested result or locked recipe.

## Required Separation From Locked Recipes

Baseline range records and locked recipe records must remain separate data objects.

A baseline range row must not be copied into the locked recipe library unless:

1. A test coupon is created
2. The weld is tested
3. The tested result is recorded
4. The result passes
5. Approval is granted
6. Lock authorization is recorded
7. A new locked recipe record is intentionally created

## Example Safe Baseline Row Format

```json
{
  "baseline_range_id": "MS-BR-001",
  "material": "Mild steel",
  "thickness": "11 ga",
  "joint_type": "Fillet",
  "weld_position": "Flat",
  "process": "MIG",
  "mode_cv_or_pulse": "CV",
  "wire_type": "ER70S-6",
  "wire_diameter": ".035",
  "gas": "Shop-used mild steel gas only",
  "voltage_or_trim_low": "reference value only",
  "voltage_or_trim_high": "reference value only",
  "wire_feed_speed_low": "reference value only",
  "wire_feed_speed_high": "reference value only",
  "travel_speed_ipm_low": "reference value only",
  "travel_speed_ipm_high": "reference value only",
  "weave_type": "No Weave / Stringer",
  "source_type": "shop_reference",
  "source_label": "SHOP_REFERENCE",
  "source_notes": "Reference row for future test coupon. Not approved.",
  "data_confidence_level": "REFERENCE_ONLY",
  "requiresTestCoupon": true,
  "production_ready": false,
  "approval_status": "not_approved",
  "locked_recipe_id": null,
  "notes": "Starting reference only. Must be tested before approval or locking."
}
```

## Unsafe Labels / Claims To Avoid

Do not use language like:

- Approved setting
- Production-ready
- Best setting
- Ideal setting
- Recommended setting
- Proven Vectis recipe
- Locked recipe
- Shop-approved
- Use this for production
- Validated thickness chart
- Auto-selected recipe

Avoid any wording that makes reference data sound proven, approved, or locked.

## Future V2 Direction

Future V2 work may add real mild steel thickness/joint baseline ranges.

When V2 adds those rows, it should:

- Keep the baseline sheet separate from locked recipes
- Use strict source labels
- Use strict data confidence labels
- Set `requiresTestCoupon: true` on every baseline row
- Keep `production_ready: false` on every baseline row
- Keep `locked_recipe_id: null` on every baseline row
- Add source notes for Miller / Vectis / shop / screenshot / public reference data
- Use baseline rows to generate test coupons, not production recipes
- Only create locked recipes from tested and approved results

## Recommendation Boundary

Recommendation logic is not allowed in V1 supplemental correction work.

Recommendation logic should not be added in V2 until enough tested history exists to support it responsibly.

Until then, the system may help users find, filter, and trace records, but it must not recommend, rank, or auto-select production settings.

## V1 Closure Protection

This document does not reopen V1.

This document does not create a large baseline settings table.

This document does not create recommendation logic.

This document does not mark reference data as approved, locked, ideal, best, or production-ready.

This document preserves V1 complete / closed status.
