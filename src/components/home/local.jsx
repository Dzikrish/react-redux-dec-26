import React, { useState } from "react";

const Local = () => {
  const [count, setCount] = useState(0);
  const [isGreen, setGreen] = useState(false);
  return (
    <div>
      Ini Contoh Local props
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}> Add 1</button>
        <button onClick={() => setCount(count - 1)}> Minus 1</button>
      </div>
      <div>is {isGreen ? `ini Hijau` : `Ini bukan Hijau`}</div>
    </div>
  );
};

export default Local;
