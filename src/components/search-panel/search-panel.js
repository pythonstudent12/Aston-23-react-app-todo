import { Component } from "react";
import { debounce } from "lodash";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    // console.log(e.target.value);
    let term = e.target.value;
    let debF = debounce((term) => {
      this.setState({ term });
      //  console.log(this.state);
      this.props.onUpdateSearch(term);
    }, 500);
    debF(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input angst"
        placeholder="Найти задачу"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
