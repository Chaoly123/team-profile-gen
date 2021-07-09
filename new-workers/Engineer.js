const Engineer = require("./Engineer")

class Engineer extends Employee {
  constructor(name, id, email, gitHubUserName ){
    // Engineer constructor needs:  name, id, email, office number
    super(name, id, email, gitHubUserName,);
    
    this.gitHubUserName = gitHubUserName;
  }
}

module.exports = Engineer;