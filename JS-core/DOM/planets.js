
var p = document.getElementById("greenplanet");

p.innerText = "<b>An alien showed up</b>"; //incorrect
p.innerHTML = "<b>An alien appeared</b>";

//p.style.color = 'red'
//p.style.backgroundColor = '#62a2c9'
//p.className = 'warning' // this overwrites the "message" class defined in html

p.classList.add("warning"); //does not overwrite other classes previously defined
//if you wanna remove a class, p.classList.remove('')

var newElement = document.createElement("p");
newElement.innerHTML = "An alien disappeared";
//adding new element in body at the end:
//document.querySelector('body').appendChild(newElement);

//adding
//p.append(newElement)

//inserting element before another element - two ways
//document.querySelector('body').insertBefore(newElement, p)
p.before(newElement);

//removing an element
document.querySelector("#blueplanet").remove();

//execute changeMessage function when click on input (button)
document.querySelector("input").addEventListener("click", changeMessage);
function changeMessage() {
  document.querySelector("#redplanet").classList.add("warning");
}
// e.append(newElement) - it adds new element at the end of element e
// e.prepend(newElement) - it adds new element at the beginning of element e
// e.before(newElement) - it adds new element before element e
// e.after(newElement) - it adds new element after element e