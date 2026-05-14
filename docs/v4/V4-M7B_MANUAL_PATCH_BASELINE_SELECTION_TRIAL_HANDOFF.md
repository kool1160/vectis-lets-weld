# V4-M7B — Manual Patch / Codex Wire Baseline Selection Into Trial Entry

Project: Vectis lets weld  
App: AI-Weld Settings Library / Vectis Weld Recipe Control  
Version: V4  
Status: Blocked for direct app edit / Manual patch package created

## Goal

Safely wire the V4-M7 baseline reference selection / trial handoff behavior into `src/main.tsx` using a small manual/Codex patch.

## Reason

V4-M7A was blocked because the GitHub tool could not provide a clean editable blob SHA for `src/main.tsx`. V4-M7B attempted a safer lower-level path, but the tool response still truncated the large file content before a safe complete replacement could be prepared.

To avoid a blind overwrite of the working V3/V4 app flow, direct app wiring was not committed in this pass.

## Required Manual / Codex Patch

Apply this as a small targeted patch to `src/main.tsx`.

### 1. Add selected reference state in `App`

Add state:

```ts
const [selectedReference, setSelectedReference] = useState<BaselineLookupRecord | null>(null);
```

### 2. Pass selection callback into Baseline Reference screen

Change:

```tsx
{activeScreen === 'baseline' && <BaselineReferenceScreen />}
```

To:

```tsx
{activeScreen === 'baseline' && (
  <BaselineReferenceScreen
    onSelectReference={(record) => {
      setSelectedReference(record);
      setActiveScreen('trial');
    }}
  />
)}
```

### 3. Update BaselineReferenceScreen props

Change:

```ts
function BaselineReferenceScreen() {
```

To:

```ts
function BaselineReferenceScreen({ onSelectReference }: { onSelectReference: (record: BaselineLookupRecord) => void }) {
```

### 4. Update LookupRecordCard props

Change:

```ts
function LookupRecordCard({ record }: { record: BaselineLookupRecord }) {
```

To:

```ts
function LookupRecordCard({ record, onSelect }: { record: BaselineLookupRecord; onSelect?: (record: BaselineLookupRecord) => void }) {
```

Add a manual select button inside the card after the `ReferenceTable`:

```tsx
{onSelect && (
  <button type="button" onClick={() => onSelect(record)}>
    Use This Starting Reference
  </button>
)}
```

### 5. Pass select action to Miller and Vectis cards

Change both mapped `LookupRecordCard` calls in Baseline Reference:

```tsx
<LookupRecordCard key={record.id} record={record} />
```

To:

```tsx
<LookupRecordCard key={record.id} record={record} onSelect={onSelectReference} />
```

### 6. Pass selected reference into Trial Result Entry

Change:

```tsx
{activeScreen === 'trial' && <TrialResultScreen onSave={saveTrialRecord} />}
```

To:

```tsx
{activeScreen === 'trial' && (
  <TrialResultScreen
    onSave={saveTrialRecord}
    selectedReference={selectedReference}
    onClearSelectedReference={() => setSelectedReference(null)}
  />
)}
```

### 7. Update TrialResultScreen props

Change:

```ts
function TrialResultScreen({ onSave }: { onSave: (record: TrialRecord) => void }) {
```

To:

```ts
function TrialResultScreen({
  onSave,
  selectedReference,
  onClearSelectedReference,
}: {
  onSave: (record: TrialRecord) => void;
  selectedReference: BaselineLookupRecord | null;
  onClearSelectedReference: () => void;
}) {
```

### 8. Show selected reference context in Trial Result Entry

Inside `TrialResultScreen`, before Trial / Test Identification fields, add:

```tsx
{selectedReference && (
  <article className="panel wide">
    <div className="panel-heading">
      <p className="section-kicker">Selected Starting Reference</p>
      <h2>{selectedReference.title}</h2>
      <p className="panel-note">
        Starting Reference — Verify With Test Weld. Not an approved production recipe.
      </p>
    </div>
    <div className="history-meta">
      <span>{selectedReference.id}</span>
      <span>{selectedReference.record_type}</span>
      <span>{selectedReference.process}</span>
      <span>{selectedReference.wire_size}</span>
      <span>{selectedReference.value_status}</span>
      <span>not_approved</span>
    </div>
    <button type="button" onClick={onClearSelectedReference}>
      Clear Selected Reference
    </button>
  </article>
)}
```

### 9. Include selected reference ID in saved trial payload

Recommended next small data-model extension:

Add optional fields to `TrialRecord`:

```ts
selected_reference_id?: string;
selected_reference_type?: string;
selected_reference_value_status?: string;
```

Then add to `onSave` payload:

```ts
selected_reference_id: selectedReference?.id || '',
selected_reference_type: selectedReference?.record_type || '',
selected_reference_value_status: selectedReference?.value_status || '',
```

## Required Runtime Behavior After Patch

- User can manually select a Miller or Vectis starting-reference record.
- Trial Result Entry shows selected reference context.
- Trial Result Entry displays:
  - Starting Reference — Verify With Test Weld
  - Not an approved production recipe
- Trial result payload includes selected baseline reference ID when possible.
- Manual Trial Result Entry still works with no selected reference.
- Miller and Vectis records remain visually separated.

## Controls To Preserve

- Do not invent Miller or Vectis numeric values.
- Do not recommend a record.
- Do not rank records.
- Do not create best-match behavior.
- Do not mark anything approved, locked, proven, ideal, best, or production-ready.
- No auto-selecting.
- No auto-approval.
- No auto-locking.
- Avoid large rewrites.
- Keep patch small and reviewable.

## Result

V4-M7B direct app edit was blocked, but this document provides the exact small manual/Codex patch needed to complete the runtime wiring safely.
