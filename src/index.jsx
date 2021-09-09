import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./customcss/custom.css";
import "./customfont/stylesheet.css";
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';



import { Provider } from "react-redux";
import store from "./store";
import { REACT_APP_KEY, REACT_APP_PIXEL_ID } from "./constants";

const options = {
  autoConfig: true,
  debug: false,
};
 
// Google analytics
ReactGA.initialize(REACT_APP_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);

// Facebook Pixel
ReactPixel.init(REACT_APP_PIXEL_ID, options);
ReactPixel.pageView(); 

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
     document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
