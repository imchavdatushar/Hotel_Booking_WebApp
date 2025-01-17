import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   async function registerUser(ev) {
      ev.preventDefault();
      try {
        await axios.post('/register', {
          name,
          email,
          password,
         });
         alert('Registration Succefull, Now you can login')
        
      } catch (error) {
        alert('Registration failed, please try again later')
      }
      
    }

  return (
  
    <div className='mt-32 grow flex item-center justify-around'>
      <div className='mb-64'>

      <h1 className='text-4xl text-center'>Register</h1>
      <form className='max-w-md mx-auto  ' onSubmit={registerUser} >
        <input type='text' placeholder='Your Name'
                 value={name} 
                 onChange={ev => setName(ev.target.value)}/>
        <input type='email' placeholder='your@email.com' 
                 value={email} 
                 onChange={ev => setEmail(ev.target.value)}/>
        <input type='password' placeholder='password'  
                 value={password} 
                 onChange={ev => setPassword(ev.target.value)}/>
        <button className="primary">Register</button>
        <div className='text-center py-2 text-gray-500'>
          Allready have an account? <Link className='underline text-black' to={'/login'}>Login</Link>
          </div>
        </form>  

      </div>
      
    </div>
  );
}

export default Register;
