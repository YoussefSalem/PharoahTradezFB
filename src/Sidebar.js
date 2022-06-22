import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
// import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
// import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import StoreIcon from "@material-ui/icons/Store";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="sidebar">
      <br></br> <br></br> <br></br>
      <div className="sidebarL">
        <a href="/Store">
          <SidebarRow Icon={StoreIcon} title="Store" />
        </a>
      </div>
      
    </div>
  );
}

export default Sidebar;
