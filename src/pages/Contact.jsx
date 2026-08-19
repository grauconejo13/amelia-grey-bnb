import locationImage from "../assets/amelia-grey-location.png";
import { contact } from "../data/contact";

function Contact() {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <main className="contact-page page-shell">
      <div className="container">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-6">
            <a href={contact.mapUrl}>
              <img className="contact-visual" src={locationImage} alt="Amelia Grey BnB location map" />
            </a>
          </div>

          <section className="col-lg-6 contact-copy" aria-labelledby="contact-heading">
            <div className="contact-details">
              <p className="eyebrow">Come stay with us</p>
              <h1 id="contact-heading">A warm welcome awaits.</h1>
              <address>{contact.name}<br />{contact.address}</address>
              <p><a href={contact.phoneHref}>{contact.phone}</a><br /><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <p className="text-muted mb-0">{contact.hours}</p>
            </div>

            <form className="contact-form form-panel" onSubmit={handleSubmit}>
              <div className="contact-form-inner">
                <p className="eyebrow">Send an inquiry</p>
                <p className="small">This demo form does not send messages.</p>
                <div className="row g-2">
                  <div className="col-sm-6"><label className="visually-hidden" htmlFor="contact-name">Name</label><input id="contact-name" className="form-control" placeholder="Name" /></div>
                  <div className="col-sm-6"><label className="visually-hidden" htmlFor="contact-email">Email</label><input id="contact-email" type="email" className="form-control" placeholder="Email" /></div>
                  <div className="col-12"><label className="visually-hidden" htmlFor="contact-subject">Subject</label><input id="contact-subject" className="form-control" placeholder="Subject" /></div>
                  <div className="col-12"><label className="visually-hidden" htmlFor="contact-message">Your message</label><textarea id="contact-message" className="form-control" rows="4" placeholder="Your message..." /></div>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <button type="submit" className="btn btn-outline-secondary">Send inquiry</button>
                  <button type="reset" className="btn btn-light">Reset</button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;
