import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Products from "./components/Products";
import ExploreSection from "./components/Explore";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <ExploreSection />
      <Contact />
    </main>
  );
}