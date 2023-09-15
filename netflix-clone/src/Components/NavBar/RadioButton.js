import React, { useState } from 'react';
import "./RadioButton.css";

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={selectedOption === 'male'}
          onChange={handleOptionChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selectedOption === 'female'}
          onChange={handleOptionChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={selectedOption === 'other'}
          onChange={handleOptionChange}
        />
        Other
      </label>
    </form>
  );
};

export default RadioButtons;