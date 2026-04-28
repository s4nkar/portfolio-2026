import dynamic from "next/dynamic";
import EditorialHero from "../components/EditorialHero";
import AIStatsBar from "../components/AIStatsBar";

const FeaturedProject = dynamic(() => import("../components/FeaturedProject"));
const Skills = dynamic(() => import("../components/Skills"));
const Experience = dynamic(() => import("../components/Experience"));
const ModernProjects = dynamic(() => import("../components/ModernProjects"));
const Contact = dynamic(() => import("../components/Contact"));

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      <EditorialHero />
      <AIStatsBar />
      <FeaturedProject />
      <Skills />
      <Experience />
      <ModernProjects />
      <Contact />
    </main>
  );
}
