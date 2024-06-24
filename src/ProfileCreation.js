// React component for the profile creation UI with adjusted spacing and layout
import React from 'react';
import { useState } from 'react';
import Selections from './Selections';
const ProfileCreation = () => {
    const[showOptionSelector,setShowOptionSelector]=useState(false)
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState('');

  //const handleImageChange = (e) => {
  // const file = e.target.files[0];
  //  setAvatar(URL.createObjectURL(file));
  //};
  const handleClick=()=>{
    setShowOptionSelector(true)
  }
  if(showOptionSelector){
    return <Selections avatar={avatar}/>
  }
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
 
  return (
    <div className="container mx-auto" style={{ paddingLeft: '20%', paddingTop: '10%' }}>
      <h1 className="text-4xl font-bold mb-4">Welcome! Let's create your profile</h1>
      <p className="text-1xl text-gray-600 mt-4 mb-10">Let others get to know you better! You can do these later.</p>
      <div className="flex flex-col mt-4">
        <h2 className="text-1xl mb-2">Add an avatar</h2>
        <div className="flex items-end">
          {avatar ? (
            <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full border-dotted border-2 border-gray-300 mr-4" />
          ) : (
            <div className="w-24 h-24 rounded-full border-dotted border-2 border-gray-300 flex items-center justify-center mr-4">
              <span className="text-gray-300">+</span>
            </div>
          )}
          <div>
            <input type="file" onChange={handleImageUpload} />
            <p className="text-xs text-gray-600 mt-6 mr-10">>Or choose one of our defaults.</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-1xl mt-10 mb-2">Add your location</h2>
        <input
          type="text"
          placeholder="Enter a Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-b-2 border-gray-5 w-ful"
        />
      </div>
      <button 
      
      
      
       className="mt-4 bg-pink-500 text-white rounded px-4 py-2 mt-10" onClick={handleClick}>Next</button>
    </div>
  );
};

export default ProfileCreation;
