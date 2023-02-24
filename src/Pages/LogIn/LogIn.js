import React from 'react';
import Lottie from "lottie-react";
import LogInAnimation from "../../assets/login.json";
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock } from '@fortawesome/free-solid-svg-icons'

const LogIn = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-10 mb-0 text-deepViolet">Login now!</h1>
            <img className="w-40 mt-8 mx-auto" src={Logo} alt="logo" />
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={LogInAnimation} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <div className='absolute  top-11 right-2'>
                                    <FontAwesomeIcon icon={faLock} />
                                </div>

                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-deepViolet">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;