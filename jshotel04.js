document.getElementById("name").innerText = "WELCOME TO THE NEWEST BRANCH OF THE JS HOTEL!";
document.getElementById("slogan").innerText = "Code All Day, Code All Night";

let domhotel = {
    availableRooms: [[101, 102, 103, 104], [202, 204, 207], [301, 303],[401, 402, 403, 404]],
    bookedRooms: [[],[],[],[]],
    roomTypes: ["Single", "Double", "Queen", "King"],

    bookRoom: function(roomNum) {
        let roomNumStr = roomNum.toString();
            this.bookedRooms[(roomNumStr[0]-1)].push(roomNum);
            this.availableRooms[(roomNumStr[0]-1)].splice(this.availableRooms[roomNumStr[0]-1].indexOf(roomNum),1);
            this.updateRoomInventory();
            this.updateRoomInventory2();
            this.bookRoomButton();
            this.unbookRoomButton();
    },

    unbookRoom: function(roomNum) {
        let roomNumStr = roomNum.toString();
            this.availableRooms[roomNumStr[0]-1].push(roomNum);
            this.bookedRooms[this.roomNumStr[0]-1].splice(this.bookedRooms[roomNumStr[0]-1], 1);
            this.updateRoomInventory();
            this.updateRoomInventory2();
            this.unbookRoomButton();
            this.bookRoomButton();
    },
    
    updateRoomInventory: function() {
        dropDown = `<select onChange = "roomNum=this.options[this.selectedIndex].value">`
        for (let i = 0; i < this.availableRooms.length; i++) {
            for (let j = 0; j < this.availableRooms[i].length; j++) {
                dropDown = dropDown + `<option value = "${this.availableRooms[i][j]}">${this.availableRooms[i][j]}</option>`
    }
    }
        dropDown = dropDown + "</select>"
        document.getElementById("dropdown").innerHTML = dropDown;
},
    updateRoomInventory2: function() {
        dropDown2 = `<select onChange ="roomNum=this.options[this.selectedIndex].value">`
        for (let i = 0; i < this.bookedRooms.length; i++){
            for (let j = 0; j < this.bookedRooms[i].length; j++) {
                dropDown2 = dropDown2 + `<option value = "${this.bookedRooms[i][j]}">${this.bookedRooms[i][j]}</option>`
            }
        }
        dropDown2 = dropDown2 + "</select>"
        document.getElementById("dropdown2").innerHTML = dropDown2;
    },

    bookRoomButton: function() {
        button1 = `<button onclick="this.bookRoom()">Check In</button>`
        document.getElementById("bookroom").innerHTML = button1;
    },

    unbookRoomButton: function() {
        button2 = `<button onclick="this.unbookRoom()">Check Out</button>`
        document.getElementById("unbook").innerHTML = button2;
    }

}

domhotel.bookRoom(101);
domhotel.bookRoom(102);
domhotel.bookRoom(103);
domhotel.bookRoom(202);

//<button onclick="displayDate()">Try it</button>