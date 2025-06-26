


import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';



const PostsPage: React.FC = () => {
    return(
       <div>
        <header/>
       <main>
        <h2>Posts</h2>
            <PostCard title="Post 1" description="This is the first post." />
            <PostCard title="Post 2" description="This is the second post." />
        </main>
        <Footer/>
       </div>
    );
}

export default PostsPage;