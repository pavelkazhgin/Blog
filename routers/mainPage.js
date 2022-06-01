const router = require('express').Router();
const { User, Post } = require('../db/models')


router.route('/')
  .get(async (req, res) => {
    const allPosts =   await Post.findAll({
      include: {
        model: User,
      },
      order: [[ 'id', 'ASC']]
    }) ;
    const allUser = await User.findAll();
    
    const allWithName = allPosts.map(el => el.userName = 'Игорь')
    console.log('----->', JSON.parse(JSON.stringify(allPosts)))
    res.render('mainPage', {allPosts});
  })

router.delete('/delete/:id', async (req, res)=> {
    console.log(req.params)
    const {id} = req.params
    try {
      await Post.destroy({where: {id: Number(id)}})
      return res.sendStatus(200)
    } catch (err) {
      console.log(err);
      return res.redirect('/');
    }
  })


  module.exports = router;
