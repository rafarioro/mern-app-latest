// const mongoose = require('mongoose')

// const userSchema = mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: [true, 'Please add a name'],
//     },
    
//     name: {
//       type: String,
//       required: [true, 'Please add a name'],
//     },

//     email: {
//       type: String,
//       required: [true, 'Please add an email'],
//       unique: true,
//     },

//     password: {
//       type: String,
//       required: [true, 'Please add a password'],
//     },

//     posts: [{
//       id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post',
//       },
//     }],

//     memberOf: [{
//       id: {
//         type: String,
//       },
//     }],

    

//     commentsMade: [],
    
//   },
//   {
//     timestamps: true,
//   }
// )

// module.exports = mongoose.model('User', userSchema)
