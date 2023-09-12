import React from "react";
import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [values, setvalues] = useState({
    user: {
      value: "",
      error: "",
      isTouched: false,
    },
    email: {
      value: "",
      error: "",
      isTouched: false,
    },
    telephone: {
      value: "",
      error: "",
      isTouched: false,
    },
    organisation: {
      value: "",
      error: "",
      isTouched: false,
    },
    message: {
      value: "",
      error: "",
      isTouched: false,
    },
  });

  const inputs = [
    {
      id: 1,
      fullname: "user",
      type: "text",
      placeholder: "Type full name here",
      label: "Full Name",
    },
    {
      id: 2,
      fullname: "email",
      type: "email",
      placeholder: "Type email here",
      errorMessage: "Invalid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      fullname: "telephone",
      type: "number",
      placeholder: "Phone number",
      errorMessage: "",
      label: "Telephone",
    },
    {
      id: 4,
      fullname: "organisation",
      type: "text",
      placeholder: "Organisation name",
      errorMessage: "",
      label: "Organisation",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(!submit);
  }

  const onChange = (value, name) => {
    let error = "";
    if(name === 'email') {
      if(value === "") error = "Invalid email address"
      else error = ""
    } 
    setvalues({
      ...values,
      [name]: {
        ...values[name],
        value: value,
        isTouched: true,
        error
      },
    });
  };

  console.log(values['email']);

  return (
    <div className="App">
      <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="box">
          <h1>Contact Us</h1>
          <p>
            We love question and feedback - and we're always happy to help!{" "}
            <br />
            Here are some ways to contact us.
          </p>
        </div>
        <div className="main">
          {!submit ? (
            <div className="leftBox">
              <div>
                <h2>Send us a message</h2>
                <p>Send us a message and we'll respond within 24 hours</p>
              </div>

              <div className="leftInput">
                {inputs.map((input) => (
            
                  <FormInput
                    key={input.id}
                    {...input}
                    currState = {values[input.fullname]}
                    value={values[input.fullname]?.value}
                    onChange={(e) => {
                      onChange(e.target.value, input.fullname)
                    }}
                  />

                ))}
              </div>
              <div className="text">
                <textarea
                  placeholder="Type your message here"
                  cols={24}
                ></textarea>
              </div>
              <button>Submit</button>
            </div>
          ) : (
            <div className="popup">
              <span class="material-symbols-outlined">check_circle</span>
              <h2>Thank you</h2>
              <p>
                Your message has been sent. Our support team will <br /> respond
                within 24 hours
              </p>
              <button>Done</button>
            </div>
          )}

          <div className="rightBox">
            <h2>Contact information</h2>
            <hr width="80%" />
            <div>
              <p>
                <span class="material-symbols-outlined">location_on</span> 177
                Huntington Ave Ste 1703
              </p>
            </div>
            <div>
              <p>
                <span class="material-symbols-outlined">mail</span>{" "}
                contact-us@company.com
              </p>
            </div>
            <div>
              <p>
                <span class="material-symbols-outlined">call</span>{" "}
                contact-us@company.com
              </p>
            </div>
            <hr width="80%" />
            <div className="icons">
              <i class="fa fa-twitter"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-facebook"></i>
            </div>

            <div></div>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default App;
