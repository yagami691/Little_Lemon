import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "../components/BookingPage.js";
import "@testing-library/jest-dom";

describe("BookingForm date field", () => {
  test("displays the date field with the given value", () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={["17:00"]}
          dispatch={jest.fn()}
          selectedDate="2025-04-13"
          submitForm={jest.fn().mockResolvedValue(true)}
        />
      </BrowserRouter>
    );

    const input = screen.getByLabelText(/choose date/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("2025-04-13");
  });

  test("triggers dispatch on date change", () => {
    const dispatchMock = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={["17:00"]}
          dispatch={dispatchMock}
          selectedDate="2025-04-13"
          submitForm={jest.fn().mockResolvedValue(true)}
        />
      </BrowserRouter>
    );

    const input = screen.getByLabelText(/choose date/i);
    fireEvent.change(input, { target: { value: "2025-05-01" } });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "SELECT_DATE",
      payload: "2025-05-01",
    });
  });
});

describe("BookingForm time field", () => {
  test("displays the select field with the correct options", () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatch={jest.fn()}
          selectedDate="2025-04-13"
          submitForm={jest.fn()}
        />
      </BrowserRouter>
    );

    const select = screen.getByLabelText(/choose time/i);
    const options = Array.from(select.options).map((option) => option.text);

    expect(options).toContain("17:00");
    expect(options).toContain("18:00");
  });

  test("changes value and clears errors", () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatch={jest.fn()}
          selectedDate="2025-04-13"
          submitForm={jest.fn()}
        />
      </BrowserRouter>
    );

    const select = screen.getByLabelText(/choose time/i);
    fireEvent.change(select, { target: { value: "18:00" } });

    expect(select).toHaveValue("18:00");
  });
});

describe("BookingForm  Number of guests field", () => {
  test("displays the field with the given value and correct attributes", () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={["17:00"]}
          dispatch={jest.fn()}
          selectedDate="2025-04-13"
          submitForm={jest.fn()}
        />
      </BrowserRouter>
    );

    const input = screen.getByLabelText(/number of guests/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("placeholder", "0");
    expect(input).toHaveAttribute("min", "0");
    expect(input).toHaveAttribute("max", "10");
  });

  test("change the value of the field when entering data", () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={["17:00"]}
          dispatch={jest.fn()}
          selectedDate="2025-04-13"
          submitForm={jest.fn()}
        />
      </BrowserRouter>
    );

    const input = screen.getByLabelText(/number of guests/i);

    fireEvent.change(input, { target: { value: "4" } });

    expect(input).toHaveValue(4);
  });
});

describe("BookingForm – field Occasion", () => {
  test("displays the select field with the correct options", () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={["17:00"]}
          dispatch={jest.fn()}
          selectedDate="2025-04-13"
          submitForm={jest.fn()}
        />
      </BrowserRouter>
    );

    const select = screen.getByLabelText(/occasion/i);
    const options = Array.from(select.options).map((option) =>
      option.textContent.trim()
    );

    expect(select).toBeInTheDocument();
    expect(options).toContain("Select an occasion");
    expect(options).toContain("Birthday");
    expect(options).toContain("Anniversary");
  });
});
