import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Specialization from "./components/Specialization";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <TechStack />
      <Experience />
      <Specialization />
      <Contact />
    </div>
  );
}

export default App;
