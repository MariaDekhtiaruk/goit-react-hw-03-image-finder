//import PropTypes from 'prop-types';
import { Component } from 'react';
// import { toast } from 'react-toastify';
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
      alert('Please enter your search query');
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
            <span className="SearchForm-button-label">Search</span>
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
// SerchBar.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
export default SearchBar;
