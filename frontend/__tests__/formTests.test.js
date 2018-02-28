import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { WordForm } from '../components/form/wordForm';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Word Form', () => {
  let wrapper = shallow(<WordForm />);

  it('Should render', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('Has link back to index page', () => {
    expect(wrapper.find('Link').length).toEqual(1);
  });

  it('Updates state with user input', () => {
    const preventDefault = function() {
      wrapper.setState({ content: 'hi' });
    };
    const spy = spyOn(wrapper.instance(), 'update');

    wrapper.find('input').simulate('change', { target : { preventDefault }});
    expect(spy).toHaveBeenCalled();
  });

  it('Fails to allow user to submit if they have not typed a character', () => {
    const preventDefault = function() {
      wrapper.setState({ content: '' });
    };
    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.find('button').simulate('click', { preventDefault });
    expect(spy).not.toHaveBeenCalled();
  });
});
