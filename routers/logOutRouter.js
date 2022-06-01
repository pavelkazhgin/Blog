const router = require('express').Router();
const { User, Post } = require('../db/models');
const bcrypt = require('bcrypt');
const { checkLogin } = require('../middleWares/middleWare');


router.route('/')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('us').redirect('/');
  });




  module.exports = router;
