// check the all locations radio button by default

document.getElementById('temp-all-locations').checked="true";
document.getElementById('hum-all-locations').checked="true";
document.getElementById('light-all-locations').checked="true";

// function to change the temperature graph based on radio button checked
// this function is called any time a radio button is clicked

function changeTempGraph() {

// check which radio button is currently checked
// once the correct radio button is identified the img is updated accordingly
// the source path on the image is changed to match the corresponding radio button

  if(document.getElementById('temp-e5').checked) {
  document.getElementById("temp-graph-img").src = "images/temperature-e5.png";
    }

  else if(document.getElementById('temp-syde-lounge').checked) {
  document.getElementById("temp-graph-img").src = "images/temperature-syde-lounge.png";
    }

  else if (document.getElementById('temp-dc-library').checked) {
  document.getElementById("temp-graph-img").src = "images/temperature-dc-library.png";
    }

  else if (document.getElementById('temp-all-locations').checked) {
  document.getElementById("temp-graph-img").src = "images/temperature-all-locations.png";
    }

};

// function to change the humidity graph based on radio button checked
// function structure is identical to changeTempGraph, but with the humidity-specific radio buttons & graphs

function changeHumGraph() {

  if(document.getElementById('hum-e5').checked) {
  document.getElementById("hum-graph-img").src = "images/humidity-e5.png";
    }

  else if(document.getElementById('hum-syde-lounge').checked) {
  document.getElementById("hum-graph-img").src = "images/humidity-syde-lounge.png";
    }

  else if (document.getElementById('hum-dc-library').checked) {
  document.getElementById("hum-graph-img").src = "images/humidity-dc-library.png";
    }

  else if (document.getElementById('hum-all-locations').checked) {
  document.getElementById("hum-graph-img").src = "images/humidity-all-locations.png";
    }

};

// function to change the light graph based on radio button checked
// function structure is identical to changeTempGraph, but with the light-specific radio buttons & graphs

function changeLightGraph() {

  if(document.getElementById('light-e5').checked) {
  document.getElementById("light-graph-img").src = "images/light-e5.png";
    }

  else if(document.getElementById('light-syde-lounge').checked) {
  document.getElementById("light-graph-img").src = "images/light-syde-lounge.png";
    }

  else if (document.getElementById('light-dc-library').checked) {
  document.getElementById("light-graph-img").src = "images/light-dc-library.png";
    }

  else if (document.getElementById('light-all-locations').checked) {
  document.getElementById("light-graph-img").src = "images/light-all-locations.png";
    }

};
