require('dotenv').config();
const cors = require('cors');
const express = require('express');
const config = require('../config');
const routerUser = require('./routes/users_routes');
const routerPost = require('./routes/posts_routes');
const routerComment = require('./routes/comments_routes');
const routerLike = require('./routes/likes_routes');

const app = express();
const port = config.appPort || 3000;
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost'] }));
app.use('/app', routerUser);
app.use('/app', routerPost);
app.use('/app', routerComment);
app.use('/app', routerLike);

app.listen(port, () => console.log(`Port ${port} is listened`));
