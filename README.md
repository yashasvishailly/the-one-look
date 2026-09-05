# The One Look

> A first-impression read for what a new customer sees on your website.

This repository is a small, frontend-only recreation of [The One Look](https://yashasvishailly.com/one-look/), a free tool by Yashasvi Shailly. It captures the editorial landing experience and public-facing product story without disclosing the live product's internal methods.

## What is included

- Responsive landing page matching the source's typographic, editorial layout.
- Working URL/email form with consent validation.
- Presentation-only result state for demonstrating the interface, including a score, perception signals, a newest-signal summary, and a highest-cost summary.
- Accessible labels, keyboard-friendly controls, responsive navigation, and a small dependency surface.

This is a UI prototype. It does not include or document the live service's private implementation, scoring model, data handling, or operational workflow.

## What a user can expect

After submitting a website, the live experience presents a concise first-impression score and plain-language observations covering trust, missed information, reasons to leave, the newest visible signal, and the biggest perceived cost. It then points the visitor toward the next decision without presenting itself as a full audit or guarantee.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

For a production build: `npm run build` and `npm run preview`.

## Architecture (public overview)

```text
Browser
  └── index.html
      └── src/main.js   — page composition and presentation interactions
      └── src/style.css — visual tokens and responsive layout
```

The prototype keeps the public surface intentionally small: Vite serves a static entry point, `main.js` owns presentation interactions, and `style.css` owns visual tokens and responsive behavior. Service-side implementation details are intentionally out of scope for this public repository.

## Design decisions

- **Editorial hierarchy:** serif display type and mono labels make the tool feel like a considered point of view rather than a generic dashboard.
- **One primary action:** the page asks for only the minimum information needed to begin.
- **Trust through boundaries:** the copy says what the tool is—and what it is not.
- **Progressive disclosure:** the result area becomes visually active after submission.

## References

The README structure was informed by public website-audit projects including [Digitalcre8/website-audit](https://github.com/Digitalcre8/website-audit), [finleystephenson/site-audit](https://github.com/finleystephenson/site-audit), and [code2ahm/crawlscope](https://github.com/code2ahm/crawlscope). Naming and presentation should follow the owner's GitHub profile at [github.com/yashasvishailly](https://github.com/yashasvishailly). The source product is [The One Look](https://yashasvishailly.com/one-look/).

## License

MIT. See [LICENSE](LICENSE).
