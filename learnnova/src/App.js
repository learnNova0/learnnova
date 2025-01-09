import React, { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = () => {
  const { signOut, authStatus } = useAuthenticator();

  useEffect(() => {
    console.log('Auth Status:', authStatus);
  }, [authStatus]);

  const handleSignOut = () => {
    console.log('Signing out...');
    signOut();
  };

  return (
    <div>
      <h1>Welcome to LearnNova!</h1>
      <p>This is your main application where users can share knowledge, interact with posts, etc.</p>

      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default App;
