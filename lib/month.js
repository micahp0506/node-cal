#!/usr/bin/env node

'use strict'

module.exports = {
  returnMonth: month
}


function month () {
  let date = new Date();
  let currentMonth = date.getMonth();
  currentMonth = currentMonth + 1;
  
  return currentMonth;
};
