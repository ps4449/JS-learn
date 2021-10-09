var numberOfDrums = document.querySelectorAll(".drum");

for(var i=0; i<numberOfDrums.length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function() {
		
		var typeOfDrumSound = this.innerHTML;

		sound(typeOfDrumSound); // calling sound to play via cursor clicking
		animation(typeOfDrumSound); // calling animation for pressed button via cursor clicking

	} );
}

document.addEventListener("keypress", function(event) {

	sound(event.key.toLowerCase()); // calling sound to play via keypress
	animation(event.key.toLowerCase()); // calling animation for pressed buttion via keypress

});

function sound(key) {

	switch(key) {
			case "e":
				var drum1 = new Audio("sounds/snare.mp3");
				drum1.play();
			break;

			case "f":
				var drum2 = new Audio("sounds/crash.mp3");
				drum2.play();
			break;

			case "g":
				var drum3 = new Audio("sounds/kick-bass.mp3");
				drum3.play();
			break;

			case "a":
				var drum4 = new Audio("sounds/tom-1.mp3");
				drum4.play();
			break;

			case "b":
				var drum5 = new Audio("sounds/tom-2.mp3");
				drum5.play();
			break;

			case "c":
				var drum6 = new Audio("sounds/tom-3.mp3");
				drum6.play();
			break;

			case "d":
				var drum7 = new Audio("sounds/tom-4.mp3");
				drum7.play();
			break;
		}
}

function animation(key) {

	var currentButton = document.querySelector("."+key);
	currentButton.classList.add("pressed");

	setTimeout(function () {
		currentButton.classList.remove("pressed");
	}, 100);

}