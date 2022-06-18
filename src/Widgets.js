import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGamesTradeEgy%2F&amp%3Btabs=timeline&amp%3Bwidth=340&amp%3Bheight=1500&amp%3Bsmall_header=false&amp%3Badapt_container_width=true&amp%3Bhide_cover=false&amp%3Bshow_facepile=true&amp%3BappId"
        title="PharoahTrades FB Page"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
