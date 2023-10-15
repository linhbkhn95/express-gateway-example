const express = require('express');

const shop = express();

shop
  .get('/shops', (req, res, next) => {
    res.send({ name: 'ghtk', status: 'healthy' });
    next();
  })
  .get('/shops/:id', (req, res, next) => {
    res.send({ id: req.params.id });
    next();
  })
  .listen(process.env.PORT || 1337);

const user = express();

user
  .get('/users/:username', (req, res, next) => {
    console.log("headers", req.headers)
    res.send({ user: [ { name: 'linhtd', avatar: 'linhtd' }] });
    next();
  })
  .listen(process.env.PORT2 || 1339)
