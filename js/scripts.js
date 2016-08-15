/* ==============================================================
 * Project Name  : JavaScript Mind Reader
 * Project URI   : http://kazal.me/js-mind-reader
 * Created on    : 15 Aug, 2016
 * Author        : Kazal Kumar
 * Author's URI  : http://kazal.me
 * Description   : "JavaScript Mind Reader" is a simple game made with JavaScript which can read your mind. :)
 * Version       : 1.0
/* ==============================================================*/

// Default Arrays
var defaultArrayOne = ['img/img_01.png', 'img/img_02.png', 'img/img_03.png', 'img/img_04.png', 'img/img_05.png', 'img/img_06.png', 'img/img_07.png', 'img/img_08.png'];
var defaultArrayTwo = ['img/img_09.png', 'img/img_10.png', 'img/img_11.png', 'img/img_12.png', 'img/img_13.png', 'img/img_14.png', 'img/img_15.png', 'img/img_16.png'];

// grab all images from image list
var imgListOne = document.getElementById("imageListOne").children;
var imgListTwo = document.getElementById("imageListTwo").children;

// grab first button set
var buttonOne = document.getElementById("btn-one");
var buttonTwo = document.getElementById("btn-two");

// grab second button set
var buttonThree = document.getElementById("btn-three");
var buttonFour = document.getElementById("btn-four");

// grab third button set
var buttonFive = document.getElementById("btn-five");
var buttonSix = document.getElementById("btn-six");

// grab final button set
var buttonSeven = document.getElementById("btn-seven");
var buttonEight = document.getElementById("btn-eight");

// make buttons disable
function disableButton(btnFirst, btnSecond) {
	btnFirst.style.color = "#FF5733";
	btnFirst.style.borderColor = "#FF5733";
	btnFirst.style.pointerEvents = "none";
	btnFirst.style.opacity = "0.25";

	btnSecond.style.color = "#FF5733";
	btnSecond.style.borderColor = "#FF5733";
	btnSecond.style.pointerEvents = "none";
	btnSecond.style.opacity = "0.25";
}

// make buttons visible
function visibleButton(btnX, btnY) {
	var btnX = document.getElementById(btnX);
	var btnY = document.getElementById(btnY);
	btnX.style.display = "block";
	btnY.style.display = "block";
}

// filter image list
function filterImageList() {
	for (var i = 0; i<=7; i++) {
		if(imgListOne[i].hasAttribute("src")) {
			imgListOne[i].setAttribute("src", defaultArrayOne[i]);
		}
		if(imgListTwo[i].hasAttribute("src")) {
			imgListTwo[i].setAttribute("src", defaultArrayTwo[i]);
		}
	}
}

// transform scale to zero
function transformScaleZero() {
	for (var i = 0; i <= 7; i++) {
		imgListOne[i].style.transform = "scale(0,0)";
		imgListOne[i].style.transitionProperty = "all";
		imgListOne[i].style.transitionDuration = ".3s";
		imgListOne[i].style.transitionTimingFunction = "each-in";

		imgListTwo[i].style.transform = "scale(0,0)";
		imgListTwo[i].style.transitionProperty = "all";
		imgListTwo[i].style.transitionDuration = ".3s";
		imgListTwo[i].style.transitionTimingFunction = "each-in";
	}
}

// transform scale to one
function transformScaleOne() {
	for (var i = 0; i <= 7; i++) {
		imgListOne[i].style.transform = "scale(1,1)";
		imgListOne[i].style.transitionProperty = "all";
		imgListOne[i].style.transitionDuration = ".3s";
		imgListOne[i].style.transitionTimingFunction = "each-in";

		imgListTwo[i].style.transform = "scale(1,1)";
		imgListTwo[i].style.transitionProperty = "all";
		imgListTwo[i].style.transitionDuration = ".3s";
		imgListTwo[i].style.transitionTimingFunction = "each-in";
	}
}

/* ---------------------------------------------
/* STEP 01
/* ---------------------------------------------*/
if (buttonOne.addEventListener) {
	buttonOne.addEventListener("click", function() {

		disableButton(buttonOne, buttonTwo);
		visibleButton("btn-three", "btn-four");
		transformScaleZero();

		setTimeout(function () {
			for (var i = 0; i <= 7; i++) {
			    if(i <= 3) {
			        defaultArrayOne.push(defaultArrayOne[i]);
					defaultArrayOne.push(defaultArrayTwo[i]);
			    }
				if(i > 3 || i === 7) {
					defaultArrayTwo.push(defaultArrayOne[i]);
					defaultArrayTwo.push(defaultArrayTwo[i]);
				}
			}
			// remove first 8 items from each array
			defaultArrayOne.splice(0, 8);
			defaultArrayTwo.splice(0, 8);

			//filter image list
			filterImageList();
			transformScaleOne();
		}, 300);

	}, false);
}
if (buttonTwo.addEventListener) {
	buttonTwo.addEventListener("click", function() {

		disableButton(buttonOne, buttonTwo);
		visibleButton("btn-three", "btn-four");
		transformScaleZero();

		setTimeout(function () {
			for (var i = 0; i <= 7; i++) {
			    if(i <= 3) {
					defaultArrayOne.push(defaultArrayTwo[i]);
			        defaultArrayOne.push(defaultArrayOne[i]);
			    }
				if(i > 3 || i === 7) {
					defaultArrayTwo.push(defaultArrayTwo[i]);
					defaultArrayTwo.push(defaultArrayOne[i]);
				}
			}
			// remove first 8 items from each array
			defaultArrayOne.splice(0, 8);
			defaultArrayTwo.splice(0, 8);

			//filter image list
			filterImageList();
			transformScaleOne();
		}, 300);

	}, false);
}

