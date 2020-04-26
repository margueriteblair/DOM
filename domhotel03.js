document.getElementById("title").innerText = "WELCOME TO THE NEW AND IMPROVED DOM HOTEL!"
document.getElementById("slogan").innerText = "Come and Git It!"

let domhotel = {
     availableRooms: [["101", "113", "120"], ["201"], ["301", "302", "303", "304"],["402", "404"]],
     bookedRooms: [[],[],[],[]],
     roomTypes: ["Single", "Double", "Queen", "King"],

     bookRoom: function(roomNum) {
        if (this.availableRooms[(roomNum[0]-1)].includes(roomNum)) {
         this.bookedRooms[(roomNum[0]-1)].push(roomNum);
         this.availableRooms[(roomNum[0]-1)].splice(this.availableRooms.indexOf(roomNum),1);
         this.updateTheInventoryList();
        } else alert(`ERROR: INVALID ROOM ${roomNum}`);
     },

     outBook: function(roomNum) {
        if (this.bookedRooms[(roomNum[0]-1)].includes(roomNum)) {
         this.bookedRooms[(roomNum[0]-1)].splice(this.bookedRooms.indexOf(roomNum),1);
         this.availableRooms[(roomNum[0]-1)].push(roomNum)
         this.updateTheInventoryList();
        } else alert(`ERROR: INVALID ROOM ${roomNum}`);
     },

     updateTheInventoryList: function() {
         let dropDown = "<select>"
         for (let i = 0; i < this.availableRooms.length; i++) {
             for(let j = 0; j < this.availableRooms[i].length; j++) {
                 dropDown = dropDown + `<option value = "${this.availableRooms[i][j]}">${this.availableRooms[i][j]}</option>`
             }
         }
            dropDown = dropDown + "</select>"
            document.getElementById("dropdown").innerHTML = dropDown;
     }

}

domhotel.updateTheInventoryList();
domhotel.bookRoom("201");
domhotel.bookRoom("101");
domhotel.outBook("201");
domhotel.outBook("101");
domhotel.bookRoom("304");
domhotel.bookRoom("444")
