import React, { Component } from 'react';
import axios from 'axios';
import { Container, Header, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
                <SiteMenu/>
                
                <Container text style={{ marginTop: '4em' }}>
                    <Header as='h1'>Viewing Post {this.state.post.id}</Header>
                    
                    <Link to="/posts">
                        <Button content='Back' icon='left arrow' labelPosition='left' />
                    </Link>

                    <Divider clearing />

                    {
                    !this.state.post.id ? <Loading/> : (
                        <PostCard post={this.state.post} hideButton="true" />
                    )

                }
                </Container>
            </div>

            
        );
    }

}

export default ViewPost;