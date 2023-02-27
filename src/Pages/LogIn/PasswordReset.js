import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PasswordReset = () => {

    const { resetPassword } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleResetPassword = (event) => {

        event.preventDefault()
        const email = event.target.email.value;

        resetPassword(email)
            .then(() => {
                toast.success("Please check your email")
                navigate('/login')
            })
            .catch(error => {
                toast.error("Password reset failed")
            })

    }

    return (

        <div className='flex justify-center my-10'>
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleResetPassword} class="space-y-6" action="#">
                    <h5 class="text-xl font-bold text-deepViolet text-center dark:text-white">Reset password</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>

                    <button type="submit" class="w-full text-white bg-deepViolet hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset password</button>

                </form>
            </div>
        </div>

    );
};

export default PasswordReset;