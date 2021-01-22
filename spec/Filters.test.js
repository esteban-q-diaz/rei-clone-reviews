import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect as expectChai } from 'chai';
import Filters from '../client/components/review_summary/Filters';

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
describe('ReviewSnapshot', () => {
  // eslint-disable-next-line no-undef
  it('Should show "Sort by" text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<Filters />);
    const text = wrapper.find('.sortBy p');
    // eslint-disable-next-line no-undef
    expect(text.text()).toBe('Sort by:');
  });
  // eslint-disable-next-line no-undef
  // it('Test click event', () => {
  //   const wrapper = shallow(<Filters />);
  //   wrapper.find('.sortSelect').simulate('click');
  //   // eslint-disable-next-line no-undef
  //   expectChai(wrapper.find(Form)).to.be.lengthOf(1);
  // });
});
