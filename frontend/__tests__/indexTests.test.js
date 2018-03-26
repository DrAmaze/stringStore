import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Word from '../components/index/wordIndex';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Words Index', () => {
  let wrapper = shallow(<Word />);

  // it('Should render page', () => {
  //   sinon.spy(Word.prototype, 'componentDidMount');
  //   expect(Word.componentDidMount.calledOnce).toBe(true);
  // });

  it('Has link to create string page', () => {
    expect(wrapper.find('Link').length).toEqual(1);
  });

});
