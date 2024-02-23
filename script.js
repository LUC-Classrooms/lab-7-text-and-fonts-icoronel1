/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Times");
}

var phrase1 = "Welcome to my problems..."
var phrase2 = "It's not an invitation."
var phrase = "";

function draw() {
  background(200);
  //textSize(12);
  //textFont("Times")
  //text("one small step for a man ...", 20, 60);
  //textFont("Courier")
  if(mouseIsPressed){
    textSize(32);
    //text("one giant leap for mankind.", 50, 140);
    phrase = phrase2
  } else {
    textSize(12);
  //textFont("Times")
    //text("one small step for a man ...", 50, 140);
    phrase = phrase1
  }
  text(phrase, 180, 120);

}
