document.getElementById("slogan").innerText = "We've got what you need to satiate that sweet tooth!"
document.getElementById("store").innerText = "Welcome to Yummy's Candy"

let candyOptions = ["Reeses", "Butterfinger", "M&M's", "Starbursts", "Skittles"];

let dropDown = "<select>";
for (let i = 0; i < candyOptions.length; i++) {
    dropDown = dropDown + `<option value = "${candyOptions[i]}">${candyOptions[i]}</options>`

}
    dropDown = dropDown + "</select>"

document.getElementById("candy").innerHTML = dropDown;