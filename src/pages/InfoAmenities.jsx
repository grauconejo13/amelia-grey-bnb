import { galleryImages } from "../data/gallery";
import { contact } from "../data/contact";

const amenities = [
  ["Breakfast", "A relaxed morning menu."],
  ["Essentials", "Thoughtful comforts provided."],
  ["Pet friendly", "Four-legged guests welcome."],
  ["Pickup & drop-off", "Airport or hub by arrangement."],
  ["Free parking", "Easy arrival and departure."],
  ["Walking tour", "A gentle way to explore."],
  ["Local guide", "Places worth knowing nearby."],
];

function InfoAmenities() {
  return (
    <>
      <section className="section-compact">
        <div className="container">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6">
              <img className="arrival-image" src={galleryImages[0]} alt="A quiet room at Amelia Grey" />
            </div>
            <div className="col-lg-6 arrival-copy">
              <div className="editorial-panel-content">
                <p className="eyebrow">Arrival and breakfast</p>
                <h2>Settle in slowly.</h2>
                <ul className="fact-list">
                  <li><strong>Check-in</strong>3 PM – 8 PM, by arrangement. Please provide your arrival time at least one day in advance.</li>
                  <li><strong>Check-out</strong>11 AM</li>
                  <li><strong>Breakfast</strong>7:30 AM – 10:30 AM, in the dining room or garden.</li>
                  <li><strong>Arrival notice</strong>At least 48 hours before check-in.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="container">
          <p className="eyebrow">At your service</p>
          <h2 className="mb-4">A few thoughtful extras.</h2>
          <div className="amenity-grid">
            {amenities.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p className="mb-0">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-0">
            <section className="col-lg-6 policy-panel">
              <div className="editorial-panel-content">
                <p className="eyebrow">Policies</p>
                <h2>Good to know.</h2>
                <p><strong>Minimum stay:</strong> 2 nights. A 10% discount applies to bookings over 28 nights.</p>
                <p><strong>Bookings &amp; payments:</strong> Via the Rooms page. Cash, credit card, and debit card accepted.</p>
                <p className="mb-0"><strong>Cancellation:</strong> Minimum 7-day cancellation notice.</p>
              </div>
            </section>
            <section className="col-lg-6 policy-panel">
              <div className="editorial-panel-content">
                <p className="eyebrow">Visitor's guide</p>
                <h2>Make it your own.</h2>
                <p><strong>Breakfast menu:</strong> Served each morning from 7:30 AM – 10:30 AM.</p>
                <img className="breakfast-image" src="https://assets.codepen.io/11990995/breakfast01.jpg" alt="Breakfast served at the inn" />
                <p className="mt-3"><strong>Local time:</strong> Ask about the garden, walking tour, and local guide during your stay.</p>
                <p className="mb-0"><strong>Location:</strong> {contact.address}<br /><a href={contact.phoneHref}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoAmenities;
