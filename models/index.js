const User = require('./User');
const BlogPosts = require ('./BlogPostsModel');

User.hasMany(BlogPosts, {
  foreignKey:User.id
})

module.exports = {
    User,
    BlogPosts
  };