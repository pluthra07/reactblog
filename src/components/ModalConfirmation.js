import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class ModalConfirmation extends Component {
    state = {
    }
    render() {
        return (
                    
        <Modal
            open={true}
            onClose={this.handleClose}
            size='small'
            dimmer
        >
            <Modal.Content>
                <h3>Thanks for registering!</h3>
            </Modal.Content>
            <Modal.Actions> 
                <Link to="/posts">
                    <Button color='green' inverted>
                    Go Back Home
                    </Button>
                </Link>
            </Modal.Actions>
            
        </Modal>
        
        );
    }
}

export default ModalConfirmation;