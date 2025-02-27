const Post  = require("../models/Post");
const PostList = require("../models/PostList");

const lista = new PostList();

// userId, content, image, like, comments
lista.addPost(new Post("03a80a2f-a56b-4b8e-8479-99e3c3107071", "Lançamento de Moana 2", "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2024/08/10/794613233-moanatwover4xxlg-scaled.jpg", 12000, "Estou muito ansiosa para esse lançamento, esse filme promete!"))
lista.addPost(new Post("a36a7cb6-84c4-42f2-b106-d1f48bc7d7f7", "Vitória de Campinas sobre o Cruzeiro de 3X0", "https://s2-ge.glbimg.com/OjxpWP2aX7EmwVkqPfOG7kI5eJI=/0x0:4160x2767/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/0/x/R6XrxfTiCv0y1XqrQV5A/whatsapp-image-2025-02-22-at-19.06.14.jpeg", 2000, "Que jogo, que virada!!"));

const router = {

    getAllPosts: (req, res) => {
        try {
          const users = lista.getAllPosts();
          res.status(200).json(users);
        } catch (error) {
          res.status(404).json({ message: "Publicação não encontrada!"})
        }
      },

      getPostById: (req, res) => {
        try {
            res.json(lista.getPostById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Publicação não encontrada!", error});
        }
    }, 

    addPost: (req, res) => {
        try {
          const { userId, content, image, like, comments } = req.body;
          if (!userId || !content || !image || !like || !comments === undefined) {
            throw new Error("Todos os campos são obrigatórios");
          }
          const newPost = new User(userId, content, image, like, comments);
          lista.addPost(newPost);
          res.status(201).json(newPost);
        } catch (error) {
          res.status(404).json({ message: error.message, error });
        }
      },
};

module.exports = router