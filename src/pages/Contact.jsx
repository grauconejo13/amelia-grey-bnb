import { contact } from "../data/contact";

function Contact() {
  return (
    <main className="container py-5">
      <h1 className="mb-4">Contact</h1>
      <div className="row g-5">
        <section className="col-md-6" aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading" className="h3 mb-3">Get in touch</h2>
          <p className="text-muted">{contact.hours}</p>
          <address className="mb-3">
            {contact.name}<br />
            {contact.address}
          </address>
          <p className="mb-0">
            Phone: <a href={contact.phoneHref}>{contact.phone}</a><br />
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </section>
        <section className="col-md-6" aria-labelledby="location-heading">
          <h2 id="location-heading" className="h3 mb-3">Location</h2>
          <a href={contact.mapUrl}>
            <img src={contact.mapImage} alt={`Map showing the location of ${contact.name}`} className="img-fluid rounded shadow-sm" />
          </a>
        </section>
      </div>
    </main>
  );
}

export default Contact;
