#!/usr/bin/env node --harmony_destructuring

'use strict';


(function calendarBuilder () {
  //const [,, ...args] = process.argv
  //console.log(args);
  //if (args.length === 2) {
    //const [month, year] = args;
    //console.log({year}, {month})
  //} else if (args.length === 1) {
    //const [year] = args;
    //console.log('generateYear(${year})')
  //} else {
    //console.log('broke')
    //process.exit(64);
  //}
  const generateMonth = require('./lib/month');
  const generateYear = require('./lib/year');
  const generateDay = require('./lib/day');
  const zellers = require('./zellers');

  let m = generateMonth.returnMonth();
  let y = generateYear.returnYear();
  let d = generateDay.returnDay();
  let h = zellers.getDay(2016, 1, 1);

  if (y < 1753) {
    console.log("Please choose a year more recent than 1753");
  } else if (y > 9999) {
    console.log("Please choose a year less than 9999");
  } else {

     console.log("month", m);
     console.log("year", y);
     //console.log("day", d);
     console.log("h", h);

     const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
     const totalDays = [];
     let adjustedM = m - 1;//Takes ISO month and reduces by 1 to get index point of month array
     let secondLine ='Su Mo Tu We Th Fr Sa';
     let month;
     let days;
     let space = ' ';
     let calendar;

     for (let i = 0; i < monthArr.length; i++) {
       if (adjustedM === i) {
        month = monthArr[i];
        days = daysArr[i];
        console.log(month);
        console.log(days);
        }
      }

    calendar = "    " + month + " " + y + "    \n"
    + secondLine;
    console.log(calendar);

  }
} ());

