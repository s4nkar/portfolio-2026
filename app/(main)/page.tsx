import EditorialHero from "../components/EditorialHero";
import AIStatsBar from "../components/AIStatsBar";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ModernProjects from "../components/ModernProjects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      <EditorialHero />
      <AIStatsBar />
      <Skills />
      <Experience />
      <ModernProjects />
      <Contact />
    </main>
  );
}
