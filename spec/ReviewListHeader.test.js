import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect as expectChai } from 'chai';
import ReviewListHeader from '../client/components/review_summary/ReviewListHeader';
import Form from '../client/components/review_summary/Form';

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
describe('Test ReviewListHeader component', () => {
  // eslint-disable-next-line no-undef
  it('Test to make sure Reviews header is displayed', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<ReviewListHeader />);
    const text = wrapper.find('div h2');
    // eslint-disable-next-line no-undef
    expect(text.text()).toBe('Reviews');
  });
  // eslint-disable-next-line no-undef
  it('Test click event', () => {
    const wrapper = shallow(<ReviewListHeader />);
    wrapper.find('.button').simulate('click');
    // eslint-disable-next-line no-undef
    expectChai(wrapper.find(Form)).to.be.lengthOf(1);
  });
});
