import React from 'react';
import './_projects.scss';
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
        <p>Description for IntelliSound AI</p>
        <a href="https://intellisound.herokuapp.com/">Check out the live site</a>
        <a href="https://github.com/IntelliSound">Check out the GitHub repo</a>
      </div>
    );

    let project2JSX = (
      <div>
        <p>Description for ScrambleVox</p>
        <a href="https://github.com/ScrambleVox/server">Check out the GitHub repo</a>
      </div>
    );

    let project3JSX = (
      <div>
        <p>Description for CollisionReport</p>
        <a href="https://report-my-wreck.herokuapp.com/">Check out the live site</a>
        <a href="https://github.com/sedillon93/CollisionReport">Check out the GitHub repo</a>
      </div>
    );

    return (
      <section id="projectSection">
        <div>
          <h4>IntelliSound AI</h4>
          <img src="/frontend/src/vendor/intellisoundai.jpg" />
          <button className="learnMore" id="project1" onClick={this.handleLearnMoreClick}>Learn more</button>
          {this.state.project1Visible ? project1JSX : undefined}
        </div>

        <div>
          <h4>ScrambleVox (CLI and API)</h4>
          <img src="/frontend/src/vendor/scramblevox.jpg" />
          <button className="learnMore" id="project2" onClick={this.handleLearnMoreClick}>Learn more</button>
          {this.state.project2Visible ? project2JSX : undefined}
        </div>

        <div>
          <h4>CollisionReport</h4>
          <img src="/frontend/src/vendor/collisionReport.png" />
          <button className="learnMore" id="project3" onClick={this.handleLearnMoreClick}>Learn more</button>
          {this.state.project3Visible ? project3JSX : undefined}
        </div>

      </section>
    );
  }
}

export default Projects;
