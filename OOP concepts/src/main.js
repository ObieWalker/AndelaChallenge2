
export let idCounter = 1001

export default class Staff{
  constructor(firstName,lastName, dept, level){
    if (!(typeof firstName === 'string') && !(typeof lastName === 'string') && !(typeof level === 'number')){
        throw TypeError("Invalid arguments type");
    }
    if (level < 0 || level> 15){
        throw Error("Invalid level input")
    }

    //id numbers start from 1002
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
    let level = this.level
    if (level < 5){
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
  getLevelDept(){
    return ` ${this.firstName} ${this.lastName} is a staff of level ${this.level} in the ${this.dept} department`
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
    return matchedStaff
  }

  static deleteStaff(id){
    let matchedStaff = this.FindById(id)
    let deletedFname = matchedStaff.firstName
    let deletedLname = matchedStaff.lastName   
    for (var key in personal_info ){
      matchedStaff[key] = null;
    }
    return `${deletedFname} ${deletedLname} is not a staff member.`
  }

}

//this details inheritance and overriding
export class BoardMember extends Staff{

  constructor(id, firstName, lastName, role){
    super(firstName, lastName)
    if(!(typeof id === 'number')){
      throw Error("The ID must be a number")
    } 
    if(!(id>100001 && id <110001)){
      throw Error("Please enter an ID value between 4001 and 8001");
    }
    this.id = id
    this.role = role
    this.save()
    
  }


  promoteStaff(id){
    let matchedStaff = Staff.FindById(id)
    return matchedStaff.level= matchedStaff.level + 1
    
  }



}

export class PartTimeStaff extends Staff{

  constructor(firstName,lastName, dept, level, pt){
    super(pt)
    this.pt = "Part time"
  }

  getDetails(){
    return `${this. firstName} ${this.lastName} is a ${this.pt} employee`
  }
}

//let boardMember1 = new Staff(212, "John", "Micheal", "CEO")
//let staff2 = new Staff(3245, "Akpan", "Stevens", "Operations", 6)

//an array to store all staff member instances
Staff._All = []