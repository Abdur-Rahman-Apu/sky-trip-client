import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import LogInAnimation from "../../assets/login.json";
import Logo from "../../assets/logo.png";

const LogIn = () => {
  const [visibility, setVisibility] = useState("show");

  // password hide and show
  const handleVisibility = (event) => {
    event.preventDefault();
    let passwordField =
      event.target.parentElement.parentElement.parentElement.children[1];

    if (visibility === "show") {
      passwordField.setAttribute("type", "text");
      setVisibility("hide");
    } else {
      passwordField.setAttribute("type", "password");
      setVisibility("show");
    }
  };

  //handle login

  const { logIn, setUser, logOut } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "apu@gmail.com",
      password: "123456",
    },
  });

  const location = useLocation();
  const from = location?.state?.from || "/";
  const navigate = useNavigate();

  const handleLogIn = (data) => {
    const { email, password } = data;

    logIn(email, password)
      .then((result) => {
        const user = result.user;

        setUser(user);

        const email = user?.email;

        const userInfo = {
          email: email,
        };

        fetch(`https://skytrip.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.token) {
              localStorage.setItem("flight-token", data?.token);
              toast.success("Log in successful");
              navigate(from);
            }
          })
          .catch((error) => {
            toast.error("Error happened");
            logOut();
          });
      })
      .catch((error) => {
        toast.error("Log in failed.");
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-10 mb-0 text-deepViolet">
        Login now!
      </h1>
      <img className="w-40 mt-8 mx-auto" src={Logo} alt="logo" />
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <Lottie animationData={LogInAnimation} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
              {/* email  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required" })}
                />

                {errors.email?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* password  */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.password.message}
                  </p>
                )}

                <div className="absolute cursor-pointer top-11 right-2">
                  {visibility === "show" ? (
                    <FontAwesomeIcon onClick={handleVisibility} icon={faLock} />
                  ) : (
                    <FontAwesomeIcon
                      onClick={handleVisibility}
                      icon={faUnlock}
                    />
                  )}
                </div>

                <label className="label">
                  <Link
                    to="/resetPassword"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-deepViolet">Login</button>
              </div>
            </form>
            <div className="p-4">
              <p className="text-center">
                Are you a new user?{" "}
                <Link to="/register" className="text-deepViolet font-bold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
