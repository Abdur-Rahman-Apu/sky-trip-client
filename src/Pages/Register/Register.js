import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import Lottie from "lottie-react";
import RegisterAnimation from '../../assets/register.json'
import Logo from '../../assets/logo.png'

const Register = () => {
    const [visibility, setVisibility] = useState('show')

    const handleVisibility = (event) => {
        event.preventDefault()
        let passwordField = event.target.parentElement.parentElement.parentElement.children[1]

        if (visibility === 'show') {
            passwordField.setAttribute('type', 'text')
            setVisibility('hide')
        } else {
            passwordField.setAttribute('type', 'password')
            setVisibility('show')
        }
        console.log(event.target.parentElement.parentElement.parentElement.children[1].value);
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-10 mb-0 text-deepViolet">Register now!</h1>
            <img className="w-40 mt-8 mx-auto" src={Logo} alt="logo" />
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-[50vw]">
                        <Lottie animationData={RegisterAnimation} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            {/* name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered" />
                            </div>

                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Enter your email" className="input input-bordered" />
                            </div>

                            {/* password  */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" className="input input-bordered" />
                                <div className='absolute cursor-pointer top-11 right-2'>
                                    {
                                        visibility === 'show' ? <FontAwesomeIcon onClick={handleVisibility} icon={faLock} /> :
                                            <FontAwesomeIcon onClick={handleVisibility} icon={faUnlock} />
                                    }
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-deepViolet">Login</button>
                            </div>
                        </form>
                        <div className='p-4'>
                            <p className='text-center'>Are you a new user? <Link to="/register" className='text-deepViolet font-bold'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;