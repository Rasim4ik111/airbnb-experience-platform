# Welcome to airbnb-experience-platform

---

## Task

Building a modern Airbnb-style property marketplace that demonstrates mastery of React's advanced patterns — hooks, context, custom hooks, performance optimization, and component architecture. The challenge was structuring a scalable application with real-world features like booking flows, favorites, dark mode, interactive maps, and skeleton loading states.

## Description

Built an Airbnb Experience Platform using Next.js App Router with TypeScript and Tailwind CSS. The application features:

- Property listings with search and filters (price, rating, location)
- Property detail pages with Airbnb-style photo gallery
- Multi-step booking form using `useReducer`
- Global theme system (light/dark) using React Context and CSS variables
- Interactive maps with `react-leaflet` and OpenStreetMap
- Favorites and bookings saved to `localStorage`
- Skeleton loading states using Next.js `loading.tsx`
- Error boundary for graceful error handling
- Toast notifications for booking confirmation
- Custom hooks: `useFetch`, `useFavorites`, `useBookings`

## Installation

```bash
# Clone the repository
git clone https://github.com/Rasim4ik111/airbnb-experience-platform.git

# Navigate to project folder
cd 02-modern-react-fundamentals

# Install dependencies
npm install

# Run development server
npm run dev
```

## Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

- Browse properties on the home page
- Click a property card to view details, map, and reviews
- Use the booking form to reserve a property
- Save favorites by clicking the ❤️ button
- View bookings at `/bookings` and favorites at `/favorites`
- Toggle dark/light mode with the theme button in the header
