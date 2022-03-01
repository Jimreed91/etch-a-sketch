var sketchBox = document.querySelector("#sketch-box");

createRow();

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
}