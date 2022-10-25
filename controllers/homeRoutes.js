const router = require('express').Router();
const { BlogPosts, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {

     //Get current username
     try {
     const userData = await User.findOne({ where: { id: req.session.user_id } });
     const userName=userData.dataValues.name;
 
     console.log(userName);
 
 
     const blogData = await BlogPosts.findAll({})
 
     //Logic for sorting out the data
 
 
     res.render('dashboard', {
       array: blogData,
       logged_in: true
     });
    }

    catch (err) {
      res.render('login');
    }
 
});


module.exports = router;
