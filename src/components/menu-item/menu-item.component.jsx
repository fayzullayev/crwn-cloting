import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

function MenuItem(props) {
  const { title, imageUrl, size, history, linkUrl } = props;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl}`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
