import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        image="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg"
        profileSrc="https://avatars.githubusercontent.com/saviomartin"
        title="Savio Martin"
      />

      <Story
        image="https://image.api.playstation.com/vulcan/ap/rnd/202105/2002/SdjUUdI6phxHlbq26B8gKTVr.jpg"
        profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        title="Sonny Sangha"
      />
    </div>
  );
}

export default StoryReel;
