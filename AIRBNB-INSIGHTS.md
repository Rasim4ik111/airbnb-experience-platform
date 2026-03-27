# Airbnb Insights — React Mastery Journey

## What I Learned

### React Hooks

Before this project I only knew `useState`. Now I understand the full hooks ecosystem:

- **useState** — local state for toggles, inputs, image gallery navigation
- **useEffect** — side effects like localStorage sync, Leaflet icon fix
- **useReducer** — complex state for the booking form (check-in, check-out, guests)
- **useContext** — global theme state shared across all components
- **useMemo** — filtering property listings without re-computing on every render
- **useCallback** — optimizing callbacks passed to memoized child components

The biggest insight: **choose the right hook for the job**. `useReducer` is better than multiple `useState` calls when state values depend on each other.

---

### React Context API

Built a full theme system with Context:

```tsx
const ThemeContext = createContext<ThemeContextType | null>(null);
```

Key lesson: Context is powerful for truly global state (theme, auth, language) but **not** for everything — local state should stay local.

Also learned that CSS variables work better than Tailwind `dark:` classes for dynamic theming because they update instantly without class toggling issues.

---

### Custom Hooks

Created three custom hooks:

- `useFetch` — generic data fetching with loading/error states
- `useFavorites` — favorites list persisted to localStorage
- `useBookings` — bookings list persisted to localStorage

The pattern I learned:

```
Custom hook = useState + useEffect + logic = reusable behavior
```

---

### Performance Optimization

- **React.memo** on `PropertyList` to prevent unnecessary re-renders
- **useMemo** for filtering — expensive array operations only run when dependencies change
- **useCallback** for stable function references passed as props

---

### Next.js App Router

- `loading.tsx` — automatic skeleton UI while page loads
- `[id]/page.tsx` — dynamic routing for property pages
- Server vs Client Components — learned when to add `"use client"`
- `dynamic()` with `ssr: false` — required for Leaflet maps (browser-only APIs)

---

### Component Architecture

Followed Airbnb's style guide throughout:

- PascalCase component names
- camelCase event handlers (`handleClick`, `toggleFavorite`)
- Destructured props in function parameters
- Functional components only (except `ErrorBoundary` which requires a class)

---

### Challenges I Faced

**1. Dark Mode**
Tailwind `dark:` classes didn't work reliably. Solved it by switching to CSS variables with `data-theme` attribute on `<html>`.

**2. Leaflet Maps**
`window is not defined` error on server. Solved with `dynamic()` import and `ssr: false` wrapped in a Client Component.

**3. Hydration Mismatch**
`useFavorites` read from localStorage during SSR causing server/client mismatch. Solved by initializing state as empty array and loading localStorage in `useEffect`.

**4. Modal Not Opening**
Spent time debugging — turned out `"use client"` and component placement were the issues in Next.js App Router.

---

### Key Takeaways

1. Next.js App Router changes how you think about Client vs Server components
2. Always initialize state the same way on server and client to avoid hydration errors
3. CSS variables > Tailwind dark mode for dynamic theming
4. `useReducer` makes complex forms much cleaner than multiple `useState`
5. Custom hooks make logic reusable and components clean
6. Performance optimization should be intentional — don't wrap everything in `useMemo`
