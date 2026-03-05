import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
        alert("Please fill out all fields before sending.");
        return;
      }
  
      alert(`Thank you ${name}!`);
      console.log("Form submitted:", { name, email, message });

        setName("");
        setEmail("");
        setMessage("");
  };

  return (
    <>
      <section className="card">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" id="submitBtn">
            Send
          </button>
        </form>
      </section>
      <footer>
        <p>&copy; 2026 Vincent S. Calimutan. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;