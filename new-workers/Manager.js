const Manager = require("./Manager")

class Manager extends Employee {
  constructor(name, id, email, officeNum ){
    // Manager constructor needs:  name, id, email, office number
    super(name, id, email, officeNum,);
    
    this.officeNum = officeNum;
  }
}

module.exports = Manager;