import React from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const searchClient = algoliasearch(
    "latency",
    "69b3b54e7cedfefdbba0b9f026f7d006"
  );

  return (
    <div className="header">
      <div className="header__left">
        <img src="assets/Landing/img/gallery/logo-black.png" alt="" />
        {/* <div className="header__input">
          <InstantSearch indexName="PharoahTradez" searchClient={searchClient}>
            <SearchBox />
            <Hits />
          </InstantSearch>
        </div> */}
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <VideogameAssetIcon fontSize="large" />
        </div>
        <div className="header__option">
          <Link to="/">
            <ControlCameraIcon fontSize="large" />
          </Link>
        </div>
      </div>
      <div className="header__right">
        <div class="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        {/* <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton> */}
      </div>
    </div>
  );
}

export default Header;
