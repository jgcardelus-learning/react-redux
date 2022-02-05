import { useSelector } from "react-redux";
import { authActions } from "./store/auth";

import Auth from "components/Auth";
import Header from "components/Header";
import UserProfile from "components/UserProfile";
import React from "react";
import Counter from "./components/Counter";

function App() {
	// @ts-ignore
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<React.Fragment>
			<Header />
			{!isAuthenticated && <Auth />}
			{isAuthenticated && <UserProfile />}
			<Counter />
		</React.Fragment>
	);
}

export default App;
