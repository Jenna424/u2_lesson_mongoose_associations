const { Schema } = require('mongoose')

const Task = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Task
