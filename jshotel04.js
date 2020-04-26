document.getElementById("name").innerText = "WELCOME TO THE NEWEST BRANCH OF THE JS HOTEL!";
document.getElementById("slogan").innerText = "Code All Day, Code All Night";

let availableRooms = [[101, 102, 103, 104], [202, 204, 207], [301, 303],[401, 402, 403, 404]];
let bookedRooms = [[],[],[],[]];
let roomTypes = ["Single", "Double", "Queen", "King"];

let dropDown = "<select>";
for (let i = 0; i < availableRooms.length; i++) {
    for (let j = 0; j < availableRooms[i].length; j++) {
        dropDown = dropDown + `<option value = ${availableRooms[i][j]}>${availableRooms[i][j]}</option>`
    }
}
        dropDown = dropDown + "<select>"
        document.getElementById("dropdown").innerHTML = dropDown;