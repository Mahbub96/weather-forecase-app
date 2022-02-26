import React from "react";
import FrontLeft from "../components/FrontLeft";
import FrontRight from "../components/FrontRight";
import classes from "../style/Front.module.css";

function Front() {
  return (
    <>
      <div className="container">
        <FrontLeft className={`float-left ${classes.left}`} />
        <FrontRight className={`float-right ${classes.right}`} />
      </div>
    </>
  );
}

export default Front;
