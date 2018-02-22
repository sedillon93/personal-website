import React from 'react';

class Contact extends React.Component{
  render(){
    return (
      <section id='contactInfoSection'>
        <h2 className="sectionTitle">Want to get in touch?</h2>
        <div id='emailLink'>
          <button>Email</button>
          <span><a href="mailto:sedillon93@gmail.com">sedillon93@gmail.com</a></span>
        </div>
        <div id='linkedinLink'>
          <button>LinkedIn</button>
          <span><a href="https://www.linkedin.com/in/shannon-e-dillon/">Shannon E Dillon</a></span>
        </div>
      </section>
    );
  }
}

export default Contact;
