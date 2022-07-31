import React, {useEffect, useRef, useState} from 'react'
import '../styles/login.css';

//? Components
import Navbar from '../components/Navbar';
import Btn from '../components/Btn';


function Login() {
    const cameraRef = useRef(null);

    const camera = function () {
        let width = 0;
        let height = 0;

        const createObjects = function () {


            const video = document.createElement('video');
            video.id = 'video';
            video.width = width;
            video.width = height;
            video.autoplay = true;
            cameraRef.current?.appendChild(video);
            // setVideo(video);

            const canvas = document.createElement('canvas');
            canvas.id = 'canvas';
            canvas.width = width;
            canvas.width = height;
            cameraRef.current?.appendChild(canvas);
            // setCanvas(canvas);
        }
        return {
            video: null,
            context: null,
            canvas: null,

            startCamera: function (w = 680, h = 480) {
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    width = w;
                    height = h;

                    createObjects();

                    this.video = document.getElementById('video');
                    this.canvas = document.getElementById('canvas');
                    this.context = this.canvas.getContext('2d');


                    (function (video) {
                        navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
                            video.srcObject = stream;
                            video.play();
                        });
                    })(this.video)

                }
            },


            takeSnapshot: function () {
                this.context.drawImage(this.video, 0, 0, width, height);
            }

        }
    }();
    useEffect(() => {
        camera.startCamera(320, 240);
    }, []);

    return (<>
            <Navbar/>

            <img src='./img/login.png' className='bg'/>

            <div className='container'>
                <h1>Log In</h1>
                <span>Log in with your data that you entered during registration</span>

                <br/>
                <br/>

                <form>
                    <label>Email</label> <br/>
                    <input type='email' name='email' placeholder='E.g.- johndoe@gmail.com' required/>

                    <br/>
                    <br/>

                    <label>Iris Scanner</label> <br/>
                    {/*<input type='password' name='password' placeholder='Shhhhhhhhhh!!' required /> <br/>*/}
                    <center>
                    <div className={"camera"} ref={cameraRef}></div>
                    </center>
                    <a href='#'>Can't login?</a>

                    <br/>
                    <br/>

                    <center>
                        <Btn text='Log In'/>
                    </center>
                </form>
            </div>
        </>)
}

export default Login