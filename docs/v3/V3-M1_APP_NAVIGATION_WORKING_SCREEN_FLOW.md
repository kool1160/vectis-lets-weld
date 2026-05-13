# V3-M1 — App Navigation / Working Screen Flow

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V3  
Status: Complete

## Purpose

Create the V3 working screen flow/navigation structure so the floor-side helper behaves like a usable app instead of only a static concept screen.

## Prior Version Status

V1 is complete / closed.

V2 is complete / closed.

Final V2 identity:

A floor-side weld program setup helper for the Vectis cobot with Miller 352 MPa.

## V3 Direction

Make the floor-side helper actually useful.

## Core Use Case

A user should be able to move through a simple workflow:

1. Enter setup
2. Reference baseline range
3. Record test/trial result
4. Save local history
5. Review what worked

## Locked Control Model

Baseline range = starting reference only.

Tested result = what actually happened.

Locked recipe = approved production record.

## Control Path

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- App navigation / screen flow only
- Local/static behavior is acceptable
- No recommendation logic
- No ranking
- No print/export direction
- No production-ready baseline claims

## App Files Updated

- `src/main.tsx`
- `src/styles.css`

## Required Screens / Sections Created

- Home / Start
- Setup Entry
- Baseline Reference
- Trial Result Entry
- Local History
- What Worked Review
- Approval / Locked Gate

## Safe Default Landing Screen

The default landing screen is:

Home / Start

It explains the workflow and reinforces that nothing is approved or locked automatically.

## Placeholder Navigation / Actions

The V3-M1 navigation adds placeholder actions only.

Placeholder actions include:

- Start Setup
- Create Test Coupon
- View Saved Notes
- Review Tested Results
- Review Gate Rules

These actions do not create recommendation logic, ranking, auto-selection, approval, locking, or production-ready behavior.

## Required Safety Labels

- Reference Only
- Requires Test Coupon
- Tested Result
- Not Approved
- Not Production Ready
- Not Locked Recipe

## Screen Flow Boundary

V3-M1 creates the navigation and working screen flow only.

It does not add:

- recommendation logic
- ranking
- auto-selection
- real baseline range data
- print/export sheet logic
- stainless
- aluminum
- flux-core
- metal-core
- production-ready baseline claims

## V3-M1 Result

V3-M1 is complete. The app now has a simple working screen flow that moves users through setup, baseline reference, trial result entry, local history, what-worked review, and the approval/locked gate while preserving the locked control path.
