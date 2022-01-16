const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This definitely helps me keep in touch with likeminded people!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Handlebars is a great tool to use.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'I am looking forward to going!',
    user_id: 3,
    post_id: 6
  },
  {
    comment_text: 'This works.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'I was looking for a while, this will help me out a lot.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'This has to be one of the easiest ways to learn.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'I cannot believe how easy this was!',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'Thanks for starting this!',
    user_id: 7,
    post_id: 1
  },
  {
    comment_text: 'There are so many jobs available.',
    user_id: 6,
    post_id: 5
  },
  {
    comment_text: 'I have already applied to 5 and got interviews for 2.',
    user_id: 6,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;