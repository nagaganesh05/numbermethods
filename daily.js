// Monthly Budget Planner


function monthlyBudgetPlanner(monthlyIncome, expenses) {
    let totalExpenses = expenses.reduce((prev, curr) => prev + curr, 0);
    let balance = monthlyIncome - totalExpenses;
    return balance;
}
let monthlyIncome = 10000;
let expenses = [2000, 1000, 500, 400];
console.log(monthlyBudgetPlanner(monthlyIncome, expenses))


//  Taxi Fare Calculator

function fareCalculator(distance) {
    let baseFare = 10;
    let extraFare = 5;
    const additionalDistance = distance - 2;
    const additionalFare = additionalDistance * extraFare;
    const totalFare = baseFare + additionalFare;
    return totalFare;
}
const distance = parseInt(prompt("Enter the distance: "));
console.log(fareCalculator(distance))


// University Attendance Tracker


function attendanceTracker(attendances) {
    let totalAttendence = attendances.length;
    let attended = attendances.filter(attendances => attendances === 'present').length;
    let attperc = (totalAttendence / attended) * 100;
    return attperc >= 75;
}
let attendances = ['present', 'absent', 'present', 'present', 'absent', 'absent', 'present'];
console.log(attendanceTracker(attendances))



// Speeding Ticket Check


function speedingTicketCheck(vehicleSpeed,speedLimit){
let buffer = 5;
let speeding = vehicleSpeed>(speedLimit+buffer);
return speeding;
}
let vehicleSpeed = 90;
let speedLimit = 60;
let ticket = speedingTicketCheck(vehicleSpeed,speedLimit)
console.log("issue ticket",ticket)



// Currency Converter


function exchangeCurr(amount,fromCurr,toCurr,exchangeRate){
  if(fromCurr === toCurr){
    return amount;
  }
  let convert = (amount/exchangeRate);
  return convert;
}
let amount = 200;
let fromCurr = "USD";
let toCurr = "INR";
let exchangeRate = 82;
console.log(exchangeCurr(amount,fromCurr,toCurr,exchangeRate))



function exchangeCurr(amount,fromCurre,toCurre,exchangeRates){
    if(fromCurre === toCurre){
      return amount;
    }
    let convert = (amounts/exchangeRates);
    return convert;
  }
  let amounts = parseInt(prompt("Enter the Amount: "));
  let fromCurre = prompt("Enter the from currency: ");
  let toCurre = prompt("Enter the to currency: ");
  let exchangeRates = parseInt(prompt("Enter the exchange rate: "));
  console.log(exchangeCurr(amounts,fromCurre,toCurre,exchangeRates))