import React from 'react';
import PersonalBackground from '../personalBackground';

class About extends React.Component{
  render(){
    return (
      <section id="aboutSection">
        <p id="greeting">Hello There</p>
        <div id="bannerBackgroundImage"></div>
        <p id="aboutMeBlurb">I'm Shannon.</p>
        <PersonalBackground />
      </section>
    );
  }
}

export default About;
