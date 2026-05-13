# V3-M2 — Setup Entry Screen Behavior

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V3  
Status: Complete

## Purpose

Create the setup entry screen behavior so a user can enter the basic weld setup context while standing at the Vectis cobot / Miller 352 MPa.

## Locked Context

V1 is complete / closed.

V2 is complete / closed.

V3-M1 navigation / screen flow is locked / passed.

## Core Use Case

A user should be able to enter setup context before recording actual weld settings or trial results.

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Setup entry behavior only
- Local/static behavior is acceptable
- No recommendation logic
- No ranking
- No auto-select settings
- No production-ready baseline claims

## Data / Behavior File

Created:

`data/v3/setup-entry-behavior.json`

## Required Setup Fields

- material
- thickness
- gauge
- joint_type
- weld_position
- wire_type
- wire_diameter
- gas
- mode
- operator
- date
- traceable_identifier_type
- traceable_identifier_value

## Required Defaults / Constraints

### Material

- Defaults to mild steel
- Only allows mild steel

### Mode

Allowed values:

- MIG/CV
- Pulse MIG

### Wire Diameter

Allowed values:

- .035 ER70S-6
- .045 ER70S-6

### Gas

- Shop-used mild steel gas only

### Traceability

Traceable identifier must include both:

- traceable_identifier_type
- traceable_identifier_value

Setup context is not considered complete without at least one valid traceable identifier type/value pair.

## Required Safety Labels

- Reference Only
- Requires Test Coupon
- Not Approved
- Not Production Ready
- Not Locked Recipe

## Behavior Boundary

The Setup Entry screen may collect setup context only.

It cannot:

- recommend settings
- rank settings
- auto-select settings
- add real baseline range data
- create print/export sheet logic
- create approved recipes
- create locked recipes
- mark anything production-ready

## Locked Control Path Preserved

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## Controls Preserved

- Do not create recommendation logic.
- Do not rank settings.
- Do not auto-select settings.
- Do not add real baseline range data.
- Do not add print/export sheet logic.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2 complete / closed status.
- Preserve V3-M1 navigation/screen flow.

## V3-M2 Result

V3-M2 is complete at the setup behavior/data-control level. The project now has controlled setup entry behavior definitions for mild steel Vectis / Miller 352 MPa setup context while preserving all locked safety and control boundaries.
