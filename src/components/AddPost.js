import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, TextArea, Button, Container, Header } from 'semantic-ui-react';
import SiteMenu from './SiteMenu';

class AddPost extends Component {
    state = { }
    addSinglePost = (e) => {
        e.preventDefault();
        console.log('lets submit the form!');
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {
    
        return (
            <div>
                 <SiteMenu/>
    
                <Container text style={{ marginTop: '4em' }}>
                    <Header as='h1'>Add New Post</Header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada sapien at orci ultrices rutrum. Donec sit amet sodales mauris. Pellentesque lobortis posuere tristique.</p>
                    <Form onSubmit={this.addSinglePost}>
                            <Form.Field id='form-input-control-title' control={Input} label='Post Title' placeholder='Post Title' />
                            <Form.Field id='form-textarea-control-description' control={TextArea} label='Post Description' placeholder='Enter Your Post Description' />
                            <Form.Field id='form-button-control-public' control={Button} content='Submit New Post' />
                    </Form>
                </Container>
            </div>
        );
    }

}

export default AddPost;