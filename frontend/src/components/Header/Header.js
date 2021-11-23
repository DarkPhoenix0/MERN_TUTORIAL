import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar">
            <h3>node zipper</h3>
            <input type="text" placeholder="Rechercher"/>
            <ul>
                <li><Link to="/mynotes">My Notes</Link></li>
                <li data-login="kira"><a>Kira</a>
                    <ul className="drop_down">
                        <li><Link to="/myprofil">My Pofil</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Header
