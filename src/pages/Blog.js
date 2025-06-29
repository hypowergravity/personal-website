// src/pages/Blog.js
import React, { useState } from 'react';
import BlogList from '../components/BlogList';
import BlogPost from '../components/BlogPost';

function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostSelect = (post) => {
        setSelectedPost(post);
    };

    const handleBackToList = () => {
        setSelectedPost(null);
    };

    return (
        <div className="blog-container">
            {selectedPost ? (
                <BlogPost post={selectedPost} onBack={handleBackToList} />
            ) : (
                <BlogList onPostSelect={handlePostSelect} />
            )}
        </div>
    );
}

export default Blog;