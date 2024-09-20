import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reaching out! Your email: ${email}`);
    setEmail('');
  };

  return (
    <div className="Contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
