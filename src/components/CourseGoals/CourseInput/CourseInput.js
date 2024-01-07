// CourseInput.js
import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false); // Initially false

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(event.target.value.trim().length > 0);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const buttonClasses = `button ${isValid ? '' : 'button-blur'}`; 

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={buttonClasses}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
























// import React, { useState } from 'react';

// import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// const CourseInput = props => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [isValid , setIsValid] = useState(true);


//   const goalInputChangeHandler = event => {
//     if(event.target.value.trim().length > 0){
//     setIsValid(true)
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = event => {
//     event.preventDefault();
//     if(enteredValue.trim().length === 0){
//       setIsValid(false)
//       return ;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={`form-control ${!isValid ? 'invalid': ''}`}>
//         <label  >Course Goal</label>
//         <input  type="text" onChange={goalInputChangeHandler} />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;
