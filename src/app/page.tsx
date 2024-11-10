import Frontpage from "./components/frontpage";
import AboutPage from "./components/about";
import SkillPage from "./components/skills";
import ProjectCard from "./components/projectcard";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Frontpage/>
      <AboutPage/>
      <SkillPage/>
      <ProjectCard/>
      <Contact/>
    </div>
  );
}
