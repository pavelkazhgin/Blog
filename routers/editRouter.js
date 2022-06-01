const router = require('express').Router();
const { User, Post } = require('../db/models');
const bcrypt = require('bcrypt');
const { checkLogin } = require('../middleWares/middleWare');

router.get('/:id', async (req, res) => {
  const {id} = req.params
  console.log('id in edit ----->', id)
  const currentPost = await Post.findOne({ where : {id}})
  res.render('edit', {currentPost, id})
})

router.put('/save', async (req, res) => {
  // console.log('PUT----->', req.body)
  const { id, tittle, description, user_id } = req.body;
  const currentPost = await Post.findOne({ where : {id : req.body.id}})
  // console.log('POST----->', currentPost)
  const savePost = await Post.update({id: req.body.id, tittle: req.body.tittle, description: req.body.description, user_id: req.body.user_id  }, {where : {id: req.body.id}})
  if (savePost) {
    return res.sendStatus(200)
  } else {
    console.log('OSHIBKA')
  }
  
})










module.exports = router;
