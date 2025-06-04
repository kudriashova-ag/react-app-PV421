import React, { useState } from "react";

const AddForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

    const clickHandler = () => {
        if (!title.trim()) { 
            setError(true);
            return;
        }

        addTask(title);
        setError(false);
        setTitle('');
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={clickHandler}>Add</button>
      {error && <div style={{ color: "red" }}>Title is required</div>}
    </div>
  );
};

export default AddForm;
