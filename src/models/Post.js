const { v4: uuid4 } = require('uuid');

class Post {
    constructor(content, image, date, like, comments) {
        this.id = uuid4();
        this.content = content;
        this.image = image;
        this.date = date;
        this.like = like;
        this.comments = comments;
    }
}

module.exports = Post;