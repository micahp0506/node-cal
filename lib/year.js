#!/usr/bin/env node

'use strict'

module.exports = {
  returnYear: year
}

// Getting the current year
function year () {
  let date = new Date();
  let currentYear = date.getFullYear();
  
  return currentYear;
  
};
