var oscil;
var freq;
var amp;

var a;


function setup() {

  createCanvas(displayWidth, displayHeight);
  
  oscil = new p5.Oscillator("sine");
  oscil.start();
  oscil.amp(0);
  
  
  button = createButton('play')
  button.position(0,430);
  button.mousePressed(play);
  
  C4 = createButton('C4')
  C4.position(20,350);
  // C4.mousePressed(play);
  
}

function draw() {
  background(255);
  
  strokeWeight(1);
  tint(255, 255, 255);
  noFill();
  rect(10, 10, 70, 400); //도
  rect(80, 10, 70, 400); //레
  rect(150, 10, 70, 400); //미
  rect(220, 10, 70, 400); //파
  rect(290, 10, 70, 400); //솔
  rect(360, 10, 70, 400); //라
  rect(430, 10, 70, 400); //시
  rect(500, 10, 70, 400); //도

  fill(0,0,0);
  rect(55, 10, 50, 210); //도#
  rect(125, 10, 50, 210); //레#
  rect(265, 10, 50, 210); //파#
  rect(335, 10, 50, 210); //솔#
  rect(405, 10, 50, 210); //라#

   fill('magenta');
  
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 30, 30);
  }
      // for each touch, draw an ellipse at its location.
  // touches are stored in array.

 
}


function play(){
  oscil.freq(520);
  oscil.amp(0.2);
}



function mousePressed() {

  if (mouseX < 100) {

    console.log("1번");

    oscil.freq(262);

    oscil.amp(0.2);

    oscil.start();

  }

  if (mouseX > 100) {

    if (mouseX < 200) {

      console.log("100 보다 큼");

      oscil.freq(294);

      oscil.amp(0.2);

      oscil.start();

    }
  }
}

// function touchStarted(){
 

//     if (touches > 10) {
//       if (touches < 80) {
//         if (touches > 10) {
//           if (touches< 400) {
//             console.log("touches");
//             /*fill(0, 255, 0, 5);
//             strokeWeight(5);
//             rect(10, 10, 70, 480);*/
//             oscil.freq(440);
//             oscil.amp(0.3);     
//             oscil.start();
         
//         }
//       }
//     }
//   }
  

// }

// do this prevent default touch interaction
// function mousePressed() {
//   return false;
// }

// document.addEventListener('gesturestart', function(e) {
//   e.preventDefault();
// });