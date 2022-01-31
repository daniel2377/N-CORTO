
const selected = document.querySelector(".selected");
const sel = document.querySelector(".sel");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const Java = document.querySelector("#java");

sel.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    sel.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

document.getElementById("action").addEventListener("click",
function(){
  document.querySelector(".bg-modal").style.display = "flex";
});
document.querySelector(".close").addEventListener("click",
function(){
  document.querySelector(".bg-modal").style.display = "none";
});


document.getElementById("action2").addEventListener("click",
function(){
  document.querySelector(".bg-modal1").style.display = "flex";
});

document.querySelector(".close1").addEventListener("click",
function(){
  document.querySelector(".bg-modal1").style.display = "none";
});

document.getElementById("action1").addEventListener("click",
function(){
  document.querySelector(".cuad1").style.display = "flex";
});

document.querySelector(".serr").addEventListener("click",
function(){
  document.querySelector(".cuad1").style.display = "none";
});

function iniciarMap(){
  var coord = {lat:19.629799 ,lng: -99.171305};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}
