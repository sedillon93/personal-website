import React from 'react';

class Contact extends React.Component{
  render(){
    return (
      <section>
        <p>Want to get in touch?</p>
        <div>
          <span>Email: </span><a href="mailto:sedillon93@gmail.com">sedillon93@gmail.com</a>
        </div>
        <div>
          <span>LinkedIn: </span><a href="https://www.linkedin.com/in/shannon-e-dillon/">Shannon E Dillon</a>
        </div>
      </section>
    );
  }
}

export default Contact;
