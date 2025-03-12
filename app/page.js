"use client";
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import QuickTyreFinder from './components/QuickTyreFinder'
import SpecialOffers from './components/SpecialOffers'
import Events from './components/Events'
import FAQ from './components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickTyreFinder />
      <SpecialOffers />
      <Events />
      <FAQ />
    </div>
  );
}
