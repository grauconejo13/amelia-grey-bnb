import { contact } from "../data/contact";

function InfoAmenities() {
  return (
    <aside
      className="p-5 w-100 h-100 info-panel"
      style={{ background: "#d1ecf1" }}
    >
      <h1 className="mb-4">Amelia’s Bed & Breakfast Inn</h1>

      <h3>Visitor’s Guide</h3>
      <ul>
        <li>Check-in: 3 PM</li>
        <li>Check-out: 11 AM</li>
      </ul>

      <h3>Offers</h3>
      <ul>
        <li>Breakfast Menu</li>
        <li>Essentials Provided</li>
        <li>Pet-Friendly Rooms</li>
        <li>Pick-up / Drop-off (Airport or Hub)</li>
        <li>Free Parking</li>
        <li>Walking Tour</li>
        <li>Local Guide</li>
      </ul>

      <h3>Policies & Details</h3>

      <p><strong>Minimum Stay:</strong> 2 nights. 10% discount for bookings over 28 nights.</p>
      <p><strong>Minimum Notice:</strong> At least 48 hours before check-in.</p>

      <p>
        <strong>Check-in Time:</strong> 3 PM – 8 PM (by arrangement).<br />
        Arrival time must be provided at least 1 day in advance.
      </p>

      <p>
        <strong>Bookings & Payments:</strong> Via the “Rooms” page.<br />
        Cash, credit card, and debit card accepted.<br />
        <em>Minimum 7-day cancellation notice.</em>
      </p>

      <p>
        <strong>Breakfast:</strong> 7:30 AM – 10:30 AM, dining room or garden.
      </p>

      <hr />

      <h3>Location & Contact</h3>
      <p>{contact.address}</p>
      <p>📞 <a href={contact.phoneHref}>{contact.phone}</a></p>
      <p>
        ✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
    </aside>
  );
}

export default InfoAmenities;
