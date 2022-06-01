const router = require('express').Router();
const { User, Post } = require('../db/models');
const bcrypt = require('bcrypt');
const { checkLogin } = require('../middleWares/middleWare');


router.route('/')
  .get ( (req, res) => {
    res.render('createPost')
  })
  .post ( async (req, res) => {
    const { tittle, description, user_id } = req.body;
    if (tittle && description && user_id) {
      const creatNew = await Post.create({...req.body})
    } else {
      console.log('Не создан!')
    }
     res.redirect('/')
  })



  module.exports = router;
