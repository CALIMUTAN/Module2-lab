import { useState } from 'react'
import './index.css'
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
    ];
  const education = [
      { year: 2028, program: "College", school: "USTP - CDO Campus" },
      { year: 2024, program: "Senior High School", school: "Liceo de Cagayan University" },
      { year: 2022, program: "High School", school: "Puntod National High School" },
      { year: 2018, program: "Elementary", school: "North City Central School" },
    ];
  

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <h1>My Personal Online CV</h1>

      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />

    </div>
  );
}
//original
export default App;