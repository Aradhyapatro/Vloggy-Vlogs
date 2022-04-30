import express from "express";
import bodyParser from "body-parser";
import db from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import PostsRoute from "./routes/Posts.js";
const app = express();
dotenv.config();

// routes
app.use("/posts", PostsRoute);

// middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
db();

app.listen(process.env.PORT, () => {
  console.log(`Started the server at port ${process.env.PORT}`);
});
