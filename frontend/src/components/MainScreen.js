import React from 'react'
import './MainScreen.css'

function MainScreen({title, children}) {
    return (
        <div className="main_template">
            <div className="page">
                {title && (
                        <>
                            <h1 className="title">{title}</h1>
                            <hr />

                        </>
                    )}
                {children}
            </div>
        </div>
    )
}

export default MainScreen
