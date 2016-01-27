#!/usr/bin/env node

'use strict'

module.exports = {
  returnMonth: month
}


function month () {
  let date = new Date();
  let currentMonth = date.getMonth();
  console.log("month page", currentMonth);
  currentMonth = currentMonth + 1;
  
  return currentMonth;
};
