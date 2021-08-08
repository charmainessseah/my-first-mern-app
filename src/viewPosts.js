import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Posts from './posts';

function ViewPosts() {

    const [posts, setPosts] = useState([]);

    const getRantPosts = () => {
        axios.get('/app/api')
        .then((response) => {
            const data = response.data;
            setPosts(data);
        })
        .catch(() => alert('Error retrieving data'))
    }

    useEffect(() => {
        getRantPosts();
    })

    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
    }

    return(
        <div>
            {<Posts posts={posts}/>}
            
            <div className="home-link">
                <Link style={linkStyle} to='/'>
                Back to Home 
                </Link>  
            </div>
            
              
            
        </div>
    )
}

export default ViewPosts;