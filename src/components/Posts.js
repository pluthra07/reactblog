import React, { Component } from 'react';
import PostCard from './PostCard';

class Posts extends Component {
    state = {}
    render() {
        return (
            <div>
            {
                this.props.posts.map( (post, i)=> {
                    return <PostCard key={i} post={post} />
                })
            }
            </div>
        );
    }

}

export default Posts;