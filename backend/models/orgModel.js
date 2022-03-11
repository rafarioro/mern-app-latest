// const mongoose = require('mongoose')

// const organizationSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please add a name'],
//       unique: true,
//     },

//     email: {
//       type: String,
//       required: [true, 'Please add an email'],
//       unique: true,
//     },

//     website: {
//         type: String,
//         required: false,
//     },

//     locationCity: {
//         type: String,
//         required: [true, 'Please add a city'],
//     },
//     locationState: {
//         type: String,
//     },
//     locationCountry: {
//         type: String,
//         required: [true, 'Please add country location']
//     },
//     password: {
//       type: String,
//       required: [true, 'Please add a password'],
//     },
//     members: [{
//       user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//       },
//     }],
//     posts: [{
//       id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post',
//       },
//     }],

//   },
//   {
//     timestamps: true,
//   }
// )

// module.exports = mongoose.model('Organization', organizationSchema)