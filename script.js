console.log("Pirma uzduotis");

var el1 = document.getElementsByClassName('manoH1');
console.log(el1);
el1[0].style.backgroundColor = "Blue";
el1[0].innerText = "Teksta pakeite JS pirma uzduotis";

var el2 = document.getElementById('id1');
el2.style.backgroundColor = "red";
el2.innerHTML = "<div>Div teksta pakeite JS pirma uzduotis <p>p teksta irgi pakeite JS pirma uzduotis</p></div>";

var el3 = document.querySelector('p');
console.log(el3);
el3.innerText = "Pakeistas p darkart su JS, pirma uzduotis";
el3.style.backgroundColor = "Green";

//Antra uzduotis
console.log("------------------------");
console.log("Antra uzduotis");


var divoId = document.getElementById('id1');
var newP = document.createElement("p");
newP.innerHTML = "divas papildytas JS naujai sukurtu p elementu su nauju p tekstu, antra uzduotis";
newP.style.backgroundColor = "Yellow";
divoId.appendChild(newP);

var newP2 = document.createElement("p");
newP2.innerText = "JS idejo nauja teksta naujai sukurtam p, antra uzduotis";
newP2.style.backgroundColor = "Pink";


var divoId =document.getElementById("id1");
divoId.replaceChild(newP2, divoId.childNodes[0]);









