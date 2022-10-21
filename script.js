function maFonction() {
var table = document.getElementById("tableau");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var input = document.createElement('input');
var input1 = document.createElement('input');
var input2 = document.createElement('input');
cell1.appendChild(input);
cell2.appendChild(input1);
cell3.appendChild(input2);
const test1 = cell1.appendChild(input);
maFonction.onclick = () => {
    localStorage.setItem("bouton", maFonction.value);
}
var aujourdhui = document.getElementsByClassName('date');
aujourdhui.innerHtml(Date());
}
