# Al Faroque Tours and Travels

A Next.js App Router website for guided Umrah, Hajj inquiries and Ziyarat travel from Burhanpur, India.

## Run locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`. Run `npm run typecheck` and `npm run build` before deployment.

## Project structure

```text
app/
	api/inquiries/route.ts
	contact/page.tsx
	guides/umrah-step-by-step/page.tsx
	packages/
		hajj/page.tsx
		umrah/[slug]/page.tsx
		umrah/page.tsx
		ziyarat-tours/page.tsx
	past-tours/page.tsx
	services/umrah-visa/page.tsx
	globals.css
	layout.tsx
	page.tsx
components/       Shared navigation, lead forms, cards and JSON-LD
lib/              Structured data, validation, schema generators and formatting
types/package.ts  Package, hotel, itinerary and inquiry contracts
```

## Lead email

Copy `.env.example` to `.env.local` and provide SMTP credentials plus `LEADS_EMAIL` to deliver inquiry alerts. Without SMTP, the API validates the inquiry and returns a pre-filled WhatsApp link. Set `NEXT_PUBLIC_SITE_URL` to the production origin. Add verified office latitude and longitude as `BUSINESS_LATITUDE` and `BUSINESS_LONGITUDE`; coordinates are intentionally omitted from local-business schema until confirmed.

## Before launch

The example fares, hotel distances, itinerary details, photos and testimonial are illustrative content, clearly identified in the UI. Replace them with current, verified batch information and consented company photography/reviews before accepting bookings. Confirm office hours, map pin and applicable visa/Hajj guidance with the business. Add production email credentials and confirm WhatsApp response handling.
