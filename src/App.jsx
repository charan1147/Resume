import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";
import Language from "./components/Language";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Summary />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <Language />
      <Awards />
    </div>
  );
}

export default App;
