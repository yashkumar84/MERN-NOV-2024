import { useState } from "react";
import Button from "../components/Button";
import Message from "../components/Message";
import "./css/counterPage.css";

const CounterPage = () => {
  console.log("Call Lagi");
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
    console.log(count);
  };

  const dec = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <>
      <div className="counter">
        <div className="msg">
          <Message value={count} />
        </div>
        <div className="buttonDiv">
          <Button text="-" fn={dec} />
          <Button text="+" fn={inc} />
        </div>
      </div>
    </>
  );
};

export default CounterPage;
