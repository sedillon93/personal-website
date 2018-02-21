import React from 'react';
import PersonalBackground from '../personalBackground';
import './_about.scss';

/*
1. research escaping html characters & whether I need to do that in JSX
*/

class About extends React.Component{
  render(){
    return (
      <section>
        <p>Hello There</p>
        <img src="/frontend/src/vendor/background-image.jpg" />
        <p>I'm Shannon. Full-stack JavaScript developer by day, avid bookworm by night, and kickboxer by the occassional weekend. Keep exploring if you'd like to learn more about me, my background, and the projects I'm working on.</p>
        <PersonalBackground />
      </section>
    );
  }
}

export default About;
