# V3-M2A — Wire Setup Entry Controls Into App Screen

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V3  
Status: Complete

## Purpose

Wire the V3-M2 setup entry behavior/control structure into the actual Setup Entry app screen.

## Reason

V3-M2 created the setup entry data/control documentation, but `src/main.tsx` was not safely updated during the original task because GitHub file-read endpoints intermittently failed.

## Existing V3-M2 Data / Docs

- `data/v3/setup-entry-behavior.json`
- `docs/v3/V3-M2_SETUP_ENTRY_SCREEN_BEHAVIOR.md`
- `docs/v3/V3_MILESTONE_TRACKER.md`

## Scope

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot
- Miller 352 MPa
- Setup Entry screen wiring only
- Local/static behavior is acceptable
- No recommendation logic
- No ranking
- No auto-select settings
- No production-ready baseline claims

## App Files Updated

- `src/main.tsx`
- `src/styles.css`

## Setup Entry Screen Fields Wired

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

## Defaults / Constraints Wired

### Material

- Defaults to Mild steel
- Only allows Mild steel

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

Traceable ID Type and Traceable ID Value are visible on the Setup Entry screen.

Traceable ID Value is marked required in the local/static form.

## Safety Labels Preserved

- Reference Only
- Requires Test Coupon
- Not Approved
- Not Production Ready
- Not Locked Recipe

## Controls Preserved

- Do not rebuild the whole app.
- Do not change the V3-M1 navigation flow except as needed to improve Setup Entry.
- Do not create recommendation logic.
- Do not rank settings.
- Do not auto-select settings.
- Do not add real baseline range data.
- Do not add print/export sheet logic.
- Do not add stainless, aluminum, flux-core, or metal-core.
- Preserve V1 complete / closed status.
- Preserve V2 complete / closed status.
- Preserve the locked control path.

## Locked Control Path

Baseline Range → Test Coupon → Tested Result → Approval → Locked Recipe

## V3-M2A Result

V3-M2A is complete. The Setup Entry screen now visibly supports the V3-M2 setup behavior constraints in the app UI while keeping the workflow local/static and preserving all safety boundaries.
