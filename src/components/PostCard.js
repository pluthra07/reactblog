import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';

class PostCard extends Component {
    state = {}
    render() {
        return (
            
            <Card.Group>
                <Card fluid>  
                <Card.Content>
                    <Card.Header>
                    {this.props.post.title}
                    </Card.Header>
                    <Card.Meta>
                    Friends of Elliot
                    </Card.Meta>
                    <Card.Description>
                    {this.props.post.body}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui buttons'>
                    <Link to={`/post/${this.props.post.id}`}>
                        <Button basic color='green'>View More</Button>
                    </Link>
                    </div>
                </Card.Content>
                </Card>
            </Card.Group>
            
        );
    }

}

export default PostCard;