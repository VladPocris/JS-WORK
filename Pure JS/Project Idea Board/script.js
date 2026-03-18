const projectStatus = {
  PENDING: {
    description: "Pending Execution",
  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  }
}

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    this.ideas.splice(this.ideas.indexOf(idea), 1);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let str = `${this.title} has ${this.count()} idea(s)\n`
    this.ideas.forEach((idea) => {
      str += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
    })
    return str;
  }
}

const test = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.");
const test1 = new ProjectIdeaBoard("Tech Projects Board");
test1.pin(test);
console.log(test1.formatToString());