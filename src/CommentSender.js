import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./CommentSender.css";
// import VideocamIcon from "@material-ui/icons/Videocam";
// import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
// import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import { db } from "./firebase/config";

function CommentSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("comments").add({
      commento: input,
      ctimestamp: firebase.firestore.FieldValue.serverTimestamp(),
      cprofilePic: user.photoURL,
      cusername: user.displayName,
    });

    setInput("");
  };
  return (
    <div className="messageSender">
      <div class="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`Leave a Comment ${user.displayName}?`}
          />

          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div class="messageSender__bottom"></div>
    </div>
  );
}

export default CommentSender;
