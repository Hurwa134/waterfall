
//Note: global variables and setup function moved to sketch.js

//global variables below

// let lineWidth = 4;
// let lineLength = lineWidth;
// let pattern = [];
// let lastrowIndex = 0;
// let screenWidth = 0;
// let screenHeight = 0;
// let waterfallWidth = 0;
// //position of second changed row, in fraction of the waterfall height
// let changeProportion= 0.5;
// let secondchangedRow;
// let sizeRandomized = 0.01;
// let positionRandomized = 0.1;

// //framerate
// let fr = 100;

// rowNum = 0;
// squareNum = 0; 

// function setup() {
// //(frames per second)
// frameRate(fr);
//    screenWidth = displayWidth;
//    screenHeight = displayHeight;
//    waterfallWidth = screenWidth/3;
//   createCanvas(screenWidth, screenHeight);
//   rowNum = ceil(screenHeight/lineLength) ;
//   squareNum = ceil(waterfallWidth/lineWidth);
//   //setting the next randomized row at a proportional point in the waterfallHeight
//   secondchangedRow = int(rowNum * changeProportion);
// }

function waterfall() { 
background(0);
stroke(0);
fill(255);
rect(screenWidth/2 - waterfallWidth/2 + lineWidth, 0, waterfallWidth - lineWidth * 2, screenHeight);
//setting first row0 at top
if (lastrowIndex == 0) {
  randomRow(0);
}
  pattern[lastrowIndex +1] = [];
    for (let i = 0; i <= lastrowIndex; i++){
    shiftRow(lastrowIndex-i);
        }
changeRow(0);
     if (lastrowIndex < rowNum){ 
    lastrowIndex = lastrowIndex + 1;
  }
  if (lastrowIndex >= secondchangedRow){
    oppositeRow(secondchangedRow);
  }
}

//randomly sets row 0 the first time
function randomRow(rowIndex){
  squarestartX = screenWidth/2 -waterfallWidth/2;
  squarestartY = rowIndex * lineLength;
  
  pattern[rowIndex]=[];
  for (let i = 0; i < squareNum; i++) {
  
  myColor = random(0,255);
  if (myColor > 127) {
  myColor = 0;
} else {
  myColor = 255;
}
  //matrix that holds the colors
    pattern[rowIndex][i] = myColor;
    randomPoint(squarestartX, squarestartY, squarestartX, squarestartY + lineLength, myColor, lineWidth);
    squarestartX = squarestartX + lineWidth; 
    
    } 
}

function oppositeRow(rowIndex){
  squarestartX = screenWidth/2 -waterfallWidth/2;
  squarestartY = rowIndex * lineLength;
  
  for (let i = 0; i < squareNum; i++) {
  myColor = pattern[rowIndex][i];
  if (myColor == 255) {
  myColor = 0;
  }
 else {
  myColor = 255;
}
  //matrix that holds the colors
    pattern[rowIndex][i] = myColor;
    stroke(myColor);
    strokeWeight(lineWidth);
    randomPoint(squarestartX, squarestartY, squarestartX, squarestartY + lineLength, myColor, lineWidth);
   
    squarestartX = squarestartX + lineWidth; 
    } 
}

//shifts row down one
function shiftRow(rowIndex){
  squarestartX = screenWidth/2 -waterfallWidth/2;
  squarestartY = rowIndex * lineLength;
 
  for (let i = 0; i < squareNum; i++) {
  pattern[rowIndex+1][i]=pattern[rowIndex][i];
  myColor = pattern[rowIndex +1][i];
  randomPoint(squarestartX, squarestartY, squarestartX, squarestartY + lineLength, myColor, lineWidth);
  squarestartX = squarestartX + lineWidth; 
    } 
}

// creating the pattern for new incoming row 0
// creating the pattern 
function squareColor(squareRow,squareColumn){
  let oldColor = [];
  
  //column zero
  if (squareColumn == 0){
    oldColor[0] = pattern[squareRow + 1][0];
    oldColor[1] = pattern[squareRow + 1][1];
    
    if (oldColor[0] == oldColor[1]){
     return oldColor[0];
    } 
     return oldColor[1];
    }
    
  //last column (column on right)
    if (squareColumn == squareNum -1){
    oldColor[0] = pattern[squareRow + 1][squareNum -2];
    oldColor[1] = pattern[squareRow + 1][squareNum -1];
    
    if (oldColor[0] == oldColor[1]){
     return oldColor[0];
    } 
     return oldColor[0];
    }
  
    //columns b/w the left (first) and right (last)
  oldColor[0] = pattern[squareRow + 1][squareColumn-1];
  oldColor[1] = pattern[squareRow + 1][squareColumn];
  oldColor[2] = pattern[squareRow + 1][squareColumn + 1]; 
  
  if((oldColor[2] == oldColor[1]) && (oldColor[0] == oldColor[1]))  {
    return oldColor[0];
     }
  if(oldColor[1] == oldColor[2]) {
    return oldColor[0];
   }

  if(oldColor[0] == oldColor[1]){
    return oldColor[2];
   }
   //introducing grey scale
  //  return random(0,255);

  a = random(0,255);
  if (a < 127) {
  return 0;
   }
  else {
    return 255;
   }
  }

function changeRow(rowNumber){
  for (let i = 0; i < squareNum; i++){
   newColor = squareColor(rowNumber,i);
    randomPoint(squarestartX, squarestartY, squarestartX, squarestartY + lineLength, newColor, lineWidth);
    pattern[0][i] = newColor;
  }   
}

//random lines below, replaced by random points.

// function randomLine(x1, y1, x2,y2, color, width){
//   stroke(color);
//   strokeWeight(width);
//   shift = lineRandomized * lineLength;
//   x1shift = random(-shift,shift);
//   y1shift = random(-shift,shift);
//   x2shift = random(-shift,shift);
//   y2shift = random(-shift,shift);
//   line (x1 + x1shift, y1 + y1shift, x2 + x2shift, y2 + y2shift);
// }

function randomPoint(x1, y1, x2,y2, color, width){
  stroke(color);
  sizeShift = random(-sizeRandomized * width, sizeRandomized * width);
  strokeWeight(width + sizeShift);
  shift = positionRandomized * lineLength;
  x1shift = random(-shift,shift);
  y1shift = random(-shift,shift);
  point ((x1 + x2)/2 + x1shift, (y1 + y2)/2 + y1shift);
}
