//import { describe, before, it } from 'mocha';
import * as chai from 'chai';
import Staff from '../src/main.js';
import {BoardMember} from '../src/main.js';
let assert = chai.assert;


describe("StaffClass", () =>{


	describe("should not return an empty array", () =>{
		it("shoud not return [] when called first", () => {
			assert.notEqual(Staff.All(), []);
		});
	})


	describe("should return the full name", ()=>{
		let staff23 = new Staff("Micheal", "Emenalo", "Operations", 6)
		it("should return Micheal Emenalo as an input for Micheal Emenalo", ()=>{
			assert.equal(staff23.getFullName(), "Micheal Emenalo");
		});
	})

	describe("should calculate how many days off in a year", () =>{
		let staff61 = new Staff("Steve", "Mourinho", "Operations", 7)
		it("should return Steve Mourinho has 15 days off in a year",()=>{
			assert.equal(staff61.daysOff(),"Steve Mourinho has 15 days off in a year");		
		})
	})

	describe("should output that the staff member accessed this door", ()=>{
		let staff78 = new Staff("Judith", "Maureen", "Sales", 9)
		it("should return Judith Maureen with ID number 1003 has accessed this door.", ()=>{
			assert.equal(staff78.hasAccessed(), "Judith Maureen with ID number 1003 has accessed this door.");
		})
	})

})