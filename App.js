//single element
const heading = React.createElement(
  "h1", //tag
  { id: "heading", xyz: "abc" }, //attributes to element
  "Hello World from REACT" //children
); //heading is not html h1 tag it is React object, in console we'll get heading as React object

/*        //HOW TO CREATE THIS STRUCTURE IN JS
 *  <div id = 'parent'>
        <div id = 'child'>
            <h1>Hello h1</h1>
            <h1>Hello h2</h1>
        </div>
    </div>  * 
 * 
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    ,
    React.createElement("h1", {}, "Hello h1"),
    React.createElement("h2", {}, "Hello h2"),
  ])
);

//Above code is very messy therefore we have JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent); //render fun take the React obj, convert it into heading tag & put it into the DOM
