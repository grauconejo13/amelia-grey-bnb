import { contact } from "../data/contact";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-top py-4 mt-5"
      style={{
        backgroundColor: "#fdfbf7",   // soft cream
        color: "#3a3a3a",             // gentle ink
        fontSize: "0.9rem"
      }}
    >
      <div className="container text-center">
        <p className="mb-1">
          © {year} {contact.name}
        </p>
        <p className="mb-0 text-muted">
          <a href={contact.phoneHref}>{contact.phone}</a> · {" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
