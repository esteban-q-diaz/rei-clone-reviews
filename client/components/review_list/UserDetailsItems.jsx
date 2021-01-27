import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UserDetails.css';
import { GrStar } from 'react-icons/gr';
import './UserDetailsItemsStyle.css';
import { FaCheckCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons'
import { IoMdCloseCircle } from 'react-icons/Io';

function UserDetailsItems({ currentReview, onHelpfulClick }) {
  const [fiveStar, setFiveStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [oneStar, setOneStar] = useState(false);
  const [count, setCount] = useState(0);

  // Theres a bug that happens whenever u sort by star rating the star amounts get all messed up
  function checkStarRating() {
    if (currentReview.reviews[0].stars === 5) {
      setFiveStar (prevState => prevState = true);
    }
    if (currentReview.reviews[0].stars === 4) {
      setFourStar (prevState => prevState = true);
    }
    if (currentReview.reviews[0].stars === 3) {
      setThreeStar (prevState => prevState = true);
    }
    if (currentReview.reviews[0].stars === 2) {
      setTwoStar (prevState => prevState = true);
    }
    if (currentReview.reviews[0].stars === 1) {
      setOneStar (prevState => prevState = true);
    }
  }

  useEffect(() => {
    if (count === 0) {
      checkStarRating();
      setCount(prevState => prevState + 1);
    }
  });

  return (
    <div className="userContainer">

      <div className="flexuser">
        <div className="userDetails">
          <h2 className="review-name">
            {currentReview.reviews[0].name}
            in
          </h2>
          <p>
            {`${currentReview.reviews[0].city},
        ${currentReview.reviews[0].state}`}
          </p>
          <div className="review-total">
            <p>
              {'Reviews '}
              {currentReview.reviews[0].review_total}
              {` stars: ${currentReview.reviews[0].stars}`}
            </p>
          </div>
        </div>
        <div className="detailsContainer">

          <div className="flexstars">
            <div className="starfilters">
              {
              fiveStar ? (
                // eslint-disable-next-line react/jsx-fragments
                <Fragment>
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                </Fragment>
              )
                : null
              }
              {
              fourStar ? (
                // eslint-disable-next-line react/jsx-fragments
                <Fragment>
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#B8B8B8" />
                </Fragment>
              )
                : null
              }
              {
              threeStar ? (
                // eslint-disable-next-line react/jsx-fragments
                <Fragment>
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#B8B8B8" />
                  <GrStar size={20} color="#B8B8B8" />
                </Fragment>
              )
                : null
              }
              {
              twoStar ? (
                // eslint-disable-next-line react/jsx-fragments
                <Fragment>
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#B8B8B8" />
                  <GrStar size={20} color="#B8B8B8" />
                  <GrStar size={20} color="#B8B8B8" />
                </Fragment>
              )
                : null
              }
              {
              oneStar ? (
                // eslint-disable-next-line react/jsx-fragments
                <Fragment>
                  <GrStar size={20} color="#BE7B2C" />
                  <GrStar size={20} color="#B8B8B8" />
                  <GrStar size={20} color="#B8B8B8" />
                  <GrStar size={20} color="#B8B8B8" />
                  <GrStar size={20} color="#B8B8B8" />
                </Fragment>
              )
                : null
              }
              {/* <h3>
                {`${currentReview.reviews[0].stars} `}
                Stars
              </h3> */}
            </div>

            <div className="review-date">
              <p>
                {` •  ${currentReview.reviews[0].date}`}
              </p>
            </div>
          </div>

          <h2 className="review-title-details">
            {currentReview.reviews[0].title}
          </h2>
          <p className="review-description">
            {currentReview.reviews[0].description}
          </p>
          <div className="flexage">
            <div className="age-info">
              {/* <h2>Yoga Experience</h2> */}
              {/* <p>Beginner</p> */}
              <h2>Age:</h2>
            </div>

            <div className="age-number">
              <p>
                {currentReview.reviews[0].age}
              </p>
            </div>
          </div>

          <div className="flex-helpful-sentence">
            <div className="yes-no">
              <h2>
                {currentReview.reviews[0].recommended
                  ? <Fragment>
                      <IconContext.Provider value={{ size: '12px' }}>
                        <FaCheckCircle />
                      </IconContext.Provider>
                        {` Yes,  `}
                    </Fragment>
                  : <Fragment>
                      <IconContext.Provider value={{ size: '15px' }}>
                        <IoMdCloseCircle />
                      </IconContext.Provider>
                        {` No,  `}
                    </Fragment>
                  }

              </h2>
            </div>

            <div className="sentence">
              <p>
                {currentReview.reviews[0].recommended ? 'I recommend this product.' : 'I do not recommend this product.'}
              </p>
            </div>
          </div>

          <div className="flexhelpful">

            <div className="helpful">
              <p>Helpful?</p>
            </div>

            <div className="helfulpClick">

              <div className="gridbtn">
                <button className="yesbtn" type="submit" onClick={(e) => { onHelpfulClick(e, 'yes', currentReview.reviewId); }}>
                  {'Yes ∙ '}
                  {currentReview.helpful_count}
                </button>

                <button className="nobtn" type="submit" onClick={(e) => { onHelpfulClick(e, 'no', currentReview.reviewId); }}>
                  {'No ∙ '}
                  {currentReview.not_helpful_count}
                </button>
                <button className="reportbtn" type="submit">Report as inappropriate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserDetailsItems.defaultProps = {
  onHelpfulClick: () => {},
  loadMoreItems: () => {},
};

UserDetailsItems.propTypes = {
  onHelpfulClick: PropTypes.func,
  currentReview: PropTypes.instanceOf(Object).isRequired,
};

export default UserDetailsItems;
