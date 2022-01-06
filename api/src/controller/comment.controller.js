const db = require('../services/db');

class CommentController {
  async createComment(req, res) {
    const { UserID, PostID, ParentCommentID, Text } = req.body;
    const newComment = await db('Comments')
      .insert({ UserID, PostID, ParentCommentID, Text })
      .returning('*');
    res.json(newComment);
  }

  async deleteComment(req, res) {
    const { id } = req.params;
    const deletedComment = await db('Comments')
      .where('CommentID', id)
      .delete()
      .returning('*');
    res.json(deletedComment);
  }

  async updateComment(req, res) {
    const { CommentID, Text } = req.body;
    const updatedComment = await db('Comments')
      .where('CommentID', CommentID)
      .update({ Text })
      .returning('*');
    res.json(updatedComment);
  }

  async getCommentsUnderPost(req, res) {
    const { PostID } = req.query;
    const comments = await db('Comments')
      .where('PostID', PostID)
      .returning('*');
    res.json(comments);
  }
}

module.exports = new CommentController();
