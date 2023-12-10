import React from "react";
import MainComponents from "../components/about/main";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../reducer/counterSlice";
import { change } from "../reducer/changeColor";

const About = () => {
  //inisialisasi dispatch kita
  const dispatch = useDispatch();
  return (
    <>
      <MainComponents />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(change())}>Change Color</button>
    </>
  );
};

export default About;
