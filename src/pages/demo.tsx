import React from "react";

import Component from "../teleporthq/components/component";
import styles from "../teleporthq/style.module.css";

const Demo = () => {
  return (
    <div className={styles["red"]}>
      Demo
      <Component heading={"Hello"} />
    </div>
  );
};

export default Demo;
