export const updateTimes = (state, action, fetchAPI) => {
  let date = action.payload;
  let update = new Date(date);
  switch (action.type) {
    case "SELECT_DATE":
      return {
        ...state,
        date: action.payload,
        times: fetchAPI(update),
      };
    default:
      return state;
  }
};

export let initializeTimes = (fetchAPI) => {
  const today = new Date();
  return {
    date: "",
    times: fetchAPI(today),
  };
};
