const { v4: uuid4 } = require('uuid');

class Post {
    constructor(userId, content, image, like, comments) {
        this.id = uuid4();
        this.userId = userId;
        this.content = content;
        this.image = image;
        this.date = new Date();
        this.like = like;
        this.comments = comments;
    }
}

module.exports = Post;