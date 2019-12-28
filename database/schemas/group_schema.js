const { Schema } = require('mongoose');

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    githubId: {
        type: String,
        required: true
    },
    user: [String]
});


module.exports = GroupSchema;