# Divine Wheel Of Fortune Homepage

## Goal
Transform the current home-goods storefront homepage into a polished spiritual wellness and sacred-products brand homepage for **Divine Wheel Of Fortune**, centered on Natasha and the supplied video. This phase is a frontend demo only; booking and buying actions will lead into polished sample flows rather than live payments or customer accounts.

## Homepage Structure
1. **Header** — New brand name and focused navigation for Home, About, Services, Book a Session, Shop, Testimonials, Blog, FAQ, and Contact. Keep cart access and a compact mobile menu.
2. **Video hero** — Use the supplied Natasha video as a muted, looping, full-width background with readable overlay text and clear “Book a Session” and “Explore Services” actions.
3. **Trust strip** — Concise signals for private sessions, worldwide guidance, secure booking, and Indian/international shipping.
4. **Welcome / Natasha introduction** — A refined brand overview introducing Natasha without inventing credentials or lineage.
5. **Featured services** — Present all eight requested spiritual services. Include 30- and 60-minute choices and a Buy/Book action on service cards; the booking feature will also show a 90-minute option.
6. **Curved text moment** — Integrate the requested React Bits CurvedLoop as a purple-and-white editorial transition between major sections.
7. **Session booking panel** — Interactive demo selector for 30, 60, or 90 minutes with a clear booking action.
8. **Sacred shop** — Feature Rudraksha, Gemstones & Crystals, Malas, Sacred Books, and Power Coins with add-to-cart affordances and India/worldwide shipping messaging.
9. **Testimonials** — Tasteful sample testimonials clearly presented as illustrative content, avoiding unverifiable professional claims.
10. **Blog highlights and FAQ** — Three sample editorial stories and practical answers about sessions, preparation, shipping, and international orders.
11. **Contact and footer** — Strong closing invitation, useful policy links, and a layered GradualBlur treatment in the footer.

## Visual Direction
- White-led, luminous editorial layout with purple as the secondary brand color and restrained gold accents drawn from the video.
- Elegant spiritual character without clutter, heavy gradients, or generic “mystical” decoration.
- Preserve legibility over the moving video and ensure every section works across mobile and desktop.
- Use the existing design tokens and button components, updating the global palette and typography consistently.

## Implementation Details
- Upload the supplied MP4 through the project asset flow and render it with autoplay, muted, loop, and playsInline behavior.
- Add TypeScript versions of `CurvedLoop` and `GradualBlur`, preserving the requested effects while adapting their sizing, colors, accessibility, and reduced-motion behavior to this site.
- Replace the homepage content and update the shared header/footer branding so the first page feels coherent.
- Keep existing store pages and demo cart available, but do not add live accounts, payment processing, order tracking, or a backend in this phase.
- Update page title and social metadata to the new brand.
- Verify the homepage visually at desktop and mobile sizes, plus navigation, selectors, and cart interactions.
