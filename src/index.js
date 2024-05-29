import React from "react";

import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Auth0Provider
		domain='dev-bmqwfu5ohc0my8ut.us.auth0.com'
		clientId='XXeXyfDXf0YibUvOG80UJqxFh0cOiZt4'
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<UserProvider>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterProvider>
				,
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>
);
