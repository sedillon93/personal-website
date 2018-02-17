import React from 'react';
import PersonalBackground from '../personalBackground';
import './_about.scss';

class About extends React.Component{
  render(){
    return (
      <div>
        <p>Hello There</p>
        <img src="" />
        <p>`I'm Shannon. Full-stack JavaScript developer by day, avid bookworm by night, and kickboxer by the occassional weekend. Keep exploring if you'd like to learn more about me, my background, and the projects I'm working on.`</p>
        <PersonalBackground />
      </div>
    );
  }
}

export default About;
