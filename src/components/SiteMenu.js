import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SiteMenu extends Component {
    state = { }
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as={Link} to='/posts'>Posts</Menu.Item>
                        <Menu.Item as={Link} to='/add'>Add New Post</Menu.Item>
                    </Container>
                </Menu>
            </div>
        );
    }

}

export default SiteMenu;