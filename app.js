import React from "react";
import ReactDOM from "react-dom/client";

const MainComponent = () => (
  <div>
    <div className="container-1">
      <p>This is para 1 using react Fragment</p>
    </div>
    <div className="container-2">
      <p>This is para 2 using react Fragment</p>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);

// Another div container

const MainComponent2 = () => (
  <div>
    <div className="container-1">
      <p>This is para 1 using react Fragment</p>
    </div>
    <div className="container-2">
      <p>This is para 2 using react Fragment</p>
    </div>
  </div>
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(<MainComponent2 />);
