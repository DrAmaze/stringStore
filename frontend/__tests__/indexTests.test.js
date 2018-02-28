import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Word from '../components/index/wordIndex';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Words Index', () => {
  const wrapper = mount(<Word />);

  it('Should render', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });

  it('Has link to create string page', () => {
    expect(wrapper.find('Link').length).toEqual(1);
  });

  it('Displays the index of strings', () => {

  });

});
