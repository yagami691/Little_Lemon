import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ConfirmedBooking() {
  return (
    <div className="confirmed">
      <FontAwesomeIcon icon={faCheck} style={{ color: "#63e6be" }} />
      <div style={{ marginLeft: 10 }}>Booking has been confirmed</div>
    </div>
  );
}
