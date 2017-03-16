//JavaScript Image Rollovers (20 points)
//In this part of the assignment you will practice working with the DOM, DOM Events, Functions, and more to create an application that features a navigation bar with rollover images. To complete this part, follow the steps outlined below:
//	•	Notice the 5 images in the web page. These are the 5 images that you will be creating rollovers for. Notice that for each image, an “over” state exists for it in the same directory. Begin by creating a unique ID for each image so that you have image1, image2, image3, image4, and image5.
//	•	Now, within the script tag of your web page, create a helper function called getImage(). This function will accept one parameter. Within the function, return the result of getting an element by its ID, passing in the function’s argument as a parameter into the getElementById() method.
//	•	Create a new constructor function called Rollover that accepts two arguments including imageId and newImageURL.
//	•	Create a new object variable called target and store this within it.
//	•	Create 3 properties associated with target including newImageURL, image, and oldImageURL.
//	•	Store the value of the newImageURL parameter within the newImageURL property.
//	•	Store the return value of the getImage() function, passing in the imageID argument as a parameter within the image property.
//	•	Store this.image.src (the URL or source of the image you’re working with) within the oldImageURL property.
//	•	Create an event handler for onmouseover and one for onmouseout for each target image, or: .target.image.onmouseover = function() {.. }.target.image.onmouseout = function() {..}
//	•	In the mouseover, set the src property of the target.image to the newImageURL property.
//	•	In the mouseout, set the src property of the target.image to the oldImageURL property.
//	•	Create an event handler to handle the loading of the web page (window). 
//	•	Within the event handler function, create 5 new instances of the Rollover object, passing in the image’s ID and the rollover image path for each image as parameters within the constructor.