import React from "react";
import Button from "../common/button";
import { useSelector } from "react-redux";

const MainComponents = () => {
  const counterRedux = useSelector((state) => state.counter.value);
  const setColor = useSelector((state) => state.change.value);
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quam nemo earum quia doloribus excepturi ad. Commodi quia culpa ex dignissimos accusantium eos alias, sed voluptate voluptatem accusamus eum deleniti.
      <h1 style={{ color: setColor ? "green" : "blue" }}>Main Component {counterRedux}</h1>
      <Button>Haloo</Button>
    </div>
  );
};

export default MainComponents;
