import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import ContactButton from './styled/ContactButton';
import validator from 'validator';
import Fade from 'react-reveal/Fade';


const Contact=()=>{
    const [emailError, setEmailError] = useState('')
    const validateEmail=(e)=>{
    var email = e.target.value
    if (validator.isEmail(email)) {
        setEmailError('');
    }else {
        setEmailError('Enter valid Email!');
    }
}
     function sendEmail(e) {
       e.preventDefault();

    emailjs.sendForm('testService', 'template_o7633q9', e.target, 'user_DddkUMZH1JHPkLpcKoIYc')
    .then((result) => {
          console.log(result.text);
     }, (error) => {
          console.log(error.text);
      });
     e.target.reset();
   }

  return (
      <div className="contact-wrapper">
       <Fade>
          <h1 style={{textAlign:'center',color:'white',paddingTop:'3rem',fontSize:'3rem', fontWeight:'500',}}>Contact</h1>
          <hr style={{width:'5rem', margin:'0 auto',border:'1px solid #E52885'}}/>
        <div className="contact-container">
            <form className="contact-form" onSubmit={sendEmail}>
                <div >
                    <i className="fas fa-chevron-right"></i>
                    <label>Your Name:</label>
                    <input type="text" name="name" placeholder="NAME" required/>
                </div>
                <div >
                    <i className="fas fa-chevron-right"></i>
                    <label>Your Email:</label>
                    <input type="email" onChange={(e) => validateEmail(e)} name="email" placeholder="EMAIL" required>
                    </input>
                    <br />
                    <span style={{color:'red'}}>{emailError}</span>
                </div>
                
                <div >
                    <i className="fas fa-chevron-right"></i>
                    <label>Message:</label>
                    <textarea id="subject" name="subject" placeholder="MESSAGE" required></textarea>
                </div>
                <ContactButton onClick={sendEmail} type="submit" value="Send">Submit</ContactButton>
            </form>
          </div>
        </Fade>     
    </div>
  );
    }


export default Contact;

