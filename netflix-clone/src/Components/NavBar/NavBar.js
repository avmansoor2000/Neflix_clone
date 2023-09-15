import React, { useState } from 'react';
import RadioButtons from './RadioButton';
import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar" >
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
            {/* <input type="text" /> */}
            {/* <button>Sign In</button> */}
            
        </div>
    )
}

// RadioButtons
// const RadioButtons = () => {
//     const [selectedOption, setSelectedOption] = useState('');
  
//     const handleOptionChange = (event) => {
//       setSelectedOption(event.target.value);
//     };
  
//     return (
//       <form>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={selectedOption === 'male'}
//             onChange={handleOptionChange}
//           />
//           Male
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={selectedOption === 'female'}
//             onChange={handleOptionChange}
//           />
//           Female
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="other"
//             checked={selectedOption === 'other'}
//             onChange={handleOptionChange}
//           />
//           Other
//         </label>
//       </form>
//     );
//   };
  


export default NavBar;