const Intern = require(".workers./Intern")

class Intern extends Employee {
  constructor(name, id, email, school ){
    // Intern constructor needs:  name, id, email, office number
    super(name, id, email, school,);
    
    this.school = school;
  }
}

module.exports = Intern;