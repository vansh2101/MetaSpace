import React from 'react'
import '../styles/register.css';

//? Components
import Navbar from '../components/Navbar';
import Btn from '../components/Btn';

function Signup() {
  return (
    <>
        <Navbar />

        <img src='./img/register.png' className='bgr' />

        <div className='main'>
            <div className='container'>
            <h1>Sign Up</h1>

            <br />

            <form action='/dashboard'>
              <label>Name</label> <br/>
              <input type='text' name='name' placeholder='E.g.- John Doe' required />

              <br/>
              <br/>

              <label>Email</label> <br/>
              <input type='email' name='email' placeholder='E.g.- johndoe@gmail.com' required />

              <br/>
              <br/>

              <label>Password</label> <br/>
              <input type='password' name='password' placeholder='Shhhhhhhhhh!!' required />

              <br />
              <br />

              <label>Confirm Password</label> <br/>
              <input type='password' name='cpassword' placeholder='Shhhhhhhhhh!!' required />

              <center>
                  <Btn text='Sign Up' />
              </center>
            </form>
            </div>
        </div>
    </>
  )
}

export default Signup