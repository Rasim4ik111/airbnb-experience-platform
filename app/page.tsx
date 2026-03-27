"use client";
import PropertyList from "./components/property/PropertyList";
import { Header } from "./components/layouts/Header";
import { properties } from "@/data/properties";
import { ErrorBoundary } from "./components/shared/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <Header />
        <section className="max-w-7xl">
          <PropertyList properties={properties} />
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default App;
