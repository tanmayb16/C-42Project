//Creating Variables
var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90); 
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  
//Drawing Second Hand
   push();
   rotate(scAngle); 
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

//Drawing Minute Hand
   push();
   rotate(mnAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,75,0);
   pop()

//Drawing Hour Hand
   push();
   rotate(hrAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,50,0);
   pop()

   noFill();
   strokeWeight(10);
   stroke("red")
   arc(0,0,300,300,0,scAngle)
   stroke("green")
   arc(0,0,270,270,0,mnAngle)
   stroke("blue")
   arc(0,0,240,240,0,hrAngle)
}