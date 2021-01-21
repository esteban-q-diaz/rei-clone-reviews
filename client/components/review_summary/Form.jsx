import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ currentReview, closeForm, submitForm }) {
  const [starRating, setStarRating] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [recommend, setRecommend] = useState('');
  const [age, setAge] = useState('');
  const [nickname, setNickname] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const submitData = {
    starRating,
    title,
    review,
    recommend,
    age,
    nickname,
    location,
    email,
  };

  return (
    <div>
      <option onClick={closeForm} className="closeForm">X</option>
      <img style={{ width: '200px' }} src={currentReview[0].reviews[0].image} alt="Missing" />
      <form onClick={(e) => {e.preventDefault()}}>

        <h3>
          My Review for
          {currentReview[0].reviews[0].productName}
        </h3>
        <p>Required fields are marked with *</p>

        <h3>Product Rating*</h3>
        <button type="submit" onClick={() => { setStarRating(1); }}>☆</button>
        <button type="submit" onClick={() => { setStarRating(2); }}>☆</button>
        <button type="submit" onClick={() => { setStarRating(3); }}>☆</button>
        <button type="submit" onClick={() => { setStarRating(4); }}>☆</button>
        <button type="submit" onClick={() => { setStarRating(5); }}>☆</button>

        <h3>Review Title*</h3>
        <input type="text" placeholder="Example: Great on the trails!" onChange={(e) => { setTitle(e.target.value); }} required />

        <h3>Review*</h3>
        <input type="text" placeholder="Please keep your review focused on the product and your experience with it. Your review is so important for improving REI and the experience for other REI shoppers!" onChange={(e) => { setReview(e.target.value); }} required />
        <button type="submit">Add photo</button>
        <button type="submit"> Add video</button>
        <h3>Would you recommend this product to a friend</h3>
        <button type="submit" onClick={() => { setRecommend(true); }}>Yes</button>
        <button type="submit" onClick={() => { setRecommend(false); }}>No</button>

        <h3>Age</h3>
        <select onChange={(e) => { setAge(e.target.value); }}>
          <option>Select</option>
          <option value="under18">Under 18</option>
          <option value="18-24">18-24 </option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
          <option value="55-64">55-64</option>
          <option value="65-74">65-74</option>
          <option value="over75">75+</option>
        </select>

        <h3>Experience</h3>

        <h3>Nickname*</h3>
        <input type="text" placeholder="Example: jackie27" onChange={(e) => { setNickname(e.target.value); }} required />

        <h3>Location*</h3>
        <input type="text" placeholder="Example: Seattle, WA" onChange={(e) => { setLocation(e.target.value); }} required />

        <h3>Email*</h3>
        <input type="email" placeholder="Example: Seattle@washington.com" onChange={(e) => { setEmail(e.target.value); }} required />
        <p>I agree to the terms & conditions</p>
        <p>
          You may receive emails regarding this
          submission. Any emails will include the ability to opt out of future communications.
        </p>
        <input type="submit" value="Post Review" onClick={(e) => { submitForm(e, submitData); }} />
      </form>

    </div>
  );
}

Form.propTypes = {
  currentReview: PropTypes.instanceOf(Array).isRequired,
  closeForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default Form;
