import React, { useState } from 'react';
import './App.css';
import UserTypeSelector from './components/UserTypeSelector';

function App() {
  const [userType, setUserType] = useState('');

  return (
      <div className="App">
        <header className="App-header">
          <h1>Mentorship Platform</h1>
          {userType ? (
              <p>Welcome, {userType}!</p>
          ) : (
              <UserTypeSelector setUserType={setUserType} />
          )}
        </header>
      </div>
  );
}

export default App;

