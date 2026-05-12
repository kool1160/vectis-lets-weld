# V2-M7 — Baseline Search / Filter View

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete

## Purpose

Create the V2 baseline search/filter view structure so users can find mild steel baseline range records without treating them as recommendations or locked recipes.

## Locked Context

V1 is complete / closed.

V2-M1 through V2-M6 are locked / passed.

Baseline ranges remain reference-only.

Locked recipes require tested result, approval, and lock authorization.

Core locked rule:

Baseline range = starting reference only.

Tested result = what actually happened.

Locked recipe = approved production record.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Search/filter view structure only
- No recommendation logic
- No production-ready baseline claims

## Data / View Structure File

Created:

`data/v2/baseline-search-filter-view.json`

## Required Filters

- material
- thickness
- gauge
- joint_type
- weld_position
- wire_diameter
- wire_type
- gas
- mode
- weave_type
- source_label
- confidence_level
- baseline_status
- requiresTestCoupon

## Required Visible Fields

- baseline_range_id
- material
- thickness
- gauge
- joint_type
- weld_position
- wire_type
- wire_diameter
- gas
- mode
- wfs_low
- wfs_high
- voltage_low
- voltage_high
- trim_or_arc_length_low
- trim_or_arc_length_high
- travel_speed_low
- travel_speed_high
- weave_type
- source_label
- confidence_level
- baseline_status
- requiresTestCoupon

## Required Safety Labels

- REFERENCE_ONLY
- Requires Test Coupon
- Not Approved
- Not Production Ready
- Not Locked Recipe

## Required Empty-State Behavior

If no records match selected filters, the view should show:

No baseline range reference records found for the selected filters.

Guidance:

Adjust filters or add a new reference-only baseline range entry.

The empty state must not suggest a best match or recommended setting.

## Create Test Coupon Action Placeholder

The view may include a placeholder action:

Create Test Coupon

This action is enabled only when:

- baseline_range_id exists
- requiresTestCoupon is true

The placeholder does not:

- Approve the baseline range
- Lock the baseline range
- Mark it production-ready
- Recommend the setting
- Create a locked recipe

## View Sections

- filter_panel
- results_summary
- baseline_reference_cards
- safety_status_labels
- create_test_coupon_placeholder_action
- empty_state

## Search / Filter Boundary

Search/filter helps users find reference records only.

Search/filter does not recommend settings.

Search/filter does not rank settings.

Search/filter does not auto-select best settings.

Search/filter does not approve, lock, or create production-ready recipes.

Baseline rows must remain separate from locked recipes.

## Controls Preserved

- Search/filter must not recommend settings.
- Search/filter must not rank settings.
- Search/filter must not auto-select best settings.
- Baseline rows must remain separate from locked recipes.
- Create test coupon action is placeholder only.
- Do not add real baseline range data.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2-M1 through V2-M6 locked control rules.

## V2-M7 Result

V2-M7 is complete. The project now has a safe baseline search/filter view structure for finding reference-only mild steel baseline range records without recommendation, ranking, approval, locking, or production-ready claims.
