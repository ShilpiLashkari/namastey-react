import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">This is the main heading 😎</h1>;
const root = ReactDOM.createRoot(document.getElementById("nestedRootId"));
root.render(heading);
