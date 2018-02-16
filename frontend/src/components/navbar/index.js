import React from 'react';
import {Link} from 'react-router-dom';
import './_navbar.scss';

class Navbar extends React.Component{
  render(){
    return (
      <ul>
        <li id='homeLinkIcon'><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    );
  }
}

export default Navbar;
