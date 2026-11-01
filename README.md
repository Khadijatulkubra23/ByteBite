# ByteBite: Campus Food Truck & Café Live Queue Board

A vibrant web menu and live pickup status board for a student-run university food collective during campus lunch hours. Built as part of the **Zynvex Solutions Batch 5 Virtual Internship** (Project FED-04).

**Intern:** Khadija Tul Kubra
**Internship ID:** ZYNVEX-CERT-2071
**Track:** Frontend Development

## The Problem

Campus lunch hours are crowded. Students don't know what each vendor offers, which items fit their diet, or when their order will be ready, so they crowd the counter. ByteBite gives them one fast, mobile-friendly place to browse menus and track their order.

## Tech Stack

- React (Vite)
- Tailwind CSS v4
- React Router
- Plain CSS animations (no animation libraries)
- Local JS data files (no backend)

## Module 1 Progress (Oct 26 - Nov 01)

**Goal:** project setup, design system, data schema, and page skeleton.

### Completed

- Project setup with React, Vite, Tailwind CSS, and a GitHub repository
- Design system: cream, ink, tomato red, mustard, and leaf green palette, with Archivo Black for headings and DM Sans for body text
- Data schema for vendors, menu items (price and dietary tags), and orders (stage, prep time, elapsed time)
- Routing with React Router: Home, Menu, Vendor, and Live Queue pages
- Responsive layout: sticky header, mobile bottom navigation, and footer
- Mobile-first design that works from phone to desktop
- Flat food illustrations as transparent WebP images, and SVG icons
- Home page with an animated hero, vendor cards, and an order board preview
- Menu page with animated vendor tabs (sliding pill), dietary filter badges (Vegan, Halal, Gluten-Free), and menu cards with animated price counters
- Vendor detail page with its own filters and menu
- Live Queue page layout with three stage columns (Prepping, Ready, Picked Up) and order cards with timer and progress bar placeholders

### Design and Animation Decisions

- Animations use only `transform` and `opacity` for smooth performance on low-end phones
- `prefers-reduced-motion` is respected, so animations turn off for users who disable them
- Food images are compressed WebP files, lazy loaded, with set dimensions to avoid layout shift

## Data Schema

**Vendor:** `id`, `name`, `image`, `tagline`, `items[]`
**Menu item:** `id`, `name`, `image`, `price`, `tags[]` (`vegan`, `halal`, `gluten-free`)
**Order:** `id`, `vendorId`, `items[]`, `stage` (`prepping`, `ready`, `picked-up`), `prepTime`, `elapsed`

## Project Structure

```
src/
  components/   Header, BottomNav, Footer, VendorTabs, FilterChips, MenuCard, OrderCard, Icons
  pages/        Home, Menu, Vendor, Queue
  hooks/        useCountUp
  data/         vendors.js, orders.js
public/food/    food illustrations (WebP)
```

## Run Locally

```bash
git clone <https://github.com/Khadijatulkubra23/ByteBite>
cd bytebite
npm install
npm run dev
```

## Roadmap

| Module | Dates | Focus |
|---|---|---|
| Module 1 | Oct 26 - Nov 01 | Setup, design system, data schema, page skeleton (done) |
| Module 2 | Nov 02 - Nov 08 | Live order status with client-side timers, simulated progress bars, and stage changes |
| Module 3 | Nov 09 - Nov 15 | Search, polish animations, custom cursor, performance and accessibility |
| Module 4 | Nov 16 - Nov 22 | Testing, live deployment, final README |