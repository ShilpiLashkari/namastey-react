//  Hello World Using React CDN
const helloHeading = React.createElement(
  "h1",
  { id: "heading", anotherattribute: "userCreatedValue" },
  "Hello World from React! "
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root1"));
reactRoot.render(helloHeading);
console.log("Check this out:::", helloHeading);

// Creating Nested elements

/** Example:
 *<div id="parent">
 *     <div id="child">
 *          <h1>Hello World from React Nesting</h1>
 *      </div>
 *</div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello World from React Nesting")
  )
);
const nestedRoot = ReactDOM.createRoot(document.getElementById("nestedRootId")); // root is html file root id for div
nestedRoot.render(parent);
