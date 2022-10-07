import React from "react";

const Overview = ({ overviewImg, handleOverviewExit }) => {
  return (
    <div className="overview">
      <div className="inner-overview">
        <h3 onClick={handleOverviewExit}>cancel</h3>
        <img src={overviewImg} alt="viewed" />
      </div>
    </div>
  );
};

export default Overview;
