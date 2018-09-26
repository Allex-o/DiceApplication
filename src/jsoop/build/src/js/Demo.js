window.onload = function() {
	var btnOne = document.getElementById("btn_generate");
		btnOne.onclick = onUserClick;

	var btnTwo = document.getElementById("btn_clear");
		btnTwo.onclick = onListClear;
};

var firstNames = ["Kalle", "Rune", "David"];
var lastNames  = ["Rosqvist", "Körnefors", "Johansson"];
var names = [];

function generateRandomName() {
	var a = Math.floor(Math.random() * firstNames.length);
	var b = Math.floor(Math.random() * lastNames.length);

	return firstNames[a] + " " + lastNames[b];
}

function onUserClick(event) {
	names.push(generateRandomName());
	generateNameList();
}

function addName() {
	var name = generateRandomName();
	names.push(name);
}

function generateNameList() {
	var list = document.getElementById("name_list");
		list.innerHTML = "";

	var str = "";
	for (i = 0; i < names.length; i++) {
		str += "<li>"+names[i]+"</li>";
	}

	list.innerHTML = str;
}

function onListClear(event) {
	names = [];
	var list = document.getElementById("name_list");
		list.innerHTML = "";
}