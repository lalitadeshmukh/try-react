import React from "react";
import ReactDOM from "react-dom/client";

/* var parent = React.createElement(
    "div",
     { id: "parent" }, 
    [
        React.createElement(
            "div", 
            { id: "child" }, 
            [   
                React.createElement("h1", { id: "heading" }, "Hello World -- from React!! "), 
                React.createElement("h2", { id: "heading2" }, "Hello World -- from  React!!")
            ]),
            React.createElement(
                "div", 
                { id: "child2" }, 
                [   
                    React.createElement("h1", { id: "heading" }, "Hello World -- from React!!"), 
                    React.createElement("h2", { id: "heading2" }, "Hello World -- from React!!")
                ])
    ]
); */

// JSX is not HTML in JS, It is HTML,XML like syntax
const jsxHeading = <h1 id="heading">Hello React using JSX !!!</h1>

/* const jsxHeading = (<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
  Visit React Docs
</a>) */

/* const jsxHeading1 = (<form onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
  <input type="text" placeholder="Your name" />
  <button type="submit">Submit</button>
</form>)
 */
//const jsxHeading1 = <img src="https://via.placeholder.com/150" alt="Placeholder" />

/* const jsxHeading1 = (<label>
  <input
    type="radio"
    name="gender"
    value="male"
    checked={gender === "male"}
    onChange={(e) => setGender(e.target.value)}
  />
  Male
</label>
) */

/* const jsxHeading1 = 
(<select  onChange={(e) => setSelectedCity(e.target.value)}>
  <option value="">Select a city</option>
  <option value="nyc">New York</option>
  <option value="sf">San Francisco</option>
  <option value="la">Los Angeles</option>
</select>) */

// React funtional component

var number =10

//React component
const title = (
     <div id="head" tabIndex="5">
        <h1 className="heading"> React functional component Title...</h1>
    </div>
);

//functional component
const title2 = () => (
     <div id="head" tabIndex="5">
        <h1 className="heading"> React functional component Title...</h1>
    </div>
);

//functional component
const HeadingComponent = () => (
     <div id="container">        
        {title}
        {title2()}
        <h1 className="heading"> React functional component...</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent/>);
