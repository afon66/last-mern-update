import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
}, 
{ timestamps: true }
)

export default model('Comment', CommentSchema) 