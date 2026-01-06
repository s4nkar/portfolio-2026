import BentoHero from "../components/BentoHero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ModernProjects from "../components/ModernProjects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 pb-32">
      <BentoHero />
      <Skills />
      <Experience />
      <ModernProjects />
      <Contact />
    </main>
  );
}
