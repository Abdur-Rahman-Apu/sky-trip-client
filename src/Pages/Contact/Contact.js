import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Logo from '../../assets/logo.png'
import { toast } from 'react-hot-toast';
import Lottie from "lottie-react";
import ContactAnimation from "../../assets/contact.json";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vj9xcfu', 'template_rk1igog', form.current, 'huB7HdbtLQHtlBqmr')
            .then((result) => {
                console.log(result.text);
                toast.success("Message is sent")
            }, (error) => {
                console.log(error.text);
                toast.error("Failed to send message")
            });

        e.target.reset()
    };
    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-4xl text-deepViolet font-bold">Contact Us</h1>
                <img className='h-20 mx-auto my-4' src={Logo} alt="logo" />
            </div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <Lottie animationData={ContactAnimation} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='user_name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='user_email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name='subject' placeholder="Enter your subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='message' className="textarea textarea-bordered h-24" placeholder="message"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-deepViolet">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;