# Vectis Lets Weld

## App Name
AI-Weld Settings Library / Vectis Weld Recipe Control

## Purpose
Build a controlled weld settings library for repeatable mild steel weld recipes on the Vectis cobot using the Miller 352 MPa.

## V1 Scope
- Mild steel only
- Vectis cobot only
- Miller 352 MPa only
- MIG / Pulse MIG only
- .035 ER70S-6 and .045 ER70S-6 only
- Shop-used mild steel gas only

## Core Workflow
Collect → Test → Approve → Lock → Reuse

## V1 Exclusions
- No stainless
- No aluminum
- No flux-core
- No metal-core
- No automatic AI weld recommendations yet
- No production recipe lock without test result approval

## Recipe Status Flow
REFERENCE → DRAFT → TESTED → APPROVED → LOCKED

Rejected settings remain stored as lessons learned.

## Core Rule
Collect first.  
Test second.  
Lock third.  
Recommend later.
