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

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }), // Sending all fields
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message || `Thank you ${name}!`);

          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Unexpected error occurred.");
        }
      })
  }
   
return (
  <>
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </section>
    <footer>
      <p>&copy; 2026 Vincent S. Calimutan. All rights reserved.</p>
    </footer>
  </>
);
}

export default Contact;
