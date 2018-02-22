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
    sectionToScrollTo.scrollIntoView(true);

  }

  render(){
    return (
      <nav>
        <ul>
          <li><span id="contactInfo" onClick={this.scrollToSection}>Contact</span></li>
          <li><span id="project" onClick={this.scrollToSection}>Projects</span></li>
          <li><span id="about" onClick={this.scrollToSection}>About</span></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
