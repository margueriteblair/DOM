document.getElementById("name").innerText = "WELCOME TO THE NEWEST BRANCH OF THE JS HOTEL!";
document.getElementById("slogan").innerText = "Code All Day, Code All Night";

let domhotel = {
    availableRooms: [[101, 102, 103, 104], [202, 204, 207], [301, 303],[401, 402, 403, 404]],
    bookedRooms: [[],[],[],[]],
    roomTypes: ["Single", "Double", "Queen", "King"],

    bookRoom: function(roomNum) {
        let roomNumStr = roomNum.toString();
        if (this.availableRooms[(roomNumStr[0]-1)].includes(roomNum)) {
            this.bookedRooms[(roomNumStr[0]-1)].push(roomNum);
            this.availableRooms[(roomNumStr[0]-1)].splice(this.availableRooms[roomNumStr[0]-1].indexOf(roomNum),1);
            this.updateRoomInventory();
        } else alert(`Error: ${roomNum} is an invalid room`);
    },

    unbookRoom: function(roomNum) {
        let roomNumStr = roomNum.toString();
        if (this.bookedRooms[roomNumStr[0]-1].includes(roomNum)) {
            this.availableRooms[roomNumStr[0]-1].push(roomNum);
            this.bookedRooms[this.roomNumStr[0]-1].splice(this.bookedRooms[roomNumStr[0]-1], 1);
            this.updateRoomInventory();
        }
        
    },
    
    updateRoomInventory: function() {
        dropDown = "<select>"
        for (let i = 0; i < this.availableRooms.length; i++) {
            for (let j = 0; j < this.availableRooms[i].length; j++) {
                dropDown = dropDown + `<option value = ${this.availableRooms[i][j]}>${this.availableRooms[i][j]}</option>`
    }
    }
        dropDown = dropDown + "<select>"
        document.getElementById("dropdown").innerHTML = dropDown;
}
}

domhotel.bookRoom(101);
domhotel.bookRoom(715);

