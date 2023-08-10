import { Component } from "react";

//сделать шрифт на кнопках разного цвета и переписать на классовый компонент
//тут биболиотека задействована, непонятно как цвет фильтра менять

import "./app-filter.css";

class AppFilter extends Component {
  render() {
    const buttonsData = [
      { name: "active", label: "В процессе" },
      { name: "completed", label: "Выполненные" },
      { name: "archive", label: "Архивные" },
      { name: "cancel", label: "Сбросить" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active
        ? "btn-light" + " angst"
        : "btn-outline-light " + "angst " + name;
      return (
        <button
          type="button"
          className={`${clazz}`}
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}

export default AppFilter;
