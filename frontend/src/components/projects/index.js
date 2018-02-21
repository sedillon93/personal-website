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
    let target = event.target.id;
    let statePropertyToChange = `${target}Visible`;
    // toggle whether projectX visibility is true or false;
    this.setState(statePropertyToChange = !this[statePropertyToChange]);  // double check that you can use bracket notation on 'this'
  }

  render(){
    let project1JSX = (
      <div>
        <p>Description for project 1</p>
        <a href="">Github link</a>
      </div>
    );

    let project2JSX = (
      <div>
        <p>Description for project 2</p>
        <a href="">Github link</a>
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
      <section>
        <div>
          <h4>Project 1 title</h4>
          <img src="" />
          <p id="project1">Learn more</p>
          {this.project1Visible ? project1JSX : undefined}
        </div>

        <div>
          <h4>Project 2 title</h4>
          <img src="" />
          <p id="project2">Learn more</p>
          {this.project2Visible ? project2JSX : undefined}
        </div>

        <div>
          <h4>Project 3 title</h4>
          <img src="/frontend/src/vendor/collisionReport.png" />
          <p id="project3">Learn more</p>
          {this.project3Visible ? project3JSX : undefined}
        </div>

      </section>
    );
  }
}

export default Projects;
