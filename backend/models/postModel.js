const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  { 
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    postId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    },

    displayName:{
      type: String,
    },

    writtenBy: {
      type: String,
    },
    directedTo: {
      type: String,
    },
    comment: {
      type: String,
    },
    likes: [],
  },
    { timestamps: true, }
  );

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    userName: {
      type: String,
      required: true,
    },
    toAnother: {
      type: Boolean,
      default: false,
    },
    postedTo:{
      type: String,
    },
    organization: {
      //string for now
      type: String,
      //type: mongoose.Schema.Types.ObjectId,
      //required: true,
      //ref: 'Organization',
    },
  
    //post type will be 1 of 3... Praise, Prayer Request, or Testimony
    postType: {
      type: String,
      default: "prayerRequest"
    },

    postText: {
      type: String,
      required: [true, 'please add text'],
    },
    
    comments: commentSchema,

    likes: [{ 
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
    }],

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', postSchema)
