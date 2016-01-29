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
     //console.log("month", month);

     if (month === 1) {
       let month = 13;
       //console.log("month", month)
       return month;
     } else if (month === 2) {
       let month = 14;
       //console.log("month", month)
       return month;
     } else {
       return month;
       //console.log("month", month)
     }
   }

  function year (year, month) {
    //console.log("year", year);
    //console.log("month", month);

    if (month < 3) {
      let y = year - 1;
      //console.log("y", y);
      return y;
    } else {
      return year;
    }
  }

  function day (year1, month1, day1) {
    //console.log(year1, month1, day1);
    let q = day1;
    let m = month(month1);
    let y = year(year1, month1);
    let k = y % 100;
    let j = Math.floor(y/100);
    //let currentYear = generateYear.returnYear();
    let h = (q + Math.floor((13*(m+1))/5) + k + Math.floor(k/4) + Math.floor(j/4) + (5*j)) % 7;
    //console.log("h", h)
    //console.log("h", h);
    ////console.log("month1", month1);
    //month1 = parseInt(month1);
    //console.log(typeof(month1));
    //console.log("year1", year1);
    //year1 = parseInt(year1);
    //console.log(typeof(year1));
    //if (year1 < currentYear) {
      //console.log("h", h);
      //let leapYearCheck = leapYear(year1);
      //if (leapYearCheck === false) {
        //if (h === 5) {
          //h = 0;
          //return h;
        //} else if (h === 6) {
          //h = 1;
          //return h;
        //} else {
          //h = h + 2;
          //return h;
        //}
      //}
    //}

    //if (month1 === 2 && ((year1 % 400 === 0) || (year1 % 4 === 0 && year1 % 100 !== 0))) {
      //console.log("h", h)
      //h === 0 ? h = 6 : h = h - 1;
      //console.log("after if h", h);
      //return h;
    //} else {
      return h;
    //}
  }

  function leapYear (year1) {
    if ((year1 % 400 === 0) || (year1 % 4 === 0 && year1 % 100 !== 0)) {
      return true;
    } else {
      return false;
    }
  }

