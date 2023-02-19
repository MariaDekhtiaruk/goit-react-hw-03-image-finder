//import PropTypes from 'prop-types';
import { Component } from 'react';

class SearchBar extends Component {
  state = {
    imageQ: '',
  };

  onSearchBar = event => {
    this.setState({ imageQ: event.target.value.toLowerCase() });
  };
  hendlerSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.imageQ);
    this.setState({ imageQ: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form name="searchForm" onSubmit={this.hendlerSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.onSearchBar}
            className="input"
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
