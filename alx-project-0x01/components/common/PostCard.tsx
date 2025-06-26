

import React from 'react';

interface PostCardProps {
    title: string;
    description: string,
}


const PostCard: React.FC<PostCardProps>=({title, description})=>{
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}


export default PostCard;