/* ---------------------------------------------
/* STEP 02
/* ---------------------------------------------*/
if (buttonThree.addEventListener) {
	buttonThree.addEventListener("click", function() {

		disableButton(buttonThree, buttonFour);
		visibleButton("btn-five", "btn-six");
		transformScaleZero();

		setTimeout(function() {
			for (var i = 0; i <= 7; i++) {
			    if(i <= 3) {
			        defaultArrayOne.push(defaultArrayTwo[i]);
					defaultArrayOne.push(defaultArrayOne[i]);
			    }
				if(i > 3 || i === 7) {
					defaultArrayTwo.push(defaultArrayTwo[i]);
					defaultArrayTwo.push(defaultArrayOne[i]);
				}
			}
			// remove first 8 items from each array
			defaultArrayOne.splice(0, 8);
			defaultArrayTwo.splice(0, 8);

			//filter image list
			filterImageList();
			transformScaleOne();
		}, 300);

	}, false);
}
if (buttonFour.addEventListener) {
	buttonFour.addEventListener("click", function() {

		disableButton(buttonThree, buttonFour);
		visibleButton("btn-five", "btn-six");
		transformScaleZero();

		setTimeout(function() {
			for (var i = 0; i <= 7; i++) {
			    if(i <= 3) {
			        defaultArrayOne.push(defaultArrayOne[i]);
					defaultArrayOne.push(defaultArrayTwo[i]);
			    }
				if(i > 3 || i === 7) {
					defaultArrayTwo.push(defaultArrayOne[i]);
					defaultArrayTwo.push(defaultArrayTwo[i]);
				}
			}
			// remove first 8 items from each array
			defaultArrayOne.splice(0, 8);
			defaultArrayTwo.splice(0, 8);

			//filter image list
			filterImageList();
			transformScaleOne();
		}, 300);

	}, false);
}

/* ---------------------------------------------
/* STEP 03
/* ---------------------------------------------*/
if (buttonFive.addEventListener) {
	buttonFive.addEventListener("click", function() {

		disableButton(buttonFive, buttonSix);
		visibleButton("btn-seven", "btn-eight");
		transformScaleZero();

		setTimeout(function() {
			for (var i = 0; i <= 7; i++) {
			    if(i <= 3) {
					defaultArrayOne.push(defaultArrayOne[i]);
			        defaultArrayOne.push(defaultArrayTwo[i]);
			    }
				if(i > 3 || i === 7) {
					defaultArrayTwo.push(defaultArrayOne[i]);
					defaultArrayTwo.push(defaultArrayTwo[i]);
				}
			}
			// remove first 8 items from each array
			defaultArrayOne.splice(0, 8);
			defaultArrayTwo.splice(0, 8);

			//filter image list
			filterImageList();
			transformScaleOne();
		}, 300);

	}, false);
}
if (buttonSix.addEventListener) {
	buttonSix.addEventListener("click", function() {

		disableButton(buttonFive, buttonSix);
		visibleButton("btn-seven", "btn-eight");
		transformScaleZero();

		setTimeout(function() {
			for (var i = 0; i <= 7; i++) {
			    if(i <= 3) {
					defaultArrayOne.push(defaultArrayTwo[i]);
			        defaultArrayOne.push(defaultArrayOne[i]);
			    }
				if(i > 3 || i === 7) {
					defaultArrayTwo.push(defaultArrayTwo[i]);
					defaultArrayTwo.push(defaultArrayOne[i]);
				}
			}
			// remove first 8 items from each array
			defaultArrayOne.splice(0, 8);
			defaultArrayTwo.splice(0, 8);

			//filter image list
			filterImageList();
			transformScaleOne();
		}, 300);

	}, false);
}

/* ---------------------------------------------
/* FINAL STEP
/* ---------------------------------------------*/
if (buttonSeven.addEventListener) {
	buttonSeven.addEventListener("click", function() {
		// disable button
		disableButton(buttonSeven, buttonEight);
		transformScaleZero();
		setTimeout(function() {
			document.getElementById("result").style.display = "block";
		}, 300);

		setTimeout(function() {
			for (var i = 0; i <= 7; i++) {
				if (imgListOne[i] === imgListOne[2]) {
					imgListOne[i].style.display = "block";
					imgListTwo[i].style.display = "none";
				}else {
					imgListOne[i].style.display = "none";
					imgListTwo[i].style.display = "none";
				}
			}
			document.getElementById("result").innerHTML = "This is what you selected :)";
			transformScaleOne();
		}, 800);

	}, false);
}
if (buttonEight.addEventListener) {
	buttonEight.addEventListener("click", function() {
		//disable button
		disableButton(buttonSeven, buttonEight);
		transformScaleZero();
		setTimeout(function() {
			document.getElementById("result").style.display = "block";
		}, 300);

		setTimeout(function() {
			for (var i = 0; i <= 7; i++) {
				if (imgListTwo[i] === imgListTwo[2]) {
					imgListTwo[i].style.display = "block";
					imgListOne[i].style.display = "none";
				}else {
					imgListTwo[i].style.display = "none";
					imgListOne[i].style.display = "none";
				}
			}
			document.getElementById("result").innerHTML = "This is what you selected :)";
			transformScaleOne();
		}, 800);

	}, false);
}