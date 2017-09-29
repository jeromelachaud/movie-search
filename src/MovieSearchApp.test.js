import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieSearchApp from './MovieSearchApp';

describe('MovieSearchApp', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovieSearchApp />, div);
  });

  it('should render as expected', () => {
    const movieSearchAppComponent = shallow(<MovieSearchApp />);
    expect(toJson(movieSearchAppComponent))
      .toMatchSnapshot();
  });
});
