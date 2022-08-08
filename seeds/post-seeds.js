const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 2
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: 'https://nasa.gov/donec.json',
    user_id: 3
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;