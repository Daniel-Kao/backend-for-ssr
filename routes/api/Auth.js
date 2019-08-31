const express = require('express');
const router = express.Router();

const Auth = require('../../models/Auth');
const Todos = require('../../models/Todos');

router.get('/', (req, res) => res.send('auth check'));

router.post('/isLogin', async (req, res) => {
  try {
    const data = await Auth.findOne({ name: 'kao' });
    console.log(data);
    res.send({ login: data.login });
  } catch (error) {}
});
router.post('/todos', async (req, res) => {
  try {
    // const data = await Auth.findOne({ name: 'kao' });
    // console.log(data);
    const todos = new Todos({
      name: 'todos',
      todos: ['nice day', 'is it not?', 'no']
    });
    todos.save();
    res.send({ code: 0, msg: 'created' });
  } catch (error) {}
});
router.post('/login', async (req, res) => {
  try {
    const filter = { name: 'kao' };
    const update = { login: true };
    await Auth.findOneAndUpdate(filter, update);
    res.send({ code: 0, msg: 'logged in' });
  } catch (error) {
    res.status(500).send('server error');
  }
});
router.post('/logout', async (req, res) => {
  try {
    const filter = { name: 'kao' };
    const update = { login: false };
    await Auth.findOneAndUpdate(filter, update);
    res.send({ code: 0, msg: 'logged out' });
  } catch (error) {
    res.status(500).send('server error');
  }
});
router.get('/translation', async (req, res) => {
  try {
    const data = await Auth.findOne({ name: 'kao' });
    if (data.login) {
      res.send({ code: 0, translations: data.translations });
    } else {
      res.send({ code: 1, msg: 'not signed in!' });
    }
  } catch (error) {
    res.status(500).send('server error');
  }
});

module.exports = router;
