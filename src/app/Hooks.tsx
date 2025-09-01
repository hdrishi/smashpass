"use client";

import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  console.log("Outer value:::", count);

  return (
    <div style={{ textAlign: "center", paddingTop: "10rem" }}>
      {count}
      <br />

      <button
        type="button"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#088308",
          fontSize: "2rem",
          borderRadius: "10px",
          padding: "1rem",
          cursor: "pointer",
        }}
        onClick={() => {
          setCount(count + 1);
          console.log("count value::", count);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Hooks;
