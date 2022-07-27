import db from './db';

const jwt = require('jsonwebtoken');

const { v4: uuidv4 } = require('uuid');

// eslint-disable-next-line import/prefer-default-export
export const authorize = async (email, password) => {
  const user = await db('Users').where('Email', email);
  if (user) {
    if (user.password === password) {
      const accessToken = jwt.sign(
        { user_id: user.id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
      );
      const refreshToken = uuidv4();

      return { accessToken, refreshToken };
    }
  }
  return {};
};
export const authorizeById = async (id) => {
  const user = await db('Users').where('UserID', id);
  if (user) {
    const accessToken = jwt.sign(
      { user_id: user.id, name: user.name },
      process.env.ACCESS_TOKEN_SECRET
    );
    const refreshToken = uuidv4();

    return { accessToken, refreshToken };
  }
  return {};
};
