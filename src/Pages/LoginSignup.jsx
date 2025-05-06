// import React from 'react';
// import "../CSS/LoginSignup.css";

// export const LoginSignup = () => {
//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>Create Your Account</h1>
        
//         <div className="loginsignup-fields">
//           <input 
//             type="text" 
//             placeholder="Full Name" 
//             aria-label="Full Name" 
//             required 
//           />
          
//           <input 
//             type="email" 
//             placeholder="Email Address" 
//             aria-label="Email Address" 
//             required 
//           />
          
//           <input 
//             type="password" 
//             placeholder="Create Password" 
//             aria-label="Create Password" 
//             required 
//           />
          
//           <button className="primary-btn">Sign Up</button>
//         </div>

//         <p className="loginsignup-login">
//           Already have an account? <span className="link-text">Login here</span>
//         </p>

//         <div className="loginsignup-agree">
//           <input type="checkbox" id="agree" aria-label="Agree to Terms" />
//           <label htmlFor="agree">
//             By continuing, I agree to the <span className="link-text">Terms of Use</span> and <span className="link-text">Privacy Policy</span>.
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import "../CSS/LoginSignup.css";

export const LoginSignup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!agree) {
      alert("Please agree to the terms and privacy policy.");
      return;
    }
    alert(`Welcome, ${fullName}! Your account has been created.`);
   
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Create Your Account</h1>

        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            aria-label="Full Name" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required 
          />

          <input 
            type="email" 
            placeholder="Email Address" 
            aria-label="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <input 
            type="password" 
            placeholder="Create Password" 
            aria-label="Create Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <div className="loginsignup-agree">
            <input 
              type="checkbox" 
              id="agree" 
              aria-label="Agree to Terms" 
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree">
              By continuing, I agree to the <span className="link-text">Terms of Use</span> and <span className="link-text">Privacy Policy</span>.
            </label>
          </div>

          <button type="submit" className="primary-btn">Sign Up</button>
        </form>

        <p className="loginsignup-login">
          Already have an account? <span className="link-text">Login here</span>
        </p>
      </div>
    </div>
  );
};

