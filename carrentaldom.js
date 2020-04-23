document.getElementById("carRentalName").innerText = "JS Car Sales!"
document.getElementById("slogan").innerText = "We love cars and code!";

let carOptions = ["Nissan", "Camry", "Bugatti", "Civic", "Volvo"]

let dropDownList = "<select id = cars>";
for(let i = 0; i < carOptions.length; i++) {
    dropDownList = dropDownList + `<option value = "${carOptions[i]}">${carOptions[i]}</option>`;
}
dropDownList = dropDownList + "</select>";


document.getElementById("carsavail").innerHTML = dropDownList;
