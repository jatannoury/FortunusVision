import React from "react";
import BoxInfo from "./BoxInfo";

const AllBoxes = () => {
  return (
    <div className="mainContainer">
      <div className="flex">
        <BoxInfo number={100} />
        <span className="info">Total number of customers</span>
      </div>
      <div className="flex">
        <BoxInfo number={50} />
        <span className="info">Total number of users</span>
      </div>
      <div className="flex">
        <BoxInfo number={50} />
        <span className="info">Total number of experts</span>
      </div>
    </div>
  );
};

export default AllBoxes;