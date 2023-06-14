import React from "react";
import ReactDOM from "react-dom/client";

const MainComponent = () => (
  <React.Fragment>
    <div className="container-1">
      <p>This is para 1 using react Fragment</p>
    </div>
    <div className="container-2">
      <p>This is para 2 using react Fragment</p>
    </div>
  </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);
