import { Component, Button, createContext } from "react";
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import ToDoList from "../todo-list/todo-list";
import ToDoAddForm from "../todo-add-form/todo-add-form";
import SearchPanel from "../search-panel/search-panel";
import { TodoContext } from "../themeContext/themeContext";

import "./app.css";

const TodoConsumer = TodoContext.Consumer;

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#293133",
    background: "#293133",
  },
};

function Parents(props) {
  return (
    <div>
      <AppInfo />
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Изучить Реакт",
          description: "Установить ESLint",
          active: true,
          completed: false,
          archive: false,
          id: 0,
        },
        {
          name: "Погулять с собакой",
          description: "",
          active: true,
          completed: false,
          archive: false,
          id: 1,
        },
        {
          name: "Покормить кошку",
          description: "",
          active: false,
          completed: true,
          archive: false,
          id: 2,
        },
      ],
      term: "",
      filter: "all",
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
    this.maxId = JSON.parse(window.localStorage.getItem("newOrderNumber")) || 4;
  }

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  onDelete = (id) => {
    const newArr = this.state.data.filter((item) => item.id !== id);
    // console.log(newArr);
    // localStorage.clear();
    localStorage.setItem("newData", JSON.stringify(newArr));
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  componentDidMount() {
    const dataInitial = JSON.parse(window.localStorage.getItem("newData")) || [
      {
        name: "Изучить Реакт",
        description: "Установить ESLint",
        active: true,
        completed: false,
        archive: false,
        id: 0,
      },
      {
        name: "Погулять с собакой",
        description: "Вечером",
        active: true,
        completed: false,
        archive: false,
        id: 1,
      },
      {
        name: "Покормить кошку",
        description: "Вискас",
        active: false,
        completed: true,
        archive: false,
        id: 2,
      },
    ];
    console.log(dataInitial);
    this.setState({ data: dataInitial });
    const orderNumberInitial =
      JSON.parse(window.localStorage.getItem("newOrderNumber")) || 4;
    this.maxId = orderNumberInitial;
    console.log(this.maxId);
  }

  addItem = (name) => {
    const newItem = {
      name,
      description: "",
      active: true,
      completed: false,
      archive: false,
      id: this.maxId++,
    };
    const newArr = [...this.state.data, newItem];
    //console.log(newArr);
    // localStorage.clear();
    localStorage.setItem("newData", JSON.stringify(newArr));
    console.log("Новый номер " + newItem.id);
    localStorage.setItem("newOrderNumber", JSON.stringify(newItem.id + 1));
    console.log(JSON.parse(window.localStorage.getItem("newOrderNumber")));
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    //console.log(id + " " + prop);
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          switch (prop) {
            case "active":
              return {
                ...item,
                active: true,
                completed: false,
                archive: false,
              };
            case "completed":
              return {
                ...item,
                active: false,
                completed: true,
                archive: false,
              };
            case "archive":
              return {
                ...item,
                active: false,
                completed: false,
                archive: true,
              };
          }
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "active":
        return items.filter((item) => item.active);
      case "completed":
        return items.filter((item) => item.completed);
      case "archive":
        return items.filter((item) => item.archive);
      case "cancel":
        return items;
      case "all":
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onRename = (id, descr) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            description: descr,
          };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <TodoContext.Provider value={this.state}>
          <Parents></Parents>
        </TodoContext.Provider>
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <ToDoList
          data={visibleData}
          onDelete={this.onDelete}
          onRename={this.onRename}
          onToggleProp={this.onToggleProp}
        />
        <ToDoAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
