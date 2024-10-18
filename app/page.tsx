import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Work from "@/components/home/work";

export default function Home() {
  return (
    <main className="container">
      <Hero/>
      <hr></hr>
      <About/>
      <hr></hr>
      <Work/>
    </main>
  );
}
