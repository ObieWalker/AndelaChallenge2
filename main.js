
let idCounter = 1001

class Staff{
  constructor(firstName,lastName, dept, level){
    this.id= idCounter++
    this.firstName = firstName
    this.lastName = lastName
    this.dept = dept
    this.level = level  
    this.save()
    
  }

  save(){
    this.constructor._All.push(this)
  }

  signIn(){
    return `${this.firstName} ${this.lastName} with ID number ${this.id} has signed in.`
  }
  signOut(){
     return `${this.firstName} ${this.lastName} with ID number ${this.id} has signed out.`
  }
  hasAccessed(){
    return `${this.firstName} ${this.lastName} with ID number ${this.id} has accessed this door.`
  }
  daysOff(){
    if (level > 5){
      return `${this.firstName} ${this.lastName}  has 10 days off in a year`
    }
    else if(level>5 && level <8){
      return `${this.firstName} ${this.lastName} has 15 days off in a year`
    }
    else if (level>= 8){
      return `${this.firstName} ${this.lastName}  has 20 days off in a year`
    }
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

//this details encapsulation
//this is now class getter, that returns 
//the class property of _All
  static All(){
    return this._All
  }
//functions that operate on the class itself are static
//this. will refer to the class
  static FindById(id){
    return this.All().filter(function(staff){
      return staff.id === id
    })
  }

  static FindByFullName(firstName, lastName){
    let fullName = firstName +" "+lastName
    return this.All().filter(function(staff){
      return staff.getFullName() === fullName
    })
  }  

  static editStaffDetails(id, newFN, newSN, newDept, newLevel){
    let matchedStaff = Staff.FindById(id)
    matchedStaff.firstName=newFN
    matchedStaff.lastName=newSN
    matchedStaff.dept = newDept
    matchedStaff.level = newLevel
    matchedStaff.save()
    return matchedStaff
  }



}

//this details inheritance and overriding
class BoardMember extends Staff{

  constructor(id, firstName, lastName, role){
    super(firstName, lastName) 
    this.id = id
    this.role = role
    this.save()
    
  }


  promoteStaff(id){
    let matchedStaff = Staff.FindById(id)
    return matchedStaff.level= matchedStaff.level + 1
    }
  }



}

let boardMember1 = new Staff(212, "John", "Micheal", "CEO")
let staff1 = new Staff(3245, "Akpan", "Stevens", "Operations", 6)

//an array to store all staff member instances
Staff._All = []