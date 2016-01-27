#!/usr/bin/env node

'use strict'

module.exports = {
  returnDay: day
}


function day () {
  let date = new Date();
  let currentDay = date.getDate();
  //console.log('day', day);
  return currentDay;
};
