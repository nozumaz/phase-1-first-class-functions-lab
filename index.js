// Code your solution in this file!
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const multiplier = [fareDoubler, fareTripler, fareQuadrupler, fareQuintupler];

function returnFirstTwoDrivers(drivers) { return drivers.slice(0,2); }
function returnLastTwoDrivers(drivers) { return drivers.slice(drivers.length-2, drivers.length); }

function createFareMultiplier(fare) { return multiplier[fare-2]; }
function fareDoubler(fare) { return fare * 2; }
function fareTripler(fare) { return fare * 3; }
function fareQuadrupler(fare) { return fare * 4; }
function fareQuintupler(fare) { return fare * 5; }

function selectDifferentDrivers(drivers, selectDrivers) {
    return selectDrivers(drivers);
}