let squareSize = 3;
let pattern = [];
let lastrowIndex = 0;
let screenWidth = 0;
let screenHeight = 0;
let waterfallWidth = 0;

rowNum = 0;
squareNum = 0; 


function setup() {
  // background(0);
  
   screenWidth = windowWidth;
   screenHeight = windowHeight;
   waterfallWidth = screenWidth/3;
  createCanvas(screenWidth, screenHeight);
  rowNum = ceil(screenHeight/squareSize) ;
  squareNum = ceil(waterfallWidth/squareSize);
}



function draw() { 
background(0);
stroke(255);
fill(255);
rect(screenWidth/2 -waterfallWidth/2, 0, waterfallWidth, screenHeight);
row0(screenWidth/2 -waterfallWidth/2,0); 

  pattern[lastrowIndex +1] = [];
    for (let i = 0; i <= lastrowIndex; i++){
    shiftRow(lastrowIndex-i);
        }
changeRow0();
     if (lastrowIndex < rowNum){ 
    lastrowIndex = lastrowIndex + 1;
  }
   
}

function row0(topLeftX,topLeftY){
  // randomSeed(99);
  
  squarestartX = topLeftX;
  squarestartY = topLeftY;
  
  pattern[0]=[];
  for (let i = 0; i < squareNum; i++) {
  
  myColor = random(0,255);
  if (myColor > 127) {
  myColor = 0;
} else {
  myColor = 255;
}
  
    pattern[0][i] = int(myColor);
  stroke(myColor);
  fill(myColor);
  square(squarestartX, squarestartY,squareSize);
   
    squarestartX = squarestartX + squareSize; 
    
    } 
}

function shiftRow(rowIndex){
  squarestartX = screenWidth/2 -waterfallWidth/2;
  squarestartY = rowIndex * squareSize;
 
  for (let i = 0; i < squareNum; i++) {
  pattern[rowIndex+1][i]=pattern[rowIndex][i];
  myColor = pattern[rowIndex +1][i];
  
// pattern[rowIndex][i] = 255; 
//   fill(255);
//   square(squarestartX, squarestartY,squareSize);
  stroke(myColor);
  strokeWeight(squareSize);
    line(squarestartX, squarestartY, squarestartX, squarestartY + squareSize);
    squarestartX = squarestartX + squareSize; 
    } 
}

// creating the pattern for new incoming row 0

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

  a = random(0,255);
  if (a < 127) {
  return 0;
   }
  else {
    return 255;
   }
  }

function changeRow0(){
  for (let i = 0; i < squareNum; i++){
   newColor = squareColor(0,i);
    stroke(newColor);
    strokeWeight(squareSize);
    line(squarestartX, squarestartY, squarestartX, squarestartY + squareSize);
    pattern[0][i] = newColor;
  }   
}
