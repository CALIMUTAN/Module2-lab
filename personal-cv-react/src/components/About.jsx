import profile from "../assets/profile.jpg";

function About() {
    return (
       
          <section class ="card"> 
              <h2>About Me</h2>
              <img src={profile} alt="Profile photo"/>
              <p>Hello I'm Vincent S. Calimutan currently a student in University of Science and 
                  Technology Philippines. I'm 20 years old and live in Brgy. Lapasan, Cagayan de Oro City
              </p>

              <p>Email:
                  <a href="mailto:calimutan.vincent123@gmail.com">calimutan.vincent123@gmail.com</a><br></br>
                  GitHub:
                  <a href="https://github.com/CALIMUTAN" target="_blank">https://github.com/CALIMUTAN</a>
              </p>
          </section>
    );
}
export default About;


