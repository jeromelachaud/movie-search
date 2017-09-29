import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  const searchFormComponent = shallow(<SearchForm />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
  });

  it('should render as expected', () => {
    expect(toJson(searchFormComponent))
      .toMatchSnapshot();
  });

  it('should add the query to the state', () => {
    const input = searchFormComponent.find('#searchFormInPutField');
    input.simulate('change', { target: { value: 'Hello' } });
    expect(searchFormComponent.state().query)
      .toBe('Hello');
  });
});
