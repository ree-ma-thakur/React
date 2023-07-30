import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const jsxHeading = <h1 id="heading">Heading using JSX</h1>;
console.log(jsxHeading);

const Compo = () => <h2>Component</h2>;

//Component
const HeadingComponent1 = () => (
  <div id="container">
    <Compo></Compo>
    {"I am JS code" + (10 + 90) + "%"}
    <h1>Functional Component1</h1>;
  </div>
);

//Component composition
const HeadingComponent2 = () => (
  <div className="heading">
    {jsxHeading}
    {HeadingComponent1()}
    <h1>Functional Component2</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
