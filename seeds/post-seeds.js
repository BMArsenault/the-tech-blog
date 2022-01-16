const { Post } = require('../models');

const postdata = [
  {
    title: 'This Tech Blog',
    description: 'This is a project to set up a tech blog for others to use, post, comment etc.',
    user_id: 1
  },
  {
    title: 'Coding in a flash',
    description: 'Learn how to code from the comfort of your own home with easy to read files',
    user_id: 2
  },
  {
    title: 'Javascript 101',
    description: 'Watch a 35 minute video to easily understand Javascript',
    user_id: 3
  },
  {
    title: 'Handlebars',
    description: 'See how you can easily add handlebars to any backend project to make the struggles as seemless as possible',
    user_id: 4
  },
  {
    title: 'Do not wait, apply now',
    description: 'There are a lot of tech companies looking for web developers.  Could you be next?',
    user_id: 5
  },
  {
    title: 'Hackathon - Vegas',
    description: 'Join thousands of developers from around the world at this years Hackathon in Las Vegas',
    user_id: 6
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;