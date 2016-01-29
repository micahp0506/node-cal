#!/usr/bin/env node --harmony_destructuring

'use strict';


(function calendarBuilder () {

  const generateMonth = require('./lib/month');
  const generateYear = require('./lib/year');
  const generateDay = require('./lib/day');
  const zellers = require('./zellers');
  let m;
  let y;
  //let d = generateDay.returnDay();
  let h;  //console.log("month", m);
  //console.log("year", y);
  //console.log("day", d);
  //console.log("h", h);
  const monthArr = ["    January ", "   February ", "     March ", "     April ", "      May ", "     June ", "     July ", "    August ", "   September ", "    October ", "   November ", "   December "];
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
  let monthLength;
  //const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //const totalDays = [];
  let adjustedM;//Takes ISO month and reduces by 1 to get index point of month array
  let secondLine ='Su Mo Tu We Th Fr Sa';
  let month;
  let days;
  let space = ' ';
  let calendar;
  //const l1 =   '                   1  2  3  4  5  6  7',
        //l2 =   ' 2  3  4  5  6  7  8  9 10 11 12 13 14',
        //l3 =   ' 9 10 11 12 13 14 15 16 17 18 19 20 21',
        //l4 =   '16 17 18 19 20 21 22 23 24 25 26 27 28',
        //l5 =   '23 24 25 26 27 28 29 30 31            ',
        //l6 =   '30 31                                 ',
        //l530 = '23 24 25 26 27 28 29 30               ',
        //l630 = '30                                    ',
        //l529 = '23 24 25 26 27 28 29                  ',
        //l629 = '                                      ',
        //l528 = '23 24 25 26 27 28                     ',
        //l628 = '                                      ';

  const [,, ...args] = process.argv
  //console.log(args);
  //Checking to see the number of arguments that are passed into the fucntion at the command line level
  if (args.length === 2) {
    const [month, year] = args;
    // Getting the number of days in the month
    monthLength = month===2 && zellers.leapYear(year) ? monthObj[month][1] + 1 : monthObj[month][1];
    // Assigning month input to m
    m = month;
    // Assigning year input to y
    y = year;
    // Adjusting m for calculations
    adjustedM = m - 1;
    // Getting the starting day for the month
    h = zellers.getDay(y, m, 1);
    // Checking for year error message
    checker();
    //console.log(y, m);
    //h = h + 1;
    //console.log(h);
    //console.log(m);
      //} else if (args.length === 1) {
    //const [year] = args;
    //y = year;
    //console.log(y);
    //h = zellers.getDay(y, m, 1);
    //checker();
  } else {
    // getting current month
    m = generateMonth.returnMonth();
    // getting current year
    y = generateYear.returnYear();
    // getting the starting the day
    h = zellers.getDay(y, m, 1);
    // Getting the number of days in the month
    monthLength = m===2 && zellers.leapYear(y) ? monthObj[m][1] + 1 : monthObj[m][1];
    // Adjusting m for calculations
    adjustedM = m - 1;
    // Checking for year error message
    checker();
  }

  function checker () {
    if (y < 1753) {
      console.log("Please choose a year more recent than 1753");
    } else if (y > 9999) {
      console.log("Please choose a year less than 9999");
    } else {
      printer();
    }
  }

  function printer () {

    for (let i = 0; i < monthArr.length; i++) {
      if (adjustedM === i) {
        month = monthArr[i];
        //console.log("from cal 85 h",h);
        //console.log("from cal 86 1", m);
        //console.log("from cal 87 month", month);
      }
    }

    console.log(month + y);
    console.log(secondLine);
    //console.log(typeof(month));
    //console.log(typeof(y));
    //console.log(typeof(h))
    //console.log(h)
    
    if (h === 1) {
      //console.log("in")
      maker(18);
    } else if (h === 2) {
      maker(15);
    } else if (h === 3) {
      maker(12);
    } else if (h === 4) {
      maker(9);
    } else if (h === 5) {
      maker(6);
    } else if (h === 6) {
      maker(3);
    } else if (h === 0) {
      maker(0)
    };
  }


  function maker (start) {
    console.log(l1.slice(start, start + 20) + '\n' + l2.slice(start, start + 20) + '\n' + l3.slice(start, start + 20) + '\n' + l4.slice(start, start + 20));
    //console.log(typeof(m));
    m = parseInt(m);
    //console.log(typeof(m));
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
      //console.log("in")
      console.log(l5.slice(start, start + 20).trim() + '\n' + l6.slice(start, start + 20).trim());
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
      console.log(l530.slice(start, start + 20).trim() + '\n' + l630.slice(start, start + 20).trim());
    } else if (m === 2 && ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0))) {
      console.log(l529.slice(start, start + 20).trim() + '\n' + l629.slice(start, start + 20).trim());
    } else if (m === 2 && ((y % 4 !== 0) || (y % 4 === 0 && y % 100 === 0 && y % 400 !== 0))) {
       console.log(l528.slice(start, start + 20).trim() + '\n' + l628.slice(start, start + 20).trim());
    };
   //console.log("out")
  }
} ());

