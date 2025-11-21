# InsuranceAssurance Design Guidelines

## Design Approach
**Design System Foundation**: Material Design principles for trust, clarity, and data-dense interfaces typical of financial applications. The design prioritizes usability, clear information hierarchy, and professional credibility over visual flair.

## Typography System
- **Primary Font**: Inter or Roboto via Google Fonts CDN
- **Hierarchy**:
  - H1 (Brand/Title): 3xl font weight 700
  - H2 (Stage Headers): 2xl font weight 600
  - H3 (Section Titles): xl font weight 600
  - Body: base font weight 400
  - Labels: sm font weight 500
  - Helper Text: sm font weight 400

## Layout & Spacing
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, and 24 for consistent rhythm.

**Container Structure**:
- Max-width: max-w-4xl centered for main content area
- Stage content: max-w-3xl for optimal form readability
- Padding: px-4 md:px-6 lg:px-8 for responsive breathing room
- Vertical spacing: py-8 between major sections, py-4 within sections

## Core Components

### Header (Fixed)
- Height: h-16 with shadow-sm
- Left-aligned logo/brand name with subtitle underneath
- Minimal, professional - no navigation menu needed for single-flow application

### Progress Indicator
- Horizontal stepper positioned below header
- 5 equal-width segments with connecting lines
- Each stage: Circle indicator (w-10 h-10) + label below
- Active stage: Larger circle (w-12 h-12), bold label
- Completed stages: Checkmark icon inside circle
- Future stages: Outlined circle, muted label
- Spacing: gap-8 md:gap-12 between stages
- Use icons from Heroicons for stage representations

### Form Layouts (Demographics, Goals)
- Two-column grid on desktop (grid-cols-1 md:grid-cols-2)
- Gap: gap-4 between fields, gap-6 between field rows
- Full-width fields for names, location
- Inline fields for related data (Age + Gender, Income + Currency)
- Labels: mb-1.5 spacing above inputs
- Input fields: h-12 with rounded-md borders
- Dropdown selects: Custom styled with chevron icons
- Helper text: mt-1 below inputs when needed

### Upload Stage
- Drag-and-drop zone: min-h-64 with dashed border
- Upload icon (cloud-upload from Heroicons) centered
- File list below drop zone with file name, size, remove button
- Grid layout for multiple uploaded files: grid-cols-1 md:grid-cols-2

### Analyze & Report Stages
- Card-based layout for insights (rounded-lg with shadow-sm)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for metrics
- Data visualization placeholder areas with min-h-48
- Summary cards: p-6 spacing inside
- Icon + metric + description pattern within cards

### Navigation Buttons
- Primary CTA: "Continue to Next Step" - full width on mobile, inline on desktop
- Secondary: "Back" button, text-style, left-aligned
- Button container: flex justify-between for spacing
- Button height: h-12, px-8 horizontal padding
- Fixed bottom bar on mobile (optional): p-4 with shadow-lg for always-visible navigation

## Component Library
**Icons**: Heroicons via CDN
- Progress stages: user-icon, target, document-arrow-up, chart-bar, document-text
- Form fields: chevron-down for selects
- Upload: cloud-arrow-up
- Analysis: chart-pie, exclamation-triangle (for gaps), check-circle (for coverage)

**Form Elements**:
- Text inputs: Consistent height (h-12), rounded borders, focus rings
- Radio buttons: Custom styled with larger hit areas (h-6 w-6)
- Checkboxes: For multi-select goals
- Dropdowns: Native select enhanced with custom styling
- File inputs: Hidden, triggered by styled button/drop zone

**Data Display**:
- Metric cards: Number + label + trend indicator
- Progress bars: For coverage percentages (h-2 rounded-full)
- Status badges: For risk levels (rounded-full px-3 py-1 text-xs)

## Images
**No Hero Image**: This is a functional application, not a marketing page. Focus remains on the form interface and progress flow.

**Supporting Graphics** (if needed):
- Small illustrative icons within empty states (e.g., empty upload zone)
- Simple line illustrations for stage completion states
- Keep decorative elements minimal to maintain professional, data-first focus

## Animations
**Minimal Motion**:
- Stage transitions: Gentle fade + slide (150ms duration)
- Form validation: Subtle shake for errors
- Progress indicator: Smooth fill animation when advancing stages
- No decorative or scroll-triggered animations

## Accessibility
- Clear focus states on all interactive elements (ring-2 ring-offset-2)
- Sufficient contrast ratios for all text
- Proper label associations for all form inputs
- Keyboard navigation between form fields and stages
- ARIA labels for progress indicator and stage status

## Key Principles
1. **Trust Through Clarity**: Clean, uncluttered layouts that inspire confidence
2. **Efficiency First**: Quick form completion with logical field grouping
3. **Progress Transparency**: Always-visible stage indicator showing user location
4. **Forgiving UX**: No mandatory fields, easy back-navigation, auto-save implicit
5. **Professional Polish**: Consistent spacing, aligned elements, refined details