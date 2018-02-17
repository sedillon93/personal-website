import React from 'react';

/*
1. on click the 'here' spans should slide out the project description & change text to 'hide'
2. replace image tags with project screenshot
*/
class Projects extends React.Component{
  render(){
    return (
      <section>
        <div>
          <h4>Project 1 title</h4>
          <img src="" />
          <p>Click <span>here</span> to learn more</p>
          <p>Description for project 1</p>
          <a href="">Github link</a>
        </div>
        <div>
          <h4>Project 2 title</h4>
          <img src="" />
          <p>Click <span>here</span> to learn more</p>
          <p>Description for project 2</p>
          <a href="">Github link</a>
        </div>
        <div>
          <h4>Project 3 title</h4>
          <img src="" />
          <p>Click <span>here</span> to learn more</p>
          <p>Description for project 3</p>
          <a href="">Github link</a>
        </div>
      </section>
    );
  }
}

export default Projects;
