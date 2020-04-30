document.getElementById("name").innerText = "Welcome to the DOM Hotel!"
document.getElementById("slogan").innerText = "Come Code With us Forever"

let domHotel = {
    availableRooms: [[101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303, 304], [401, 402, 403, 404]],
    bookedRooms: [[],[],[],[]],
    roomType: ["Single", "Double", "Queen", "King"],

    updateAvailableRooms: function() {
        let dropdown = `<select id = "selectavailable">`
        for (let i = 0; i < this.availableRooms.length; i++) {
            for (let j = 0; j < this.availableRooms[i].length; j++) {
                dropdown = dropdown + `<option value = "${this.availableRooms[i][j]}">${this.availableRooms[i][j]}</option>`
            }
        }
                dropdown = dropdown + `</select>`
                document.getElementById("available").innerHTML = dropdown;
    },

    updateUnavailableRooms: function() {
        let dropdown = `<select id = "selectUnavailable">`
        for (let i = 0; i < this.bookedRooms.length; i++) {
            for (let j = 0; j < this.bookedRooms[i].length; j++) {
                dropdown = dropdown + `<option value = "${this.bookedRooms[i][j]}">${this.bookedRooms[i][j]}</option>`
            }
        }
                dropdown = dropdown + "</select>"
                document.getElementById("unavailable").innerHTML = dropdown;
    },
    bookSelectedRoom: function() {
        let selectedRoom = parseInt(document.getElementById("selectavailable").value)
        for (i = 0; i < this.availableRooms.length; i++) {
            for (j = 0; j < this.availableRooms[i].length; j++) {
                if (selectedRoom == this.availableRooms[i][j]) {
                    this.bookedRooms[i].push(this.availableRooms[i].splice(this.availableRooms[i].indexOf(selectedRoom),1));
                }
            }
        }
        this.updateAvailableRooms();
        this.updateUnavailableRooms();
    },

    unbookSelectedRoom: function() {
        let selectedRoom = parseInt(document.getElementById("selectUnavailable").value)
        for (let i = 0; i < this.bookedRooms.length; i++) {
            for (let j = 0; j < this.bookedRooms[i].length; j++) {
                if (selectedRoom == this.bookedRooms[i][j]) {
                    this.availableRooms[i].push(this.bookedRooms[i].splice(this.bookedRooms[i].indexOf(this.bookedRooms[i][j]),1));
                }
            }
        }
        this.updateUnavailableRooms();
        this.updateAvailableRooms();
    }


}

domHotel.updateAvailableRooms()
domHotel.updateUnavailableRooms();