import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Form, Input, TextArea, Button, Container, Header } from 'semantic-ui-react';
import SiteMenu from './SiteMenu';
import ModalConfirmation from './ModalConfirmation';
import serializeForm from 'form-serialize';

class AddPost extends Component {
    
    state = {
        redirect: false,
        isOpen: false
    }
    postSuccess = () => {
    } 
    addSinglePost = (e) => {        
        //form data
        //let data = new FormData();
        //data.append('title', e.target.title.value);
        //data.append('body', e.target.description.value);
        //data.append('userId', '1');

        //serialized form data using form-serialize
        let data = serializeForm(e.target, { hash: true });

        
        //this is required to make the state available inside the axios post
        var self = this;

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            data: data
          })
          .then(function (response) {
            
            console.log(response);
            //console.log(response.status);
            response.status = "201" && (
                //let's redirect                
                self.setState({ redirect: false, isOpen: true })
            );
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {

        const { redirect } = this.state;
        const { isOpen } = this.state;

        console.log(isOpen);

        return (
            <div>
            {
                redirect ? <Redirect to='/posts'/>  : (

                    <div>  
                    <SiteMenu/>
	    
	                <Container text style={{ marginTop: '4em' }}>
	                    <Header as='h1'>Add New Post</Header>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada sapien at orci ultrices rutrum. Donec sit amet sodales mauris. Pellentesque lobortis posuere tristique.</p>
	                    <Form onSubmit={this.addSinglePost}>
	                            <Form.Field id='form-input-control-title' name='title' control={Input} label='Post Title' placeholder='Post Title' />
	                            <Form.Field id='form-textarea-control-description' name='description' control={TextArea} label='Post Description' placeholder='Enter Your Post Description' />
	                            <Form.Field id='form-button-control-public' control={Button} content='Submit New Post' />
	                    </Form>
	                </Container>
                    
                    {
                        isOpen && (<ModalConfirmation/>)
                    } 

                    </div>

                )
            }
            </div>
        );
    }

}

export default AddPost;