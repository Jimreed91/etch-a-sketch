var sketchBox = document.querySelector("#sketch-box");

createGrid(16);

//Function to create a div containting a row of div 
//'blocks' the specified length
function createRow(input=16){
 var sketchRow = document.createElement("div");
  sketchRow.className = "rows";

for(let i = 0; i < input; i++) {
    var block = document.createElement("div");
        block.className = "blocks";
            sketchRow.appendChild(block)
}
    sketchBox.appendChild(sketchRow);
}

//Function that creates a grid of divs inside the sketch area
 //by repeatedly calling the create row function

function createGrid(input = 16) {
    for(let i = 0; i < input; i++) {
        createRow(input);
    }
    mouseOverDetect();
}

function clearGrid() {
    while(sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.firstChild);
    }
}
function mouseOverDetect() {
    let blockList = Array.from(document.getElementsByClassName("blocks"));
    blockList.forEach(item => item.addEventListener("mouseover",event => {
       item.classList.add("b2");   
    }))
}

var resetButton = document.querySelector("button");

resetButton.addEventListener("click",()=> {
    clearGrid();
    let userInput = prompt("How many squares would you like?");
    createGrid(userInput);
}

) 