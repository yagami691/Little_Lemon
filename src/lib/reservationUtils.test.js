import { initializeTimes, updateTimes } from "./reservationUtils";

const dummyFetch = (date) => "DUMMY_" + date.toISOString();

test("initializeTimes with dummyFetch", () => {
  const result = initializeTimes(dummyFetch);
  console.log("RESULT:", result);
  expect(result.times).toContain("DUMMY");
});

test("updateTimes with dummyFetch", () => {
  const result = updateTimes(
    { date: "", times: [] },
    {
      type: "SELECT_DATE",
      payload: "2025-03-30",
    },
    dummyFetch
  );

  console.log("UPDATED:", result);
  expect(result.times).toContain("DUMMY");
});
