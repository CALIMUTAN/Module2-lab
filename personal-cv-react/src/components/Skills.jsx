import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card">
        <div>
      <h2>Skills</h2>
      <ul>
        <li>Web Development
          <ul>
            <li>Frontend
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </li>
            <li>Backend
              <ul>
    
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  

    </section>
  );
}

export default Skills;