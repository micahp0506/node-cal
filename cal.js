#!/usr/bin/env node

'use strict';


(function calendarBuilder () {
  const generateMonth = require('./lib/month');
  const generateYear = require('./lib/year');
  const generateDay = require('./lib/day');
  const zellers = require('./zellers');

  let m = generateMonth.returnMonth();
  let y = generateYear.returnYear();
  let d = generateDay.returnDay();
  let h = zellers.getDay(y, m, d);

  console.log("month", m);
  console.log("year", y);
  console.log("day", d);
  console.log("h", h);

  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let adjustedM = m - 1;//Takes ISO month and reduces by 1 to get index point of month array
  
  for (let i = 0; i < monthArr.length; i++) {
    if (adjustedM === i) {
      let month = monthArr[i];
      let days = daysArr[i];
      console.log(month);
      console.log(days);
      }
    }
} ());

