# V1-M3 — Weave Settings Module

## Purpose
Capture Vectis weave settings for mild steel weld recipe control.

## Weave Types
- No Weave
- Zig-Zag
- InLine

## No Weave
Straight stringer path with no side-to-side motion.

### Fields
- Weave type: No Weave
- No additional weave parameters required

### Simple Meaning
No Weave = straight ahead

## Zig-Zag
Side-to-side weave pattern across the joint.

### Fields
- Weave Length
- Weave Width
- Dwell Left
- Dwell Right
- Cool Time
- Fill Time

### Simple Meaning
Zig-Zag = side to side

## InLine
Forward/back stepping pattern along the weld path.

### Fields
- Forward Step
- Back Step
- Back Step Pause
- Cool Time
- Fill Time

### Simple Meaning
InLine = forward/back stepping

## Operator Note
Weave should be treated as a controlled setting. First check travel speed, wirefeed, trim, torch angle, and fit-up before changing weave values.
