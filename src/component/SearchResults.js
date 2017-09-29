import React, { Component } from 'react';
import Result from './Result';
import PropTypes from 'prop-types';
import _map from 'lodash/collection/map';

export default class SearchResults extends Component {
  render() {
    const searchResultsElement = _map(this.props.results, (result, i) => (
      <Result
        key={i}
        result={result} />
    ));

    return (
      <div>
        {searchResultsElement}
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.array
};
