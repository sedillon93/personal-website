import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import About from '../about';
import Contact from '../contact';
import Landing from '../landing';
import Projects from '../projects';
import Navbar from '../navbar';

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// <Route exact path="/about" component={About}/>
// <Route exact path="/projects" component={Projects}/>
// <Route exact path="/contact" component={Contact}/>
export default App;
