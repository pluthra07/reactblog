import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog';
import AddPost from './components/AddPost';
import ViewPost from './components/ViewPost';

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Blog}/>
              <Route path="/home" component={Blog}/>
              <Route path="/posts" component={Blog}/>
              <Route path="/add" component={AddPost}/>
              <Route path="/post/:id" component={ViewPost}/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
