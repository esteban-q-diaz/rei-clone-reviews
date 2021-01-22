import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect as expectChai } from 'chai';
import ReviewSnapshot from '../client/components/review_summary/ReviewSnapshot';
import FiveFilter from '../client/components/review_summary/filters/FiveFilter';

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
  it('Should show "Rating Snapshot" text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<ReviewSnapshot
      ratingsCount={ratingsCount}
      currentReview={currentReview}
    />);
    const text = wrapper.find('.selectRow');
    // eslint-disable-next-line no-undef
    expect(text.text()).toBe('Select a row below to filter reviews.');
  });
//   it('Test filve filter click event', () => {
//     const wrapper = mount(<ReviewSnapshot
//       ratingsCount={ratingsCount}
//       currentReview={currentReview}
//     />);
//     const fiveFilter = wrapper.find('.fiveFilterr');

//     // Test that the button is truthy
//     expectChai(fiveFilter).to.be.lengthOf(1);

//     // // Simulation
//     fiveFilter.simulate('click');
//     // // or
//     // cancelBtn.props().onClick();

//     // // Test the output
//     expectChai(wrapper.find(FiveFilter)).to.be.lengthOf(1);
// });

// eslint-disable-next-line no-undef
it('Test click event', () => {
  const wrapper = shallow(<ReviewSnapshot ratingsCount={ratingsCount}
          currentReview={currentReview}/>);
  wrapper.find('.fiveFilterr').simulate('click');
  // eslint-disable-next-line no-undef
  expectChai(wrapper.find(FiveFilter)).to.be.lengthOf(1);
});


});


// it('Test click event', () => {
//   const wrapper = shallow(<ReviewSnapshot
//     ratingsCount={ratingsCount}
//     currentReview={currentReview}
//   />);
//   wrapper.find('.fiveFilterr').simulate('click');
//   // eslint-disable-next-line no-undef
//   expectChai(wrapper.find(FiveFilter)).to.be.lengthOf(1);
// });