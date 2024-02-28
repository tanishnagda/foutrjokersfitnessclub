/*
	Student Name: Christopher DeLeon
	File Name: script.js
	Date: November 1, 2021
*/ 

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
			menu.style.display = "none";
			logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}

//Function to display the burpees example video
function burpees() {
	videoSource.src = "media/burpees.mp4";
	descriptionSource.src = "media/burpees-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the plank example video
function plank() {
	videoSource.src = "media/plank.mp4";
	descriptionSource.src = "plank-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the mountain climbers example video
function mountain() {
	videoSource.src = "media/mc.mp4";
	descriptionSource.src = "media/mountain-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display a promo code
function discount() {
	var promo = document.getElementById("special");
	promo.firstChild.nodeValue = "Promo Code: D25START";
	promo.style.color = "#ff0000";
	promo.style.fontSize = "2em";
}



document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");
  
    // Function to load content dynamically based on clicked link
    function loadContent(url) {
      fetch(url)
        .then(response => response.text())
        .then(html => {
          contentDiv.innerHTML = html;
        })
        .catch(error => {
          console.error('Error fetching content: ', error);
        });
    }
  
    // Event listeners for each navigation link
    document.getElementById("home").addEventListener("click", function(event) {
      event.preventDefault();
      loadContent("home.html");
    });
  
    document.getElementById("exercises").addEventListener("click", function(event) {
      event.preventDefault();
      loadContent("exercises.html");
    });
  
    document.getElementById("nutrition").addEventListener("click", function(event) {
      event.preventDefault();
      loadContent("nutrition.html");
    });
  
    document.getElementById("about").addEventListener("click", function(event) {
      event.preventDefault();
      loadContent("about.html");
    });
  
    // Load home page content by default
    loadContent("home.html");
  });
  



function generateWorkout() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const goal = document.getElementById('goal').value;

    let workout = "Your Workout Plan:<br>";

    // Generate workout based on user input
    if (age >= 18) {
        if (gender === 'male') {
            if (goal === 'weight-loss') {
                workout += "Day 1: Cardio for 30 minutes<br>";
                workout += "Day 2: Upper Body Strength Training<br>";
                workout += "Day 3: Rest<br>";
            } else if (goal === 'muscle-gain') {
                workout += "Day 1: Chest and Triceps<br>";
                workout += "Day 2: Back and Biceps<br>";
                workout += "Day 3: Rest<br>";
            } else if (goal === 'general-fitness') {
                workout += "Day 1: Full Body Workout<br>";
                workout += "Day 2: Cardio for 20 minutes<br>";
                workout += "Day 3: Rest<br>";
            }
        } else if (gender === 'female') {
            if (goal === 'weight-loss') {
                workout += "Day 1: Cardio for 30 minutes<br>";
                workout += "Day 2: Lower Body Strength Training<br>";
                workout += "Day 3: Rest<br>";
            } else if (goal === 'muscle-gain') {
                workout += "Day 1: Legs and Glutes<br>";
                workout += "Day 2: Arms and Shoulders<br>";
                workout += "Day 3: Rest<br>";
            } else if (goal === 'general-fitness') {
                workout += "Day 1: Full Body Workout<br>";
                workout += "Day 2: Yoga or Pilates<br>";
                workout += "Day 3: Rest<br>";
            }
        }
    } else {
        workout = "Sorry, this workout generator is for adults only.";
    }

    document.getElementById('workout').innerHTML = workout;
}


