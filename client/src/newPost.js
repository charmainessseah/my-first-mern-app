import React, { useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function NewPost() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.currentTarget.value);
    }

    const handleContentChange = (e) => {
        setContent(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && content) {
            const newPost = {
                title: title,
                content: content
            }
            axios.post('/app/newPost', newPost).then(res => console.log(res.data));
        } else {
            alert('invalid')
        }

        setTitle('');
        setContent('');
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
    }
    return(
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <label for="title">Title</label>
                <textarea className="title-input" type="text" placeholder="title" onChange={handleTitleChange} value={title} id="title"></textarea>
                <br></br>

                <label for="content">What's on your mind?</label>
                <textarea className="content-input" type="text" placeholder="content" onChange={handleContentChange} value={content}></textarea>
                <br></br>

                <input className="submit-button" type="submit" value="post" />
                <br></br>
            </form>

            <div className="newPost-home-button home-links">
                <Link style={linkStyle} to='/'>
                    Back to Home
                </Link>
            </div>
            
        </div>
    )
}

export default NewPost;