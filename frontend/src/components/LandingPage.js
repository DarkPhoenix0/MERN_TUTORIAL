import React from 'react'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className='landing'>
            <h1>Welcome to Kira landing page</h1>
            <p>One Safe Place for All Your Notes</p>
            <div className="button_container">
                <a href="#">
                    <button className="sign_btn">SIGN UP</button>
                </a>
                <a href="#">
                    <button className="login_btn">LOGIN</button>
                </a>
            </div>
        </div>
    )
}

export default LandingPage
