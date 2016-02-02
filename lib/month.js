#!/usr/bin/env node

'use strict'

module.exports = {
  returnMonth: month,
  month2Args: month2Args
}

// Getting current month 
function month () {
  let date = new Date();
  let currentMonth = date.getMonth();
  // will return a value 0 - 11, have to had 1
  currentMonth = currentMonth +1 ;

  return currentMonth;
};

function month2Args (month, year) {
  // Requiring the zellers module
  const zellers = require('../zellers');
  // String of month header
  const secondLine ='Su Mo Tu We Th Fr Sa';
  // Object to hold month names and number of days in the month
  const monthObj = {
      1: ["January", 31],
      2: ["February", 28],
      3: ["March", 31],
      4: ["April", 30],
      5: ["May", 31],
      6: ["June", 30],
      7: ["July", 31],
      8: ["August", 31],
      9: ["September", 30],
      10: ["October", 31],
      11: ["November", 30],
      12: ["December", 31]
  };


  if (year < 1753) {
    console.log("Please choose a year more recent than 1753");
  } else if (year > 9999) {
      console.log("Please choose a year less than 9999");
  } else {
      // Assigning month1 input to m
      let m = month;
      // Assigning year input to y
      let y = year;
      // Getting the starting day for the month
      let h = zellers.getDay(y, m, 1);
      // Checking for leap year
      let leapYear = zellers.isLeapYear(y);
      // Variable to hold number of days in a month
      let monthLength = 0;
      // Making day adjustment for leap year
      if (m===2 && leapYear === true) {
        monthLength = monthObj[m][1] + 1;
      } else {
        monthLength = monthObj[m][1]
      }

      // Gets month and year for monthObj
      let monthAndYear = `${monthObj[m][0]} ${y}`;
      // Calculates first row spaces
      let firstRowSpaces = (20 - monthAndYear.length) / 2;
      // Used for additional spacing
      let space = " ";
      // Building first row
      let firstRow = space.repeat(firstRowSpaces)+monthAndYear;
      //Outputs Months and year
      console.log(firstRow);

      // Adjusting h to fit into designated space
      h === 0 ? h = 6 : h = h - 1;
      //Variable to hold days
      let days = '';
      //Variable to hold count
      let count = 0;
      // Add space before h
      for (let i = 0; i < h; i++) {
        days += "   ";
        count += 1;
      }

      // loop to generate date numbers
      for (var j = 1; j <= monthLength; j++) {
        days += (j<10) ? " "+j+" " : j+" ";
        count += 1;

      if (count % 7===0) {
        days = days.slice(0, -1);
        days += "\n";
      }
    }

      // SLicing unneeded space
      days = days.slice(0, -1);

      if (days.match(/\n/g).length === 4) {
        days += "\n";
      } else if (days.match(/\n/g).length === 3) {
        days += "\n\n";
      }

      let calendar = `${secondLine}\n${days}`;
      console.log(calendar);


  }

}


