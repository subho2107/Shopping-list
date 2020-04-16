var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementsByClassName("Delete");
for(var pos = 0; pos < deleteButton.length; pos++)
{
	deleteButton[pos].addEventListener("click", removeParent, false);
}
function removeParent(event)
{
	// event.removeEventListner("click", removeParent, false);
	event.target.parentNode.remove();
}
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button")
	button.onclick = removeParent;
	button.innerHTML = "Delete"
	button.classList.add("Delete");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function useStyleAfterClick(event) 
{
	event.target.classList.toggle("done");
}
function removeDone(event)
{
	evnt.target.style.textdeco
}
ul.addEventListener("click", useStyleAfterClick)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

