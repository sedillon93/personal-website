import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event){
    event.preventDefault();
    let target = event.target.id;
    let sectionToScrollTo = document.getElementById(`${target}Section`);
    // console.log(sectionToScrollTo);
    sectionToScrollTo.scrollIntoView(true);

  }

  render(){
    return (
      <nav>
        <ul>
          <li id='homeLinkIcon'><button onClick={this.scrollToSection} id="home">Home</button></li>
          <li><button id="contactInfo" onClick={this.scrollToSection}>Contact</button></li>
          <li><button id="project" onClick={this.scrollToSection}>Projects</button></li>
          <li><button id="about" onClick={this.scrollToSection}>About</button></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

// <li id='homeLinkIcon'><Link to='/'>Home</Link></li>
// <li><Link to='/contact'>Contact</Link></li>
// <li><Link to='/projects'>Projects</Link></li>
// <li><Link to='/about'>About</Link></li>
