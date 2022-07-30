import React from 'react'
import '../styles/login.css';

//? Components
import Navbar from '../components/Navbar';
import Btn from '../components/Btn';

function Login() {
  return (
    <>
        <Navbar />

        <img src='./img/login.png' className='bg' />

        <div className='container'>
          <h1>Log In</h1>
          <span>Log in with your data that you entered during registration</span>

          <br />
          <br />

          <form action='/dashboard'>
            <label>Email</label> <br/>
            <input type='email' name='email' placeholder='E.g.- johndoe@gmail.com' required />

            <br/>
            <br/>

            <label>Password</label> <br/>
            <input type='password' name='password' placeholder='Shhhhhhhhhh!!' required /> <br/>
            <a href='#'>Forgot Password?</a>

            <br />
            <br />

            <center>
              <Btn text='Log In' />
            </center>
          </form>
        </div>
    </>
  )
}

export default Login