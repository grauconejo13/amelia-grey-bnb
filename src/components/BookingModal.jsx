import BookingForm from "./BookingForm";


function BookingModal({ show, onHide, rate }) {
  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Reserve Your Stay</h5>
            <button className="btn-close" onClick={onHide}></button>
          </div>

          <div className="modal-body">
            <BookingForm rate={rate} />
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onHide}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
