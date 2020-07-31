// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, Image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY,
          noFill, song1, song2, loadSound, strokeWeight, noCanvas, windowWidth, windowHeight */

let timerValue;
let circleImg;

function setup() {
  // Code here runs only once
  noCanvas();
  timerValue = 0;
  
  // //if button 1 is pressed, call Button30Seconds()
  // var button1 = document.getElementById("30SecButton");

  //if button 2 is pressed, call Button30Seconds()
  var button2 = document.getElementById("60SecButton");

  //testing if image disappears
  var htmlCircle = document.getElementById("circle");
}

function draw() {
  // Code here runs continuously
  //delete this later
  // circleImg = loadImage(
  //   "https://cdn.glitch.com/196bd06d-f7f0-4191-b8f8-be7e20abfac1%2Fbreathein.gif?v=1595998594991"
  // );
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
    console.log(timerValue);
    revealCircle();
  }
}


//reveals and removes circle based on the value of the timer
function revealCircle() {
  //display gif if timer value is greater than 0
  if (timerValue > 0) {
    console.log("displaying gif");
    document.getElementById("circle").style = "display:block";
  }
  //removes gif timer
  if (timerValue == 0) {
    console.log("remove gif");
    document.getElementById("circle").style = "display:none";
  }
}

document.getElementById("button1").addEventListener("click", myFunction);

function myFunction(){
  timerValue = 30;
  setInterval(timeIt, 1000);
}

document.getElementById("button2").addEventListener("click", myFunction2);

function myFunction2(){
  timerValue = 60;
  setInterval(timeIt, 1000);

}

//code referenced for timer: https://editor.p5js.org/leighann_derck/sketches/ml9DauYuf
//might be useful for buttons https://stackoverflow.com/questions/24646285/how-to-change-field-on-html-file-when-button-is-pressed
//issue: write in the buttons
