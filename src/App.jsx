import React, { useState } from "react";
import { Input } from "./components/input";
import { Incomplete } from "./components/incomplete";
import { Complete } from "./components/complete";
import "./styles.css";

export const App = () => {
  // テキストを取得
  const [todoText, setTodoText] = useState("");
  // 未完了のTODO
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了のTODO
  const [completeTodos, setCompleteTodos] = useState([]);

  // inputテキストを更新
  const addContents = (e) => setTodoText(e.target.value);

  // 未完了リストに追加
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    setTodoText("");
  };
  // 　削除処理
  const onClickdelete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };
  // 完了処理
  const onClickComplete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);

    // 完了したTODOに追加
    const addcomplete = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(addcomplete);
    setIncompleteTodos(newTodo);
  };

  // 戻す処理
  const onClickBack = (index) => {
    const newTodo = [...completeTodos];
    newTodo.splice(index, 1);

    const addincomplete = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(addincomplete);
    setCompleteTodos(newTodo);
  };

  return (
    <>
      <Input TodoText={todoText} Contents={addContents} onAdd={onClickAdd} />
      <Incomplete
        todos={incompleteTodos}
        onComplete={onClickComplete}
        onDelete={onClickdelete}
      />
      <Complete todos={completeTodos} onBack={onClickBack} />
    </>
  );
};
