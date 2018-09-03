const expect = require('expect');
const utils = require('./utils');

describe('utils', () => {
  describe('#math functions', () => {
    it('should add 2 #s', () => {
      let result = utils.add(33,11);
      expect(result).toBe(44).toBeA('number');
    });
    it('should multiply a number by itself', () => {
      let result = utils.square(11);
      expect(result).toBe(121).toBeA('number');
    });
  });
  describe('#async math functions', () => {
    it('should async square a number', (done) => {
      utils.asyncSq(11, (sq) => {
        expect(sq).toBe(121).toBeA('number');
        done();
      });
    });
    it('should async add via a promise', () => {
    	return utils.asynchAdd2(3,4)
    		.then((result) => {
    			expect(result).toBe(7).toBeA('number');
    		});
    });
    it('should async add 2 numbers', (done) => {
      utils.asyncAdd(3, 4, (sum) => {
          expect(sum).toBe(7).toBeA('number');
          done();
      });
    });
  });
  describe('#first & last names', () => {
    it('should verify first and last names are set', () => {
      let user = utils.setName({age: 42, location: 'rockville'}, 'Sunny Yuen');
      expect(user).toInclude({firstName: 'Sunny', lastName: 'Yuen'}).toBeA('object');
    });
  });
});
