import React from 'react';
import '../styles/Post.css';

export const Post = ({ post }) => {
    return (
        <div className="post">
            <h3 className="postTitle">{post.title}</h3>
            {post.image && (
                <img
                    src={post.image}
                    alt={post.title}
                    className="postImage"
                    loading="lazy"
                />
            )}
            <p className="postBody">{post.body}</p>
        </div>
    );
};