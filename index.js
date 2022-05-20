/*   It is same to target a 'class' and 'id' in javascript document object model(DOM) as css by '.' and '#' notation respectively
(eg. document.querySelectorAll(".class"))
querySelectorAll give us all the elements of the target in an array. We can pick the required items of the array by the index
(eg. document.querySelectorAll(".drum")[0])
By "querySelectorAll" we can select a class inside an HTML element (eg. document.querySelectorAll("element.class")).
 The order the target follows in DOM is the heirachical order (like father son tree).
We use dot notation (.) in javascript to get to a target.   */


// For the button pressed in the webpage:

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  /*  we can have the information of which button is clicked by "this" command.
  "this" command is used in many cases in javascript like to create a object constructor function."this" means that function.
  "addEventListener" will have two object, one is the event which it listenes and the other one is the function which will be carried out when it
  listenes to the given event.
  "click" is used as a event of mouse click at a button of the website.
  In addEventListener we pass on a function or method as input of another function. This type of function in which we can pass on a function as it's
  input is known as higher order function.
  In addEventListener we use a annonymus function that is a function having no name, In that case the function will wait for the event to occur and then execute.
  We can use the name of the function in addEventListener but without the '()', to wait for the event to happen. In this case we write the function separately. */

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button = this.innerHTML;
    /*  We will pass the "innerHTML" of the button as a input to the "makeSound" function.  */

    makeSound(button);
    /*  To do the animation on the pressed button  */

    doAnimation(button);
  });
}



// For the keypressed in the keyboard
/*  "keypress" is an event which will trigger when a keyboard button is pressed.
Annonymus function which will be triggered when a keyboard button press is happen is written as "function(e) or function(event)".
We give the function an input/argument "e or event" to know about the keyboard event or the button which is pressed on keyboard.
by "console.log(event)" we get all the information of the keybord event where we have the information about the "key" pressed.
We target the whole "document" or the webpage when we addEventListener for a "keypress" that is a keyboard button pressed when we are on the webpage.
The function which is passed on as an input/argument to a higher order function is called as callback function.
Callback functions are called by the object that experiences the specified event (such as "click", "keypress" etc).
When we a "addEventListener" it will first detect the event which is happened and then make that event an "object".
For example:document.addEventListener("keypress", function(event){console.log(event);}); - here it will generate the keypress as an object, as keyboard event.
For example: keyBoardEvent{isTrusted:true,key:"w",location:0,ctrlKey:false,....}
We write an object as : var object={character:'char',integer:2,boolean:true,string:["string[0]","string[1]"}.
An object can take any data types, parameters of the object are like variables.
After that the callback function of the addEventListener is get called.
We can access the information about the event by the input/argument of the callback function.(commonly written as function(e) or function(event)).
From "event" or "e" we can get the information about the event object.  */

document.addEventListener("keypress", function(event) {
  /*  By the "event.key" command we get the key of the keyboard button pressed as a character.  */

  var keyPressed = event.key;
  /*  We will pass the key value of the event(button pressed in the keyboard) as an input to the "makeSound" function.  */

  makeSound(keyPressed);
  /*  To do the animation on the pressed keyboard button  */

  doAnimation(keyPressed);
})


// Function for checking the key pressed and make sound accordingly:

function makeSound(key) {
  /*  'switch' and 'if/else' statement is same we use switch statement in cases where we know all the conditions exactly, 'if/else' is prefered in
  '<' and '>' etc. cases.
  switch syntax has expression inside (), expression can be an array of items, we have the items of the array as cases in switch statement.
  At the end of one switch case we have "break;", to breakout of the switch.  */

  switch (key) {
    case 'w':
      /*  Audio is an object constructor function. In javascript in writting object constructor function we do not use 'camel casing', instead
      we use the first letter 'capital' for object constructor function.
      "new" keyword is used to create a new object from a object constructor function in javascript which can be accessed by assigning
       the new object to a variable.  */

      var tom1 = new Audio("sounds/tom-1.mp3");
      // ".play" is a method which plays a audio file.

      tom1.play();
    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'l':
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
      /*  "default" condition is like the else statement in if/else. Default switch will trigger if the none of the switches are triggered.
      It is good practice to write a default statement in switch.  */

    default:
      /*  Donot do anything.  */
  }
}


// Function to create animation when a button is pressed.

function doAnimation(key) {
  /*  It will give the pressed key (which will be a character) in class format by adding dot before it, to target the button by the class to animate it.  */

  var activeButton = "." + key;
  /*  It will add css class "pressed" to the targeted button to add the effects of animation when the button is triggered.  */

  document.querySelector(activeButton).classList.add("pressed");
  /*  To remove the animation class after timeout.
  "setTimeout" is a function which will take a function and time as an input. It will execute the function after the given time.
  The time is in milliseconds in "setTimeOut" function input.  */

  setTimeout(function() {
    /*  It will remove the class which is used to add animation effect from the targeted button. */

    document.querySelector(activeButton).classList.remove("pressed");
  }, 100)
}
