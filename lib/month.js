#!/usr/bin/env node

'use strict'

module.exports = {
  returnMonth: month
}

// Getting current month 
function month () {
  let date = new Date();
  let currentMonth = date.getMonth();
  // will return a value 0 - 11, have to had 1
  currentMonth = currentMonth +1 ;
  
  return currentMonth;
}
