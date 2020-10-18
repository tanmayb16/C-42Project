//Creating Variables
var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);

//Drawing Second Hand
   push();
   translate(200,200);
   rotate(scAngle); 
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

//Drawing Minute Hand
   push();
   translate(200,200);
   rotate(mnAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,75,0);
   pop()

//Drawing Hour Hand
   push();
   translate(200,200);
   rotate(hrAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,50,0);
   pop()
  drawSprites();
}