import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
