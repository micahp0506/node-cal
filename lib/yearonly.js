#!/usr/bin/env node --harmony_destructuring


'use strict';

module.exports = {
  year: year
}

const generateMonth = require('./month');
const generateYear = require('./year');
const zellers = require('../zellers');
const _ = require('lodash');



function year (y) {
    //console.log('y top',y)
    // variable for month used in zellers calc
    let m;
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
    // Variable to hold built calendar(Days and number of days)
    let calendar;
     //Allowing arguments to be passed into ./cal.js
    //const [,, ...args] = process.argv
     //Accepting the arguments 
    //const [month, year] = args;
    // Setting year input to year
    let year = `${y}\n`;
    // Calculating the number of spaces preceding the month name
    let yearOnlySpaces = ((64 - year.length) / 2);
    // Assembling the first row of the output
    let firstRow = space.repeat(yearOnlySpaces)+year;
    // Output variable
    let output ='';
    
    function monthBlock (m) {
      days = "";
      count = 0;
      //console.log('m', m);
      //console.log(typeof(m));
      //console.log('y', y);
      //console.log(typeof(y));
      // Getting zellers number
      h = zellers.getDay(y, m, 1);
      //console.log('h1', h);
      //console.log(typeof(h));
      // Adjusting h to fit into designated space
      h === 0 ? h = 6 : h = h - 1;
      //console.log('h2', h)
      // Add space before h
      for (let i = 0; i < h; i++) {
        days += "   ";
        count += 1;
      }

      // Checking for leapyear
      let leapYear = zellers.isLeapYear(y);

      if (m===2 && leapYear === true) {
        monthLength = monthObj[m][1] + 1;
        } else {
          monthLength = monthObj[m][1]
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

      //console.log('days', days);
      return days;
    };


    function rowBuilder (start) {
      //console.log('start', start);
      // Varaible to store array
      let monthRow = [];
      // Building the first starting month of the row
      let month1Arr = monthBlock(start);
      //console.log(month1Arr);
      month1Arr = month1Arr.split('\n').splice(1);
      // Building the second month of the row
      let month2Arr = monthBlock(start + 1);
      month2Arr = month2Arr.split('\n').splice(1);
      // Building the third month of the row
      let month3Arr = monthBlock(start + 2);
      month3Arr = month3Arr.split('\n').splice(1);
     
      // Combining the arrays
      //monthRow = _.zip(month1Arr, month2Arr, month3Arr);
      //console.log('monthRow1', monthRow);
      monthRow = _.map(monthRow, chunk => chunk.join(""));
      console.log('monthRow2', monthRow)
      // Formatting to the array to match output
      monthRow = monthRow.join("\n") + "\n";
      monthRow += "\n";

      return monthRow;

    }

    function calcSpaceMonth() {

      //console.log(firstRow);
      let mnth1 = '      January               February               March';
      mnth1 = mnth1 + "\n" + secondLine + spaces + secondLine + spaces + secondLine;
      //console.log(mnth1);
      let mnth2 = '       April                  May                   June';
      mnth2 = mnth2 + "\n" + secondLine + spaces + secondLine + spaces + secondLine;
      //console.log(mnth2);
      let mnth3 = '        July                 August              September';
      mnth3 = mnth3 + "\n" + secondLine + spaces + secondLine + spaces + secondLine;
      //console.log(mnth3);
      let mnth4 = '      October               November              December';
      mnth4 = mnth4 + "\n" + secondLine + spaces + secondLine + spaces + secondLine;
      //console.log(mnth4);
      //let monthRowReturn = space.repeat(mnth1) + month1 + spaces + space.repeat(mnth2) + month2 + spaces + space.repeat(mnth3) + month3 + '\n';
      //console.log(monthRowReturn);
      //return monthRowReturn;

    }
    output = calcSpaceMonth();
    let output1 = rowBuilder(1);
    //output = calcSpaceMonth('January', 'February', 'March') + calcSpaceMonth('April', 'May', 'June') + calcSpaceMonth('July', 'August', 'September') + calcSpaceMonth('October', 'November', 'December');
    //output = firstRow + calcSpaceMonth('January', 'February', 'March') + rowBuilder(1) + calcSpaceMonth('April', 'May', 'June') + rowBuilder(4) + calcSpaceMonth('July', 'August', 'September') + rowBuilder(7) + calcSpaceMonth('October', 'November', 'December') + rowBuilder(10);

    //console.log(output1);

  };


