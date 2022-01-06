const db = require('../services/db');

class LikeController {
  async createLike(req, res) {
    const { UserID, PostID } = req.body;
    const newLike = await db('Likes').insert({ UserID, PostID }).returning('*');
    res.json(newLike);
  }

  async deleteLike(req, res) {
    const { id } = req.params;
    const deletedLike = await db('Likes')
      .where('LikeID', id)
      .delete()
      .returning('*');
    res.json(deletedLike);
  }

  async getLikesUnderPost(req, res) {
    const Likes = await db('Likes')
      .where('PostID', req.query.PostID)
      .returning('*');
    res.json(Likes);
  }
}

module.exports = new LikeController();
