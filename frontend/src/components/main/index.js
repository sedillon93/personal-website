import React from 'react';
import About from '../about';
import Projects from '../projects';
import Contact from '../contact';

class Main extends React.Component{
  render(){
    return (
      <div>
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Main;
