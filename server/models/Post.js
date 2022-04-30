import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostCard = mongoose.model("PostCard", PostSchema);

export default PostCard;
