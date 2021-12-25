import React, { Component } from "react";

class ClosedBanner extends Component {
  render() {
    return (
      <div>
        <h4 className="text-lg text-center font-semibold">
          This event is closed. We're not accepting registerations for this
          event at the moment.
        </h4>
      </div>
    );
  }
}

export default ClosedBanner;
