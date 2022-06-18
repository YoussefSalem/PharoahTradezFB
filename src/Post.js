import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import CommentSender from "./CommentSender";

function Post({ profilePic, image, username, timestamp, commento, message }) {
  return (
    <div className="post">
      <div class="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div class="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div class="post__bottom">
        <p>{message}</p>
      </div>

      <div class="post__image">
        <img src={image} alt="" />
      </div>

      <div class="post__options">
        <p>{commento}</p>
      </div>

      <div class="post__bottom">
        <CommentSender></CommentSender>
      </div>
    </div>
  );
}

export default Post;
