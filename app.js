import React from 'react';
import ReactDOM from 'react-dom/client';
/* 
Episode 1
 // Create a element
const headingElement = React.createElement("h1","","Hi");
 
//Create a root for dom manipulations
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render the element on the root
root.render(headingElement);




//Nested Elements Creation
const divParent = React.createElement("div",{id:"Hi"},[
    React.createElement("h1",{id:"heading"},"This is a Namaste React"),
    React.createElement("h1","","This is a child 1") 
]);

//Render Nested Elements on root
root.render(divParent);


*/
//Episode 3

var ele = 9;

const Title = () => (
    <h1>Namaste JS Tutorial</h1>
);


const jsxHeading = (
<div>
<h1 id='heading'>This is heading using JSX {ele}</h1>
<Title/>
</div>
);

console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("root"));

//if we write in one line we dont need to write return
const fn = () => true;



const Content = () => {
    return <h1>This will be a amazing tutorial to learn and explore react js and be a master in it </h1>
};



const Heading = () => (
    <div>
        {Title()}
        <Title/>
        <Title></Title>
        <h2 className="red-class">I am learning React JS From Scratch  </h2>
        <Content/>
    </div>
);



const CreateReactToJsx = () => {
    
    // React.createElement("h1",{},"This is a create React Weird Method to create elements")
    return <h1 className = "red-class">This is a create React Weird Method to create elements</h1>
    

}
//We can also write above as

const HeadingOneLinerComponent = () => <h1>Heading in one lines</h1>


root.render(<Heading/>);














