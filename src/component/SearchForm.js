import React, { Component } from 'react';
import SearchResults from './SearchResults';
import _bind from 'lodash/function/bind';
import './SearchForm.css';
import axios from 'axios';
import { apiKey } from '../constants/api-constants';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: ''
    };

    this.onSubmit = _bind(this.onSubmit, this);
    this.onChangeQuery = _bind(this.onChangeQuery, this);
  }

  onChangeQuery(event) {
    this.setState({query: event.target.value});
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}>
          <div
            className="search-form">
            <label
              className="search-form-label"
              htmlFor="MovieSearch">
              Search in TMDb
            </label>
            <input
              aria-label="Search for a movie in The Movie Database"
              className="search-form-input-field"
              id="searchFormInPutField"
              onChange={this.onChangeQuery}
              placeholder="Search for a movie"
              required
              size="80"
              type="search">
            </input>
            <button
              className="search-form-button"
              id="searchFormButton"
              type="submit">
              Search!
            </button>
          </div>
        </form>
        <SearchResults
          results={this.state.results}>
        </SearchResults>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&language=en-US&query=${encodeURI(this.state.query)}&page=1&include_adult=false`;
    axios.get(url)
      .then(response => {
        const results = {
          results: response.data.results
        };
        this.setState(results);
      })
      .catch((error) => {
        throw error;
        // console.log(error);
      });
  }
}
