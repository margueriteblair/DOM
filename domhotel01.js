document.getElementById("slogan").innerText = "NO NO NO NO";
document.getElementById("hotelName").innerText = "THE DOM HOTEL BABAAAAAY";

let availableRooms = [101, 102, 103, 104];

// let linesOfHtml = "<select> <option value = '701'>701</option></select> ";

let linesOfHtml = "<select>";
for (let i = 0; i < availableRooms.length; i ++) {
    linesOfHtml = linesOfHtml + `<option value = "${availableRooms[i]}">${availableRooms[i]}</option>`;
}
linesOfHtml = linesOfHtml + "</select>";

console.log(linesOfHtml);
document.getElementById("AvailRoomList").innerHTML = linesOfHtml;

