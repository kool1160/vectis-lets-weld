# V4-M8 — Mobile / Tablet Baseline Library QA

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Static QA Complete / Live Device Verification Needed

## Goal

Verify the V4 baseline library workflow on mobile/tablet floor-side layout after V4-M7D runtime wiring.

## Scope

- Runtime QA only
- Mobile/tablet usability
- Baseline Reference filters
- Miller / Vectis visual separation
- Manual `Use This Starting Reference` action
- Trial Result Entry selected-reference display
- Local History selected-reference persistence
- No new features
- No redesign
- No data model changes

## Tested

Static repo inspection of:

- `src/main.tsx`
- existing responsive app structure
- existing mobile layout CSS assumptions from prior milestones

## Static QA Passed

- App structure still contains the V3/V4 screen flow.
- Baseline Reference filters are present.
- Miller Machine Baseline and Vectis Motion / Weave Guardrail records remain visually separated.
- Baseline records include manual `Use This Starting Reference` action.
- Selected reference state is carried into Trial Result Entry.
- Trial Result Entry displays selected-reference context when available.
- Manual Trial Result Entry remains possible when no reference is selected.
- Trial payload includes selected baseline reference fields when available.
- Local History cards show selected reference context when saved.
- No recommendation logic was found.
- No ranking logic was found.
- No auto-selecting behavior was found.
- No auto-approval behavior was found.
- No auto-locking behavior was found.

## Runtime / Device QA Still Needed

Live iPhone/iPad/tablet verification is still required for final lock because static inspection cannot prove:

- actual touch spacing on physical devices
- glove/shop-floor tap comfort
- no Safari-specific layout drift
- no real horizontal scrolling
- no clipped controls after deployment
- deployed runtime localStorage behavior

## Required Manual Device Checks

- App loads on phone/tablet width.
- Navigation remains usable.
- Baseline Reference screen is readable.
- Filters are usable on mobile/tablet.
- Miller and Vectis sections remain visually separate.
- `Use This Starting Reference` button is tappable.
- Selected record moves to Trial Result Entry.
- Trial Result Entry displays selected reference context clearly.
- Manual Trial Result Entry still works without selected reference.
- Local History shows selected reference context after save.
- No horizontal layout drift if practical to verify.
- No recommendation, ranking, approval, or locking behavior appears.

## Issues / Blockers

No static blocker found.

Final V4-M8 lock should wait for live mobile/tablet screenshots or device verification notes.

## Recommendation

Treat V4-M8 as static QA passed with device verification pending. Lock only after phone/tablet runtime evidence confirms the layout and tap behavior.
