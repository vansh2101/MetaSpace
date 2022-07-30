import React from 'react';
import '../styles/home.css';

//? Components
import Navbar from '../components/Navbar';
import Btn from '../components/Btn';

function Home() {
  return (
    <>
        <Navbar />

        <div className='intro'>
          <img src='./img/home.png' />
          <img id='path' src='./img/line.png' />

          <h1>
          MAKE YOUR METAVERSE EXPERIENCE <span style={{color: '#00FFC2'}}>SAFE</span> FROM THEFT NOW. <br/><span style={{color: '#FF005C'}}>SECURE</span> YOUR MONEY WITH METASPACE.
          </h1>

          <Btn text='Explore' /> <Btn text='Contact Us' />

          <table>
            <tr>
              <th>
                <div className='circle' style={{backgroundColor: '#00D1FF'}} />
                25,289
              </th>
              <th>
                <div className='circle' style={{backgroundColor: '#9E70FF'}} />
                16,200
              </th>
              <th>
                <div className='circle' style={{backgroundColor: '#FF005C'}} />
                410+
              </th>
            </tr>
            <tr>
              <td>Users Secured</td>
              <td>Thefts Prevented</td>
              <td>Metaverses</td>
            </tr>
          </table>
        </div>

        <div className='split'>
          <img src='./img/line2.png' className='path' />
          <img src='./img/conclusion.png' className='end' />

          <div className='left'>
            <center>
              <img src='./img/mockup.png' />
            </center>

              <div className='flexbox'>
                <img src='./img/playstore.png' />
                <img src='./img/appstore.png' />
              </div>
          </div>

          <div className='right'>
            <h1>Why Choose Us For Your Security in Metaverse?</h1>

            <Btn text='Learn More' />

            <br />

            <h1 style={{fontSize: '2.9vw'}}>What Do We Offer?</h1>

            <ul>
              <li>
                <h2>&nbsp;&nbsp;COMFORT</h2>
                <p>Our website helps you have a comfortable metaverse experience, enter the metaverse in comfort!</p>
              </li>

              <li>
                <h2>&nbsp;&nbsp;PRIVACY</h2>
                <p>Our website ensures your privacy comes first when you enter the metaverse. Your privacy is our priority.</p>
              </li>

              <li>
                <h2>&nbsp;&nbsp;SECURTIY</h2>
                <p>Our website helps you make metaverse more safer through our special safety features.</p>
              </li>
            </ul>

          <br />
          <br />
          <br />
          <br />
          <br />

          </div>
        </div>
    </>
  )
}

export default Home