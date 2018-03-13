import React, { Component } from 'react';
import axios from 'axios';
//import { Form, Input, TextArea, Button, Container, Header } from 'semantic-ui-react';
import { TextArea, Button, Container, Header } from 'semantic-ui-react';
import SiteMenu from './SiteMenu';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
//import { form, input, control, button } from 'react-validation';
import serializeForm from 'form-serialize';

class SampleForm extends Component {
    
    state = {
    }
    handleSubmit = (e) => {     
        e.preventDefault();
        let formData = serializeForm(e.target, { hash: true });
        console.log("in handle submit");
        console.log(formData);
    }
    render() {

        return (
            <div>  
                    <SiteMenu/>
	    
	                <Container text style={{ marginTop: '4em' }}>
	                    <Header as='h1'>Sample Form</Header>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada sapien at orci ultrices rutrum. Donec sit amet sodales mauris. Pellentesque lobortis posuere tristique.</p>

                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="foo" defaultValue="bar"/>
                            <input type="text" defaultValue='email@email.com' name='email' />

                            <input type="submit" value="do it!"/>
                        </form>

                    </Container>
            </div>
        );
    }

}

export default SampleForm;