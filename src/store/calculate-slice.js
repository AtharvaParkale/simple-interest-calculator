import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
  name: "calculate",
  initialState: {
    principleAmount: 100000,
    rateOfInterest: 6,
    timePeriod: 5,
    totalInterest: 30000,
    totalAmount: 130000,
  },
  reducers: {
    setValues(state, action) {
      const newItem = action.payload;

      state.principleAmount = newItem.principleAmount;
      state.rateOfInterest = newItem.rateOfInterest;
      state.timePeriod = newItem.timePeriod;

      state.totalInterest =
        (newItem.principleAmount *
          newItem.rateOfInterest *
          newItem.timePeriod) /
        100;

      state.totalAmount =
        newItem.principleAmount *
        (1 + newItem.rateOfInterest * newItem.timePeriod);

      console.log(state.principleAmount);
      console.log(state.rateOfInterest);
      console.log(state.timePeriod);
      console.log(state.totalInterest);
      console.log(state.totalAmount);
    },
  },
});

export const calculateActions = calculateSlice.actions;

export default calculateSlice;
