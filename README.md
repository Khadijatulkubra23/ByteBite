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
- React Context API for shared order state
- Plain CSS animations (no animation libraries)
- Local JS data files (no backend)

## Features

- Animated vendor tab navigation with a sliding pill indicator
- Dietary filter badges (Vegan, Halal, Gluten-Free), combinable
- Animated price counters
- Live order board with three stages: Prepping, Ready, Picked Up
- Client-side countdown timers and progress bars that fill in real time
- Orders that move through the stages automatically, with new simulated orders arriving over time
- Pulsing highlight for ready orders and a pickup banner listing ready order numbers
- "Order now" button on every menu item that adds a test order to the live board
- Fully responsive, mobile-first layout with a bottom navigation bar on phones

## How the Live Queue Works

All order activity is simulated in the browser (no backend). One shared timer ticks every second:

- **Prepping:** the countdown runs down from the order's prep time, and the progress bar fills. At zero, the order becomes **Ready**.
- **Ready:** the order is highlighted for 15 seconds, then becomes **Picked Up**.
- **Picked Up:** the order disappears after 20 seconds.
- **New orders:** a simulated order arrives about every 8 seconds (up to 5 prepping at a time), and orders placed from the menu join the same queue.

Orders reset to the sample data when the page is refreshed. Timers count ticks, so they may slow down while the browser tab is in the background.

## Progress

### Module 1 (Oct 26 - Nov 01): Setup, design system, data schema, page skeleton

- Project setup with React, Vite, Tailwind CSS, and a GitHub repository
- Design system: cream, ink, tomato red, mustard, and leaf green palette, with Archivo Black for headings and DM Sans for body text
- Data schema for vendors, menu items, and orders
- Routing with Home, Menu, Vendor, and Live Queue pages
- Sticky header, mobile bottom navigation, and footer
- Flat food illustrations (transparent WebP) and SVG icons
- Home, Menu, Vendor, and Live Queue page layouts

### Module 2 (Nov 02 - Nov 08): Core features and live order logic

- Shared order state with React Context, used by the Home and Queue pages
- Live countdown timers, animated progress bars, and automatic stage transitions
- Simulated incoming orders
- Ready-order highlight and pickup banner
- "Order now" button that places test orders from the Menu and Vendor pages

## Data Schema

**Vendor:** `id`, `name`, `image`, `tagline`, `items[]`
**Menu item:** `id`, `name`, `image`, `price`, `tags[]` (`vegan`, `halal`, `gluten-free`)
**Order:** `id`, `vendorId`, `items[]`, `stage` (`prepping`, `ready`, `picked-up`), `prepTime`, `elapsed`

## Project Structure

```
src/
  components/   Header, BottomNav, Footer, VendorTabs, FilterChips, MenuCard, OrderCard, Icons
  context/      OrdersContext (order simulation and shared state)
  pages/        Home, Menu, Vendor, Queue
  hooks/        useCountUp
  data/         vendors.js, orders.js
public/food/    food illustrations (WebP)
```

## Performance and Accessibility Notes

- Animations are plain CSS. Most use `transform` and `opacity`; the progress bars and tab pill animate `width`
- `prefers-reduced-motion` is respected, so animations turn off for users who disable them
- Food images are compressed WebP files with set dimensions to avoid layout shift, and menu images are lazy loaded
- Filter chips and tabs use proper roles and states, and the pickup banner is announced to screen readers

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
| Module 2 | Nov 02 - Nov 08 | Live order status, timers, progress bars, stage changes (done) |
| Module 3 | Nov 09 - Nov 15 | Search, polish animations, custom cursor, performance and accessibility |
| Module 4 | Nov 16 - Nov 22 | Testing, live deployment, final README |