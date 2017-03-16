//	•	Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to the button. That handler should call a function that displays the message “I have been clicked” out into an alert box.
   //OK  ANSWER
//function writeMessage() {
//	alert("I have been clicked");
//}

//	•	Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.
   //OK  ANSWER
//var myElement = document.getElementById("button1");
//myElement.onclick = function () {
//	alert("I have been clicked by Id");
//}

//	•	Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to the button and listens for the click event. When it’s heard, a user-defined function should be called and the message “I have been clicked” should be displayed out into an alert box.
    //OK   ANSWER
//button2.addEventListener("click", writeMessage, false);
//function writeMessage() {	
//	alert("I have been clicked with Event Listener");
//}


//	•	Modify the code within step 3 so that the code that displays an alert box is written directly within a callback function as opposed to a user-defined function.
   //OK   ANSWER
//button2.addEventListener("click", function () {
//	alert("I have been clicked with Event Listener");
//}, false);

//	•	Modify the code in step 4 so that you can write your script within the <head> tag of the page rather than underneath the button in the markup.
   
//OK but check if works when added to head-ANSWER
//button2.addEventListener("click", function () {
//	"use strict";
//	alert("I have been clicked with Event Listener");
//}, false);


//	•	Add a link to your web page. Add the text “Visit Google” to the link, set the ID to “redirect” and set the href attribute to http://www.google.com. Now, write a script that alerts the user that they clicked on the link but prevents the browser from also redirecting to the Google site.
   //OK   ANSWER	
//window.location.href = "http://www.sdccd.edu/";	
//window.alert("You clicked and will be redirected to a different site");
 

//	•	Add a text box and a button to a web page. Add an event listener to the button. When the click event is heard, the button should be disabled, and the text that the user input into the text box should be displayed within an alert box.
   //OK   ANSWER   
//button4.addEventListener("click", function() {
//	var textMsg = document.getElementById('txtArea');
//	alert(textMsg.value);
//});


//	•	Create a new page called newpage.html. You will now have 2 web pages including index.html and newpage.html. Add a button to index.html. When the button is clicked, newpage.html should appear as a popup window at 300 pixels wide by 300 pixels high. As soon as newpage.html loads however, resize the window to 500 pixels wide by 300 pixels high. You will need to handle the load event on newpage.html and use a BOM method on newpage.html to accomplish this task.
   //   ANSWER
//button5.addEventListener("click", function() {
//	"use strict";
//	this.newWin = window.open('newpage.html', 'width=300,height=300,resizable=yes');
//	function resizeNow(newWin) {
//	"use strict";
//	resizeTo(500, 300);
//	}
//});


//	•	Add two buttons to a web page. Add the text Start to one button and Stop to the other button. Using the BOM .setInterval() method, figure out a way to move display the text “Learning JavaScript is fun!” into the console window every 2 seconds but only when the Start button is clicked. If the user clicks on the Stop button, the console should stop logging the text immediately.
   //  ANSWER
//function displayText() {
//	"use strict";
//	function boo() { window.console.log("Learning JavaScript is fun!"); }
//	setTimeout(boo, 10);
//}
//
//function stopText(event) {
//	"use strict";	
//event.stopPropagation(); 
//	//////slide 24 - should I take out the flase??
//}
//			//////var lightbox = document.getElementById("lightbox");
//			//////lightbox.addEventListener("click", function(event) {
//			//////	event.stopPropagation();
//
//function start() {
//	"use strict";
//	document.getElementById("button6").addEventListener("click", displayText, false);
//}
//
//function stop() {
//	"use strict";
//	document.getElementById("button7").addEventListener("click", stopText, false);
//}


//	•	Add a drop down list to a web page. Populate the drop down list with 4 items. Add a button next to the drop down list and set the text to “Select”. When the user clicks the button, the item selected in the drop down list should appear within an alert box.
   //OK  ANSWER
//
//function mySelect(dropList) {
//	"use strict";
//	var myIndex = dropList.selectedIndex, myValue = dropList.options[myIndex].value;
//	return true;
//}
//
//function alertValue() {
//	"use strict";
//	window.alert(myPlace.value);
//}
//
//function select() {
//	"use strict";
//	document.getElementById("myChoice").addEventListener("click", alertValue, false);
//}


//The Calculator II (20 points)
//In this part of the assignment you will practice working with the DOM, DOM Events, Functions, and more to create a better version of the calculator that we built in a previous class. To complete this part, follow the steps outlined below:
//	•	Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin adding an event listener to the window object that “listens” for the load event and when heard, calls a user-defined function called init().
//	•	Create the user-defined function called init().
  //   ANSWER
  //window.document("load", init, false){
//	init() {
//getElementById("seven").addEventListener("click", enter, false);		
//getElementById("eight").addEventListener("click", enter, false);
//getElementById("nine").addEventListener("click", enter, false);
//getElementById("divide").addEventListener("click", enter, false);
//getElementById("four").addEventListener("click", enter, false);
//getElementById("five").addEventListener("click", enter, false);
//getElementById("six").addEventListener("click", enter, false);		
//getElementById("multiply").addEventListener("click", enter, false);
//getElementById("one").addEventListener("click", enter, false);
//getElementById("two").addEventListener("click", enter, false);
//getElementById("three").addEventListener("click", enter, false);
//getElementById("substract").addEventListener("click", enter, false);
//getElementById("zero").addEventListener("click", enter, false);
//getElementById("period").addEventListener("click", enter, false);
//getElementById("add").addEventListener("click", enter, false);
//getElementById("equal").addEventListener("click", enter, false);
//	}

//	•	Within the init() function, attach an event listener to each of the 16 buttons in the web page. You will listen for the click event and when heard, a function called enter() should be called for each of the buttons except for the equal sign. Since you are attaching an event listener to an object, you can pass in this.value as a parameter to each of the enter() function calls.   
//	•	For the equal button, call a function called calculate(). You will not pass any arguments into this function.
//	•	Create a user-defined function called enter() that accepts val as an argument. 
//	•	Within the enter() function get the result text box by its ID and set its value plus equal to the val parameter being passed in.
//	•	Create a user-defined function called calculate() that doesn’t accept any arguments.
//	•	Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. HINT: Use the built-in eval() function to perform the heavy lifting for you.
//Figure out a way to simplify your code so that you don’t have to manually attach an event handler to each and every button. You should be able to programmatically attach a listener to every button on the page and attach a handler that listens for the click without having to write so much code. 
//HINT: Remember the concept of “event bubbling”. Perhaps it makes more sense to listen for an event on a parent element rather than each and every button….
     //OK    ANSWER
//window.document("load", init, false){
//	init() {
//	var calculator = document.getElementsByName("calculator");
//calculator.addEventListener("click", enter, false) {
//	enter(event) {
//		var val = event.target.value;
//	if( val == "=") {
//		result.value = eval(result.value);
//	} else {
//		result.value += val;
//		}
//	} 
//}
//}
//}