#!/usr/bin/env node

'use strict'

const generateYear = require('./lib/year');

module.exports = {
  modifiedMonth: month,
  modifiedYear: year,
  getDay: day,
  isLeapYear: leapYear
}

   function month (month) {
     
     // If month is January have to make it 13
     if (month === 1) {
       let month = 13;
       return month;
       // If month is February have to make 14
     } else if (month === 2) {
       let month = 14;
       return month;
       } else {
       return month;
       }
   }

  // Function to make adjusment to year 
  function year (year, month) {

    // month is less than 3 have to subtract 1
    if (month < 3) {
      let y = year - 1;
      return y;
      } else {
      return year;
      }
  }

  // Getting h value for the starting point
  function day (year1, month1, day1) {

    // day1 will always be 1 for the 1st day of the month, to find the beginning day of the month
    let q = day1;
    // Sending month1 to month() to check for the needed adjustment for calculation
    let m = month(month1);
    // Sending year1 to year() to check for the needed adjustment for calculation
    let y = year(year1, month1);
    // Getting the modulus value of y
    let k = y % 100;
    // Rounding down y
    let j = Math.floor(y/100);
    //let currentYear = generateYear.returnYear();
    let h = (q + Math.floor((13*(m+1))/5) + k + Math.floor(k/4) + Math.floor(j/4) + (5*j)) % 7;

    return h;
  }

  // Checking for leap year
  function leapYear (year1) {

    if ((year1 % 400 === 0) || (year1 % 4 === 0 && year1 % 100 !== 0)) {
      return true;
    } else {
      return false;
    }
  }

