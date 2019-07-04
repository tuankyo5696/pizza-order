import React from "react";
import "./_DrawerToggle.scss";

const drawerToggle = props => {
  const { toggleClass } = props;
  return (
    <div>
      <div onClick={props.clicked} className="DrawerToggleContainer">
        <div className={`${toggleClass} bar1 bar `} />
        <div className={`${toggleClass} bar2 bar `} />
        <div className={`${toggleClass} bar3 bar `} />
      </div>
    </div>
  );
};

export default drawerToggle;
