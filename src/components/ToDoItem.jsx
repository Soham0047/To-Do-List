import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
    setTimeout(() => {
      props.onChecked(props.id); // Use id to delete the correct item
    }, 500); // Delay to allow animation to complete
  }

  return (
    <div
      onClick={handleClick}
      className={`todo-item ${isClicked ? "strike-off" : ""}`}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
