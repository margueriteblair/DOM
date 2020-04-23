document.getElementById("name").innerText = "Welcome to Felicia's Fruits (Online for COVID!)";
document.getElementById("slogan").innerText = "Buy Felicia!";
document.getElementById("pickup").innerText = "We do curbside pickup and delivery!"

let fruitsArray = ["Apples", "Bananas", "Peaches", "Mangos", "Strawberries", "Blackberries"];
let quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let dropDownTag = "<select>"
for (let i = 0; i < fruitsArray.length; i++){
    dropDownTag = dropDownTag + `<option value = "${fruitsArray[i]}">${fruitsArray[i]}</option>`
}
dropDownTag + "</select>"

dropDownTag2 = "<select>"
for (let i = 0; i < quantities.length; i++){
    dropDownTag2 = dropDownTag2 + `<option value = "${quantities[i]}">${quantities[i]}</option>`
}
dropDownTag2 = dropDownTag2 + "</select>"


document.getElementById("fruitsavail").innerHTML = dropDownTag;
document.getElementById("quantities").innerHTML = dropDownTag2;