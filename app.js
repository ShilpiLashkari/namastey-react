import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1 className="title">Namastey React </h1>;

const number = 1221;

const MainComponent = () => (
  <div id="container">
    <TitleComponent />
    <h2 className="mainHeading">Hi There! This is heading 2.</h2>
    <h3>{number}</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);
