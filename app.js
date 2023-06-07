import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = (
  <div>
    <p>Some text inside a react element rendering in MainComponent</p>
  </div>
);
const TitleComponent = () => <h1 className="title">Namastey React </h1>;

const number = 1221;

const MainComponent = () => (
  <div id="container">
    <TitleComponent />
    <h2 className="mainHeading">Hi Theres! This is heading 2.</h2>
    <h3>{number}</h3>
    <h4>{120 + 50}</h4>
    <h5>{console.log("Hii")}</h5>
    <h6>{reactElement}</h6>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);

console.log("type 1:", typeof reactElement);
console.log("type 2:", typeof MainComponent);
