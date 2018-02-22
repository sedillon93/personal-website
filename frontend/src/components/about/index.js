import React from 'react';
import PersonalBackground from '../personalBackground';
import './_about.scss';

/*
1. research escaping html characters & whether I need to do that in JSX
*/

class About extends React.Component{
  render(){
    return (
      <section id="aboutSection">
        <p id="greeting">Hello There</p>
        <img src="/frontend/src/vendor/background-image.jpg" />
        <p id="aboutMeBlurb">Shannon here. </p>
        <PersonalBackground />
      </section>
    );
  }
}

export default About;
