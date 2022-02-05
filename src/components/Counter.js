import React from "react";
import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
	const distpatch = useDispatch();

	// Automatic subscription/unsubscription to counter
	// @ts-ignore
	const counter = useSelector((state) => state.counter.counter);

	// @ts-ignore
	const show = useSelector((state) => state.counter.showCounter);

	const incrementClickHandler = () => {
		distpatch(counterActions.increment());
	};

	const decrementClickHandler = () => {
		distpatch(counterActions.decrement());
	};

	const increaseClickHandler = () => {
		distpatch(counterActions.increase(5));
	};

	const toggleCounterHandler = () => {
		distpatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementClickHandler}>Increment</button>
				<button onClick={increaseClickHandler}>Increase by 5</button>
				<button onClick={decrementClickHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
