import { Link } from "react-router-dom";
import RoomCard from "../components/RoomCard";
import { rooms } from "../data/rooms";
import profileImage from "../assets/amelia-grey-photo.png";
import guestNotesImage from "../assets/guest-notes.png";

function Home() {
  return (
    <main>
      <section
        className="home-hero"
        style={{
          backgroundImage:
            "url(https://assets.codepen.io/11990995/main-house.jpg)",
        }}
      >
        <div className="container">
          <div className="hero-content">
            <p className="eyebrow">Willowfield, Ontario</p>
            <h1>
              Amelia Grey
              <br />
              Bed &amp; Breakfast
            </h1>
            <p>A quiet place to arrive, settle in, and stay awhile.</p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <Link className="button-link" to="/rooms">
                View rooms
              </Link>
              <Link className="button-link" to="/contact">
                Plan your stay
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="container editorial-copy">
          <p className="eyebrow">Welcome to Amelia Grey</p>
          <h2>A slower kind of stay.</h2>
          <p className="mb-0">
            To provide a friendly, clean, cozy, and safe environment for all who
            come and stay. We strive to offer thoughtful service and a welcoming
            retreat throughout your visit.
          </p>
        </div>
      </section>

      <section className="section feature-rooms">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <div>
              <p className="eyebrow">Rest well</p>
              <h2 className="mb-0">Featured rooms</h2>
            </div>
            <Link className="button-link button-link-dark" to="/rooms">
              All rooms
            </Link>
          </div>
          <div className="row g-4">
            {rooms.map((room) => (
              <div className="col-md-6 col-lg-4" key={room.id}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <img
            className="owner-image"
            src={profileImage}
            alt="Amelia Grey, owner of the inn"
          />
          <div className="owner-copy">
            <p className="eyebrow">Meet your host</p>
            <h2>Amelia Grey</h2>
            <p>I am Amelia Grey. Come and stay awhile.</p>
            <p className="mb-4">
              A thoughtful welcome, a comfortable room, and a slower pace are at
              the heart of every visit.
            </p>
            <Link className="button-link button-link-dark" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section-compact amenity-strip">
        <div className="container">
          <p className="eyebrow">At the inn</p>
          <div className="row g-0">
            <div className="col-6 col-md amenity-item">
              <strong>Breakfast</strong>
              <span>Morning dining</span>
            </div>
            <div className="col-6 col-md amenity-item">
              <strong>Garden</strong>
              <span>Space to linger</span>
            </div>
            <div className="col-6 col-md amenity-item">
              <strong>Pet friendly</strong>
              <span>Bring them along</span>
            </div>
            <div className="col-6 col-md amenity-item">
              <strong>Local walks</strong>
              <span>Explore nearby</span>
            </div>
            <div className="col-6 col-md amenity-item">
              <strong>Parking</strong>
              <span>Included with stay</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact review-teaser">
        <div className="container row g-4 align-items-center mx-auto">
          <div className="col-md-5">
            <img
              className="review-image"
              src={guestNotesImage}
              alt="Guest review note"
            />
          </div>
          <div className="col-md-7">
            <p className="eyebrow">Guest notes</p>
            <h2>Thoughtful stays, remembered warmly.</h2>
            <p className="mb-0">
              A glimpse of the kind words shared by guests after a stay at
              Amelia Grey.
            </p>
          </div>
        </div>
      </section>

      <section className="section-compact closing-cta">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <p className="eyebrow text-white-50">Your next stay</p>
            <h2 className="mb-0">Make yourself at home.</h2>
          </div>
          <Link className="button-link" to="/contact">
            Contact Amelia Grey
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
