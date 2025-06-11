import React, { useCallback, useState } from "react";
import Count from "./Count";
import IsFive from "./IsFive";

const user = { name: "Vasya" };


const Counters = () => {
  console.log("Counters");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const foo = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  return (
    <div>
      <div>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
        <Count value={count1} id="count 1" user={user} foo={foo} />
        <button onClick={() => setCount1(count1 + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
        <Count value={count2} id="count 2" />
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <IsFive value={count2} />
      </div>
    </div>
  );
};

export default Counters;
