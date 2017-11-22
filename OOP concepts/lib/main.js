"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var idCounter = exports.idCounter = 1001;

var Staff = function () {
  function Staff(firstName, lastName, dept, level) {
    _classCallCheck(this, Staff);

    //id numbers start from 1002
    this.id = (exports.idCounter = idCounter += 1, idCounter - 1);
    this.firstName = firstName;
    this.lastName = lastName;
    this.dept = dept;
    this.level = level;
    this.save();
  }

  _createClass(Staff, [{
    key: "save",
    value: function save() {
      this.constructor._All.push(this);
    }
  }, {
    key: "signIn",
    value: function signIn() {
      return this.firstName + " " + this.lastName + " with ID number " + this.id + " has signed in.";
    }
  }, {
    key: "signOut",
    value: function signOut() {
      return this.firstName + " " + this.lastName + " with ID number " + this.id + " has signed out.";
    }
  }, {
    key: "hasAccessed",
    value: function hasAccessed() {
      return this.firstName + " " + this.lastName + " with ID number " + this.id + " has accessed this door.";
    }
  }, {
    key: "daysOff",
    value: function daysOff() {
      var level = this.level;
      if (level < 5) {
        return this.firstName + " " + this.lastName + "  has 10 days off in a year";
      } else if (level > 5 && level < 8) {
        return this.firstName + " " + this.lastName + " has 15 days off in a year";
      } else if (level >= 8) {
        return this.firstName + " " + this.lastName + "  has 20 days off in a year";
      }
    }
  }, {
    key: "getFullName",
    value: function getFullName() {
      return this.firstName + " " + this.lastName;
    }

    //this details encapsulation
    //this is now class getter, that returns 
    //the class property of _All

  }], [{
    key: "All",
    value: function All() {
      return this._All;
    }
    //functions that operate on the class itself are static
    //this. will refer to the class

  }, {
    key: "FindById",
    value: function FindById(id) {
      return this.All().filter(function (staff) {
        return staff.id === id;
      });
    }
  }, {
    key: "FindByFullName",
    value: function FindByFullName(firstName, lastName) {
      var fullName = firstName + " " + lastName;
      return this.All().filter(function (staff) {
        return staff.getFullName() === fullName;
      });
    }
  }, {
    key: "editStaffDetails",
    value: function editStaffDetails(id, newFN, newSN, newDept, newLevel) {
      var matchedStaff = Staff.FindById(id);
      matchedStaff.firstName = newFN;
      matchedStaff.lastName = newSN;
      matchedStaff.dept = newDept;
      matchedStaff.level = newLevel;
      return matchedStaff;
    }
  }, {
    key: "deleteStaff",
    value: function deleteStaff(id) {

      var matchedStaff = this.FindById(id);

      for (var key in personal_info) {
        matchedStaff[key] = null;
      }
      return matchedStaff.firstName + " " + matchedStaff.lastName + " is not a staff member.";
    }
  }]);

  return Staff;
}();

//this details inheritance and overriding


exports.default = Staff;

var BoardMember = exports.BoardMember = function (_Staff) {
  _inherits(BoardMember, _Staff);

  function BoardMember(id, firstName, lastName, role) {
    _classCallCheck(this, BoardMember);

    var _this = _possibleConstructorReturn(this, (BoardMember.__proto__ || Object.getPrototypeOf(BoardMember)).call(this, firstName, lastName));

    _this.id = id;
    _this.role = role;
    _this.save();

    return _this;
  }

  _createClass(BoardMember, [{
    key: "promoteStaff",
    value: function promoteStaff(id) {
      var matchedStaff = Staff.FindById(id);
      return matchedStaff.level = matchedStaff.level + 1;
    }
  }]);

  return BoardMember;
}(Staff);

//let boardMember1 = new Staff(212, "John", "Micheal", "CEO")
//let staff2 = new Staff(3245, "Akpan", "Stevens", "Operations", 6)

//an array to store all staff member instances


Staff._All = [];