import "../reservations.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import recent from "../assets/Recent.svg";

export default function BookingForm({
  availableTimes,
  dispatch,
  selectedDate,
  submitForm,
}) {
  const Navigate = useNavigate();
  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [form, setForm] = useState({
    time: "",
    guests: "",
    occasion: "",
  });

  const handleDate = (event) => {
    const formattedDate = event.target.value;
    dispatch({ type: "SELECT_DATE", payload: formattedDate });
    setErrors({ ...errors, date: "" });
  };

  const handleTime = (event) => {
    setForm({
      ...form,
      time: event.target.value,
    });
    setErrors({ ...errors, time: "" });
  };

  const handleGuests = (event) => {
    setForm({
      ...form,
      guests: event.target.value,
    });
    setErrors({ ...errors, guests: "" });
  };

  const handleOccasion = (event) => {
    setForm({
      ...form,
      occasion: event.target.value,
    });
    setErrors({ ...errors, occasion: "" });
  };

  let newErrors = {};

  const handleForm = async (event) => {
    event.preventDefault();

    if (!selectedDate) newErrors.date = "Please choose a date.";
    if (!form.time) newErrors.time = "Please select a time.";
    if (!form.guests || form.guests === "0")
      newErrors.guests = "Please enter at least one guest.";
    if (!form.occasion) newErrors.occasion = "Please choose an occasion.";

    setErrors(newErrors);

    const isSuccess = await submitForm(form);
    if (Object.keys(newErrors).length === 0) {
      if (isSuccess && selectedDate) {
        Navigate("/ConfirmedBooking");
      }
    }
  };

  useEffect(() => {
    document.body.classList.add("green-page");
    return () => {
      document.body.classList.remove("green-page");
    };
  }, []);

  return (
    <>
      <h1 className="head">RESERVATION</h1>

      <form className="style-form">
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={selectedDate}
            style={
              errors.date ? { borderColor: "red" } : { borderColor: "#EDEFEE" }
            }
            onChange={handleDate}
          />
          <p style={{ color: "red" }}>{errors.date}</p>
        </div>
        <div className="align-horizontal">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            style={
              errors.time ? { borderColor: "red" } : { borderColor: "#EDEFEE" }
            }
            value={form.time}
            onChange={handleTime}
          >
            <option>Select a time</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <p style={{ color: "red" }}>{errors.time}</p>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="0"
            min="0"
            max="10"
            id="guests"
            style={
              errors.guests
                ? { borderColor: "red" }
                : { borderColor: "#EDEFEE" }
            }
            value={form.guests}
            onChange={handleGuests}
          />
          <p style={{ color: "red" }}>{errors.guests}</p>
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={form.occasion}
            style={
              errors.occasion
                ? { borderColor: "red" }
                : { borderColor: "#EDEFEE" }
            }
            onChange={handleOccasion}
          >
            <option>Select an occasion </option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <p style={{ color: "red" }}>{errors.occasion}</p>
        </div>
        <input
          type="submit"
          aria-label="On Click"
          value="Make Your reservation"
          onClick={handleForm}
          className="submit-button"
        />
      </form>
      <h1 className="head">Available Times</h1>
      <div className="times">
        {selectedDate !== "" && (
          <ul className="available">
            {availableTimes.map((time) => (
              <li key={time}>
                {" "}
                {
                  <img
                    src={recent}
                    className="image-time"
                    alt=" available times"
                  />
                }
                {time}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
