const db = require('../services/db');

class PostController {
  async createPost(req, res) {
    const { Title, Text, Post_date, UserID, PostStatus } = req.body;
    let PostStatusID;
    if (PostStatus === 'All') PostStatusID = 1;
    else PostStatusID = 2;

    const newPost = await db('Posts')
      .insert({
        Title,
        Text,
        Post_date,
        UserID,
        PostStatusID,
      })
      .returning('*');
    res.json(newPost);
  }

  async getAllPost(req, res) {
    const posts = await db('Posts').returning('*');
    res.json(posts);
  }

  async getPostByUser(req, res) {
    const { id } = req.query;
    const posts = await db('Posts').where('UserID', id).returning('*');
    res.json(posts);
  }

  async deletePost(req, res) {
    const { id } = req.params;
    const deletedPost = await db('Posts')
      .where('PostID', id)
      .delete()
      .returning('*');
    res.json(deletedPost);
  }

  async updatePost(req, res) {
    const { Title, Text, PostID, PostStatus } = req.body;
    let PostStatusID;
    if (PostStatus === 'All') PostStatusID = 1;
    else PostStatusID = 2;
    const updatedPost = await db('Posts')
      .where('PostID', PostID)
      .update({ Title, Text, PostStatusID })
      .returning('*');
    res.json(updatedPost);
  }

  async getPost(req, res) {
    const { id } = req.params;
    const post = await db('Posts').where('PostID', id).returning('*');
    res.json(post);
  }
}

module.exports = new PostController();
