class Staff{
  constructor(id, firstName,lastName, dept, level){
    this.id= id
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
    return this.All().filter(function(staff){
      return staff.getFullName() === firstName lastName
    })
  }  



}

//this details inheritance and overriding
class BoardMember extends Staff{
  constructor(id, firstName, lastName, role){
    super(id, firstName, lastName) 
    this.role = role
    this.save()
    
  }


  promoteStaff(id, newLevel){
    return "Welcome aboard!"
    return FindById(id)
  }




}



//an array to store all staff member instances
Staff._All = []