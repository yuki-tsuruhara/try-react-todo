import React from "react";

export const Complete = (props) => {
  const { todos, onBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul className="complete-list">
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list">
              <li>{todo}</li>
              <button onClick={() => onBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
