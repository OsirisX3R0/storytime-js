import { v4 as uuidv4 } from "uuid";

class Beat {
  constructor(story, text) {
    this.id = uuidv4;
    this.story = story;
    this.text = text;
  }

  next() {
    this.story.next();
  }
}

module.exports = Beat;
