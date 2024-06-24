// ParentComponent.jsx
import React, { useState } from 'react';
import ProfileCreation from './ProfileCreation';
import EmailVerification from './EmailVerification';

function ParentComponent() {
  const [avatar, setAvatar] = useState(null);

  return (
    <div>
      <ProfileCreation avatar={avatar} setAvatar={setAvatar} />
      <EmailVerification avatar={avatar} />
    </div>
  );
}
export default ParentComponent;