document.getElementById("title").innerText = "WELCOME TO THE NEWEST BRANCH OF THE JS HOTEL!"
document.getElementById("slogan").innerText = "Where raspberry pi is complimentary at every meal!"

let roomsAvailable = [313, 314, 315, 316, 317];
let amenities = ["Spa", "Room Service", "24/7 Concierge", "Our Mercedes Program"];

let dropDownRooms = "<select>"
for (let i = 0; i < roomsAvailable.length; i++) {
    dropDownRooms = dropDownRooms + `<option value = "${roomsAvailable[i]}">${roomsAvailable[i]}</option>`
}
dropDownRooms = dropDownRooms + "</select>"

document.getElementById("rooms").innerHTML = dropDownRooms;

let dropDownAmenities = "<select>"
for (let i = 0; i < amenities.length; i++){
    dropDownAmenities = dropDownAmenities + `<option value = "${amenities[i]}">${amenities[i]}</option>`
}
    dropDownAmenities = dropDownAmenities + "</select>";

document.getElementById("amenities").innerHTML = dropDownAmenities;