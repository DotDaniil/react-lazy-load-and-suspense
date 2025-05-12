import React from 'react';

export const Post = ({ post }) => {
    return (
        <div className="post" style={{ margin: '20px', padding: '15px', border: '1px solid #ccc' }}>
            <h3>{post.title}</h3>
            {post.image && <img src={post.image} alt={post.title} style={{ maxWidth: '100%' }} />}
            <p>{post.body}</p>
        </div>
    );
};