# V1-M10 — V1 Closeout / Source of Truth

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1  
Status: Complete after Testing passes V1-M10

## Purpose

Create the official V1 closeout/source-of-truth record for the AI-Weld Settings Library / Vectis Weld Recipe Control project.

This document preserves the completed V1 scope, workflow, data/control structures, app shell status, exclusions, and future V2 direction.

## Supplemental Data-Control Corrections

V1 includes supplemental documentation/data-control corrections that do not reopen or renumber the completed V1 milestone chain.

Reference:

- `V1-DOC-R1_SUPPLEMENTAL_DATA_MODEL_REFERENCE.md`
- `V1-DOC-R2_BASELINE_TESTED_LOCKED_DATA_SEPARATION_CORRECTION.md`

V1-DOC-R2 is the controlling correction for separating baseline reference data, shop reference data, tested results, and locked production recipes.

Corrected core model:

Baseline → Test → Record Result → Learn → Lock Better Settings

Miller data, Vectis manual guidance, public data, and shop screenshots/settings must remain reference data until tested and approved.

## Final V1 Scope Summary

### Machine Scope

- Vectis cobot
- Miller 352 MPa

### Material Scope

- Mild steel only

### Process Scope

- MIG only
- Pulse MIG only

### Wire Scope

- .035 ER70S-6
- .045 ER70S-6

### Gas Scope

- Shop-used mild steel gas only

## Final Locked Workflow Summary

V1 workflow:

Collect → Test → Approve → Lock → Reuse

The locked control path is:

Baseline → Test Coupon → Approval Record → Locked Recipe

Corrected data-confidence path:

Reference Data → Test Coupon → Tested Result → Approval → Locked Recipe

## Final Completed Milestone List

| Milestone | Name | Final V1 Status |
|---|---|---|
| V1-M1 | Project Scope Lock | Complete |
| V1-M2 | Weld Recipe Data Field Structure | Complete |
| V1-M3 | Weave Settings Module | Complete |
| V1-M4 | Baseline Settings Table | Complete |
| V1-M5 | Test Coupon Entry Screen | Complete |
| V1-M6 | Recipe Approval / Locking Rules | Complete |
| V1-M7 | Locked Recipe Library Structure | Complete |
| V1-M8 | Search / Filter / History | Complete |
| V1-M9 | Mild Steel Starter Data | Complete |
| V1-M10 | V1 Closeout / Source of Truth | Complete after Testing passes |

## Final Data / Control Structure Summary

### Baseline Settings

Baseline settings are starting reference records.

They are not production-ready.

They cannot become locked recipes directly.

All baseline rows must remain labeled reference-only until tested.

Baseline rows may include high/low ranges, but those ranges are testing references only, not approved windows.

### Data Confidence Levels

V1 recognizes the following confidence levels:

- REFERENCE_ONLY
- SHOP_REFERENCE
- SHOP_SCREENSHOT_REFERENCE
- TESTED_RESULT
- LOCKED_RECIPE

### Source Separation

- Miller data = machine-side arc baseline
- Vectis manual = cobot/weave/process guardrails
- Shop screenshots/settings = shop reference data
- Test coupon results = tested data
- Approved production use = locked recipe data

### Test Coupons

Test coupons connect baseline settings to actual weld test results.

A test coupon cannot become a locked recipe automatically.

### Approval Records

Approval records control whether a tested weld setting may be locked.

A recipe cannot be locked unless:

1. The linked test coupon has passed
2. The approval status is approved for lock
3. Lock authorization is intentionally recorded

### Locked Recipes

Locked recipes are reusable production records only after testing and approval.

Locked recipes require traceability back to:

- baseline_id
- test_coupon_id
- approval_record_id

### Starter Data

Starter data remains untested reference only.

Starter data is not approved.

Starter data is not locked.

Starter data is not production-ready.

Starter data must pass through the test and approval workflow before any locked recipe can be created.

### Search / Filter / History

Search is find-and-trace only.

Search does not recommend settings.

Search does not rank recipes.

Search does not auto-select production settings.

History supports traceability across baseline, test coupon, approval, and locked recipe records.

## Final App Shell Status Summary

The repo was converted from documentation/data-only foundation into an initial deployable Vite + React + TypeScript app shell for Vercel.

App shell milestone classification:

V1-APP-M1 — Vercel Deployable App Shell Foundation

Vercel app shell status:

- Deployed
- Passed

Current app shell includes:

- AI-Weld Settings Library title
- Vectis Lets Weld header
- Mild steel / Vectis / Miller 352 MPa scope
- Core workflow: Collect → Test → Approve → Lock → Reuse
- Recipe status badges
- Basic weave mode cards

## V1 Exclusions

V1 does not include:

- Stainless
- Aluminum
- Flux-core
- Metal-core
- Automatic recommendation logic
- Best / ideal / production-ready starter claims
- Auto-locking recipes
- Untested production recipes
- Material/process expansion beyond mild steel MIG / Pulse MIG
- Proven production settings created from Miller, Vectis, public, or screenshot reference data

## Final V1 Control Rules

- Mild steel only
- Vectis cobot only
- Miller 352 MPa only
- MIG / Pulse MIG only
- .035 ER70S-6 and .045 ER70S-6 only
- Shop-used mild steel gas only
- Starter data remains untested reference only
- Search remains find-and-trace only
- Locked recipes require passed test and approval
- No baseline row may become a locked recipe directly
- No test coupon may become a locked recipe automatically
- No production recipe may be locked without test result approval
- Miller data must remain machine-side arc baseline until tested
- Vectis manual guidance must remain cobot/weave/process guardrail guidance until tested
- Shop screenshots/settings must remain shop reference data until tested
- Arc Seam Tracking / ArcPilot is optional and defaults to not installed / not active unless confirmed otherwise

## V2 Backlog / Future Direction

V2 may consider:

- Live form screens for baseline entry
- Live test coupon entry workflow
- Approval/locking UI gate
- Locked recipe sheet output
- Search and filter interface
- History/audit display
- Import/export workflow
- Print-friendly locked recipe sheets
- Additional tested mild steel recipe records after validation
- Expanded app polish after V1 closeout
- Larger baseline/reference sheet with strict data-confidence labels
- Source type filtering for Miller / Vectis / shop screenshot / tested / locked records

V2 must not automatically add stainless, aluminum, flux-core, metal-core, or recommendation logic unless explicitly approved as a future scoped version.

## V1 Completion Statement

V1 is documentation/data/control-structure complete.

V1 is only officially complete after Testing passes V1-M10.

Supplemental docs V1-DOC-R1 and V1-DOC-R2 preserve and clarify V1 without reopening V1.

After V1-M10 Testing passes, V1 should be treated as closed unless Planning intentionally opens a controlled V2 milestone.
