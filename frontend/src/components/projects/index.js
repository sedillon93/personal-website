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
          <img src="https://s3.us-west-2.amazonaws.com/personal-website-images/intellisoundai.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiKAAmKEKIguuORxuH%2BOCbhwHWdcXOGIiJ9GoS8fyNJAT2GVXcMiuwesdvIeWUEX6F2Y5Gdy5FRnRR929VOvqMOz2ECefHFapIAR%2BHF24xxKXMbSl5GozQNmirZ1%2BzYk%2BfHPJ%2Bbr2JlpG9DX%2BW0Wn0VO%2B54uKZFmjZ1YH8iRxpVVrjMDY8JFTQp%2B%2BA380hDTP6jKdzWqlQyK5eziJi0lUzCE%2BqOAsaXg%2FzdYpgnON%2B%2FhUwzTVPV8pmD1JD0FImazcVN%2FGcAEhyudXi0fg1pumNYyDBPezUQ4wdQE01sHCbJrGGyV%2F4ty6u7tgSwnXPoDIX69h0KrSuax19nKtPO54TdH40Mq5AMImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4MDQ3NDgxNTE4NzIiDPsHlisYizXE5IjxzCq4Az5skig2xO30RLhj13NrD2MOUewYvB4596ELmlxLm7MHqFTBP4qPR5r0TY%2F7gqSVqKcduP8N%2BTWVpQJP3qTiOEtq9IK6zI6%2FWYrr9uJB0TMzdvUgGjDKHScTjwl4fxJKOzdIijKLmAJ2F8ne6cO4er8OrVscutWOY6iVaOqr%2BBMPrzUFd9aNX6wY7sb7rV2aYijGWYMi2QDqZKMGIvbv9xw%2Bb1qXd%2BtlO90U%2BrkxYllOVRPiXdo4Lb5A%2FGMIbtUeu9UEG0PSCS3OLpmloyser19loWgTEt9LbpkF%2BEDPPLVCUIFdOR3dMdNhgypT9ucEfahWT3yMWI7VrPRq6N6Ql6MiYwmaUwyVXHyZkx9%2F2DBtDtGUFAZ0pLRO9%2BcXT9Dh4agMqaKCQ54eNBHpinogdl2knZ%2Fe9csi12p0bGO4YFUvLZn3Ik91ZS091ys2zc3zTn5v1TVwcQx%2F9y2oLufzFESAs3nTmB4rU2iqs7I9istwhimTJE%2FzgT6i2RG3%2FL0HJpylyAM9t%2F1lop%2FGI6adge8oXro9f7LCTzoBBQXLADT1lBNrbfPL9FoWJJRZxwMX4JUzaz993g4VMJL1zNQF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180225T225204Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAJ3A3BRGRLH3AJVNA%2F20180225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=3e9b40fa4f54e442832fc8039979266ddca48e341ad8ce90c0a0d9706e7031a6" />
          <button className="learnMore" id="project1" onClick={this.handleLearnMoreClick}>{button1Text}</button>
          {this.state.project1Visible ? project1JSX : undefined}
        </div>

        <div>
          <h4>ScrambleVox</h4>
          <img src="https://s3.us-west-2.amazonaws.com/personal-website-images/scramblevox.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiKAAmKEKIguuORxuH%2BOCbhwHWdcXOGIiJ9GoS8fyNJAT2GVXcMiuwesdvIeWUEX6F2Y5Gdy5FRnRR929VOvqMOz2ECefHFapIAR%2BHF24xxKXMbSl5GozQNmirZ1%2BzYk%2BfHPJ%2Bbr2JlpG9DX%2BW0Wn0VO%2B54uKZFmjZ1YH8iRxpVVrjMDY8JFTQp%2B%2BA380hDTP6jKdzWqlQyK5eziJi0lUzCE%2BqOAsaXg%2FzdYpgnON%2B%2FhUwzTVPV8pmD1JD0FImazcVN%2FGcAEhyudXi0fg1pumNYyDBPezUQ4wdQE01sHCbJrGGyV%2F4ty6u7tgSwnXPoDIX69h0KrSuax19nKtPO54TdH40Mq5AMImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4MDQ3NDgxNTE4NzIiDPsHlisYizXE5IjxzCq4Az5skig2xO30RLhj13NrD2MOUewYvB4596ELmlxLm7MHqFTBP4qPR5r0TY%2F7gqSVqKcduP8N%2BTWVpQJP3qTiOEtq9IK6zI6%2FWYrr9uJB0TMzdvUgGjDKHScTjwl4fxJKOzdIijKLmAJ2F8ne6cO4er8OrVscutWOY6iVaOqr%2BBMPrzUFd9aNX6wY7sb7rV2aYijGWYMi2QDqZKMGIvbv9xw%2Bb1qXd%2BtlO90U%2BrkxYllOVRPiXdo4Lb5A%2FGMIbtUeu9UEG0PSCS3OLpmloyser19loWgTEt9LbpkF%2BEDPPLVCUIFdOR3dMdNhgypT9ucEfahWT3yMWI7VrPRq6N6Ql6MiYwmaUwyVXHyZkx9%2F2DBtDtGUFAZ0pLRO9%2BcXT9Dh4agMqaKCQ54eNBHpinogdl2knZ%2Fe9csi12p0bGO4YFUvLZn3Ik91ZS091ys2zc3zTn5v1TVwcQx%2F9y2oLufzFESAs3nTmB4rU2iqs7I9istwhimTJE%2FzgT6i2RG3%2FL0HJpylyAM9t%2F1lop%2FGI6adge8oXro9f7LCTzoBBQXLADT1lBNrbfPL9FoWJJRZxwMX4JUzaz993g4VMJL1zNQF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180225T225230Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAJ3A3BRGRLH3AJVNA%2F20180225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=a6f846964db1d36f241ac17cbf4e0fdc51243dc0be41ad3d02143c6b2e2c0491" />
          <button className="learnMore" id="project2" onClick={this.handleLearnMoreClick}>{button2Text}</button>
          {this.state.project2Visible ? project2JSX : undefined}
        </div>

        <div>
          <h4>Report My Wreck</h4>
          <img src="https://s3.us-west-2.amazonaws.com/personal-website-images/collisionReport.png?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiKAAmKEKIguuORxuH%2BOCbhwHWdcXOGIiJ9GoS8fyNJAT2GVXcMiuwesdvIeWUEX6F2Y5Gdy5FRnRR929VOvqMOz2ECefHFapIAR%2BHF24xxKXMbSl5GozQNmirZ1%2BzYk%2BfHPJ%2Bbr2JlpG9DX%2BW0Wn0VO%2B54uKZFmjZ1YH8iRxpVVrjMDY8JFTQp%2B%2BA380hDTP6jKdzWqlQyK5eziJi0lUzCE%2BqOAsaXg%2FzdYpgnON%2B%2FhUwzTVPV8pmD1JD0FImazcVN%2FGcAEhyudXi0fg1pumNYyDBPezUQ4wdQE01sHCbJrGGyV%2F4ty6u7tgSwnXPoDIX69h0KrSuax19nKtPO54TdH40Mq5AMImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4MDQ3NDgxNTE4NzIiDPsHlisYizXE5IjxzCq4Az5skig2xO30RLhj13NrD2MOUewYvB4596ELmlxLm7MHqFTBP4qPR5r0TY%2F7gqSVqKcduP8N%2BTWVpQJP3qTiOEtq9IK6zI6%2FWYrr9uJB0TMzdvUgGjDKHScTjwl4fxJKOzdIijKLmAJ2F8ne6cO4er8OrVscutWOY6iVaOqr%2BBMPrzUFd9aNX6wY7sb7rV2aYijGWYMi2QDqZKMGIvbv9xw%2Bb1qXd%2BtlO90U%2BrkxYllOVRPiXdo4Lb5A%2FGMIbtUeu9UEG0PSCS3OLpmloyser19loWgTEt9LbpkF%2BEDPPLVCUIFdOR3dMdNhgypT9ucEfahWT3yMWI7VrPRq6N6Ql6MiYwmaUwyVXHyZkx9%2F2DBtDtGUFAZ0pLRO9%2BcXT9Dh4agMqaKCQ54eNBHpinogdl2knZ%2Fe9csi12p0bGO4YFUvLZn3Ik91ZS091ys2zc3zTn5v1TVwcQx%2F9y2oLufzFESAs3nTmB4rU2iqs7I9istwhimTJE%2FzgT6i2RG3%2FL0HJpylyAM9t%2F1lop%2FGI6adge8oXro9f7LCTzoBBQXLADT1lBNrbfPL9FoWJJRZxwMX4JUzaz993g4VMJL1zNQF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180225T225833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAJ3A3BRGRLH3AJVNA%2F20180225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=fc9382e011d123b29d2345b491e570a9b69345cdfcdb01aa65d60a2580d71e43" />
          <button className="learnMore" id="project3" onClick={this.handleLearnMoreClick}>{button3Text}</button>
          {this.state.project3Visible ? project3JSX : undefined}
        </div>

      </section>
    );
  }
}

export default Projects;
