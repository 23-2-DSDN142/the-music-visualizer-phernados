let firstRun = true
let eyesImg;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   
 

if (firstRun) {
   rectMode(CENTER)
   eyesImg = loadImage('TVbg.png')
   firstRun = false
}

scale (0.5)
image(eyesImg, 0, 0)



//horozontal bars
 let bar_spacing = height /8;
 let bar_height = width / 20;
 let bar_pos_x = width / 1;


let red = color("#c24138")
let orange = color("#d1a115")
let yellow = color("#ebe546")
let green = color("#9dcc3f")
let blue = color("#0d43d9")
let purple = color("#7b44ab")

noStroke()

    //vocal bar
let lerpMap = map(vocal,0,100,0,1)

let middlecolor1 = lerpColor(orange,blue,lerpMap)
   fill(middlecolor1);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   // drum bar 

let middlecolor2 = lerpColor(red,green,lerpMap)
   fill(middlecolor2);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   
   // bass bar 

   // var bass1Map = map(bass, 50, 0, 60, 0);
   // let bassLerpAmount = map(bass, 10 , 10, 10, 2);
   let middlecolor3 = lerpColor(yellow,purple,lerpMap)
   fill(middlecolor3);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
  
 
   // other bar 
   fill(middlecolor1);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   fill(255, 255, 0);
 
   // // display "words"
   // textAlign(CENTER);
   // textSize(vocal);
   // text(words, bar_pos_x, height/3);





// BAR BASS

   colorMode (HSB, 100);
   
   rectMode(CENTER);
   strokeWeight(9)
   stroke(bass,80,40)
  
   
   var bassMap =map(bass, 0, 100, 30, 90)
   var lengthOfLine = 100; //width of bar
   var lineStart = 100;
   var lineEnd = lineStart + lengthOfLine;
   
   for (var i =1; i <=bassMap; i++){
      var lineStep = i*10;
      line(lineStart, lineStep-50, lineEnd, lineStep-100);
   }

   
// BAR DRUMB

colorMode (HSB, 100);
   
rectMode(CENTER);
strokeWeight(9)
stroke(drum,80,40)


var drumMap =map(drum, 0, 100, 30, 90)
var lengthOfLine = 100; //width of bar
var lineStart = 250;
var lineEnd = lineStart + lengthOfLine;

for (var i =1; i <=drumMap; i++){
   var lineStep = i*10;
   line(lineStart, lineStep-50, lineEnd, lineStep-100);
}


// BAR VOCALS

   colorMode (HSB, 100);
   
   rectMode(CENTER);
   strokeWeight(9)
   stroke(vocal,80,40)
   
   
   var vocalMap =map(vocal, 0, 100, 30, 90)
   var lengthOfLine = 100; //width of bar
   var lineStart = 1750;
   var lineEnd = lineStart + lengthOfLine;
   
   for (var i =1; i <=vocalMap; i++){
      var lineStep = i*10;
      line(lineStart, lineStep-100, lineEnd, lineStep-50);

   }

// BAR OTHER

   colorMode (HSB, 100);
   
   rectMode(CENTER);
   strokeWeight(9)
   stroke(other,80,40)
  
   
   var otherMap =map(other, 0, 100, 30, 90)
   var lengthOfLine = 100; //width of bar
   var lineStart = 1600;
   var lineEnd = lineStart + lengthOfLine;
   
   for (var i =1; i <=otherMap; i++){
      var lineStep = i*10;
      line(lineStart, lineStep-100, lineEnd, lineStep-50);
   }
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
