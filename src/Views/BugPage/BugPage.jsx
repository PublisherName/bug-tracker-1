import React from 'react'

import './BugPage.css'
import Comment from '../Comment/Comment'
import { useParams } from 'react-router-dom';

function BugPage() {

    const {id} = useParams();
    const bugs = JSON.parse(localStorage.getItem('formData'));
    const bug = bugs.find(bug => bug.id == id);

    if (!bug) {
        return <p className='error'>Not a valid ID</p>;
    }

    return (
        <>
            <section className='bug-page'>
                <div className="bug-details">
                    <h2><strong>Title: </strong>{bug.title}</h2>
                    <p><strong>Project: </strong>{bug.project}</p>
                    <p><strong>Description: </strong> {bug.description}</p>
                    <p><strong>Status: </strong> {bug.status}</p>
                    <p><strong>Priority: </strong> {bug.priority}</p>
                </div>

                <Comment id = {id}/>
            </section>
        </>
    )
}

export default BugPage