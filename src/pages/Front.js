import React from "react";
import FrontLeft from "../components/FrontLeft";
import FrontRight from "../components/FrontRight";

function Front() {
  return (
    <>
      <div className="container">
        <FrontLeft />
        <FrontRight />
      </div>
    </>
  );
}

export default Front;
