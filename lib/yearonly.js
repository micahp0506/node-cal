#!/usr/bin/env node

'use strict'

module.exports = {
  monthBlock: monthBlock
}

function monthBlock (y) {

  const zellers = require('../zellers');
  // Setting year input to year
  let year = `${y}`;
  // Calculating the number of spaces preceding the month name
  let yearOnlySpaces = ((64 - year.length) / 2)-1;
  //Sapce variable
  let space = ' ';
  // Assembling the first row of the output
  let firstRow = space.repeat(yearOnlySpaces)+year;

  console.log(firstRow);
  // Checking for leapyear
  let leapYear = zellers.isLeapYear(y);

  
}
