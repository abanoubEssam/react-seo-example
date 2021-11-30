import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import SEO from "react-seo-component";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SEO
        title={"Index title"}
        titleTemplate={"siteName"}
        titleSeparator={`-`}
        description={"description"}
        pathname={"siteUrl"}
        siteLanguage={"EN"}
        twitterUsername={""}
        siteLocale={""}
        article={false}
        author={"Abanoub"}
        dateModified={Date.now().toString()}
        datePublished={Date.now().toString()}
        image={""}
        key={""}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
