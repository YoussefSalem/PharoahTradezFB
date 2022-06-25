import React, { Component, useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
// import StoryReel from "./StoryReel";
import { db } from "./firebase/config";
// import CommentSender from "./CommentSender";
// import comments from "./CommentSender";
// import Comment from "./Comment";

class Feed extends Component {
  // const [posts, setPosts] = useState([]);
  state = {
    posts: [],
    comments: [],
  };
  componentDidMount() {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (snapshot) =>
          this.setState({
            posts: snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          })

        // setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))),
      );
    db.collection("comments").onSnapshot(
      (snapshot) =>
        this.setState({
          comments: snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        })
      // setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))),
    );
  }

  render() {
    if (this.state.posts) {
      this.state.posts.forEach((post) => {
        post.data.comments = [];
        this.state.comments.forEach((comment) => {
          if (post.id == comment.data.PostId) {
            // post.data.comments = [comment.data];
            post.data.comments.push(comment.data);
          }
        });
      });
    }
    console.log(this.state.posts);
    return (
      <div className="feed">
        {/* <StoryReel /> */}
        <MessageSender />
        {this.state.posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            commento={post.data.comments}
          />
        ))}
      </div>
    );
  }
}

export default Feed;
