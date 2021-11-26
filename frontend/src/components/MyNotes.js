import React from 'react'
import {Link} from 'react-router-dom'
import MainScreen from './MainScreen'
import './MyNotes.css'
import notes from '../data/note'
function MyNotes() {
    return (

        <MainScreen title="Welcome back Kira...">
            <div className="my_note_children_container">
                <Link to="createnote">
                    <button className="creat_new_note">Create New Note</button>
                </Link>
                {
                    notes.map(note =>{
                        return(
                            <div className="note_card" key={note._id}>
                                <div className="note_header">
                                    <span>{note.title}</span>
                                    <div>
                                        <button className="edit">edit</button>
                                        <button className="delete">delete</button>
                                    </div>
                                </div>
                                <div className="note_body">
                                    {note.content}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </MainScreen>
    )
}

export default MyNotes
