const postRouter = require("express").Router();
const Post = require("../models/post");

// GET
postRouter.get("/", (req, res) => {
  Post.find()
    .populate("userId") // display the informations about the other collection where there is a reference
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});
// POST
postRouter.post("/", (req, res) => {
  Post.create(req.body)
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});
// GET BY ID
postRouter.get("/:id", (req, res) => {
  Post.findOne({ _id: req.params.id })
    .populate("userId")
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});
// PUT (EDIT ONE BY ID)
postRouter.put("/:id", async (req, res) => {
  await Post.findOne({ _id: req.params.id }); // We get the post by ID
  await Post.updateOne({ $set: req.body }) // update the post
    // await Post.findOne({_id : req.params.id}) // fetch again the post by ID
    .then((newPost) => res.json("Your post has been updated"))
    .catch((err) => console.log(err));
});

//DELETE BY ID
postRouter.delete("/:id", (req, res) => {
  Post.deleteOne({ _id: req.params.id })
    .then(() => res.json("The post has been deleted"))
    .catch((err) => console.log(err));
});

module.exports = postRouter;
