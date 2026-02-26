function Contact() {
    return (
            <section class="card">
                <h2>Contact Me</h2>
                <form>
                    <input type="text" id="name" placeholder="Name"></input>
                        <input type="email" id="email" placeholder="Email"></input>
                            <textarea placeholder="Message"></textarea>
                            <button type="submit" id="submitBtn">Send</button>
                        </form>
                    </section>
              
                );
}
export default Contact;