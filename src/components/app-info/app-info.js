import { Component } from "react";
import { TodoContext } from "../themeContext/themeContext";

import "./app-info.css";

const TodoConsumer = TodoContext.Consumer;

class AppInfo extends Component {
  //const classs = "app-info" + "zector";

  render() {
    return (
      <TodoConsumer>
        {({ theme, toggleTheme }) => (
          <div
            className="app-info angst"
            style={{ backgroundColor: theme.background }}
            onClick={toggleTheme}
          >
            ToDoList, may be switched dark or light...
          </div>
        )}
      </TodoConsumer>
    );
  }
}

export default AppInfo;
