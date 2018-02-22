import React from 'react';
/*
1. add carousel for my background (education, experience, personal interests in tech, section for books I'm reading/have read?)
*/

class PersonalBackground extends React.Component{
  render(){
    return (
      <section id="personalBackgroundSection" className="gridContainer">
        <section className="backgroundInformation" id="gridItem1">
          <p>Here is where all of the information on my Experience will go.</p>
        </section>
        <section className="backgroundInformation" id="gridItem2">
          <p>Here is where all of the information on my Education will go.</p>
        </section>
        <section className="backgroundInformation" id="gridItem3">
          <p>Here is where all of the information on my Interests will go.</p>
        </section>
      </section>
    );
  }
}

export default PersonalBackground;
