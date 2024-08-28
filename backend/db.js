const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/paytm');

}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        maxLength: 10
    }
  }
);



const User = mongoose.model('User', userSchema);

// async function createUser() {
//     try {
//         const user = await User.create({
//             username: 'anand',
//             password: 'yourpassword',  // Replace with a valid password
//             firstName: 'First',
//             lastName: 'Last',
//             mobile: '1234567890'  // Replace with a valid mobile number
//         });
//         console.log('User created:', user);
//     } catch (error) {
//         console.error('Error creating user:', error.message);
//     }
// }

// createUser();

module.exports = {User}
