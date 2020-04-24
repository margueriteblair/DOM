document.getElementById("title").innerText = "Welcome to the Newest Branch of the DOM Hotel!"
document.getElementById("slogan").innerText = "Where Every Meal Comes With Complimentary Raspberry Pi!"

let domhotel = {
    availableRooms: [["101", "102", "103", "104"], ["201", "202", "204"], ["303"], ["402", "403"]],
    bookedRooms: [[], [], [], []],
    roomTypes: ["Single", "Double", "Queen", "King"],

    bookRoom: function(roomNum) {
        this.bookedRooms[(roomNum[0]-1)].push(roomNum);
        this.availableRooms[(roomNum[0]-1)].splice((this.availableRooms[(roomNum[0]-1)].indexOf(roomNum)), 1);
    },

    updateTheAvailableRooms: function() {
        let dropDown = "<select>";
        for (let i = 0; i < this.availableRooms.length; i++){
            for(let j = 0; j < this.availableRooms[i].length; j++) {
                dropDown = dropDown + `<option value = "${this.availableRooms[i][j]}">${this.availableRooms[i][j]}</option>`
            }
        }
                dropDown = dropDown + "</select>";
                document.getElementById("roomDrop").innerHTML = dropDown;
    }
}


domhotel.bookRoom("402");
domhotel.bookRoom("201");
domhotel.updateTheAvailableRooms();

//         this.bookedRooms[(this.availableRooms.indexOf(roomNum))].push(this.availableRooms[0].splice((this.availableRooms.indexOf(roomNum)),1))