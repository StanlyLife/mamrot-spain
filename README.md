# CarSpa Marbella – Wraps & PPF

Premium car detailing website for **CarSpa Marbella** (Marbella & Málaga, Spain). Built with **Next.js 14 App Router**, TypeScript, and SCSS modules.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS (per-page stylesheets in `src/styles/`)
- **Image handling:** `next/image` via custom `<LoadingImage>` component; CDN helper in `src/lib/cdn.ts`
- **Forms:** Formspark (`https://submit-form.com/b9JfFWthO`)

## Project Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── page.tsx       # Home
│   ├── wrapping/      # Car wrapping service page
│   ├── ceramic/       # Ceramic coating service page
│   ├── ppf/           # Paint Protection Film page
│   ├── correction/    # Paint correction page
│   ├── headlight-tinting/
│   ├── chrome-delete/
│   ├── boat-treatment/
│   ├── tesla-specialists/
│   ├── gallery/
│   └── about/
├── components/        # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingImage.tsx   # Next/Image wrapper with skeleton
│   ├── QuoteRequest.tsx   # Contact form (Formspark)
│   ├── WhatsAppBubble.tsx
│   └── ...
├── lib/
│   └── cdn.ts         # CDN URL builder for images
└── styles/            # SCSS partials per page/component
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key Patterns

### Images with `fill` mode

Service pages (wrapping, ceramic, etc.) use `<LoadingImage fill ... style={{ objectFit: "cover" }} />` inside aspect-ratio containers (e.g. `aspect-ratio: 9 / 16`). The container must have `position: relative` and the inner `.loading-image-container` is pinned with `position: absolute; inset: 0;`.

### Phone / WhatsApp Number

All phone references use `+47 93 99 16 33`. Update in:

- `components/Header.tsx`
- `components/Footer.tsx`
- `components/WhatsAppBubble.tsx`
- `components/QuoteRequest.tsx` (default prop)

## Deployment

Deploy on Vercel or any Node.js host supporting Next.js:

```bash
npm run build
npm start
```

## License

Private – Moderna Solutions AS.
