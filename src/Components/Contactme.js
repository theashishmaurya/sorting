import React, { Fragment, useEffect, useState } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
const ContactForm = () => {
  //   const [first_name, setFirst_name] = useState();
  //   const [last_name, setLast_name] = useState();
  //   const [email, setEmail] = useState();
  //   const [feedback, setfeedback] = useState();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
  });
  const { firstName, lastName, email, feedback } = data;
  const ID = process.env.REACT_APP_EMAILJS_ID;
  useEffect(() => {
    init(ID);
  });

  const handleOnChange = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    const serviceID = "basic";
    const templateID = "template_4ybn29f";
    const templateParams = {
      to_name: "ADMIN",
      from_name: `${firstName} ${lastName}`,
      message: feedback,
      user_email: email,
    };
    emailjs.send(serviceID, templateID, templateParams, ID).then(
      (response) => {
        alert("Feedback Sent");
        console.log(response.status, response.text);
      },
      (err) => {
        console.log("Failed...", err);
        alert("Feedback Failed");
      }
    );
    setData({ ...data, firstName: "", lastName: "", email: "", feedback: "" });
  };

  return (
    <Fragment>
      <div className='container'>
        <h4 className='center'>Contact Me</h4>
        <div class='row' style={{ padding: "50px" }}>
          <form
            class='col s12  '
            style={{ margin: "auto" }}
            onSubmit={handleOnSubmit}
          >
            <div class='row'>
              <div class='input-field col s6'>
                <input
                  id='first_name'
                  type='text'
                  class='validate'
                  value={firstName}
                  onChange={handleOnChange("firstName")}
                />
                <label for='first_name'>First Name</label>
              </div>

              <div class='input-field col s6'>
                <input
                  id='last_name'
                  type='text'
                  class='validate'
                  value={lastName}
                  onChange={handleOnChange("lastName")}
                />
                <label for='last_name'>Last Name</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input
                  id='email'
                  type='email'
                  class='validate'
                  value={email}
                  onChange={handleOnChange("email")}
                />
                <label for='email'>Email</label>
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <textarea
                  name='description'
                  id='description'
                  cols='300'
                  rows='300'
                  placeholder='Enter the text here '
                  value={feedback}
                  style={{ height: "15em" }}
                  onChange={handleOnChange("feedback")}
                ></textarea>
                <button
                  class='btn waves-effect black text-white col m2 l2 offset-m10 offset-l10'
                  type='submit'
                  name='action'
                >
                  Submit
                  <i class='material-icons right'>send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactForm;
