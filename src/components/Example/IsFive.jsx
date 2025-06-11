import React, { memo, useMemo } from "react";

const IsFive = ({ value }) => {
  console.log("IsFive");

  const getResult = () => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return value === 5 ? "Is 5" : "Not 5";
  };

  const result = useMemo(getResult, [value]);

  return <div> {result} </div>;
};

export default memo(IsFive, (prevProps, nextProps) => {
    // false - ререндер оновлюється
    // console.log(prevProps, nextProps);
    return nextProps.value !== 5 && prevProps.value !== 5;
});
