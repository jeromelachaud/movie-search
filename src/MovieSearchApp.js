import React, { Component } from 'react';
import SearchForm from './component/SearchForm';
import './MovieSearchApp.css';
class MovieSearchApp extends Component {
  render() {
    return (
      <div className="MovieSearchApp">
        <SearchForm />
      </div>
    );
  }
}

export default MovieSearchApp;
