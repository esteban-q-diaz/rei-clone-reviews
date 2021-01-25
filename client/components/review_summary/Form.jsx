import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FormStyle.css';

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
    <div className="main">

      <div className="flexmain">
        <div className="flex-image-name">
          <div className="fleximage">
            <div className="product-image">
              <img className="product-image-style" style={{ width: '200px' }} src={currentReview[0].reviews[0].image} alt="Missing" />
            </div>
            <div className="product-name">
              <p>
                {currentReview[0].reviews[0].productName}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-form-fill">
          <div className="close-form-x">
            <span
              role="button"
              aria-label="Mute volume"
              tabIndex={0}
              onClick={closeForm}
              className="closeForm"
              onKeyDown={closeForm}
            />
          </div>

          <form onClick={(e) => { e.preventDefault(); }}>

            <span className="review-for">
              <p className="review-title-header">
                {'My Review for '}
                {currentReview[0].reviews[0].productName}
              </p>
              <p className="required-notice">Required fields are marked with *</p>
            </span>

            <div className="border" />

            <div className="review-rating">

              <div className="flexrating">
                <p className="review-header">Product rating*</p>
                <button type="submit" onClick={() => { setStarRating(1); }}>☆</button>
                <button type="submit" onClick={() => { setStarRating(2); }}>☆</button>
                <button type="submit" onClick={() => { setStarRating(3); }}>☆</button>
                <button type="submit" onClick={() => { setStarRating(4); }}>☆</button>
                <button type="submit" onClick={() => { setStarRating(5); }}>☆</button>
                <p className="rate-click">Click to rate</p>
              </div>

            </div>

            <div className="border" />

            <div className="review-title">
              <p className="review-header">Review title*</p>
              <div className="inputbox-section">
                <input className="inputbox" type="text" placeholder="Example: Great on the trails!" onChange={(e) => { setTitle(e.target.value); }} required />
              </div>
            </div>

            <div className="border"></div>

            <div className="review-review">
              <p className="review-header">Review*</p>
              <input className="review-input-box" type="text" placeholder="Please keep your review focused on the product and your experience with it. Your review is so important for improving REI and the experience for other REI shoppers!" onChange={(e) => { setReview(e.target.value); }} required />
              <button type="submit">Add photo</button>
              <button type="submit"> Add video</button>
            </div>
            <div className="border" />

            <div className="flexrecommend">
              <div className="flex-recommend-1">
                <div className="review-recommend">
                  <p className="review-header">Would you recommend this product to a friend?</p>
                </div>
              </div>
              <div className="flex-recommend-2">
                <button type="submit" onClick={() => { setRecommend(true); }}>Yes</button>
                <button type="submit" onClick={() => { setRecommend(false); }}>No</button>
              </div>
            </div>
            <div className="border" />

            <div className="flexage">

              <div className="review-age">
                <p className="review-header">Age</p>
              </div>

              <div className="age-range">
                <select className="sortSelect2" onChange={(e) => { setAge(e.target.value); }}>
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
              </div>
            </div>

            <div className="border" />

            <div className="review-experience">
              <p className="review-header">Experience</p>
            </div>

            <div className="border" />

            <div className="grid-location-nickname">

              <div className="review-nickname">
                <p className="review-header">Nickname*</p>
                <input className="inputbox"  type="text" placeholder="Example: jackie27" onChange={(e) => { setNickname(e.target.value); }} required />
              </div>
              <div className="review-location">
                <p className="review-header">Location*</p>
                <input className="inputbox" type="text" placeholder="Example: Seattle, WA" onChange={(e) => { setLocation(e.target.value); }} required />
              </div>
            </div>

            <div className="border" />

            <div className="review-email">
              <h3>Email*</h3>
              <input className="email-inputbox" type="email" placeholder="Example: Seattle@washington.com" onChange={(e) => { setEmail(e.target.value); }} required />
            </div>

            <div className="border" />

            <div className="review-footer">
              <input type='checkbox' id="terms" />
              <label for="terms" className="terms" >I agree to the</label>
              <a className="terms" href="#"> terms & conditions</a>

              <p className="newsletter-info">
                You may receive emails regarding this
                submission. Any emails will include the ability to opt out of future communications.
              </p>
            </div>

            <div className="review-submit">
              <input className="button" type="submit" value="Post Review" onClick={(e) => { submitForm(e, submitData); }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Form.defaultProps = {
  currentReview: [],
  submitForm: () => {},
};

Form.propTypes = {
  currentReview: PropTypes.instanceOf(Array),
  closeForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func,
};

export default Form;
