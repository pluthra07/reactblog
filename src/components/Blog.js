import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import Posts from './Posts';
import SiteMenu from './SiteMenu';


class Blog extends Component {
    state = {
        posts: []
        
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=> {
                this.setState({
                    posts: response.data,
                })
            })
    }
    render() {
        return (
            <div>
                <SiteMenu/>

                <Container text style={{ marginTop: '4em' }}>
                    <Header as='h1'>Posts</Header>
                    <Posts posts={this.state.posts} /> 
                </Container>
            </div>

        );
    }

}

export default Blog;