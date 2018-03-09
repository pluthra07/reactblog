import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

class Loading extends Component {
    state = { }
    render() {
        return (
            <Dimmer active><Loader /></Dimmer>
        );
    }

}

export default Loading;