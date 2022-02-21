const { User, Thought } = require('../models');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
        return (User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts')
        );
    },
    // get user by username
    user: async (parent, {username}) => {
        return (User.findOne({username})
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts')
        );
    },
    // parent is being used a place holder currently and not being used only there
    // so we can access the username argument from the second parameter.
    // username is destructured
    thoughts: async (parent, { username }) => {
      // ternary operator to check if username exists. if it does we set params
      // to an object with a username key set to that value. if it doesn't we
      // simply return an empty object.
      const params = username ? { username } : {};
      // object passed with or without data.
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
  },
};

module.exports = resolvers;
