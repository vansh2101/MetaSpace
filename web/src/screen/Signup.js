import React, {useEffect, useRef} from 'react'
import '../styles/register.css';

//? Components
import Navbar from '../components/Navbar';
import Btn from '../components/Btn';

function Signup() {

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

    return (
        <>
            <Navbar/>

            <img src='./img/register.png' className='bgr'/>

            <div className='main'>
                <div className='container'>
                    <h1>Sign Up</h1>

                    <br/>

                    <form action='/dashboard'>
                        <label>Name</label> <br/>
                        <input type='text' name='name' placeholder='E.g.- John Doe' required/>

                        <br/>
                        <br/>

                        <label>Email</label> <br/>
                        <input type='email' name='email' placeholder='E.g.- johndoe@gmail.com' required/>

                        <br/>
                        <br/>

                        <label>Backup Password</label> <br/>
                        <input type='password' name='password' placeholder='Shhhhhhhhhh!!' required/>

                        <br/>
                        <br/>

                        <label>Confirm Password</label> <br/>
                        <input type='password' name='cpassword' placeholder='Shhhhhhhhhh!!' required/>

                        <br/>
                        <br/>

                        <label>Phone Number</label> <br/>
                        <input type='text' name='phone' placeholder='E.g.- +639123456789' required/>

                        <br/>
                        <br/>

                        <label>Iris Scanner</label> <br/>
                        <center>
                        <div className={"camera"} ref={cameraRef}></div>
                        </center>
                        <center>
                            <Btn text='Sign Up'/>
                        </center>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup