import React from 'react';
/*
1. add carousel for my background (education, experience, personal interests in tech, section for books I'm reading/have read?)
*/

class PersonalBackground extends React.Component{
  render(){
    return (
      <section id="personalBackgroundSection" className="gridContainer">
        <section className="backgroundInformation" id="gridItem1">
          <h4>Experience</h4>
          <p>Most recently I have been working in small teams to develop projects from inception to deployment in one week timeframes. Before my foray into the tech world I spent two years as an assistant teacher in King County, WA elementary schools.</p>
        </section>
        <section className="backgroundInformation" id="gridItem2">
          <h4>Education</h4>
          <p>I graduated from Code Fellows boot camp with a focus on JavaScript technologies in February 2018. Previously I attended Colgate University in central New York, receiving my bachelors degree in environmental geology with magne cum laude distinction.</p>
        </section>
        <section className="backgroundInformation" id="gridItem3">
          <h4>Interests</h4>
          <p>I've always been a geek, nerd, whatever label you want to give it. I am passionate about education and improving representation of women and minorities in tech and STEM in general. Some of the groups I follow or am a member of include Girl Geek Dinners, She's Coding, and Women Who Code.</p>
        </section>
      </section>
    );
  }
}

export default PersonalBackground;
