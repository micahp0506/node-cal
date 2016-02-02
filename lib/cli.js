#!/usr/bin/env node --harmony_destructuring

'use strict';


(function calendarBuilder () {

  const generateMonth = require('./month');
  const generateYear = require('./year');
  const zellers = require('../zellers');
  const yearOnly = require('./yearonly');
  const _ = require('lodash');
  // variable for month used in zellers calc
  let m;
  // variable for year used in zellers calc
  let y;
  // variable fot starting point in zellers calc
  let h;
  // Month name object with days in the month
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
  // Checkin for leap year
  let leapYear;
  // Variable to hold the amount of days in a month
  let monthLength;
  // Takes ISO month and reduces by 1 to get index point of month array
  let adjustedM;
  // String of month header
  let secondLine ='Su Mo Tu We Th Fr Sa';
  // Variable to hold month and year output
  let monthAndYear;
  // Variable to hold leading spaces in before starting day
  let days = '';
  // Variable to hold block count, used to assemble day block
  let count = 0;
  // Variable to hold space before month name on first row
  let firstRowSpaces = 0;
  // Variablle to hpld 1 additional space
  let space = ' ';
  // Variablle to hpld 2 additional spaces
  let spaces ='  ';
  // Variable to hold built first row(month & year)
  let firstRow;
  // Variable to hold built calendar(Days and number of days)
  let calendar;
  // Allowing arguments to be passed into ./cal.js
  const [,, ...args] = process.argv
  // Accepting the arguments 
  const [month, year] = args;
  //Checking to see the number of arguments that are passed into the fucntion at the command line level
  if (args.length === 2) {
    // turning month into a number from a string
    let month1 = parseInt(month);
    // Assigning month1 input to m
    m = month1;
    // Assigning year input to y
    y = year;
    // Getting the starting day for the month
    h = zellers.getDay(y, m, 1);
    // Checking for leap year
    leapYear = zellers.isLeapYear(y);
    // Making day adjustment for leap year
    if (m===2 && leapYear === true) {
      monthLength = monthObj[m][1] + 1;
      } else {
        monthLength = monthObj[m][1]
      }
      // Checking for year error message
      checker();

    } 
    
    else if(args.length === 1) {
      //console.log('cal month', month)
      // Setting the input year the reason for y to be set to month, the variable for input is called month
      y = parseInt(month);
      // Sending it to the function to build the year only output
      //console.log('y', y);
      //console.log(typeof(y));
      // Checking to see if year provided through argument are greater than 1753 and less than 9999
      if (y < 1753) {
        console.log("Please choose a year more recent than 1753");
      } else if (y > 9999) {
        console.log("Please choose a year less than 9999");
      }

        yearOnly.year(y);

    } else if(args.length === 0) {
      // getting current month
      m = generateMonth.returnMonth();
      // getting current year
      y = generateYear.returnYear();
      // getting the starting the day
      h = zellers.getDay(y, m, 1);
      // Checking for leap year
      leapYear = zellers.isLeapYear(y);
      // Getting the number of days in the month
      // // Making day adjustment for leap year
      if (m===2 && leapYear === true) {
        monthLength = monthObj[m][1] + 1;
        } else {
          monthLength = monthObj[m][1]
        }

        // Checking for year error message
        checker()
    }


  function checker () {
    // Checking to see if year provided through argument are greater than 1753 and less than 9999
    if (y < 1753) {
      console.log("Please choose a year more recent than 1753");
    } else if (y > 9999) {
      console.log("Please choose a year less than 9999");
    } else {
      printer();
    }
  }

  function printer () {

    // Gets month and year for monthObj
    monthAndYear = `${monthObj[m][0]} ${y}`;
    // Calculates first row spaces
    firstRowSpaces = (20 - monthAndYear.length) / 2;
    // Used for additional spacing
    space = " ";
    // Building first row
    firstRow = space.repeat(firstRowSpaces)+monthAndYear;
    //Outputs Months and year
    console.log(firstRow);

    // Adjusting h to fit into designated space
    h === 0 ? h = 6 : h = h - 1;
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

    calendar = `${secondLine}\n${days}`;
    console.log(calendar);

  }

  

  } ());

