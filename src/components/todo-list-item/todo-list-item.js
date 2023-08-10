import { Component } from "react";
import "./todo-list-item.css";

class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descr: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(this.state);
    this.props.onRename(this.state.descr);
  };

  render() {
    const {
      name,
      archive,
      onDelete,
      onToggleProp,
      onRename,
      description,
      completed,
    } = this.props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (archive) {
      classNames += " archive";
    }

    if (completed) {
      classNames += " completed";
    }

    return (
      <li className={classNames}>
        <input
          type="text"
          className="list-group-item-label angst"
          defaultValue={name}
        />

        <input
          type="text"
          className="list-group-item-label angst"
          value={description}
          onChange={onRename}
        />

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            onClick={onToggleProp}
            className="btn-trash btn-sm "
            data-toggle="active"
          >
            <i className="fa fa-fighter-jet" aria-hidden="true"></i>
          </button>

          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={onToggleProp}
            data-toggle="completed"
          >
            <i className="fa fa-hourglass-end" aria-hidden="true"></i>
          </button>

          <button
            type="button"
            onClick={onToggleProp}
            className="btn-trash btn-sm "
            data-toggle="archive"
          >
            <i className="fa fa-cubes" aria-hidden="true"></i>
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="btn-trash btn-sm "
            data-toggle="delete"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default ToDoListItem;
