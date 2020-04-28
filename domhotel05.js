document.getElementById("name").innerText = "wow"
document.getElementById("slogan").innerText = "i cry a lot here"


let domhotel = {
    availableRooms: [["101", "113", "120"], ["201"], ["301", "302", "303", "304"],["402", "404"]],
    bookedRooms: [[],[],[],[]],
    roomTypes: ["Single", "Double", "Queen", "King"],

    updateTheInventoryList: function() {
        let dropDown = `<select onchange = "roomNum = this.options[this.selectedIndex].value">`
        for (let i = 0; i < this.availableRooms.length; i++) {
            for(let j = 0; j < this.availableRooms[i].length; j++) {
                dropDown = dropDown + `<option value = "${this.availableRooms[i][j]}">${this.availableRooms[i][j]}</option>`
            }
        }
           dropDown = dropDown + "</select>"
           document.getElementById("dropdown").innerHTML = dropDown;
    },
    bookRoom: function(roomNum) {
         this.bookedRooms[(roomNum[0]-1)].push(roomNum);
         this.availableRooms[(roomNum[0]-1)].splice(this.availableRooms.indexOf(roomNum),1);
         this.updateTheInventoryList();
     },
     checkInButton: function() {
         let button1 = `<button onclick = "bookRoom(this)">Check In</button>`
         document.getElementById("bookroom").innerHTML = button1;

     }

}
domhotel.bookRoom("101")
