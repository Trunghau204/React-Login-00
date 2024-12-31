import React from 'react'
import "./Navbar.css"

const Navbar = ({ handleShowPage }) => {
    const navLinks = [
        {
            id: '1',
            name: 'Home',
            link: '#/'
        },
        {
            id: '2',
            name: 'Services',
            link: '#/'
        },
        {
            id: '3',
            name: 'Contact',
            link: '#/'
        },
        {
            id: '4',
            name: 'About',
            link: '#/'
        }
    ];

    return (
        <div>
            <header id="nav-bar">
                <div className="nav-bar-items">
                    <a href="">LOGO</a>
                    <ul>
                        {navLinks.map((navLink) => (
                            <li key={navLink.id}>
                                <a href={navLink.link}>{navLink.name}</a>
                            </li>
                        ))}
                        <button className="btn-login" onClick={handleShowPage}>Login</button>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Navbar
