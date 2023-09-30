    // Create a element
    const headingElement = React.createElement("h1","","Hi");
    
    //Create a root for dom manipulations
    const root = ReactDOM.createRoot(document.getElementById("root"));

    //Render the element on the root
    root.render(headingElement);




    //Nested Elements Creation
    const divParent = React.createElement("div",{id:"Hi"},[
        React.createElement("h1",{id:"heading"},"This is a child 1"),
        React.createElement("h1","","This is a child 1") 
    ]);

    //Render Nested Elements on root
    root.render(divParent);