// adapted from source: https://kylemcdonald.github.io/cv-examples/

let lineWidth = 4;
let lineLength = lineWidth;
let pattern = [];
let lastrowIndex = 0;
let screenWidth = 0;
let screenHeight = 0;
let waterfallWidth = 0;
//position of second changed row, in fraction of the waterfall height
let changeProportion= 0.5;
let secondchangedRow;
let sizeRandomized = 0.01;
let positionRandomized = 0.1;

//framerate
let fr = 100;

rowNum = 0;
squareNum = 0; 
var capture;
var previousPixels;
var flow;
var w = screenWidth;
    h = screenHeight;
var step = 8;
var threshold = 10;

var uMotionGraph, vMotionGraph;

function setup() {

//(frames per second)
frameRate(fr);
screenWidth = displayWidth;
screenHeight = displayHeight;
waterfallWidth = screenWidth/3;
createCanvas(screenWidth, screenHeight);
rowNum = ceil(screenHeight/lineLength) ;
squareNum = ceil(waterfallWidth/lineWidth);
//setting the next randomized row at a proportional point in the waterfallHeight
secondchangedRow = int(rowNum * changeProportion);

    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    capture.hide();
    flow = new FlowCalculator(step);
    //these are objects for holding the two graphs
    uMotionGraph = new Graph(100, -step / 2, +step / 2);
    vMotionGraph = new Graph(100, -step / 2, +step / 2);
}

function copyImage(src, dst) {
    var n = src.length;
    if (!dst || dst.length != n) dst = new src.constructor(n);
    while (n--) dst[n] = src[n];
    return dst;
}

function same(a1, a2, stride, n) {
    for (var i = 0; i < n; i += stride) {
        if (a1[i] != a2[i]) {
            return false;
        }
    }
    return true;
}


function draw() {

  waterfall();

    capture.loadPixels();
    if (capture.pixels.length > 0) {
        if (previousPixels) {

            // ignore duplicate frames
            if (same(previousPixels, capture.pixels, 4, width)) {
                return;
            }

            flow.calculate(previousPixels, capture.pixels, capture.width, capture.height);
        }
        previousPixels = copyImage(capture.pixels, previousPixels);
        
        

        if (flow.flow && flow.flow.u != 0 && flow.flow.v != 0) {
          //graphs
            uMotionGraph.addSample(flow.flow.u);
            vMotionGraph.addSample(flow.flow.v);

            strokeWeight(2);
            fill(255,0,0);
            flow.flow.zones.forEach(function(zone) {
                // stroke(map(zone.u, -step, +step, 0, 255),
                //     map(zone.v, -step, +step, 0, 255), 128);
                // line(zone.x, zone.y, zone.x + zone.u, zone.y + zone.v);

                length = sqrt(sq(zone.u)+sq(zone.v));
                if ((length > threshold) && 
                (zone.x > (screenWidth/2 - waterfallWidth/2 + lineWidth)) && 
                (zone.x < (screenWidth/2 + waterfallWidth/2 - lineWidth))) {
                ellipse(zone.x,zone.y,20,20);

                }
                
            })
        }

    }

}

