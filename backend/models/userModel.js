const mongoose = require('mongoose')

const churchSchema = mongoose.Schema(
  {
    _id: false,

    website: {
        type: String,
    },

    locationCity: {
        type: String,
    },
    locationState: {
        type: String,
    },

    locationCountry: {
        type: String,
    },

    members: [{
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    }],
    posts: [{
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    }],

  },
)

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please add a name'],
    },
    
    userName: {
      type: String,
      required: [true, 'Please add a userName'],
    },

    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Please add a password'],
    },

    posts: [{
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    }],

    memberOf: [{
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    }],
    
    commentsMade: [],
    
    isOrganization: {
      type: Boolean,
      default: false,
    },

    organization: churchSchema,

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
