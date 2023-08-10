import { Component } from "react";
import ToDoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

class ToDoList extends Component {
  render() {
    const { data, showItem, onToggleProp, onRename, onDelete } = this.props;
    const elements = data.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <ToDoListItem
          key={id}
          {...itemProps}
          showItem={() => showItem(id)}
          onToggleProp={(e) =>
            onToggleProp(id, e.currentTarget.getAttribute("data-toggle") + "")
          }
          onDelete={() => onDelete(id)}
          onRename={(e) => onRename(id, e.currentTarget.value)}
        />
      );
    });
    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default ToDoList;
