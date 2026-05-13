# V3-M3 — Baseline Reference Screen Behavior

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V3  
Status: Complete

## Purpose

Create the Baseline Reference screen behavior so a user can view reference-only baseline range guidance after entering setup context.

## Locked Context

V1 is complete / closed.

V2 is complete / closed.

V3-M1 navigation/screen flow is locked / passed.

V3-M2 setup entry data-control is complete.

V3-M2A setup entry app screen wiring is locked / passed.

## Core Use Case

A user standing at the Vectis cobot / Miller 352 MPa should be able to view safe baseline reference information tied to the setup context without treating it as approved, locked, recommended, ranked, or production-ready.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Baseline Reference screen behavior only
- Reference-only display is acceptable
- Local/static behavior is acceptable
- No recommendation logic
- No ranking
- No auto-select settings
- No production-ready baseline claims

## App Files Updated

- `src/main.tsx`
- `src/styles.css`

## Baseline Reference Screen Behavior Added

- Shows a clear baseline/reference section
- Displays a reference-only setup/context summary
- Displays baseline range fields as reference-only placeholders
- Shows source/confidence labels
- Shows requires-test-coupon status
- Shows a Create Test Coupon / Trial Weld placeholder action
- Keeps baseline reference data separate from tested results and locked recipes

## Required Visible Fields / Labels Added

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

## Required Safety Labels Preserved

- Reference Only
- Requires Test Coupon
- Not Approved
- Not Production Ready
- Not Locked Recipe

## Baseline Boundary

Baseline values are starting references only.

They are not:

- approved
- locked
- ranked
- recommended
- proven
- production-ready

## Create Test Coupon Placeholder

The Create Test Coupon button is a safe placeholder action.

It does not:

- approve a baseline
- lock a recipe
- recommend settings
- rank settings
- auto-select settings
- mark anything production-ready

## Locked Control Path Preserved

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Controls Preserved

- Do not create recommendation logic.
- Do not rank settings.
- Do not auto-select settings.
- Do not call baseline values best, ideal, proven, approved, locked, or production-ready.
- Do not add uncontrolled real baseline range data.
- Do not add print/export sheet logic.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2 complete / closed status.
- Preserve V3-M1 navigation/screen flow.
- Preserve V3-M2/M2A setup entry behavior.

## V3-M3 Result

V3-M3 is complete. The Baseline Reference screen now displays safe reference-only baseline guidance, required fields/labels, source/confidence status, and a test-coupon placeholder while preserving all data-control boundaries.
