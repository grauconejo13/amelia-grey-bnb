import { Link } from "react-router-dom";
import { contact } from "../data/contact";

function Footer() {
  const year = new Date().getFullYear();
  return <footer className="site-footer"><div className="container text-center"><h2>{contact.name}</h2><p className="mb-2">{contact.address}</p><p className="mb-3"><a href={contact.phoneHref}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p><nav className="footer-nav" aria-label="Footer navigation"><Link to="/">Home</Link><Link to="/rooms">Rooms</Link><Link to="/info">Info &amp; Amenities</Link><Link to="/contact">Contact</Link></nav><p className="small mt-3 mb-0">© {year} {contact.name}</p></div></footer>;
}

export default Footer;
