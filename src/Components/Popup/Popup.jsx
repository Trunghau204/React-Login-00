import React, { useState } from 'react';
import './Popup.css';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
const Popup = ({ showPage, setShowPage }) => {
    const [changePage, setChangePage] = useState('login');
    return (
        showPage && (
            changePage === 'login'
                ? <Login showPage={showPage} setShowPage={setShowPage} setChangePage={setChangePage} />
                : <Register setShowPage={setShowPage} setChangePage={setChangePage} />
        )
    );

}

export default Popup
