const router = require('express').Router();
const { User, Post } = require('../db/models');
const bcrypt = require('bcrypt');
const { checkLogin } = require('../middleWares/middleWare');

router.route('/')
  .get(checkLogin, (req, res) => {
    res.render('signUp')
  })

  .post(async (req, res) => {

    // console.log(req.body)
    // const her = {...newUser, role_id: 0, createdAt: new Date(), updatedAt: new Date() };
    // console.log('----->',her)

    const {
      name,
      email,
      pass
    } = req.body;

    if (name && email && pass) {
      const coincident = await User.findOne({
        where: { email }
      });
      if (coincident) {
        return res.redirect('/signUp?message=regErrUniq');
      } else {
        const user = await User.create({
          ...req.body,
          role_id: 1,
          pass: await bcrypt.hash(pass, Number(process.env.SALTROUND)),
        });
        req.session.userid = user.id;
        req.session.userName = user.name;
        req.session.userEmail = user.email;
        req.session.role_id = user.role_id;
        return res.redirect('/');
      }
    }
    return res.redirect('/signUp?message=regErrUniq');

  })


module.exports = router;
