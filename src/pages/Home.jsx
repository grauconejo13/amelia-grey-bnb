function Home() {
  return (
    <>
    <main className="container-fluid px-0">
      {/* HERO */}
      <section className="container py-5 text-center">
        <h1 className="mb-4">Amelia’s Bed & Breakfast Inn</h1>

        <img
          src="https://assets.codepen.io/11990995/main-house.jpg"
          alt="Bed & Breakfast Inn"
          className="img-fluid rounded shadow-sm mb-5"
          style={{ maxWidth: "900px" }}
        />
      </section>

      {/* INTRO */}
      <section className="container py-4">
        <div className="row align-items-start g-5">
          <div className="col-md-6">
            <h3>Meet the Owner</h3>
            <p className="text-muted">
              I am Amelia Grey. Come and stay awhile.
            </p>

            <img
              src="https://assets.codepen.io/11990995/owner-amelia-grey.png"
              alt="Owner"
              className="img-fluid rounded mb-4"
            />
          </div>

          <div className="col-md-6">
            <h3>Mission Statement</h3>
            <p>
              To provide a friendly, clean, cozy, and safe environment for all
              who come and stay.
            </p>
            <p>
              We strive to offer thoughtful service and a welcoming retreat
              throughout your visit.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section className="container py-5">
        <div className="row g-5">
          {/* CONTACT */}
          <div className="col-md-6" id="contact">
            <h2 className="mb-3">Any Questions?</h2>
            <p className="text-muted">
              Contact us between 10:00 AM – 8:00 PM by phone, or anytime by email.
            </p>

            <p>
              Phone: <a href="#">(123) 456-7890</a><br />
              Email: <a href="mailto:email@something.com">email@something.com</a>
            </p>

            <form className="mt-4">
              <input className="form-control mb-3" placeholder="Name" />
              <input className="form-control mb-3" placeholder="Email" />
              <input className="form-control mb-3" placeholder="Subject" />
              <textarea
                className="form-control mb-3"
                rows="4"
                placeholder="Your message..."
              ></textarea>

              <button className="btn btn-outline-secondary me-2">
                Send
              </button>
              <button className="btn btn-light">
                Reset
              </button>
            </form>
          </div>

          {/* LOCATION */}
          <div className="col-md-6" id="location">
            <h2 className="mb-3">Location</h2>
            <p>13 Wanderlust Lane, Somewhere, Ontario</p>

            <a href="https://www.google.ca/maps/">
              <img
                src="https://assets.codepen.io/11990995/location.png"
                alt="Map"
                className="img-fluid rounded shadow-sm"
              />
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS & MENU */}
      <section className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6 text-center">
            <h3 className="mb-3">Reviews</h3>
            <img
              src="https://assets.codepen.io/11990995/review.png"
              alt="Reviews"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6 text-center">
            <h3 className="mb-3">Menu List</h3>
            <img
              src="https://assets.codepen.io/11990995/breakfast01.jpg"
              alt="Breakfast menu"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

export default Home;
