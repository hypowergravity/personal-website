// src/pages/Learning.js
import React, { useState } from 'react';
import LearningList from '../components/LearningList';
import LearningPost from '../components/LearningPost';

function Learning() {
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostSelect = (post) => {
        setSelectedPost(post);
    };

    const handleBackToList = () => {
        setSelectedPost(null);
    };

    return (
        <div className="learning-container">
            {selectedPost ? (
                <LearningPost post={selectedPost} onBack={handleBackToList} />
            ) : (
                <LearningList onPostSelect={handlePostSelect} />
            )}
        </div>
    );
}

export default Learning;