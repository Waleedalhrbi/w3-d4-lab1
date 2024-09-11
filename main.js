let welcomeT = document.getElementsByClassName("welcomeText")[0];

welcomeT.style.color = "white"
welcomeT.style.background = "blue"

let prgraphMide = document.getElementById("prgraphMid");
prgraphMide.style.fontWeight = "bold";

prgraphMide.classList.add("prgraphMids");

let imgFloer = document.getElementsByTagName("img")[0];

imgFloer.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopxhys1sDXRymAf4bLHhYOhhM123zapzmtw&s";




    let ulist = document.querySelector('ul');

    for (let i = 1; i <= 3; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = "waleed";
        ulist.appendChild(listItem);
    }
    ulist.classList.add("ulistt");
    

    let table = document.createElement("table");
    table.className = "styleTab";
    
    let row1 = table.insertRow();
    let cell1 = row1.insertCell(0);
    let cell2 = row1.insertCell(1);
    let cell3 = row1.insertCell(2);
    cell1.textContent = "Day1";
    cell2.textContent = "Day2";
    cell3.textContent = "Day3";


let row2 = table.insertRow();
let cell4 = row2.insertCell(0);
let cell5 = row2.insertCell(1);
let cell6 = row2.insertCell(2);
cell4.textContent = "Sunday";
cell5.textContent = "Moonday";
cell6.textContent = "Tuesday";

document.getElementById("tableCont").appendChild(table);


