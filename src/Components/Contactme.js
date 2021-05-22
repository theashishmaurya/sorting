import React, { Fragment, useState } from "react";

const ContactForm = () => {
  //   const [first_name, setFirst_name] = useState();
  //   const [last_name, setLast_name] = useState();
  //   const [email, setEmail] = useState();
  //   const [feedback, setfeedback] = useState();
  const [data, setData] = useState({
    fistName: "",
    lastName: "",
    email: "",
    feedback: "",
  });
  const [firstName, lastName, email, feedback] = data;

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange = (name) => (e) => {};

  return (
    <Fragment>
      <div className='container'>
        <h4 className='center'>Contact Me</h4>
        <div class='row' style={{ padding: "50px" }}>
          <form class='col s12  ' style={{ margin: "auto" }}>
            <div class='row'>
              <div class='input-field col s6'>
                <input
                  id='first_name'
                  type='text'
                  class='validate'
                  value='firstName'
                  onChange={handleOnChange(value)}
                />
                <label for='first_name'>First Name</label>
              </div>

              <div class='input-field col s6'>
                <input
                  id='last_name'
                  type='text'
                  class='validate'
                  value='lastName'
                  onChange={handleOnChange(value)}
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
                  value='email'
                  onChange={handleOnChange(value)}
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
                  style={{ height: "15em" }}
                  value='feedback'
                  onChange={handleOnChange(value)}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactForm;
