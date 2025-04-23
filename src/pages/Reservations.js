import BookingForm from "../components/BookingPage";
import { useReducer } from "react";
import { submitAPI } from "../api.js";
import { updateTimes, initializeTimes } from "../lib/reservationUtils";
import { fetchAPI } from "../api.js";

export default function Reservations() {
  const submitForm = async (formData) => {
    try {
      if (!formData.time || !formData.guests || !formData.occasion) {
        return false;
      }

      const response = submitAPI(formData);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      return false;
    }
  };

  const [availableTimes, dispatch] = useReducer(
    (state, action) => updateTimes(state, action, fetchAPI),
    initializeTimes(fetchAPI)
  );
  return (
    <BookingForm
      availableTimes={availableTimes.times}
      dispatch={dispatch}
      selectedDate={availableTimes.date}
      submitForm={submitForm}
    />
  );
}
