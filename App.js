import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="title" tabIndex={5}>
    hello learners
  </h1>
);

const Heading = () => (
  <div>
    <Title />
    <h1 className="heading">Come join with me</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
