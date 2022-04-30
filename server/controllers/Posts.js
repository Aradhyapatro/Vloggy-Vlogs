import PostCard from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const postInfo = await PostCard.find();
    res.status(200).json(postInfo);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "data not found check the database connection" });
  }
};

export const makePosts = async (req, res) => {
  const post = body.req;
  try {
    const post_new = new PostCard(posts);
    await post_new.save();

    res.status(200).json({ posting: post_new });
  } catch (error) {
    console.log(`Error = ${error}`);
    res.status(409).json({ Error: error });
  }
};
