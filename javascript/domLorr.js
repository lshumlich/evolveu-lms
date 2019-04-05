console.log("got to external domLorr.js file")

const addCardButton = document.getElementById("idAddCard");
const leftPanel = document.getElementById("idLeft");
addCardButton.addEventListener("click", onAddCardClicked);
let counter = 0;

function onAddCardClicked(event) {
	console.log("Inside onAddCardClicked");
	leftPanel.appendChild(makeDiv());
}

function makeDiv() {
	const div = document.createElement("div");
	div.textContent = "Card " + counter++;
	const addBeforeBtn = document.createElement("button");
	//addBeforeBtn.className = "clButton";
	addBeforeBtn.textContent = "Add Before";
	const addAfterBtn = document.createElement("button");
	addAfterBtn.textContent = "Add After";
	const delBtn = document.createElement("button");
	delBtn.textContent = "Delete";
	delBtn.addEventListener("click", onDeleteCard);
	div.appendChild(document.createElement("br"));
	div.appendChild(addBeforeBtn);
	div.appendChild(addAfterBtn);
	div.appendChild(document.createElement("br"));
	div.appendChild(delBtn);
	div.className = "clCard";
	return div;
}

//console.log("testing makediv:", makeDiv("Make me a div"));

function onDeleteCard(event) {
	console.log("in onDeleteCard function", event.target);
	//
	// the first .parenElement below gets the button's parent, which is the card
	// the second .parentElement below gets the card's parent, which is the left panel
	// then it knows to delete the whole card, instead of just the button
	//
	let node = event.target.parentElement;
	node.parentElement.removeChild(node);
}