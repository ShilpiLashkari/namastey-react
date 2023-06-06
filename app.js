import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h1 className="title">Namastey React </h1>;
};

const MainComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      <h2 className="mainHeading">Hi There! This is heading 2.</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);
