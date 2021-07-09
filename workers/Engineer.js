const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, id, email, gitHubUserName ){
    // Engineer constructor needs:  name, id, email, office number
    super(name, id, email, gitHubUserName,);
    
    this.gitHubUserName = gitHubUserName;
  }
  getRole() {
    return "Engineer"
  }
}

module.exports = Engineer;