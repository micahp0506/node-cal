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
    it('returns 2015 for Jan 2015', () => {
      expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
    });
  });

  describe('.getDay', () => {
    it('returns 2 (Tuesday) for March 1, 2016', () => {
      expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      expect(zellers.getDay(2300, 3, 1)).to.equal(4);
    });
  });
});

//describe('.center', () => {
  //it('should handle January', () => {
    //expect(center('January 2016')).to.equal('    January 2016');
  //});
//});
