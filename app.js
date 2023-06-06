import React from "react";
import ReactDOM from "react-dom/client";

const FunctionalComponent = () => (
  <div id="container">
    <h2 className="heading2">Hi Shilpi</h2>
  </div>
);

const rootComponent = ReactDOM.root(document.getElementById("container"));
rootComponent.render(<FunctionalComponent />);
