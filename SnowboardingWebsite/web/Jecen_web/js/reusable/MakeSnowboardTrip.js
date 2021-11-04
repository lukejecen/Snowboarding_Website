"use strict";
function MakeSnowboardTrip(theMountainName, theImg, theSnowboardType, theBasePrice, theHourlyPrice, theTimeSpent, theTripPrice, theLengthOfSlope,
        theTimeToBottom, theMilesPerHour, style) {
            
    var snowboardTripObj = document.createElement("div");
    snowboardTripObj.classList.add(style);

    var snowboardTripImg = document.createElement("img");
    snowboardTripImg.src = theImg;
    snowboardTripObj.appendChild(snowboardTripImg);


    //public
    snowboardTripObj.mountainName = theMountainName;
    snowboardTripObj.snowboardType = theSnowboardType;
    //private
    var timeSpent = theTimeSpent;
    var tripPrice = theTripPrice;
    var hourlyPrice = theHourlyPrice;
    var basePrice = theBasePrice;
    var hourlyCharge = 0;
    var lengthOfSlope = theLengthOfSlope;
    var timeToBottom = theTimeToBottom;
    var milesPerHour = theMilesPerHour;

    var snowboardTripInfo = document.createElement("div");
    snowboardTripObj.appendChild(snowboardTripInfo);

    function display() {           // create custom method “display”

        // make the current properties visible on the page
        snowboardTripInfo.innerHTML = "Mountain Name: " + snowboardTripObj.mountainName + "<br/>Snowboard Type: " + snowboardTripObj.snowboardType +
                "<br/>Base Price: " + basePrice + "<br/> Hourly Price: " + hourlyPrice + "<br/> Time Spent: " + timeSpent +
                "<br/> Trip price: " + tripPrice + "<br/> Length of Slope(miles): " + lengthOfSlope + "<br/> Time to bottom(m.ss): " + timeToBottom +
                "<br/> Mph: " + milesPerHour;
    };

    // Condition setter method
    snowboardTripObj.setSnowboardType = function (newSnowboardType) {
        snowboardTripObj.snowboardType = newSnowboardType;
        snowboardTripObj.display(); // show updated property on the page
    };


    // Create User Interface for setting condition
    var snowboardTypeButton = document.createElement("button");
    snowboardTypeButton.innerHTML = "New Snowboard: ";
    snowboardTripObj.appendChild(snowboardTypeButton);

    var newSnowboardTypeInput = document.createElement("input");
    snowboardTripObj.appendChild(newSnowboardTypeInput);

    snowboardTypeButton.onclick = function () {
        snowboardTripObj.setSnowboardType(newSnowboardTypeInput.value);
    };

    snowboardTripObj.appendChild(document.createElement("br"));

    // price modifier method
    snowboardTripObj.changeTripPrice = function (changeHours) {
        var n = Number(changeHours);
        console.log("changing price by this rate " + n);
        hourlyCharge = (hourlyPrice * n);
        tripPrice = basePrice + hourlyCharge;
        timeSpent = n;
        snowboardTripObj.display(); // show updated price on the page
    };

    // create User interface for changing price
    var timeSpentButton = document.createElement("button");
    timeSpentButton.innerHTML = "Change Trip price by hourly rate multiplied by time spent: ";
    snowboardTripObj.appendChild(timeSpentButton);

    var timeSpentFactor = document.createElement("input");
    snowboardTripObj.appendChild(timeSpentFactor);

    timeSpentButton.onclick = function () {
        snowboardTripObj.changeTripPrice(timeSpentFactor.value);
    };

    snowboardTripObj.changeMilesPerHourOnSlope = function (changeTimeToBottom) {
        var x = Number(changeTimeToBottom);
        console.log("Time to bottom " + x);
        timeToBottom = x;
        milesPerHour = lengthOfSlope / x;
        milesPerHour = milesPerHour.toFixed(2);
        snowboardTripObj.display(); // show updated price on the page
    };

// create User interface for changing price
    var timeToBottomButton = document.createElement("button");
    timeToBottomButton.innerHTML = "Mph you Spent going down the slope by doing the length divided by the time you enter: ";
    snowboardTripObj.appendChild(timeToBottomButton);

    var timeToBottomFactor = document.createElement("input");
    snowboardTripObj.appendChild(timeToBottomFactor);

    timeToBottomButton.onclick = function () {
        snowboardTripObj.changeMilesPerHourOnSlope(timeToBottomFactor.value);
    }
    snowboardTripObj.log = function () {
        console.log("Condition of car with id " + snowboardTripObj.id + " is " + snowboardTripObj.condition + " and price is $" + snowboardTripObj.price);
    };

    display();
    return snowboardTripObj;
}
