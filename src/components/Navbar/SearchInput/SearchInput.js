import React, { Component } from 'react';

import './SearchInput.css';

class SearchInput extends Component {
  state = {
    query: ''
  };

  handleInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.searchSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            value={this.state.query}
            placeholder="Enter city or zipcode"
            onChange={this.handleInputChange}
          />
          <span
            onClick={this.handleSearch}
            className="search-button fa fa-search"
          />
        </form>
      </div>
    );
  }
}

export default SearchInput;
