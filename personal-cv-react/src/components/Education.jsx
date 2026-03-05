function Education({ education }) {
  // Default education items if no prop is passed
 
  const educationData = education || defaultEducation;

  return (
    <section className="card">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Program</th>
            <th>Institution</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.program}</td>
              <td>{item.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;