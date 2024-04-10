import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Lets get in Touch</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
