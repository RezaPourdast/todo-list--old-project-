import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  const deletHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deletHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
