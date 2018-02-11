import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import About from '../about';
import Contact from '../contact';
import Landing from '../landing';
import Projects from '../projects';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
      </BrowserRouter>
    );
  }
}

export default App;
