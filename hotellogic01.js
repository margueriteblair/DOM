// Your function is going to accept following: guest name, room #, total nights, inout
// need a var to define the room cost
// each additional floor above and beyond 1 increases the room cost by $50
// go!

function hotelLogic(name, roomNum, nightsNum, inout) {
    let floorLevel = roomNum.toString();
    floorLevel = floorLevel[0];
    console.log(floorLevel);
    let roomBaseCost = 250;
    let perNightCost = (50 * (parseInt(floorLevel, 10)-1)) + roomBaseCost;
    let totalPrice = nightsNum*perNightCost;
console.log(`${name} is staying in room # ${roomNum} $(${perNightCost}) for ${nightsNum} for a total of $${totalPrice}.`)

}
hotelLogic("Margie", 111, 3, "in");

