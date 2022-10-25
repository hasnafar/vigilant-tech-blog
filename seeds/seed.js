const sequelize = require('../config/connection');
const { BlogPosts } = require('../models');

const blogData= require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const blogs = await BlogPosts.bulkCreate(blogData);
  console.log(blogs);
}

seedDatabase();
