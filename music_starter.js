let firstRun = true
let eyesImg;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

   // background(20)

   
 

if (firstRun) {
   rectMode(CENTER)
   eyesImg = loadImage('eyesback.png')
   firstRun = false
}

textFont('Helvetica'); // please use CSS safe fonts

textSize(24);

 let bar_spacing = height /5;
 let bar_height = width / 20;
 let bar_pos_x = width / 1;

scale (0.5)
image(eyesImg, 0, 0)

 
   // vocal bar is red
let red = color("#c24138")
let orange = color("#d1a115")
let yellow = color("#ebe546")
let green = color("#9dcc3f")
let blue = color("#0d43d9")
let purple = color("#7b44ab")

let lerpMap = map(vocal,0,100,0,1)

let middlecolor1 = lerpColor(orange,blue,lerpMap)
   fill(middlecolor1);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
let middlecolor2 = lerpColor(red,green,lerpMap)
   fill(middlecolor2);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   let middlecolor3 = lerpColor(yellow,purple,lerpMap)
   fill(middlecolor3);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(middlecolor1);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, bar_pos_x, height/3);

}
   // let yPos = 0;
   // function setup() {
   //   // setup() runs once
   //   frameRate(30);
   // }
   // function draw() {
   //   // draw() loops forever, until stopped
   //   fill("#hhhhhh")
   //   background(204);
   //   yPos = yPos - 1;
   //   if (yPos < 0) {
   //     yPos = height;
   //   }
   //   line(0, yPos, width, yPos);
   // }
