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
 *          <h2>Hello From Sibling</h2>
 *      </div>
 *</div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "Hello World from React Nesting Heading 1"),
      React.createElement("h2", {}, "Hello World from React Nesting Heading 2"),
    ] // Created array for siblings
  )
);
const nestedRoot = ReactDOM.createRoot(document.getElementById("nestedRootId")); // root is html file root id for div
nestedRoot.render(parent);

/** Example:
 *<div id="parent">
 *     <div id="child1">
 *          <h1>Hello World from React Nesting</h1>
 *          <h2>Hello From Sibling</h2>
 *      </div>
 *     <div id="child2">
 *          <h1>Hello World from React Nesting</h1>
 *          <h2>Hello From Sibling</h2>
 *      </div>
 *</div>
 */

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    [
      React.createElement("h1", {}, "Hello World from React Nesting Heading 1"),
      React.createElement("h2", {}, "Hello World from React Nesting Heading 2"),
    ] // Created array for siblings
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [
      React.createElement("h1", {}, "Hello World from React Nesting Heading 1"),
      React.createElement("h2", {}, "Hello World from React Nesting Heading 2"),
    ] // Created array for siblings
  ),
]);

const nestedRoot2 = ReactDOM.createRoot(
  document.getElementById("nestedRootId")
); // root is html file root id for div
nestedRoot2.render(parent2);
