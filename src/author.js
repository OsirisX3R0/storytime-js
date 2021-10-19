const Story = require("./story");

class Author {
  constructor() {
    this.story = null;
  }

  story(title) {
    this.story = new Story(title);
  }

  beat(text) {}

  fork(text) {}

  write() {
    return this.story;
  }
}

const author = () => new Author();

module.exports = author;
