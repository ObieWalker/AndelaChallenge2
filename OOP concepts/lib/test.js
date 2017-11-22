'use strict';

var _chai = require('chai');

var chai = _interopRequireWildcard(_chai);

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var assert = chai.assert; //import { describe, before, it } from 'mocha';


describe("StaffClass", function () {

	describe("should not return an empty array", function () {
		it("shoud not return [] when called first", function () {
			assert.notEqual(_main2.default.All(), []);
		});
	});

	describe("should return the full name", function () {
		var staff23 = new _main2.default("Micheal", "Emenalo", "Operations", 6);
		it("should return Micheal Emenalo as an input for Micheal Emenalo", function () {
			assert.equal(staff23.getFullName(), "Micheal Emenalo");
		});
	});

	describe("should calculate how many days off in a year", function () {
		var staff61 = new _main2.default("Steve", "Mourinho", "Operations", 7);
		it("should return Steve Mourinho has 15 days off in a year", function () {
			assert.equal(staff61.daysOff(), "Steve Mourinho has 15 days off in a year");
		});
	});

	describe("should output that the staff member accessed this door", function () {
		var staff78 = new _main2.default("Judith", "Maureen", "Sales", 9);
		it("should return Judith Maureen with ID number 1003 has accessed this door.", function () {
			assert.equal(staff78.hasAccessed(), "Judith Maureen with ID number 1003 has accessed this door.");
		});
	});
});