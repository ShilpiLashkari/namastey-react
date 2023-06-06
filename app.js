import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 id="heading" className="heading">
    This is the main heading 😎
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

const FunctionalComponent = () => {
  return <h1>Hi There!</h1>;
};
const FunctionalComponent2 = () => <h1>Hi There!</h1>;

const FunctionalComponent3 = () => (
  <div id="container">
    <h2 className="heading2">Hi Shilpi</h2>
  </div>
);

const rootComponent = ReactDOM.root(<FunctionalComponent3 />);
