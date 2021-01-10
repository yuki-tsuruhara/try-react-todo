import React from "react";

export const Input = (props) => {
  const { TodoText, Contents, onAdd } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={TodoText}
        onChange={Contents}
      ></input>
      <button onClick={onAdd}>追加</button>
    </div>
  );
};
