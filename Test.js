const createRowDiv = (text, inputdata = "") => {
    // Create Row block (Div)
    const rowdiv = document.createElement("div");
    // Create Left Span, also assign class name
    const leftspan = document.createElement("span");
    leftspan.className = "left-span";
    leftspan.innerHTML = text;
    // Create Right Span, also assign class name
    const rightspan = document.createElement("span");
    rightspan.className = "right-span";
    rightspan.innerHTML = inputdata;
    // Append Left Span and Right Span into Row Div
    rowdiv.append(leftspan);
    rowdiv.append(rightspan);
    // Now Return the Row divs
    return rowdiv;
};

function testCreateRowDiv(){
    let input = document.createElement("div");
    
    input.append(document.createElement("span"));
    input.children[0].className = "left-span";

    input.append(document.createElement("span"));
    input.children[1].className = "right-span";

    input.children[0].innerHTML = "Name ";
    input.children[1].innerHTML = "Prateek";

    const finalresult1 = createRowDiv("Name", "Prateek");

    if(finalresult1.isEqualNode(input)){console.log("Pass");}
    else{ console.log("Fail") };
};