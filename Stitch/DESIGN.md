---
name: Matrix Editorial Identity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-lg:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Geist
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system defines the digital identity for Matrix Club, an official technical club at VIT Bhopal University. The identity discards common hacker tropes, terminal aesthetics, and neon glows in favor of a hyper-clean, Swiss-inspired technical editorial visual language. It prioritizes precision, architectural rigor, and understated authority.

### Target Audience & Tone
- **Audience:** High-performing student engineers, researchers, faculty, enterprise sponsors, and industry leaders.
- **Atmosphere:** Rigorous, disciplined, intellectual, and forward-leaning.
- **Design Philosophy:** Minimalist Editorial Architecture. Visual hierarchy is established solely through stark tonal contrast, structured hairline grids (1px borders), deliberate typographic rhythm, and disciplined whitespace.

## Colors

The palette is strictly achromatic. Color accents are explicitly forbidden to ensure a uniform, authoritative aesthetic. Depth is built via subtle shifts across four core values:

- **Deep Black (`#080808`):** Base canvas background.
- **Charcoal Surface (`#141414`):** Container backgrounds, panels, and floating navigation bars.
- **Dark Grey Border / Subtle Surface (`#292929`):** 1px hairline division borders, input field backgrounds, and elevated card outlines.
- **Muted Grey (`#AAAAAA`):** Secondary editorial metadata, subheadings, timestamps, and muted labels.
- **Crisp White (`#FFFFFF`):** Primary text, focused states, and high-emphasis interactive surfaces.

Translucent variants rely on `#FFFFFF` and `#080808` with strict opacity steps (e.g., `rgba(255, 255, 255, 0.06)` for subtle hover states, `rgba(8, 8, 8, 0.75)` for glass backdrops).

## Typography

The type system blends the geometric authority of **Space Grotesk** for display headers with the precision and neutrality of **Geist** for body and metadata.

- **Hierarchy:** Strict contrast between sizes. Display headers are set tight with negative letter spacing (`-0.03em` to `-0.04em`).
- **Uppercase Labels:** Sub-labels, indexes, category indicators, and status tags are styled with `label-md` or `label-sm` in uppercase with expanded letter-spacing (`+0.06em` to `+0.08em`).
- **Purity:** Pure `#FFFFFF` is reserved strictly for primary headings, high-contrast labels, and active interactive elements. All standard body text is assigned `#AAAAAA` to preserve high editorial balance and prevent glare.

## Layout & Spacing

Layouts are framed around an editorial 12-column grid system anchored by hairline vertical guides.

- **Grid Alignment:** 12-column layout on desktop (max width `1440px`), 6-column on tablet, and 4-column on mobile.
- **Borders & Dividers:** Visual separation is driven by 1px rules colored `#292929`. Modular blocks touch and align directly to grid lines without pillowy gaps.
- **Breakpoints:**
  - `Desktop`: `>= 1024px` (outer margin `3rem`, column gutter `1.5rem`).
  - `Tablet`: `768px – 1023px` (outer margin `2rem`, column gutter `1.25rem`).
  - `Mobile`: `< 768px` (outer margin `1.25rem`, column gutter `1rem`).

## Elevation & Depth

No drop shadows, colored blooms, or skeuomorphic bevels are permitted. Depth is established purely through surface tonality and optical boundary lines:

1. **Base Tier (Elevation 0):** Canvas `#080808`.
2. **Structural Tier (Elevation 1):** Sub-sections, cards, and data matrices use `#141414` bordered by a 1px solid `#292929` stroke.
3. **Elevated Floating Tier (Elevation 2):** Floating menus, dropdowns, and modals use `#141414` at 85% opacity paired with a `16px` backdrop blur (`backdrop-filter: blur(16px)`) and a 1px stroke of `rgba(255, 255, 255, 0.12)`.
4. **Interactive Focus:** On hover or active focus, surface borders brighten monotonically from `#292929` to `#FFFFFF` over 150ms with no elevation shifts or translation offsets.

## Shapes

The design system implements a strict **Sharp (`0`)** shape geometry. Every element—buttons, containers, inputs, dialogs, and tags—features crisp `0px` border radiuses.

- **Architectural Edge:** Unrounded geometries mimic brutalist and high-end Swiss print layouts.
- **Exceptions:** No exceptions. Circular profile images or icons must be housed within square framing elements to preserve architectural consistency.

## Components

### Buttons
- **Primary:** Solid `#FFFFFF` background, `#080808` text, `0px` radius, `label-lg` uppercase typography. Hover: `#AAAAAA` background.
- **Secondary / Ghost:** Transparent background, 1px solid `#292929` stroke, `#FFFFFF` text. Hover: Border color transitions to `#FFFFFF`, background shifts to `rgba(255, 255, 255, 0.04)`.
- **Destructive / Alert:** Explicitly stays monochrome; transparent background, 1px solid `#FFFFFF` with underlined text. No red fills.

### Cards & Panels
- **Container:** `#141414` background, 1px `#292929` boundary stroke.
- **Content Padding:** `space-lg` (`1.5rem`) on desktop; `space-md` (`1rem`) on mobile.
- **Header Slot:** Often partitioned with a 1px solid `#292929` bottom border, positioning an index number or uppercase label on the left and metadata on the right.

### Input Fields
- **Base:** `#080808` surface, 1px solid `#292929` border, `#FFFFFF` text, `body-md` typography.
- **Placeholder:** `#AAAAAA` at 50% opacity.
- **Focus:** 1px solid `#FFFFFF`, outline: none.

### Chips & Badges
- **Specification:** Pure geometric box, `space-xs` vertical by `space-sm` horizontal padding.
- **Visuals:** `#141414` surface, 1px solid `#292929` border, `label-sm` text in `#AAAAAA` with uppercase tracking. Active state switches to `#FFFFFF` fill with `#080808` text.

### Lists & Data Tables
- **Dividers:** Clean horizontal 1px lines using `#292929`.
- **List Items:** Monospaced indexes (`01`, `02`, `03`) in `#AAAAAA`, followed by content in `#FFFFFF`. Hover reveals an inline chevron `->` and turns the row background to `rgba(255, 255, 255, 0.03)`.

### Checkboxes & Radios
- **Geometry:** 16x16px squares with `0px` radius and 1px `#292929` border.
- **Checked State:** Checkboxes display a centered 8x8px `#FFFFFF` square fill. Radio controls display an identical square fill with no rounding.