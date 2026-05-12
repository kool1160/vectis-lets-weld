# V1-M2 — Weld Recipe Data Field Structure

## Purpose
Define the required data fields for collecting, testing, approving, and locking mild steel weld recipes.

## Field Groups

### 1. Recipe Identification
- Recipe ID
- Recipe name
- Recipe status
- Source type
- Created date
- Created by
- Last revised date
- Revision number

### 2. Material Information
- Material type
- Thickness
- Gauge
- Part number
- Work order
- Part description
- Material condition
- Fit-up condition

### 3. Joint / Weld Type
- Joint type
- Weld position
- Weld size
- Weld length
- Weld symbol / print callout
- Single-pass or multi-pass
- Continuous or intermittent

### 4. Wire / Gas / Process
- Process
- Wire type
- Wire diameter
- Gas mixture
- Gas flow rate
- Miller program

### 5. Machine Settings
- Wire feed speed
- Trim / arc length
- SharpArc / arc control
- Voltage actual
- Amperage actual
- Preflow
- Postflow
- Crater / fill setting

### 6. Cobot Motion Settings
- Robot program name
- Travel speed
- CTWD / stickout
- Torch angle
- Work angle
- Push / pull angle
- Start delay
- End delay
- Approach point notes
- Retract point notes

### 7. Weave / Pattern Settings
- Weave type
- No Weave settings
- Zig-Zag settings
- InLine settings

### 8. Test Weld Result Fields
- Coupon ID
- Visual result
- Tie-in
- Undercut
- Overlap
- Spatter
- Porosity
- Burn-through
- Distortion
- Cut / etch required
- Pass / fail
- Test notes

### 9. Approval / Locked Recipe Control
- Approved by
- Approval date
- Lock status
- Locked to part number
- Locked to fixture
- Superseded by
- Rejection reason

### 10. Notes / Revision History
- Operator notes
- Engineer notes
- Revision reason
- Change history
- Lessons learned

## Recipe Status Options
- REFERENCE
- DRAFT
- TESTED
- APPROVED
- LOCKED
- REJECTED
- SUPERSEDED

## V1 Rule
Do not allow production lock without test result approval.
