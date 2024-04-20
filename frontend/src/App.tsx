import React, { useState } from 'react';
import './App.css';
import UserTypeSelector from './components/UserTypeSelector';

const App: React.FC = () => {
    const [userType, setUserType] = useState<string>('');

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
