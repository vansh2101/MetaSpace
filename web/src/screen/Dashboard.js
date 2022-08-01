import React, {useState} from 'react';
import {Scene, Entity} from 'aframe-react';
import {Link} from 'react-router-dom';

function Dashboard() {

  const [voiceBtn, setVoiceBtn] = useState({x: -2.15})
  const [avatarBtn, setAvatarBtn] = useState({x: -0.32})
  const [sentiment, setSentiment] = useState({x: 1.52})
  const [eyeBtn, setEyeBtn] = useState({z: -1.46})
  const [limitBtn, setLimitBtn] = useState({z: 0.98})
  const [faBtn, setFaBtn] = useState({z: -0.52})

  const toggle = (setBtn, pos) => {
    setBtn({x: pos})
  }

  const togglez = (setBtn, pos) => {
    setBtn({z: pos})
  }

  const logout = () => {
    window.location = "/";
  }

  return (
    <Scene>
      <a-assets>
        <audio id="click-sound" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>

        <img id="city" src="./img/city.jpg" />
      </a-assets>

      <a-sky id="vr" radius="10" src="#city"></a-sky>

      {/* Logout Button */}
      <>
        <Entity 
              geometry={{primitive: 'plane', height: 0.3, width: 1}}
              material={{color: '#292929'}}
              position={{x: 2.8, y: 3, z: -3}}
              sound={{on: 'click', src: '#click-sound'}}
              events={{
                'click': logout
              }} />

        <Entity 
            text={{value: 'Logout', align: 'center', width: 3}} 
            position={{x: 1.87, y: 2.54, z: -2}}/>
      </>

      <Entity 
        text={{value: 'PRIVACY', align: 'center', height: 10}} 
        position={{x: -0.01, y: 1.77, z: -0.5}}/>


        {/* Voice Change Toggle */}
        <>
          <Entity
            geometry={{primitive: 'plane', height: 2.7, width: 2.5}}
            material={{color: '#292929'}}
            position={{x: -3, y: 1.2, z: -4.75}}
            sound={{on: 'click', src: '#click-sound'}} />

          <Entity 
            text={{value: 'Anonymous Voice'}} 
            position={{x: -0.213, y: 1.67, z: -0.85}}/>

          <Entity 
            text={{value: 'Change your voice when you speak in the metaverse.', align: 'center', width: 0.75}} 
            position={{x: -0.813, y: 1.53, z: -1.3}}/> 

          <Entity 
            geometry={{primitive: 'plane', height: 0.3, width: 1}}
            material={{color: '#F6F0F4'}}
            position={{x: -1.9, y: 1, z: -3}}
            sound={{on: 'click', src: '#click-sound'}}
            events={{
              'click': () => {voiceBtn.x == -2.15 ? toggle(setVoiceBtn, -1.55) : toggle(setVoiceBtn, -2.15)}
            }} />

          <Entity
            geometry={{primitive: 'circle', radius: 0.13}}
            material={{color: '#DD275F'}}
            position={{...voiceBtn, y: 1.015, z: -2.9}}
            sound={{on: 'click', src: '#click-sound'}} />
        </>

        {/* Random Avatar Toggle */}
        <>
          <Entity
            geometry={{primitive: 'plane', height: 2.7, width: 2.5}}
            material={{color: '#292929'}}
            position={{x: 0, y: 1.2, z: -4.75}}
            sound={{on: 'click', src: '#click-sound'}} />

          <Entity 
            text={{value: 'Random Avatar'}} 
            position={{x: 0.34, y: 1.67, z: -0.85}}/>

          <Entity 
            text={{value: 'Change your avatar when you enter the\n metaverse.', align: 'center', width: 0.75}} 
            position={{x: 0, y: 1.53, z: -1.3}}/> 

          <Entity 
            geometry={{primitive: 'plane', height: 0.3, width: 1}}
            material={{color: '#F6F0F4'}}
            position={{x: 0, y: 1, z: -3}}
            sound={{on: 'click', src: '#click-sound'}}
            events={{
              'click': () => {avatarBtn.x == -0.32 ? toggle(setAvatarBtn, 0.32) : toggle(setAvatarBtn, -0.32)}
            }} />

          <Entity
            geometry={{primitive: 'circle', radius: 0.13}}
            material={{color: '#DD275F'}}
            position={{...avatarBtn, y: 1.015, z: -2.9}}
            sound={{on: 'click', src: '#click-sound'}} />
        </>

        {/* Sentiment Analysis Toggle */}
        <>
          <Entity
            geometry={{primitive: 'plane', height: 2.7, width: 2.5}}
            material={{color: '#292929'}}
            position={{x: 3, y: 1.2, z: -4.75}}
            sound={{on: 'click', src: '#click-sound'}} />

          <Entity 
            text={{value: 'Bed Time Mode'}}
            position={{x: 0.875, y: 1.67, z: -0.85}}/>

          <Entity 
            text={{value: 'Control your bedtime schedule.', align: 'center', width: 0.75}}
            position={{x: 0.823, y: 1.53, z: -1.3}}/> 

          <Entity 
            geometry={{primitive: 'plane', height: 0.3, width: 1}}
            material={{color: '#F6F0F4'}}
            position={{x: 1.9, y: 1, z: -3}}
            sound={{on: 'click', src: '#click-sound'}}
            events={{
              'click': () => {sentiment.x == 1.52 ? toggle(setSentiment, 2.15) : toggle(setSentiment, 1.52)}
            }} />

          <Entity
            geometry={{primitive: 'circle', radius: 0.13}}
            material={{color: '#DD275F'}}
            position={{...sentiment, y: 1.015, z: -2.9}}
            sound={{on: 'click', src: '#click-sound'}} />
        </>


        <Entity 
        text={{value: 'DIGITAL WELLBEING', align: 'center', width: 10}} 
        position={{x: 4, y: 2.7, z: 0.3}}
        rotation={{x: 0, y: -90, z: 0}}/>

        {/* Eye Protection Toggle */}
        <>
          <Entity
            geometry={{primitive: 'plane', height: 2.5, width: 2.5}}
            material={{color: '#292929'}}
            position={{x: 4.8, y: 1.2, z: -1.2}}
            rotation={{x: 0, y: -90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}} />

          <Entity 
            text={{value: 'Eye Protection', width: 4}} 
            position={{x: 4, y: 1.83, z: 0.4}}
            rotation={{x: 0, y: -90, z: 0}}/>

          <Entity 
            text={{value: 'Turn on to view vr in warm light.', align: 'center', width: 2.5}} 
            position={{x: 4, y: 1.5, z: -1}}
            rotation={{x: 0, y: -90, z: 0}}/> 

          <Entity 
            geometry={{primitive: 'plane', height: 0.3, width: 1.3}}
            material={{color: '#F6F0F4'}}
            position={{x: 4, y: 0.9, z: -1}}
            rotation={{x: 0, y: -90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}}
            events={{
              'click': () => {eyeBtn.z == -1.46 ? togglez(setEyeBtn, -0.52) : togglez(setEyeBtn, -1.46)}
            }} />

          <Entity
            geometry={{primitive: 'circle', radius: 0.13}}
            material={{color: '#DD275F'}}
            position={{x: 3.9, y: 0.92, ...eyeBtn}}
            rotation={{x: 0, y: -90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}} />
        </>

        {/* Daily Limit Toggle */}
        <>
          <Entity
            geometry={{primitive: 'plane', height: 2.5, width: 2.5}}
            material={{color: '#292929'}}
            position={{x: 4.8, y: 1.2, z: 1.8}}
            rotation={{x: 0, y: -90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}} />

          <Entity 
            text={{value: 'Daily Limit', width: 4.3}} 
            position={{x: 4, y: 1.83, z: 3.15}}
            rotation={{x: 0, y: -90, z: 0}}/>

          <Entity 
            text={{value: 'Set a time limit to be in metaverse.', align: 'center', width: 2.4}} 
            position={{x: 4, y: 1.5, z: 1.5}}
            rotation={{x: 0, y: -90, z: 0}}/> 

          <Entity 
            geometry={{primitive: 'plane', height: 0.3, width: 1.3}}
            material={{color: '#F6F0F4'}}
            position={{x: 4, y: 0.9, z: 1.5}}
            rotation={{x: 0, y: -90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}}
            events={{
              'click': () => {limitBtn.z == 0.98 ? togglez(setLimitBtn, 1.92) : togglez(setLimitBtn, 0.98)}
            }} />

          <Entity
            geometry={{primitive: 'circle', radius: 0.13}}
            material={{color: '#DD275F'}}
            position={{x: 3.9, y: 0.92, ...limitBtn}}
            rotation={{x: 0, y: -90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}} />
        </>


        <Entity 
        text={{value: 'AUTHENTICATION', align: 'center', width: 9}} 
        position={{x: -4, y: 2.7, z: 0.3}}
        rotation={{x: 0, y: 90, z: 0}}/>

        {/* Device List */}
        <>
          <Entity
            geometry={{primitive: 'plane', height: 2.5, width: 2.5}}
            material={{color: '#292929'}}
            position={{x: -4.8, y: 1.2, z: -1.2}}
            rotation={{x: 0, y: 90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}} />

          <Entity 
            text={{value: 'Enable 2FA', width: 4}} 
            position={{x: -4, y: 1.83, z: -2.55}}
            rotation={{x: 0, y: 90, z: 0}}/>

          <Entity 
            text={{value: 'Turn on 2FA to secure your account.', align: 'center', width: 2.5}} 
            position={{x: -4, y: 1.5, z: -1}}
            rotation={{x: 0, y: 90, z: 0}}/> 

          <Entity 
            geometry={{primitive: 'plane', height: 0.3, width: 1.3}}
            material={{color: '#F6F0F4'}}
            position={{x: -4, y: 0.9, z: -1}}
            rotation={{x: 0, y: 90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}}
            events={{
              'click': () => {faBtn.z == -0.52 ? togglez(setFaBtn, -1.46) : togglez(setFaBtn, -0.52)}
            }} />

          <Entity
            geometry={{primitive: 'circle', radius: 0.13}}
            material={{color: '#DD275F'}}
            position={{x: -3.9, y: 0.92, ...faBtn}}
            rotation={{x: 0, y: 90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}} />
        </>

        {/* 2FA Toggle */}
        <>
          <Entity
            geometry={{primitive: 'plane', height: 2.5, width: 2.5}}
            material={{color: '#292929'}}
            position={{x: -4.8, y: 1.2, z: 1.8}}
            rotation={{x: 0, y: 90, z: 0}}
            sound={{on: 'click', src: '#click-sound'}} />

          <Entity 
            text={{value: 'Current Device', width: 4.3}} 
            position={{x: -4, y: 1.83, z: 0}}
            rotation={{x: 0, y: 90, z: 0}}/>

          <Entity 
            text={{value: 'SPEC-1910 \n\n80% charged \n\nBattery Weak', align: 'center', width: 3}} 
            position={{x: -4, y: 1.15, z: 1.5}}
            rotation={{x: 0, y: 90, z: 0}}/> 
        </>

      <a-camera wasd-controls={{enabled: false}}>
        <a-cursor
          id="cursor"
          animation__click="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: click"
          animation__clickreset="property: scale; to: 1 1 1; dur: 50; startEvents: animationcomplete__click"
          animation__fusing="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: fusing"></a-cursor>
      </a-camera>
    </Scene>
  )
}

export default Dashboard