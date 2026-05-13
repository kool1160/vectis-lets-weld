# V3 Milestone Tracker

## Project
Vectis Lets Weld

## App
AI-Weld Settings Library / Vectis Weld Recipe Control

## Prior Version Status
V1 is complete / closed.

V2 is complete / closed.

## Final V2 Identity
A floor-side weld program setup helper for the Vectis cobot with Miller 352 MPa.

## V3 Direction
Make the floor-side helper actually useful.

## V3 Core Use Case
A user should be able to move through a simple workflow:

1. Enter setup
2. Reference baseline range
3. Record test/trial result
4. Save local history
5. Review what worked

## Locked Control Model
Baseline range = starting reference only. Tested result = what actually happened. Locked recipe = approved production record.

## Control Path
Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

| Milestone | Name | Status |
|---|---|---|
| V3-M1 | App Navigation / Working Screen Flow | CREATED |
| V3-M2 | Setup Entry Screen Behavior | CREATED |
| V3-M2A | Wire Setup Entry Controls Into App Screen | CREATED |
| V3-M3 | Baseline Reference Screen Behavior | CREATED |
| V3-M4 | Trial Result Entry Behavior | NOT STARTED |
| V3-M5 | Local History Save / Review Behavior | NOT STARTED |
| V3-M6 | What Worked Review Behavior | NOT STARTED |
| V3-M7 | Approval / Locked Gate Display | NOT STARTED |
| V3-M8 | Mobile / Tablet Floor-Side QA | NOT STARTED |
| V3-M9 | V3 Data-Control QA Review | NOT STARTED |
| V3-M10 | V3 Closeout / Source of Truth | NOT STARTED |

## V3 Guardrail
V3 must not add recommendation logic, ranking, auto-selection, print/export direction, stainless, aluminum, flux-core, metal-core, or production-ready baseline claims unless explicitly scoped in a future version.
