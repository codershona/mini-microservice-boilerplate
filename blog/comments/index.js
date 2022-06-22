const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const { request } = require('https');
const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(posts);
});

app.post('/posts/:id/comments', (req, res) => {
   const commentId = randomBytes(4).toString('hex');
   const { content } = req.body;

   const comments = commentsByPostId[req.params.id] || [];

   comments.push({ id: commentId, content});
   commentsByPostId[req.params.id] = comments;
});

app.listen(4001, () => {
   console.log('Listening on 4001');
});

