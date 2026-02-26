import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from 'react'

function App() {
  return (
    <div>
      <h1>My Personal Online CV</h1>
    </div>
  );
}


function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <Header />
    </div>
  );
}
export default App;