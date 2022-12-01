const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username : String,
    password : String
})

 const USER = mongoose.model('USER', UserSchema)

 module.exports = USER;















// let USER = {
//             username : 'admin',
//             password : 'admin'
//     }

// const UserModel = {

//     getUser : () => {
//        return USER;
//     }

//     // pushUser : () => {
//     //     USER.push({
//     //         username : 'admin',
//     //         password : 'admin'
//     // })
//     //}
// }

module.exports = UserModel;