# CLAUDE.md — Diego Frontend / Website Rules

## Core Operating Mode
- Build for real product quality, not demo quality.
- Every frontend deliverable must optimize for:
  1. visual craft,
  2. UX clarity,
  3. performance,
  4. maintainability,
  5. business usefulness.
- Do not generate generic, over-templated, “AI slop” interfaces.
- Avoid visual patterns that feel like default SaaS clone output.
- Prefer fewer, better decisions over piling on trendy effects.

## Skills Routing — Always Use the Right Skill
- Before writing any frontend code, invoke `/frontend-design` first. Every session. No exceptions.
- For landing pages, marketing pages, hero sections, pricing pages, portfolio pages, product showcases, and other high-visibility surfaces, invoke `/ui-ux-pro-max` after `/frontend-design` and before implementation.
- If brand assets, logos, palette references, screenshots, or style guides exist, invoke `/brand-guidelines` before making visual decisions.
- Before finalizing any polished UI, run `/impeccable` for the final quality pass.
- If the solution starts becoming bloated, over-engineered, or visually noisy, invoke `/caveman` and simplify aggressively.
- Use `/skill-creator` only when creating or restructuring skills themselves, not for normal feature work.

## Frontend Quality Bar
- No landing page should look like AI-generated filler.
- No section should exist just to “fill a template”.
- Every section must justify its existence:
  - user need,
  - conversion goal,
  - trust building,
  - explanation,
  - proof,
  - CTA progression.
- Do not use generic headline/subheadline/button patterns unless they are specifically justified by the product.
- Avoid fake-modern UI: random gradients, meaningless glassmorphism, decorative blur spam, empty metric cards, fake testimonials, and placeholder enterprise logos unless requested.
- Avoid default Tailwind-looking composition.
- Avoid “one more section” syndrome. Strong editing is required.

## Design Standards
- Prioritize composition, spacing rhythm, typography hierarchy, contrast, and interaction clarity before decoration.
- Design should feel current to 2026–2027 standards, but still purposeful.
- Headings and body text should not feel mechanically paired; typography should feel intentionally selected.
- Visual hierarchy must be obvious in 3 seconds.
- Each surface must have a clear depth model.
- Use restraint with gradients, blur, glow, and motion.
- Motion should support orientation and delight, never distract from comprehension.
- Every clickable element must have hover, focus-visible, and active states.
- Accessibility is not optional.

## Anti-Slop Rules
- Do not output copy that sounds like startup lorem ipsum.
- Do not use empty phrases like:
  - “streamline your workflow”
  - “unlock your potential”
  - “next-generation solution”
  - “reimagine productivity”
unless the user explicitly wants that tone.
- Prefer specific, grounded copy over inflated marketing language.
- If content is unknown, use clearly marked placeholder copy that is believable and structurally useful.
- If the product is unclear, ask what the page must accomplish before expanding the design.

## Reference Fidelity
- If a reference image is provided, match it faithfully.
- Do not “improve” a reference unless the user explicitly asks for redesign.
- Match layout, spacing, scale, typography, color behavior, alignment, radius, and visual density as closely as possible.
- Replace unknown real content with placeholders only when necessary.

## Build Discipline
- Start with a short implementation plan before coding when the UI is non-trivial.
- Keep frontend solutions modern but realistic.
- Do not over-engineer component structure for small pages.
- Do not introduce unnecessary dependencies.
- Prefer clean semantic HTML and maintainable structure.
- Respect project conventions and existing architecture before inventing a new pattern.

## Performance and Code Rules
- Respect coding standards, project conventions, and good engineering practices at all times.
- Favor fast-loading pages, lean assets, and simple rendering paths.
- Avoid unnecessary animations, large libraries, and hydration-heavy solutions unless justified.
- Accessibility, responsiveness, and keyboard states are required by default.
- Use the best practical technology choices unless project constraints say otherwise.

## Review Pass Before Done
Before considering frontend work done, verify:
- visual quality,
- spacing consistency,
- typography hierarchy,
- responsiveness,
- interaction states,
- accessibility basics,
- performance risks,
- brand consistency,
- absence of generic filler content,
- absence of AI-slop patterns.

## Output Bias
- Prefer direct, high-quality execution.
- For simple tasks: implement directly.
- For complex tasks: plan briefly, then execute.
- Do not produce excessive explanation unless requested.

## No AI Slop
- No landing page, homepage, or marketing surface may look generic, templated, or AI-generated.
- Do not produce default SaaS-clone layouts.
- Do not add fake credibility sections, fake stats, fake logos, fake testimonials, or filler content unless explicitly requested.
- Do not use empty startup language or broad claims with no product specificity.
- Every section must have a concrete job in the page: explain, prove, convert, orient, or reduce friction.
- Prefer strong editing over adding more sections.
- If the page feels derivative, simplify and recompose before continuing.## No AI Slop
- No landing page, homepage, or marketing surface may look generic, templated, or AI-generated.
- Do not produce default SaaS-clone layouts.
- Do not add fake credibility sections, fake stats, fake logos, fake testimonials, or filler content unless explicitly requested.
- Do not use empty startup language or broad claims with no product specificity.
- Every section must have a concrete job in the page: explain, prove, convert, orient, or reduce friction.
- Prefer strong editing over adding more sections.
- If the page feels derivative, simplify and recompose before continuing.

## Skill Invocation Order
- Always invoke `frontend-design` before any frontend implementation.
- Invoke `brand-guidelines` before visual decisions whenever brand assets or style references exist.
- Invoke `ui-ux-pro-max` for any landing page, homepage, pricing page, waitlist page, portfolio page, or other high-visibility marketing surface.
- Invoke `impeccable` before finalizing any frontend output.
- Invoke `caveman` if the implementation becomes bloated, noisy, or over-engineered.