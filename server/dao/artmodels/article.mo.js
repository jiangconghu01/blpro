import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
  title: {
    type: String,
    unique: true,
    require: true
  },
  tag: {
    type: String,
    require: true
  },
  markdownValue: {
    type: String,
    require: true
  },
  htmlValue: {
    type: String,
    require: true
  }
})

export default mongoose.model('Article', ArticleSchema)
