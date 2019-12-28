const mongoose = require('mongoose');
const GroupSchema = require('../schemas/user_schema');
const GroupModel = mongoose.model('group', GroupSchema);

module.exports = GroupModel;