import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GrStar } from 'react-icons/gr';

import './AverageRatingsStyle.css';

function AverageRatings({ averageRatings }) {
  const [fiveStar, setFiveStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [oneStar, setOneStar] = useState(false);
  const [count, setCount] = useState(0);

  function checkStarRating() {
    console.log(averageRatings)
    setFiveStar (prevState => prevState = true);
    if (Math.floor(averageRatings) === 5) {
      setFourStar (prevState => prevState = false);
      setThreeStar (prevState => prevState = false);
      setTwoStar (prevState => prevState = false);
      setOneStar (prevState => prevState = false);
      setFiveStar (prevState => prevState = true);
    }
    if (Math.floor(averageRatings) === 4) {
      setFiveStar(prevState => prevState = false);
      setThreeStar (prevState => prevState = false);
      setTwoStar (prevState => prevState = false);
      setOneStar (prevState => prevState = false);
      setFourStar (prevState => prevState = true);
    }
    if (Math.floor(averageRatings) === 3) {
      setFiveStar(prevState => prevState = false)
      setFourStar (prevState => prevState = false);
      setTwoStar (prevState => prevState = false);
      setOneStar (prevState => prevState = false);
      setThreeStar (prevState => prevState = true);
    }
    if (Math.floor(averageRatings) === 2) {
      setFiveStar(prevState => prevState = false)
      setFourStar (prevState => prevState = false);
      setThreeStar (prevState => prevState = false);
      setOneStar (prevState => prevState = false);
      setTwoStar (prevState => prevState = true);
    }
    if (Math.floor(averageRatings) === 1) {
      setFiveStar(prevState => prevState = false)
      setFourStar (prevState => prevState = false);
      setThreeStar (prevState => prevState = false);
      setTwoStar (prevState => prevState = false);
      setOneStar (prevState => prevState = true);
    }
  }

  useEffect(() => {
    // console.log("five star: ", currentReview.reviews[0].stars, fiveStar)

    checkStarRating();
    // if (count === 0) {
    //   checkStarRating();
    //   setCount(prevState => prevState + 1);
    // }
  });

  return (
    <div className="average-container">
      <div>
        <p>Average Customer Ratings</p>
      </div>

      <div className="overall">
        <p className="star-summary">
          Overall
        </p>
        <p className="star-icons">
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
        </p>

        <p className="average-ratings">
          { averageRatings }
        </p>
      </div>
    </div>
  );
}

AverageRatings.defaultProps = {
  averageRatings: 0,
};

AverageRatings.propTypes = {
  averageRatings: PropTypes.number,
};

export default AverageRatings;
