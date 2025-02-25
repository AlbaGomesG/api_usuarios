const Post = require("../models/Post");
const PostList = require("../models/UserList");

const lista = new PostList();

const post1 = new Post("Lançamento de Moana 2", "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2024/08/10/794613233-moanatwover4xxlg-scaled.jpg", "2024-08-10", 12000, "Estou muito ansiosa para esse lançamento, esse filme promete!");
lista.addPost(post1);

const router = {
    getAllPosts: (req, res) => {
        try {
            const posts = lista.getAllPosts();
            res.status(201).json(posts);
        } catch (error) {
            res.status(404).json({ message: "Publicação não encontrada!"})
        }
    }, 


    addPost: (req, res) => {
        try {
            const { content, image, date, like, comments } = req.body;
            if (!content || !image || !date || !like || !comments === undefined) {
                throw new Error("Todos os campos são obrigatórios!")
            }
            const newPost = new Post(content, image, date, like, comments);
            lista.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(404).json({ message: error.message, error});
        }
    },

    
    getPostById: (req, res) => {
        try {
            res.json(lista.getPostById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Publicação não encontrada!", error});
        }
    },

    updatePost: (req, res) => {
        try {
            res.json(lista.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar publicação"})
        }
    },

    deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(201).json({ message: "Publicação deletada com sucesso!"})
    }
};

module.exports = router