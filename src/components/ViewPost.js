import React, { Component } from 'react';
import axios from 'axios';
import SiteMenu from './SiteMenu';
import PostCard from './PostCard';
import Loading from './Loading';

class ViewPost extends Component {
    state = { 
        post: {}
    }
    componentDidMount = () => {
        const postId = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response)=> {
                console.log(response)
                this.setState({
                    post: response.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <SiteMenu />
                <h1>Viewing Post {this.state.post.id}</h1>
                
                {
                    !this.state.post.id ? <Loading/> : (
                        <PostCard post={this.state.post} />
                    )

                }
                
            </div>
        );
    }

}

export default ViewPost;