import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect as expectChai } from 'chai';
import ReviewSnapshot, { sortRatings }  from '../client/components/review_summary/ReviewSnapshot';
import FiveFilter from '../client/components/review_summary/filters/FiveFilter'
import { sortRatings } from '/Users/rebrnd/Documents/Hack_Reactor/Immersive/Week_6/FEC/customer-review/client/src/index.js'

Enzyme.configure({ adapter: new Adapter() });
const ratingsCount = {
  one: 0, two: 0, three: 0, four: 0, five: 0,
};
const currentReview = [];

// eslint-disable-next-line no-undef
describe('ReviewSnapshot', () => {
  // eslint-disable-next-line no-undef
  it('Should show "Rating Snapshot" text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<ReviewSnapshot
      ratingsCount={ratingsCount}
      currentReview={currentReview}
    />);
    const text = wrapper.find('.ratingSnapshot');
    // eslint-disable-next-line no-undef
    expect(text.text()).toBe('Rating Snapshot');
  });
  it('Test click event', () => {
    const wrapper = shallow(<ReviewSnapshot
      ratingsCount={ratingsCount}
      currentReview={currentReview}
      sortRatings={sortRatings}
    />);
    wrapper.find('.fiveFilter').simulate('click');
    // eslint-disable-next-line no-undef
    expectChai(wrapper.find(FiveFilter)).to.be.lengthOf(1);
  });
});
