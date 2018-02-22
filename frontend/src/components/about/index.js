import React from 'react';
import PersonalBackground from '../personalBackground';

/*
1. research escaping html characters & whether I need to do that in JSX
*/

class About extends React.Component{
  render(){
    return (
      <section id="aboutSection">
        <p id="greeting">Hello There</p>
        <img src="/frontend/src/vendor/granite_background_image.jpg!d" />
        <p id="aboutMeBlurb">I'm Shannon.</p>
        <PersonalBackground />
      </section>
    );
  }
}

export default About;
