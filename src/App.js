import './App.css';
import React, { useState, createContext } from 'react';
import Login from './components/Login'
import Wallet from './components/wallet'



const AppState = createContext();

function App() {

  const [login, setLogin] = useState('');
  const [addr, setAddr] = useState('');
  const [pkey, setPkey] = useState('');
  const [olduser, setOlduser] = useState(true);
  
  return (
    <AppState.Provider value={{ login, setLogin, addr, setAddr, pkey, setPkey, olduser, setOlduser}}>

    <div className="App-header">
      { login ?
      <div className="App-header">
        {/* Main Application */}
        
        <Wallet />
      </div>
      :
      <Login />
      }
    </div>
    </AppState.Provider>
  );
}

export default App;
export {AppState}
