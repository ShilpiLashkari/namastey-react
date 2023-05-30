//  Hello World Using React CDN
const helloHeading = React.createElement(
  "h1",
  { id: "heading", anotherattribute: "userCreatedValue" },
  "Hello World from React! "
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root1"));
reactRoot.render(helloHeading);
console.log("Check this out:::", helloHeading);
