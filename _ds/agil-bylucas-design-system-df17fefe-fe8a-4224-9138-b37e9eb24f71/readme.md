# agil.bylucas — Design System

Design system for **agil.bylucas**, the consulting/incubation practice of Lucas Flores Lucero. Built from the *Brochure de Servicios · 2026* (`uploads/Brochure agil.bylucas.pdf`), the only source provided. No codebase or Figma was attached.

**Positioning:** métodos, herramientas e IA aplicada para que founders, pymes y equipos transformen ideas en negocios que funcionan. Five practice areas: **Consultoría, Incubación, OKR, Capacitación, IA Aplicada**.

---

## Content fundamentals

- **Language:** Spanish (Argentina). Uses *vos* / second person ("si tenés un negocio para ordenar…"). Direct, focused, evidence-first.
- **Tone:** results over activity — "medimos el resultado, no sólo el esfuerzo". Concrete verbs, short claims, no inflated promises.
- **Casing:** sentence case for body; wide-tracked UPPERCASE only for kickers/tags. No shouting caps in prose.
- **No emoji.** No consulting filler jargon.
- Example lede: *"Ideas convertidas en negocios que funcionan."*

## Visual foundations

- **Palette (2026 brand):** orange `#ED470B` (accent only, ≤10–15% of any screen), night blue `#031927` (dark grounds), cream `#F5EDE0` (light grounds). Derived: white cards on cream, `#0A2536` cards on night, orange hover `#D13E08`, secondary text `#6B7A85` on light / `#C9D2D8` on dark. Feedback greens/reds are desaturated to sit in the palette.
- **Section rhythm:** cream → night blue → cream, with orange as the through-line. Orange is never a large background.
- **Contrast rules:** never long orange body on night blue (short titles/numbers only); body on dark is always cream; all pairs validated for AA.
- **Type:** Space Grotesk (display, wordmark, numerals, kickers) + IBM Plex Sans (body/UI). Tight display tracking, 0.22em kicker tracking.
- **Shape & depth:** 12px card radius, capsule (999px) tags/buttons, hairline borders, soft low shadows. Portrait imagery gets an orange→night duotone overlay (`--duotone-overlay`, multiply).
- **Motion:** restrained ease-out fades, no bounce. Hover = lift 2px / darker orange; focus = orange border/ring.

## Iconography

The brochure uses **no icon set, no icon font, and no emoji** — meaning is carried by type, numerals, capsule tags and the orange accent. When icons are genuinely needed in a build, substitute **Lucide** (thin, consistent stroke) from CDN and flag the substitution; keep them monoline and inked in `--text-on-light` / `--orange`. Do not hand-draw brand marks.

## Assets

- `assets/lucas-portrait.png` — cover portrait extracted from the brochure (apply the duotone overlay for brand treatment).
- `assets/fonts/` — Space Grotesk + IBM Plex Sans woff2. **No logo file exists** in the source; the wordmark is set in plain type (`agil.bylucas`, lowercase, dot in orange) wherever a mark would go.

**Substitution flag:** the brochure's fonts were embedded/subset. Space Grotesk and IBM Plex Sans are matched from Google Fonts — replace `assets/fonts/*` if you have the licensed originals.

---

## Components

Reusable primitives (in `components/`), all styled via CSS custom properties from `styles.css`:

- **Button** — pill CTA; variants `primary` / `dark` / `outline` / `ghost`, sizes `sm|md|lg`.
- **Tag** — uppercase capsule for practice areas; tones `outline` / `solid` / `wash`, plus `onDark`.
- **Kicker** — wide-tracked uppercase section eyebrow; `onDark` for dark grounds.
- **Card** — white hairline-bordered surface with soft shadow; optional `hover` lift.
- **SectionHeader** — kicker + display heading + optional lede; `onDark`, `align`.
- **Callout** — tinted note with orange left accent bar; inline `label`.
- **StepRow** — bordered agenda row (rail label + bold title + description); `onDark`.
- **Principle** — numbered working principle with soft-orange numeral.

## Foundations (Design System tab)

Specimen cards live in `guidelines/*.card.html` (groups: Colors, Type, Spacing, Brand). Component thumbnails: `components/core/core.card.html`, `components/content/content.card.html`.

## File index

- `styles.css` — entry point (@imports only); consumers link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `components/core/` — Button, Tag, Kicker, Card. `components/content/` — SectionHeader, Callout, StepRow, Principle.
- `guidelines/` — foundation specimen cards.
- `assets/` — portrait + webfonts.
- `Sistema actualizado.html` — live preview of the full system across cream/dark sections.
- `SKILL.md` — Agent Skills manifest.
