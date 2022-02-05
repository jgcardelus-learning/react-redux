import React from "react";
import classes from "./Header.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
	const distpatch = useDispatch();
	// @ts-ignore
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const logoutClickHandler = () => {
		distpatch(authActions.logout());
	};

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{isAuthenticated && (
						<React.Fragment>
							<li>
								<a href="/">My Products</a>
							</li>
							<li>
								<a href="/">My Sales</a>
							</li>
							<li>
								<button onClick={logoutClickHandler}>
									Logout
								</button>
							</li>
						</React.Fragment>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
