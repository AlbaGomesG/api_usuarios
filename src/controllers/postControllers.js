const Post  = require("../models/Post");
const PostList = require("../models/PostList");

const lista = new PostList();

lista.addPost(new Post("1", "Lançamento de Moana 2", "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2024/08/10/794613233-moanatwover4xxlg-scaled.jpg", 12000, "Estou muito ansiosa para esse lançamento, esse filme promete!"))
lista.addPost(new Post("2", "Vitória de Campinas sobre o Cruzeiro de 3X0", "https://s2-ge.glbimg.com/OjxpWP2aX7EmwVkqPfOG7kI5eJI=/0x0:4160x2767/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/0/x/R6XrxfTiCv0y1XqrQV5A/whatsapp-image-2025-02-22-at-19.06.14.jpeg", 2000, "Que jogo, que virada!!"));

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
          /*
          if (!userId || !content || !image || !like || !comments === undefined) {
            throw new Error("Todos os campos são obrigatórios");
          }*/
          const newPost = new Post(userId, content, image, like, comments);
          lista.addPost(newPost);
          res.status(201).json({ message: "Post adicionado", newPost});
        } catch (error) {
          res.status(404).json({ message: error.message, error });
        }
      },

      updatePost: (req, res) => {
        try {
            res.json(lista.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o usuário", error});
        } 
      },

      deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(200).json({ message: "Publicação deletada com sucesso!", IdDeletado: req.params.id });
      }

};

module.exports = router