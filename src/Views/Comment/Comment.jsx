import React, { useState, useEffect } from 'react'
import './Comment.css'

function Comment({id}) {
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const avatar = '/Avatar.svg';

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const handleAddComment = () => {
        if (!commentText.trim()) {
            setError('Comment cannot be empty.');
            return;
        }
        const newComments = [...comments, commentText];
        setComments(newComments);
        localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
        setCommentText('');
        setError('');
    };

    return (
        <div className="comments-section">
            <h2>Comments</h2>

            {comments.map((comment, index) => (
                <div key={index} className="comment-box">
                    <img className="comment-avatar" src={avatar} alt="User 1 Avatar" />
                    <div className="comment-content">
                        <p className="comment-author">User 1</p>
                        <p>{comment}</p>
                    </div>
                </div>
            ))}

            <label htmlFor="comment" className="comment-author">Add a Comment:</label>
            <textarea id="comment" className="comment-textarea" rows="4" value={commentText} onChange={e => setCommentText(e.target.value)}></textarea>
            {error && <p className="error-comment">{error}</p>}
            <button className="add-comment-btn" onClick={handleAddComment}>Add Comment</button>
        </div>
    )
}

export default Comment