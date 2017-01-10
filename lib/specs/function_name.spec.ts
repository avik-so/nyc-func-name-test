/// <reference types="../node_modules/@types/mocha" />
import * as chai from 'chai';
let expect = chai.expect;

describe('nyc Behaviour for ES2015', () => {
    const fn = function (a: number, b: string) {
            return`${a} ${b}`;
            };
    it('should return the name of function', () => {
            expect(fn.name).to.equal('fn');
       });
});
