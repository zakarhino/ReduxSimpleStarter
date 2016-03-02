import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Start val' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.event}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;