const db = require('../services/db');

class UserController {
  async createUser(req, res) {
    const {
      Surname,
      FirstName,
      Phone,
      Email,
      NameStatusid,
      PhoneStatusid,
      EmailStatusid,
      EducatonStatusid,
      EducationID,
    } = req.body;
    const dbResult = await db('Users')
      .insert({
        Surname,
        FirstName,
        Phone,
        Email,
        NameStatusid,
        PhoneStatusid,
        EmailStatusid,
        EducatonStatusid,
        EducationID,
      })
      .returning('*');
    res.json(dbResult);
  }

  async getUser(req, res) {
    /* const { id } = req.params.id; */
    const user = await db('Users')
      .where('UserID', req.params.id)
      .returning('*');
    res.json(user);
  }

  async getAllUsers(req, res) {
    const users = await db('Users').returning('*');
    res.json(users);
  }

  async deleteUser(req, res) {
    const user = await db('Users')
      .where('UserID', req.params.id)
      .delete()
      .returning('*');
    res.json(user);
  }

  async updateUser(req, res) {
    const UserID = req.params.id;
    const {
      Surname,
      FirstName,
      Phone,
      Email,
      NameStatusid,
      PhoneStatusid,
      EmailStatusid,
      EducatonStatusid,
      EducationID,
    } = req.body;
    const user = await db('Users').where('UserID', UserID).update({
      Surname,
      FirstName,
      Phone,
      Email,
      NameStatusid,
      PhoneStatusid,
      EmailStatusid,
      EducatonStatusid,
      EducationID,
    });
    res.json(user);
  }
}

module.exports = new UserController();
