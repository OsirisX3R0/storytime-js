const Beat = require("./beat");
const Choice = require("./choice");

class Fork extends Beat {
  constructor(story, text) {
    super(story, text);
    this.forks = [];
  }

  choice(text) {
    this.forks.push(new Choice(this, text));
  }

  next(id) {
    this.story.next(id);
  }
}

module.exports = Fork;
