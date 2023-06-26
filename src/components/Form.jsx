import React, { useState } from 'react';
import './styleForm.css';

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [showCheckName, setShowCheckName] = useState(false);
  const [showCheckEmail, setShowCheckEmail] = useState(false);
  const [showCheckPhone, setShowCheckPhone] = useState(false);
  const [showCheckMesage, setShowCheckMesage] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { name, email, phone, message } = data;

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setData({ ...data, [fieldName]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
        setShowCheckName(true)
    }else if(email ===""){
        setShowCheckEmail(true)
    }else if(phone ===""){
        setShowCheckPhone(true)
    }else if(message ===""){
        setShowCheckMesage(true)
    }
    setSubmitted(true); 
  }

  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
      <div className="contact">
        <form className='form' onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
             <br />
          {submitted && name === "" && <span>Not Blank!</span>}
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
                  <br />
          {submitted && email === "" && <span>Not Blank!</span>}
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </label>
          <br />
          {submitted && phone === "" && <span>Not Blank!</span>}
          <label>
            Message:
            <input
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
            />
          </label>
          <br />
          {submitted && message === "" && <span>Not Blank!</span>} 
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        <h2>Information</h2>
        {submitted && (
          <div>
            <label>
              Name:
              <span className='nameInfor'>{name}</span>
            </label>
            <label>
              Email:
              <span className='emailInfor'>{email}</span>
            </label>
            <label>
              Phone:
              <span className='phoneInfor'>{phone}</span>
            </label>
            <label>
              Message:
              <span className='messageInfor'>{message}</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
