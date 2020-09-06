import React from 'react';
import './App.css';
import LoginButton from './components/AuthButton/LoginButton';
import LogoutButton from './components/AuthButton/LogoutButton';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton /><Profile />
    </div>
  );
}

export default App;
