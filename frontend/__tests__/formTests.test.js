import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { WordForm } from '../components/form/wordForm';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Word Form', () => {
  const wrapper = shallow(<WordForm />);

  it('Should render', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('Has link back to index page', () => {
    expect(wrapper.find('Link').length).toEqual(1);
  });

  it('Effectively links back to the index page', () => {
    const preventDefault = function() {
      wrapper.setState({ content: 'hi' });
    };
    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(spy).toHaveBeenCalled();
  });

  it('Fails to allow user to submit if they have not typed a character', () => {
    const preventDefault = function() {
      wrapper.setState({ content: '' });
    };
    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(spy).not.toHaveBeenCalled();
  });
});