"use client";
import { useState, useEffect } from "react";
import Button from "@/component/button/button";
import { buttonProps } from "@/component/types/buttonProps";

export default function CounterApp() {
  const [counter, setCounter] = useState(0);

  const AddBtn = () => {
    setCounter(counter + 1);
  };
  const SubBtn = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };
  const Reset = () => {
    setCounter(0);
  };
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <div className="flex justify-center text-4xl bg-red-700 text-white">
        Counter App
      </div>
      <div className="flex justify-center text-4xl text-white py-10">
        <Button title="+" onHandleClick={AddBtn} />
        <span className=" py-5 px-5 text-4xl bg-black ">{counter}</span>
        <Button title="-" onHandleClick={SubBtn} />
      </div>
      <div className="flex justify-center text-4xl text-white">
        {" "}
        <Button title="Reset" onHandleClick={Reset} />
      </div>
    </div>
  );
}
