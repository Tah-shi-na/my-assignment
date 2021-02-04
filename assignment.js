function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var greenRoad = kilometerToMeter(7);
console.log(greenRoad);
var whiteRoad = kilometerToMeter(10);
console.log(whiteRoad);
var baileyRoad = kilometerToMeter(15);
console.log(baileyRoad);


function budgetCalculator(watch, phone, laptop){
    var result = watch * 5 + phone * 3 + laptop * 2;
    return result;
}
var total = budgetCalculator(50, 100, 500)
console.log(total);


var days = 25;
var hotelCost = 0;
if(days <= 10){
    hotelCost = days * 100;
} else if (days <= 20){
    var firstPart = 10 * 100;
    var remaining = days - 10;
    var secondPart = remaining * 80;
    hotelCost = firstPart + secondPart;
} else{
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = days - 20;
    var thirdPart = remaining * 50;
    hotelCost = firstPart + secondPart + thirdPart;
}
console.log(hotelCost);