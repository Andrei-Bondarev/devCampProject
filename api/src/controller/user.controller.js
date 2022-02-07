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
    /* console.log(req.params.id);
                                                                                                    const { id } = req.params.id;
                                                                                                    console.log(id); */
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
      NameStatus,
      PhoneStatus,
      EmailStatus,
      UniversityStatus,
    } = req.body;
    let NameStatusid;
    let PhoneStatusid;
    let EmailStatusid;
    let EducatonStatusid;
    // eslint-disable-next-line no-unused-expressions
    NameStatus === 'All' ? (NameStatusid = 1) : (NameStatusid = 2);
    // eslint-disable-next-line no-unused-expressions
    PhoneStatus === 'All' ? (PhoneStatusid = 1) : (PhoneStatusid = 2);
    // eslint-disable-next-line no-unused-expressions
    EmailStatus === 'All' ? (EmailStatusid = 1) : (EmailStatusid = 2);
    // eslint-disable-next-line no-unused-expressions
    UniversityStatus === 'All'
      ? (EducatonStatusid = 1)
      : (EducatonStatusid = 2);
    const user = await db('Users').where('UserID', UserID).update({
      Surname,
      FirstName,
      Phone,
      Email,
      NameStatusid,
      PhoneStatusid,
      EmailStatusid,
      EducatonStatusid,
    });
    res.json(user);
  }
}

module.exports = new UserController();
