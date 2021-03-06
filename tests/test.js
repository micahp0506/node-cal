'use strict'

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();
      expect(output).to.equal(goal);
    });
  });

  describe('March 4301', () => {
    it('Computer Cal should equal my Cal', () => {
      const goal = execSync('cal 3 4301').toString();
      const output = execSync('./cal.js 3 4301').toString();
      expect(output).to.equal(goal);
    });
  });

  describe('August 1879', () => {
    it('Computer Cal should equal my Cal', () => {
      const goal = execSync('cal 8 1879').toString();
      const output = execSync('./cal.js 8 1879').toString();
      expect(output).to.equal(goal);
    });
  });

  describe('February 1872', () => {
    it('Computer Cal should equal my Cal', () => {
      const goal = execSync('cal 2 1872').toString();
      const output = execSync('./cal.js 2 1872').toString();
      expect(output).to.equal(goal);
    });
  });

  describe('April 1923', () => {
    it('Computer Cal should equal my Cal', () => {
      const goal = execSync('cal 4 1923').toString();
      const output = execSync('./cal.js 4 1923').toString();
      expect(output).to.equal(goal);
    });
  });

  describe('November 2015', () => {
    it('Computer Cal should equal my Cal', () => {
      const goal = execSync('cal 11 2015').toString();
      const output = execSync('./cal.js 11 2015').toString();
      expect(output).to.equal(goal);
    });
  });

});

describe("Zeller's congruence", () => {
  const zellers = require('../zellers.js');
  describe("Modified month", () => {
    it('returns 13 for January', () => {
      expect(zellers.modifiedMonth(1)).to.equal(13);
      expect(zellers.modifiedMonth(2)).to.equal(14);
      expect(zellers.modifiedMonth(3)).to.equal(3);
    });
  });

  describe('.modifiedYear', () => {
    it('returns 2015 for Jan 2014', () => {
      expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
    });
  });

  describe('.getDay', () => {
    it('returns 0 (Starts on Saturday) for October 1, 2016', () => {
      expect(zellers.getDay(2016, 10, 1)).to.equal(0);
    });
  });

  describe('.getDay', () => {
    it('returns 0 (Starts on Saturday) for March 1, 2014', () => {
      expect(zellers.getDay(2016, 10, 1)).to.equal(0);
    });
  });


  describe('.getDay', () => {
    it('returns 1 (Starts on Sunday) for Jan 1, 2017', () => {
      expect(zellers.getDay(2017, 1, 1)).to.equal(1);
    });
  });

  describe('.getDay', () => {
    it('returns 2 (Starts on Monday) for March 1, 2100', () => {
      expect(zellers.getDay(2100, 3, 1)).to.equal(2);
    });
  });

  describe('.getDay', () => {
    it('returns 2 (Starts on Monday) for Feb 1, 2016', () => {
      expect(zellers.getDay(2016, 2, 1)).to.equal(2);
    });
  });

  describe('.getDay', () => {
    it('returns 3 (Start on Tuesday) for March 1, 2016', () => {
      expect(zellers.getDay(2016, 3, 1)).to.equal(3);
    });
  });

  describe('.getDay', () => {
    it('returns 4 (Starts on Wednesday) for March 1, 2000', () => {
      expect(zellers.getDay(2000, 3, 1)).to.equal(4);
    });
  });

  describe('.getDay', () => {
    it('returns 5 (Starts on Thursday) for March 1, 2300', () => {
      expect(zellers.getDay(2300, 3, 1)).to.equal(5);
    });
  });

  describe('.getDay', () => {
    it('returns 5 (Starts on Thursday) for Feb 1, 2032', () => {
      expect(zellers.getDay(2012, 3, 1)).to.equal(5);
    });
  });

  describe('.getDay', () => {
    it('returns 6 (Starts on Friday) for Jan 1, 2016', () => {
      expect(zellers.getDay(2016, 1, 1)).to.equal(6);
    });
  });

});

describe("Is it a leap year?", () => {
  const zellers = require('../zellers.js');
  describe(".isLeapYear", () => {
    it('testing 2016', () => {
      expect(zellers.isLeapYear(2016)).to.be.true;
    });
  });

  describe(".isLeapYear", () => {
    it('testing 2032', () => {
      expect(zellers.isLeapYear(2032)).to.be.true;
    });
  });

  describe(".isLeapYear", () => {
    it('testing 2017', () => {
      expect(zellers.isLeapYear(2017)).to.be.false;
    });
  });

  describe(".isLeapYear", () => {
    it('testing 2101', () => {
      expect(zellers.isLeapYear(2017)).to.be.false;
    });
  });


});





//describe('.center', () => {
  //it('should handle January', () => {
    //expect(center('January 2016')).to.equal('    January 2016');
  //});
//});
