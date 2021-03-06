/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CgArrowLongUp } from 'react-icons/cg';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { getRandom, randomGainer } from '../../redux/stocks/trending';

const TrendingStocks = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gainers.item);
  const { trending, navigate } = props;

  useEffect(() => {
    const random = randomGainer(trending);
    dispatch(getRandom(random));
  }, []);

  return (
    <div>
      <h1>Random Top gainers stocks</h1>
      <div className="gainers" onClick={() => navigate(state.symbol)}>
        <BsArrowRightCircle className="gainers-link" />

        <div>
          <div className="symbol">
            <p>{state.symbol}</p>
            <p>{state.name}</p>
          </div>
          <div className="price">
            <p>{`Price: $${state.price}`}</p>
            <p>
              Change:
              <CgArrowLongUp color="green" />
              {state.change}
            </p>
          </div>
          <p className="percentage">
            Percentage: <CgArrowLongUp color="green" /> {state.changesPercentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

TrendingStocks.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      change: PropTypes.number.isRequired,
      changesPercentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default TrendingStocks;
