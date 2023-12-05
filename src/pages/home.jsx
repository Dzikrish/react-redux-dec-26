import React from "react";
import ComponentsTwo from "../components/home/componentsTwo";
import { useState } from "react";
import Local from "../components/home/local";
import { useSelector } from "react-redux";

const Home = () => {
  const [count, setCount] = useState(0);
  const counterRedux = useSelector((state) => state.counter.value);
  return (
    <>
      <ComponentsTwo count={count} setCount={setCount} />
      <Local />
      <div>
        <h1>Ini contoh action dan reducer</h1>
        {/* declare / panggil counterredux */}
        <h6 style={{ color: "red", fontSize: "24px" }}>{counterRedux}</h6>
      </div>
    </>
  );
};

export default Home;
