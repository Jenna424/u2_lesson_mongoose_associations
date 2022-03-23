const { model } = require('mongoose')
const TaskSchema = require('./Task')
const UserSchema = require('./User')

const User = model('User', UserSchema)
const Task = model('Task', TaskSchema)

module.exports = {
  User,
  Task
}
