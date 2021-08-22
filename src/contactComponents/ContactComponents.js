import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () =>{
    return(
        <p>Your message has been successfully sent. I will contact you soon.</p>
    );
}

function ContactComponents(props){
    const [result,showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zoatl6i', 'template_wjgxr5z', e.target, 'user_I3k2unmiIIz89G19350KO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      }

    return(
        <form action="" onSubmit={sendEmail}>
        <div class="formWord col-md-6 col-lg-6">
          <h2>Say Hello!</h2>
          <span>Full Name</span>
          <br />
          <input class="input100" type="text" name="fullname" required />
          <br />
          <span>Phone Number</span>
          <br />
          <input class="input100" type="text" name="phone" required />
          <br />
          <span>Enter Email</span>
          <br />
          <input class="input100" type="text" name="email" required />
          <br />
        </div>
        <div class="formWord">
          <span>Message</span>
          <br />
          <textarea name="message" required></textarea>
          <br />
          <button class="col-md-6 col-lg-6">SUBMIT</button>
          <br />
          <br />
          <div class="row">{result ? <Result /> : null}</div>
        </div>
      </form>
    );
}

export default ContactComponents;