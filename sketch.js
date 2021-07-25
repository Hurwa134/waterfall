let squareSize = 9;
let pattern = [];
let lastrowIndex = 0;
let screenWidth = 0;
let screenHeight = 0;
let waterfallWidth = 0;

rowNum = 0;
squareNum = 0; 

let y = 0;
let y2 = -50;

var timeforcolorchange = false;
let fillColor = 0;


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

noStroke();

// stroke(255);
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

  if (timeforcolorchange){
    fillColor = random(255);
    timeforcolorchange = false; 
  }
  
  fill(fillColor);
  
  rect(70, y, 50, 80);
  rect(200, y2, 50, 80);
  
  y += 3;
  y2 += 3;
  
  if(y > squareSize){
    y = 0;
    y2 = -50;
    timeforcolorchange = true;
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
  fill(myColor);
    square(squarestartX, squarestartY + squareSize,squareSize);
    squarestartX = squarestartX + squareSize; 

    } 
}

function squareColor(squareRow,squareColumn){
  let oldColor = [];

  if (squareColumn == 0){
    oldColor[0] = pattern[squareRow + 1][0];
    oldColor[1] = pattern[squareRow + 1][1];

    if (oldColor[0] == oldColor[1]){
    if (oldColor[0] < 0){
      return 0;
    }
      if (oldColor[0] > 255){
        return 255;
      }
     return int(oldColor[0]);
    } 
    else {
       if (oldColor[0] < 0){
      return 0;
    }
      if (oldColor[0] > 255){
        return 255;
      }
     return int(oldColor[1]);
    }

  }

    if (squareColumn == squareNum -1){
    oldColor[0] = pattern[squareRow + 1][squareNum -2];
    oldColor[1] = pattern[squareRow + 1][squareNum -1];

    if (oldColor[0] == oldColor[1]){
       if (oldColor[0] < 0){
      return 0;
    }
      if (oldColor[0] > 255){
        return 255;
      }
     return int(oldColor[0]);
    } 
    else {
       if (oldColor[0] < 0){
      return 0;
    }
      if (oldColor[0] > 255){
        return 255;
      }
     return int(oldColor[0]);
    }
  }

  oldColor[0] = pattern[squareRow + 1][squareColumn-1];
  oldColor[1] = pattern[squareRow + 1][squareColumn];
  oldColor[2] = pattern[squareRow + 1][squareColumn + 1]; 

  if((oldColor[2] == oldColor[1]) && (oldColor[0] == oldColor[1]))  {
     if (oldColor[0] < 0){
      return 0;
    }
      if (oldColor[0] > 255){
        return 255;
      }
    return int(oldColor[0]);
     }
  if(oldColor[1] == oldColor[2]) {
     if (oldColor[0] < 0){
      return 0;
    }
      if (oldColor[0] > 255){
        return 255;
      }
    return int(oldColor[0]);
}

  if(oldColor[0] == oldColor[1]){
     if (oldColor[0] < 0){
      return 0;
    }
      if (oldColor[0] > 255){
        return 255;
      }
    return int(oldColor[2]);
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
    fill(newColor);
    square(i * squareSize + screenWidth/2 -waterfallWidth/2, 0, squareSize); 
    pattern[0][i] = newColor;
  }   

}







