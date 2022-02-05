import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			// This is not the original state, it's just a clone of the current state
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			// @ts-ignore
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
