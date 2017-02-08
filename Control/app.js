'use strict';

setInterval(moveObject, 20);
setInterval(moveObjectDouble, 20);

var delta = 400;
//
// $(document).keydown(function moving(event) {
//   // console.log(event);
//   if ((event.keyCode === 37) && (directionObjects.left.keyPressed === false)) {
//     directionObjects.left.lastKeydownTime = event.timeStamp;
//     $('.movementObject').animate({left: '-=5px'}, 0);
//   }
//   if ((event.keyCode === 38) && (directionObjects.up.keyPressed === false)) {
//     directionObjects.up.lastKeydownTime = event.timeStamp;
//     $('.movementObject').animate({top: '-=5px'}, 0);
//   }
//   if ((event.keyCode === 39) && (directionObjects.right.keyPressed === false)) {
//     directionObjects.right.lastKeydownTime = event.timeStamp;
//     $('.movementObject').animate({left: '+=5px'}, 0);
//   }
//   if ((event.keyCode === 40) && (directionObjects.down.keyPressed === false)) { //keycode for down
//     directionObjects.down.lastKeydownTime = event.timeStamp; //logging timestamp for the keydown event
//     $('.movementObject').animate({top: '+=5px'}, 0); //moving object down.
//   }
// });
// $(document).keyup(function movementTiming(event) {
//   if (event.keyCode === 37) {
//     directionObjects.left.keyPressed = true;
//     // setTimeout(function() {directionObjects.left.keyPressed = false}, delta);
//   }
//   if (event.keyCode === 38) {
//     directionObjects.up.keyPressed = true;
//     // setTimeout(function() {directionObjects.up.keyPressed = false}, delta);
//   }
//   if (event.keyCode === 39) {
//     directionObjects.right.keyPressed = true;
//     // setTimeout(function() {directionObjects.right.keyPressed = false}, delta);
//   }
//   if (event.keyCode === 40) { //keycode for down
//     directionObjects.down.keyPressed = true; //setting down keyPressed value to true
//     // setTimeout(function() {directionObjects.down.keyPressed = false}, delta); //calling a function that waits for delta time before setting down keyPressed value to false.
//   }
// });
//
// $(document).keydown(function doublePressMovement(event) {
//   if ((event.keyCode === 37) && (directionObjects.left.keyPressed === true)) {
//     console.log(directionObjects.left.keyPressed + ' left Double');
//     directionObjects.left.keyPressed = true;
//     $('.movementObject').animate({left: '-=20px'}, 0);
//   }
//   if ((event.keyCode === 38) && (directionObjects.up.keyPressed === true)) {
//     console.log(directionObjects.up.keyPressed + ' up Double');
//     directionObjects.up.keyPressed = true;
//     $('.movementObject').animate({top: '-=20px'}, 0);
//   }
//   if ((event.keyCode === 39) && (directionObjects.right.keyPressed === true)) {
//     console.log(directionObjects.right.keyPressed + ' right Double');
//     directionObjects.right.keyPressed = true;
//     $('.movementObject').animate({left: '+=20px'}, 0);
//   }
//   if ((event.keyCode === 40) && (directionObjects.down.keyPressed === true)) {
//     console.log(directionObjects.down.keyPressed + ' down Double');
//     directionObjects.down.keyPressed = true;
//     $('.movementObject').animate({top: '+=20px'}, 0);
//   }
// });
// var directionObjects = {
//   /*
//   left mapped at keyboard keyCode 37
//   right mapped at keyboard keyCode 39
//   up mapped at keyboard keyCode 38
//   down mapped at keyboard keyCode 40
//   */
//   left : {
//     keyPressCode : 37,
//     keyPressed: false,
//     lastKeydownTime : 0,
//     singlePressMovement : $('.movementObject').animate({left: '-=5px'}, 0),
//     doublePressMovement : $('.movementObject').animate({left: '-=5px'}, 0)
//   },
//   right :  {
//     keyPressCode : 39,
//     keyPressed: false,
//     lastKeydownTime : 0,
//     singlePressMovement : $('.movementObject').animate({left: '+=5px'}, 0),
//     doublePressMovement : $('.movementObject').animate({left: '+=10px'}, 0)
//   },
//   up :  {
//     keyPressCode : 38,
//     keyPressed: false,
//     lastKeydownTime : 0,
//     singlePressMovement : $('.movementObject').animate({top: '-=5px'}, 0),
//     doublePressMovement : $('.movementObject').animate({top: '-=10px'}, 0)
//   },
//   down :  {
//     keyPressCode : 40,
//     keyPressed: false,
//     lastKeydownTime : 0,
//     singlePressMovement : $('.movementObject').animate({top: '+=5px'}, 0),
//     doublePressMovement : $('.movementObject').animate({top: '+=10px'}, 0)
//
//   }
// };

