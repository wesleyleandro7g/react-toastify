import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

import logo from './logo.svg';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast.error("Message!", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button className="button" onClick={() => notify()} >Notify</button>
      </header>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
