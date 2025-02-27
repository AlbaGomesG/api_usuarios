const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers");

router.get("/posts", postControllers.getAllPosts);
router.get("/posts/:id", postControllers.getPostById);
router.post("/posts", postControllers.addPost);
router.put("/posts/:id", postControllers.updatePost);
router.delete("/posts/:id", postControllers.deletePost);

module.exports = router;