var keys = {};
var keysPressed = {};
var previousTimeStamps = {};
$(document).keydown(function(event) {
  keys[event.keyCode] = true;

  keysPressed[event.keyCode] = event.timeStamp;
  console.log(keys);
  console.log(keysPressed);
  // keys[event.timeStamp] = true;
  // console.log(keys[event.keyCode]);
});

$(document).keyup(function(event) {
  storePreviousTimeStamp(event);
  delete keys[event.keyCode];
})
function storePreviousTimeStamp (event) {
  previousTimeStamps[event.keyCode] = keysPressed[event.keyCode];
}

function doubleKeyPressTimeCheck(direction) {
  if (keysPressed[direction] - previousTimeStamps[direction] <= delta) {
    return true;
  } else {
    return false;
  }
}
function doubleKeyPressTimeRefresh (direction) {
  previousTimeStamps[direction] += 380;
}
function moveObjectDouble() {
  for (var direction in keys) {
    if (!keys.hasOwnProperty(direction)) continue;
    // console.log('hasOwnProperty');
    console.log(direction);
    // console.log(keys[event.code]);
    if (direction == 37 && doubleKeyPressTimeCheck(direction)){
      doubleKeyPressTimeRefresh (direction);
      console.log('left');
      $('.movementObject').animate({left: '-=10px'}, 0);
    }
    if (direction == 38 && doubleKeyPressTimeCheck(direction)){
      doubleKeyPressTimeRefresh(direction);
      console.log('up');
      $('.movementObject').animate({top: '-=10px'}, 0);
    }
    if (direction == 39 && doubleKeyPressTimeCheck(direction)){
      doubleKeyPressTimeRefresh(direction);
      console.log('right');
      $('.movementObject').animate({left: '+=10px'}, 0);
    }
    if (direction == 40 && doubleKeyPressTimeCheck(direction)){
      doubleKeyPressTimeRefresh(direction);
      console.log('down');
      $('.movementObject').animate({top: '+=10px'}, 0);
    }
  }
}
function moveObject() {
  for (var direction in keys) {
    if (!keys.hasOwnProperty(direction)) continue;
    // console.log('hasOwnProperty');
    console.log(direction);
    // console.log(keys[event.code]);
    if (direction == 37){
      console.log('left');
      $('.movementObject').animate({left: '-=5px'}, 0);
    }
    if (direction == 38){
      console.log('up');
      $('.movementObject').animate({top: '-=5px'}, 0);
    }
    if (direction == 39){
      console.log('right');
      $('.movementObject').animate({left: '+=5px'}, 0);
    }
    if (direction == 40){
      console.log('down');
      $('.movementObject').animate({top: '+=5px'}, 0);
    }
  }
}

// var lastKeypressTime = 0;
// function keyHandler() {
//   var thisKeypressTime = new Date();
//   if ($(document).keydown(event.keyCode) === 37) {
//     if (thisKeypressTime - lastKeypressTime <= delta) {
//       $('.movementObject').animate({left: '-=10px'}, 0);
//       thisKeypressTime = 0;
//     }
//   }
//   if ($(document).keydown(event.keyCode) === 38) {
//     if (thisKeypressTime - lastKeypressTime <= delta) {
//       $('.movementObject').animate({top: '-=10px'}, 0);
//       thisKeypressTime = 0;
//     }
//   }
//   if ($(document).keydown(event.keyCode) === 39) {
//     if (thisKeypressTime - lastKeypressTime <= delta) {
//       $('.movementObject').animate({left: '+=10px'}, 0);
//       thisKeypressTime = 0;
//     }
//   }
//   if ($(document).keydown(event.keyCode) === 40) {
//     if (thisKeypressTime - lastKeypressTime <= delta) {
//       $('.movementObject').animate({top: '+=10px'}, 0);
//       thisKeypressTime = 0;
//     }
//   }
// }
// keyHandler();
