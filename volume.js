var pi = Math.PI;

var sphereRadius = 15;

var coneBase = 11;
var coneHeight = 22;

var rectLength = 5;
var rectHeight = 11;
var rectWidth = 467;

var volume = 4*pi*sphereRadius^2; 

var coneRadius = coneBase/2
var coneVolume = pi*coneRadius^2*(coneHeight/3);

var rectangularPrism = rectLength*rectHeight*rectWidth;

 

var coneSide= Math.sqrt(Math.pow(coneHeight, 2) + Math.pow(coneRadius, 2));



if (coneRadius <= rectHeight && coneRadius <= rectLength && coneHeight<=rectWidth) {
    console.log("It fits");
} else { 
    console.log ("It won't fit");
};


var coneSquare = coneHeight - coneRadius;

if (coneSquare/coneRadius >= coneSide/coneRadius) {
    console.log("it fits")
} else {
    console.log("doesn't fit")
}