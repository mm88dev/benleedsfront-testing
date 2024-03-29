import React from "react";
import styles from "./ImageProfile";
const ImageProfile = props => {
  return (
    <div className="card">
      <img
        src={process.env.REACT_APP_API_URL + "/" + props.imageUrl}
        className="img-fluid"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <span>{props.region}</span>
      </div>
    </div>
  );
};

export default ImageProfile;
