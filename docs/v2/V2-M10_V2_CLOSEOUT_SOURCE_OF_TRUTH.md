# V2-M10 — V2 Closeout / Source of Truth

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V2  
Status: Complete after Testing passes V2-M10

## Purpose

Create the official V2 closeout/source-of-truth record for the Vectis weld settings app.

## V1 Status

V1 is complete / closed.

V2 builds forward from V1 without reopening the V1 milestone chain.

## Final V2 Direction

V2 established the app as a floor-side weld program setup helper for the Vectis cobot with Miller 352 MPa.

The app is intended to help a user standing at the Vectis cobot while writing or adjusting a weld program.

The app supports:

- selecting mild steel setup context
- viewing reference-only baseline guidance
- entering actual machine/cobot settings being tried
- creating or linking test coupon workflow structure
- recording trial weld results
- preserving tested result history for future learning

## Final V2 Scope Summary

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Floor-side setup helper use case
- Baseline range structure
- Source/confidence labels
- Test coupon linkage
- Tested result history
- Locked recipe promotion gate
- Baseline search/filter structure
- First usable floor-side helper app screen

## Core Locked Rule

Baseline range = starting reference only.

Tested result = what actually happened.

Locked recipe = approved production record.

## Required Control Path

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Final Completed V2 Milestone List

| Milestone | Name | Final V2 Status |
|---|---|---|
| V2-M1 | Mild Steel Baseline Range Table Structure | Complete |
| V2-M2 | Mild Steel Baseline Source Label Model | Complete |
| V2-M3 | Baseline Range Entry Form Structure | Complete |
| V2-M4 | Test Coupon Linkage From Baseline Range | Complete |
| V2-M5 | Tested Result History Structure | Complete |
| V2-M6 | Locked Recipe Promotion Gate | Complete |
| V2-M7 | Baseline Search / Filter View | Complete |
| V2-M8 | Floor-Side Program Setup Helper Structure | Complete |
| V2-M9 | Floor-Side Helper App Screen | Complete |
| V2-M10 | V2 Closeout / Source of Truth | Complete after Testing passes |

## Final Data / Control Structure Summary

### Baseline Range Table

Baseline range rows are starting reference only.

They are not approved.

They are not locked.

They are not production-ready.

They require test coupon linkage before they can move forward.

### Source / Confidence Model

Every future baseline row must identify where the reference data came from and how much confidence it has.

Source labels and confidence labels do not equal approval.

### Baseline Entry Form

The baseline entry form creates reference-only baseline range records.

It cannot approve, lock, recommend, rank, or mark entries production-ready.

### Test Coupon Linkage

A baseline range must move through a test coupon before approval can be considered.

The baseline row itself cannot become approved or locked directly.

### Tested Result History

Tested results record what actually happened during a weld test.

A passing result is evidence.

A passing result is not automatic approval.

### Locked Recipe Promotion Gate

Locked recipes require:

- tested result
- passing result
- approval status approved for lock
- approved by
- approval date
- lock authorized by
- locked recipe ID created during lock step

Production-ready status becomes true only after lock.

### Baseline Search / Filter View

Search/filter helps users find reference records only.

Search/filter does not recommend, rank, auto-select, approve, or lock settings.

### Floor-Side Program Setup Helper Structure

The helper structure supports shop-floor program setup while keeping baseline guidance reference-only and separating actual tested results from approval and lock steps.

### Floor-Side Helper App Screen

The app now includes a first usable floor-side helper screen with sections for:

- Setup Context
- Actual Settings Being Tried
- Cobot Motion / Weave Setup
- Trial Weld Result
- Safety / Status Labels
- Save / Review Later placeholder

## Final Floor-Side Helper Screen Summary

The V2 app screen is local/static and designed for shop-floor use.

It allows a user to enter mild steel setup context, machine/cobot settings being tried, weave setup, and basic trial weld results.

The screen includes required safety labels:

- Reference / Test Only
- Requires Test Coupon
- Not Approved
- Not Production Ready
- Not Locked Recipe

The Save Test Notes placeholder records reference/test notes only.

It does not approve, lock, recommend, rank, auto-select, or mark anything production-ready.

## Final Exclusions List

V2 does not include:

- Print/export reference sheet direction
- Recommendation logic
- Ranking
- Auto-selecting settings
- Approved baseline claims
- Locked baseline claims
- Production-ready baseline claims
- Stainless
- Aluminum
- Flux-core
- Metal-core
- Real baseline range data dump
- Automatic locked recipe creation
- Automatic approval from tested result

## Final Control Rule Summary

- Baseline rows remain reference/test only.
- Baseline rows require test coupon linkage.
- Tested results record what actually happened.
- Tested results do not automatically become approved.
- Passing results do not automatically become locked recipes.
- Locked recipes require tested result, approval, and lock authorization.
- Search/filter finds reference data only.
- Floor-side helper supports setup and result capture only.
- No recommendation, ranking, or auto-selecting behavior is allowed in V2.

## Future V3 Direction List

Future V3 may consider:

- Live persistence for floor-side entries
- Local storage or database-backed test records
- Real test coupon creation workflow
- Tested result review screen
- Approval workflow UI
- Locked recipe creation UI
- Photo/evidence capture workflow
- Source/reference attachment support
- Tablet-first shop-floor layout refinement
- Tested history analytics after enough real test records exist
- Recommendation logic only after sufficient tested history and explicit approval

V3 must continue protecting the core distinction between reference data, tested results, and locked recipes.

## V2 Completion Statement

V2 is documentation/data/control-structure and initial app-screen complete.

V2 is officially complete only after Testing passes V2-M10.

After V2-M10 Testing passes, V2 should be treated as closed unless Planning intentionally opens a controlled V3 milestone.
