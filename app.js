import React from "react";
import ReactDOM from "react-dom/client";

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello World from React Nesting Heading 1"),
    React.createElement("h2", {}, "Hello World from React Nesting Heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World from React Nesting Heading 1"),
    React.createElement("h2", {}, "Hello World from React Nesting Heading 2"),
  ]),
]);

const nestedRoot2 = ReactDOM.createRoot(
  document.getElementById("nestedRootId")
);
nestedRoot2.render(parent2);
