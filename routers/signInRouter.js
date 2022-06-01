const router = require('express').Router();
const { User, Post } = require('../db/models');
const bcrypt = require('bcrypt');
const { checkLogin } = require('../middleWares/middleWare');

router.route('/')
  .get(checkLogin, (req, res) => {
    res.render('signIn')
  })

  .post(async (req, res) => {
    const { email, pass } = req.body;
    if (email && pass) {
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && await bcrypt.compare(pass, currentUser.pass)) {
        req.session.userid = currentUser.id;
        req.session.userName = currentUser.name;
        req.session.userEmail = currentUser.email;
        req.session.role_id = currentUser.role_id;
        return res.redirect('/');
      }
      return res.redirect('/signIn');
    }
    return res.redirect('/signIn');
  });



  module.exports = router;
