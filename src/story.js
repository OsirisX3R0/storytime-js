const Beat = require("./beat");

class Story {
  constructor(title) {
    this.title = title;
    this.current = null;
    this.path = [];
    this.journey = [];
  }

  // beat(text) {
  //   let beat = new Beat(this, text);
  //   this.path = [...this.path, beat];
  // }

  fork(text) {
    let fork = new Fork(this, text);
    this.path = [...this.path, fork];
  }

  outcome(text) {
    this.path = this.path.map((b, i) => {
      return i === this.path.length - 1
        ? { ...b, forks: [...b.forks, new Choice(b, text, b.id)] }
        : b;
    });
  }

  next(id = null) {
    let newCurrent;
    this.journey.push(this.current);

    if (id) {
      newCurrent = this.path.find((b) => b.id === id);
    } else {
      let nextInd = this.path.indexOf(this.current) + 1;
      newCurrent = this.path[nextInd];
    }

    this.current = newCurrent;
  }
}

module.exports = Story;
