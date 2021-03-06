import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/stocks/stocks';

const SearchForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleForm = (e) => {
    const text = e.target.value;
    setInput(text);
  };

  useEffect(() => {
    dispatch(search(input));
  }, [input]);

  return (
    <div className="input-container">
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          id="search"
          value={input}
          placeholder="Search by symbol e.g, APPL"
          onChange={handleForm}
        />
      </label>
    </div>
  );
};

export default SearchForm;
