import Post from '../models/Post.js';

export const getPosts=async(req,res)={
  try {
    const data=Post.find();
    res.status(200).json({info:data});
  } catch (error) {
    res.status(404).json({msg:"Not found the connection link for mongoatlas"});
  }
}