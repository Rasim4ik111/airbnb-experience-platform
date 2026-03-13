"use client";
import PropertyList from "./components/property/PropertyList";
import { Header } from "./components/layouts/Header";
import { properties } from "@/data/properties";

function App() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Header />

      <section className="p-8 flex flex-wrap justify-center">
        <PropertyList properties={properties} />
      </section>
    </div>
  );
}

export default App;
