import { Component } from "react";
import "./todo-add-form.css";

class ToDoAddForm extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        name: "",
        description: "",
        active: true,
        completed: false,
        archive: false,
      } || JSON.parse(window.localStorage.getItem("state"));
  }

  //здесь применяется localStorage

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3) {
      alert("Слишком короткое название!");
      this.setState({
        name: "",
        description: "",
        active: true,
        completed: false,
        archive: false,
      });
      return;
    }
    this.props.onAdd(this.state.name);
    return this.setState({ ...this.state, name: this.state.name });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="app-add-form angst">
        <h3>Добавьте новую задачу</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Введите название задачи"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default ToDoAddForm;
