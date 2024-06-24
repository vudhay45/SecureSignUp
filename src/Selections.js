import React, { useState } from 'react';
import EmailVerification from './EmailVerification';

const OptionCard = ({ image, title, subContent, isSelected, onSelect }) => {
  return (
    <div
      className={`p-4 border-2 rounded-lg cursor-pointer transition-all h-full flex flex-col justify-between ${
        isSelected ? 'border-pink-500' : 'border-gray-300'
      }`}
      onClick={onSelect}
      style={{ height: '350px', width: '350px', minWidth: '200px', maxWidth: '100%' }}
    >
      <div className="flex flex-col items-center">
        <div className={`transition-transform ${isSelected ? 'translate-y-[-50%]' : 'translate-y-0'}`}>
          <img src={image} alt="" className={`h-25 w-25 ${isSelected ? 'mt-0 mb-0' : 'mt-0 mb-0'}`} />
        </div>
        <strong className={`transition-all ${isSelected ? 'mt-[-80px]' : 'mt-0'}`}>{title}</strong>
        {isSelected && (
          <>
            <p className="text-sm text-center mt-0 translate-[-300%] mb-5">{subContent}</p>
            <div className="mt-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Selections = ({avatar}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const[showEmailVerification, setEmailVerification]=useState(false)
  const handleSelect = (id) => {
    setSelectedOption(id);
  };
  const handleClick=()=>{
    setEmailVerification(true)
  }
  if(showEmailVerification){
    return <EmailVerification avatar={avatar}/>
  }

  return (
    <div className="p-8 space-y-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mt-8">What brings you to Dribbble?</h1>
      <p className="text-center mb-20">Select the options that best describe you. Don't worry, you can explore other options later.</p>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-5">
        {/* Replace the `image` prop with the actual image paths */}
        <OptionCard
          image="static/option1.png"
          title="I'm a designer looking to share my work"
          subContent="With over 7 million shots from a vast community of designers. Dribbble is the leading source for design inspiration"
          isSelected={selectedOption === 1}
          onSelect={() => handleSelect(1)}
        />
        <OptionCard
          image="static/option2.png"
          title="I'm looking to hire a designer"
          subContent="With over 7 million shots from a vast community of designers. Dribbble is the leading source for design inspiration"
          isSelected={selectedOption === 2}
          onSelect={() => handleSelect(2)}
        />
        <OptionCard
          image="static/option3.png"
          title="I'm looking for design inspiration"
          subContent="With over 7 million shots from a vast community of designers. Dribbble is the leading source for design inspiration"
          isSelected={selectedOption === 3}
          onSelect={() => handleSelect(3)}
        />
      </div>
      <p className="text-center">Anything else? You can select multiple.</p>
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-pink-500 text-white rounded-lg" onClick={handleClick}>Finish</button>
      </div>
    </div>
  );
};

export default Selections;
