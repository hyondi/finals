var oscil;
var freq;
var amp;

var a;


function setup() {

  createCanvas(displayWidth, displayHeight);
  
  oscil = new p5.Oscillator("sine");
  oscil.start();
  oscil.amp(0);
  
  
  // button = createButton('play');
  // button.position(0,430);
  // button.mouseClicked(play);
  
  C4 = createButton('C4');
  C4.position(15,230);
  C4.size(60,170);
  C4.mousePressed(playC4);
  
  D4 = createButton('D4');
  D4.position(85,230);
  D4.size(60,170);
  D4.mousePressed(playD4);
  
  E4 =createButton('E4');
  E4.position(155,230);
  E4.size(60,170);
  E4.mousePressed(playE4);
   
  F4 =createButton('F4');
  F4.position(225,230);
  F4.size(60,170);
  F4.mousePressed(playF4);
   
  G4 =createButton('G4');
  G4.position(295,230);
  G4.size(60,170);
  G4.mousePressed(playG4);
    
  A4=createButton('A4');
  A4.position(365,230);
  A4.size(60,170);
  A4.mousePressed(playA4);
  
  B4=createButton('B4');
  B4.position(435,230);
  B4.size(60,170);
  B4.mousePressed(playB4);
  
  C5=createButton('C5');
  C5.position(505,230);
  C5.size(60,170);
  C5.mousePressed(playC5);
   
  D4b = createButton('D4b');
  D4b.position(60,90);
  D4b.size(40,120);
  D4b.mousePressed(playD4b);
  
  E4b = createButton('E4b');
  E4b.position(130,90);
  E4b.size(40,120);
  E4b.mousePressed(playE4b);
   
  G4b = createButton('G4b');
  G4b.position(270,90);
  G4b.size(40,120);
  G4b.mousePressed(playG4b);
  
  A4b = createButton('A4b');
  A4b.position(340,90);
  A4b.size(40,120);
  A4b.mousePressed(playA4b);
  
  B4b = createButton('B4b');
  B4b.position(410,90);
  B4b.size(40,120);
  B4b.mousePressed(playB4b);
  
  // base();

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


// function play(){
//   oscil.freq(520);
//   oscil.amp(0.2);
// }

function playC4(){
   console.log('C4');
    oscil.freq(262);
    oscil.amp(0.2);
    oscil.start();
}

function playD4(){
   console.log('D4');
    oscil.freq(294);
    oscil.amp(0.2);
    oscil.start();
}

function playE4(){
   console.log('E4');
    oscil.freq(330);
    oscil.amp(0.2);
    oscil.start();
}

function playF4(){
   console.log('F4');
    oscil.freq(350);
    oscil.amp(0.2);
    oscil.start();
}

function playG4(){
   console.log('G4');
    oscil.freq(392);
    oscil.amp(0.2);
    oscil.start();
}

function playA4(){
   console.log('A4');
    oscil.freq(440);
    oscil.amp(0.2);
    oscil.start();
}

function playB4(){
   console.log('B4');
    oscil.freq(494);
    oscil.amp(0.2);
    oscil.start();
}

function playC5(){
   console.log('C5');
    oscil.freq(523);
    oscil.amp(0.2);
    oscil.start();
}

function playD4b(){
   console.log('D4b');
    oscil.freq(277);
    oscil.amp(0.2);
    oscil.start();
}

function playE4b(){
   console.log('E4b');
    oscil.freq(311);
    oscil.amp(0.2);
    oscil.start();
}

function playG4b(){
   console.log('G4b');
    oscil.freq(370);
    oscil.amp(0.2);
    oscil.start();
}

function playA4b(){
   console.log('A4b');
    oscil.freq(415);
    oscil.amp(0.2);
    oscil.start();
}

function playB4b(){
   console.log('B4b');
    oscil.freq(466);
    oscil.amp(0.2);
    oscil.start();
}



// function base(){
//   if(C4.mouseClicked){
//     console.log('C4');
//     oscil.freq(262);
//     oscil.amp(0.2);
//     oscil.start();
//   }
  
//   if(D4.mouseClicked){
//     console.log('D4');
//     oscil.freq(294);
//     oscil.amp(0.2);
//     oscil.start();
//   }
// }


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