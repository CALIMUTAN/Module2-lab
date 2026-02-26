import { useState } from 'react'
import './index.css'
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";


 // http://localhost:5173/



function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode? "Switch to Light Mode" :"Switch to Dark Mode"}
      
      </button>

      <h1>My Personal Online CV</h1>
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      alert("Thank you! Your message has been received.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default App;

