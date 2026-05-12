# V1-DOC-R1 — Supplemental Data Model Reference Cleanup

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V1  
Type: Supplemental Documentation / Reference Cleanup  
Status: Complete

## Purpose

Preserve the supplemental App Purpose + Data Model content as V1 reference material without reopening, renumbering, or changing the completed V1 milestone chain.

This document supports the existing V1 data model documentation. It does not replace V1-M1, V1-M2, or any completed V1 milestone.

## Core Purpose Statement

Create a controlled mild-steel weld settings application for collecting, saving, testing, and reusing weld setup data for a Vectis cobot using a Miller 352 MPA.

The app is manual-entry first and does not create automatic final weld recommendations.

## Required Weld Setting Fields

- weld_record_id
- recipe_name
- process
- machine
- wire_type
- wire_diameter
- gas
- voltage_or_trim
- wire_feed_speed
- amperage_if_available
- travel_speed_ipm
- stickout_ctwd
- pass_count
- notes

## Required Cobot / Motion Fields

- cobot_program_name
- travel_speed
- torch_angle
- work_angle
- push_pull_direction
- start_point_notes
- end_point_notes
- approach_notes
- retract_notes
- weave_pattern
- weave_width
- weave_dwell
- weave_frequency_or_timing

## Required Material / Joint Fields

- material
- material_thickness
- joint_type
- weld_position
- weld_type
- weld_size
- fit_up_condition
- gap_condition
- tack_condition
- part_number
- fixture_used

## Required Quality / Result Fields

- test_status
- visual_result
- penetration_result
- bead_profile_result
- spatter_level
- undercut_present
- burn_through_present
- fusion_concern_present
- distortion_notes
- adjustment_notes
- approved_by
- approval_date
- production_ready

## Suggested Saved Weld Setting Record Structure

- record_info
- material_and_joint
- welding_process
- machine_settings
- cobot_motion_settings
- weave_settings
- test_results
- approval_control
- notes_and_revision_history

## Scope Preserved Note

This supplemental reference preserves the locked V1 scope:

- Mild steel only
- MIG / Pulse MIG only
- Vectis cobot focused
- Miller 352 MPA focused
- Manual data entry first
- Collect → Test → Approve → Lock → Reuse
- No automatic final weld recommendations
- No stainless
- No aluminum
- No flux-core
- No metal-core
- No untested production recipes

## V1 Closure Rule

This document does not reopen V1.

This document does not create a second V1-M1.

This document does not rename or alter the completed V1 milestone chain.

This document is supplemental reference cleanup only.
