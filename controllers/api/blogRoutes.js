const router = require('express').Router();
const {BlogPosts} = require('../../models');
const { User } = require('../../models');


router.get('/', async (req, res) => {
  

  try {
    const blogData = await BlogPosts.findAll({});

    
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
 });

router.post('/', async(req,res) => {
  try {

    const userData = await User.findOne({ where: { id: req.session.user_id } });
    const userName=userData.dataValues.name;
    
    const blogData = await BlogPosts.create({
      title: req.body.title,
      content: req.body.content,
      name:userName,
      userId: req.session.user_id
    });
    
  } 
  catch (err) {
    res.status(400).json(err);
  }
})
  
  
  module.exports = router;