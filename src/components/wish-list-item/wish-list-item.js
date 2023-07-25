import { Component } from "react";
import "./wish-list-item.css";

class WishListItem extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { name, increase, showItem, onToggleProp, onRename } = this.props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }

    return (
      <li className={classNames}>
        <input
          type="text"
          className="list-group-item-label angst"
          value={name}
          onChange={onRename}
        />

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            onClick={showItem}
            className="btn-trash btn-sm "
          >
            {/* <i className="fas fa-trash"></i> */}
            <i class="fa fa-fighter-jet" aria-hidden="true"></i>
          </button>

          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={onToggleProp}
          >
            <i class="fa fa-hourglass-end" aria-hidden="true"></i>
          </button>

          <button
            type="button"
            onClick={showItem}
            className="btn-trash btn-sm "
          >
            {/* <i className="fas fa-trash"></i> */}
            <i class="fa fa-cubes" aria-hidden="true"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default WishListItem;
