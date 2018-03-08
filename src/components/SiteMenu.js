import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

//https://github.com/Semantic-Org/Semantic-UI-React/issues/142

class SiteMenu extends Component {
    state = { }
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                 <Container>
                 <Menu.Item as={NavLink} exact to="/posts" content="Post"/>
                 <Menu.Item as={NavLink} exact to="/add" content="Add New Post"/>
        </Container>
      </Menu>
            </div>
        );
    }

}

export default SiteMenu;