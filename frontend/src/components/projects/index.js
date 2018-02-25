import React from 'react';
/*
1. on click the 'here' spans should slide out the project description & change clickable text to 'hide'
2. replace image tags with project screenshot
*/
class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      project1Visible: false,
      project2Visible: false,
      project3Visible: false,
    };
    this.handleLearnMoreClick = this.handleLearnMoreClick.bind(this);
  }

  handleLearnMoreClick(event){
    event.preventDefault();
    let target = event.target.id;
    let statePropertyToChange = `${target}Visible`;
    // toggle whether projectX visibility is true or false;
    this.setState({[statePropertyToChange] : !this.state[statePropertyToChange]});
  }

  render(){
    let project1JSX = (
      <div>
        <p>IntelliSoundAI lets you learn more about neural networks by playing. The neural network is built on the synaptic.js library and trains on a simple wav file. It learns the wave shape pattern then produces a new audio file imitating the pattern it identified.</p>
        <p><a href="https://intellisound.herokuapp.com/">Check out the live site</a></p>
        <p><a href="https://github.com/IntelliSound">Check out the GitHub repo</a></p>
      </div>
    );

    let project2JSX = (
      <div>
        <p>ScrambleVox is a CLI and API for anyone who loves tinkering with audio. Users to modify simple wav audio files using one of five provided transformations. After creating an account transformed audio files can be saved to AWS S3.</p>
        <a href="https://github.com/ScrambleVox/server">Check out the GitHub repo</a>
      </div>
    );

    let project3JSX = (
      <div>
        <p>Report My Wreck makes it easier for anyone who has been in a car accident to document and file a claim. Select where the accident happened using the Google Maps interface, drop car pins to replicate what happened, add some notes, and email the entire bundle to your insurance representative.</p>
        <p><a href="https://report-my-wreck.herokuapp.com/">Check out the live site</a></p>
        <p><a href="https://github.com/sedillon93/CollisionReport">Check out the GitHub repo</a></p>
      </div>
    );

    let button1Text, button2Text, button3Text;
    button1Text = this.state.project1Visible ? 'Show Less' : 'Learn More';
    button2Text = this.state.project2Visible ? 'Show Less' : 'Learn More';
    button3Text = this.state.project3Visible ? 'Show Less' : 'Learn More';

    return (
      <section id="projectSection">
        <h2 className="sectionTitle">Projects</h2>
        <div>
          <h4>IntelliSound AI</h4>
          <img src="https://s3-us-west-2.amazonaws.com/personal-website-images/intellisoundai.jpg" />
          <button className="learnMore" id="project1" onClick={this.handleLearnMoreClick}>{button1Text}</button>
          {this.state.project1Visible ? project1JSX : undefined}
        </div>

        <div>
          <h4>ScrambleVox</h4>
          <img src="https://s3-us-west-2.amazonaws.com/personal-website-images/scramblevox.jpg" />
          <button className="learnMore" id="project2" onClick={this.handleLearnMoreClick}>{button2Text}</button>
          {this.state.project2Visible ? project2JSX : undefined}
        </div>

        <div>
          <h4>Report My Wreck</h4>
          <img src="https://s3-us-west-2.amazonaws.com/personal-website-images/collisionReport.png" />
          <button className="learnMore" id="project3" onClick={this.handleLearnMoreClick}>{button3Text}</button>
          {this.state.project3Visible ? project3JSX : undefined}
        </div>

      </section>
    );
  }
}

export default Projects;
