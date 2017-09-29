import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Result.css';

export default class Result extends Component {
  render() {
    const {
      result
    } = this.props;

    const {
      title,
      overview,
      poster_path,
      release_date
    } = result;

    return (
      <div>
        <div
          className="result">
          <div
            className="result-image">
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title} />
          </div>
          <div
            className="result-info">
            <div
              className="result-title">{title}
            </div>
            <p
              className="result-overview">
              {overview}
            </p>
            <p
              className="result-release-date">
              Release date <em>{release_date}</em>
            </p>
          </div>
        </div>
        <hr />
      </div>

    );
  }
}

Result.propTypes = {
  result: PropTypes.object
};
