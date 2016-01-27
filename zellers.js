#!/usr/bin/env node

'use strict'

module.exports = {
  modifiedMonth: month,
  modifiedYear: year,
  getDay: day
}

   function month (month) {
     //console.log(month);
   
     if (month === 1) {
       return 13;
     } else if (month === 2) {
       return 14;
     } else {
       return month;
     }
   }

  function year (year, month) {
    //console.log(year);
    //console.log(month);

    if (month < 3) {
      let y = year - 1;
      //console.log("y", y);
      return y;
    } else {
      return year;
    }
  }

  function day (year1, month1, day1) {
    let q = day1;
    let m = month(month1);
    let y = year(year1, month1);
    let k = y % 100;
    let j = Math.floor(y/100);
    let h =  (q + Math.floor(((m+1)*26)/10) + y + Math.floor(y/4) + (6 * Math.floor(y/100)) + Math.floor(y/400)) % 7;
    return h;
  }
