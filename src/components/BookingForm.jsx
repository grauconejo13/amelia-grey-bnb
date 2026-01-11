function BookingForm({ rate }) {
  return (
    <div className="p-4 border rounded bg-light">
      <h3 className="mb-4 text-center">Reservation</h3>

      <form>
        <div className="row g-2 mb-3">
          <div className="col">
            <input className="form-control" placeholder="First Name" />
          </div>
          <div className="col">
            <input className="form-control" placeholder="Last Name" />
          </div>
        </div>

        <input className="form-control mb-3" placeholder="Email" />
        <input className="form-control mb-3" placeholder="Phone" />

        <h6 className="mt-4">Arrival & Departure</h6>
        <div className="row g-2 mb-3">
          <div className="col">
            <input type="date" className="form-control" />
          </div>
          <div className="col">
            <input type="date" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Guests</label>
          <div className="d-flex gap-2">
            <input type="number" className="form-control" placeholder="Adults" />
            <input type="number" className="form-control" placeholder="Children" />
            <input type="number" className="form-control" placeholder="Pets" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Breakfast Included</label>
          <div>
            <input type="radio" name="breakfast" /> Yes{" "}
            <input type="radio" name="breakfast" className="ms-3" /> No
          </div>
        </div>

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Dietary restrictions, room preferences, special requests…"
        ></textarea>

        <p className="text-muted small">
          Standard Rate: ${rate} / night
        </p>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-outline-secondary w-100">
            Submit
          </button>
          <button type="reset" className="btn btn-light w-100">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
