const { Schema } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    githubId: {
        type: String,
        required: true
    }
});


module.exports = UserSchema;