import React from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Contact extends React.Component{
  render(){
    return (
      <section id='contactInfoSection'>
        <div id='contentContainer'>
          <h2 className="sectionTitle">Want to get in touch?</h2>
          <div id='emailLink'>
            <span><a href="mailto:sedillon93@gmail.com">Email Me</a></span>
          </div>
          <div id='linkedinLink'>
            <span><a href="https://www.linkedin.com/in/shannon-e-dillon/">Find me on LinkedIn</a></span>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
