import React from 'react';

function Posts({posts}) {

    const getPosts = () => {
        let copy = [...posts];
        let reverseCopy = copy.reverse();
        return reverseCopy.map((post, index) => 
            <div className="post" key={index}>
                <p className="post-title">{post.title}</p>
                <hr></hr>
                <p className="post-content">{post.content}</p>
            </div>);
    }

    return(
        <div className="post-container">
            {getPosts()}
        </div>
    )
}

export default Posts;