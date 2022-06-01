const checkSession = (req, res, next) => {
  if (req.session.userid) {
    res.locals.user = {
      name: req.session.userName,
      id: req.session.userid,
      role_id: req.session.role_id,
    };
    return next();
  }
  next();
};

const checkLogin = (req, res, next) => {
  if (req.session.userid) {
    return res.redirect('/');
  }
  next();
};


module.exports = {
  checkSession,
  checkLogin,
};
