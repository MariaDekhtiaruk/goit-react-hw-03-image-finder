//import PropTypes from 'prop-types';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
// import {Farbeer} from

class SearchBar extends Component {
  state = {
    imageQ: '',
  };

  onSearchBar = event => {
    this.setState({ imageQ: event.target.value.toLowerCase() });
  };
  hendlerSubmit = event => {
    event.preventDefault();
    if (this.state.imageQ.trim() === '') {
      Notify.warning('Please enter your search query');
      return;
    }
    this.props.onSubmit(this.state.imageQ);
    this.setState({ imageQ: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form
          name="searchForm"
          onSubmit={this.hendlerSubmit}
          className="SearchForm"
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">
              <svg
                data-2ui="true"
                aria-hidden="true"
                viewBox="0 0 20 20"
                className=""
              >
                <path
                  fill="red"
                  fillRule="evenodd"
                  d="M9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3ZM1.5 9a7.5 7.5 0 1 1 13.307 4.746l3.473 3.474a.75.75 0 1 1-1.06 1.06l-3.473-3.473A7.5 7.5 0 0 1 1.5 9Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>

          <input
            onChange={this.onSearchBar}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onSearchBar: PropTypes.func,
  hendlerSubmit: PropTypes.func,
};
export default SearchBar;
