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
          © {year} Amelia Grey’s Bed & Breakfast Inn
        </p>
        <p className="mb-0 text-muted">
          A fictional establishment · UI demonstration only
        </p>
      </div>
    </footer>
  );
}

export default Footer;
