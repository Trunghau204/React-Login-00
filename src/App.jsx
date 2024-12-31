import React, { useState } from 'react';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Popup from './Components/Popup/Popup';



const App = () => {
  const [showPage, setShowPage] = useState(false);
  const handleShowPage = () => setShowPage(!showPage);
  return (
    <main className='bg-image'>
      <Navbar handleShowPage={handleShowPage} />
      <Popup showPage={showPage} setShowPage={setShowPage} />
    </main>
  )
}

export default App
