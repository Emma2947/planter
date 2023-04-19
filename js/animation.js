/*Virker ikke efter hensigten - muligvis grundet chromes browser*/ 
var video = document.createElement("animations-video");
video.setAttribute("height", "360");
video.setAttribute("width", "640");
video.setAttribute("id", "animations-video");
video.setAttribute("controls", "controls");
document.body.appendChild("animations-video");
document.getElementById("animations-video").play();
