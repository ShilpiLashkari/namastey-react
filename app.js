//  Hello World Using React CDN
const helloHeading = React.createElement("h1", {}, "Hello World from React! ");
const reactRoot = ReactDOM.createRoot(document.getElementById("root1"));
reactRoot.render(helloHeading);
