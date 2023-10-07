import React, { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo, email, password);
    // Create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-3xl font-semibold font-poppins my-10 text-center ">
          Login your account
        </h1>
        <form
          onSubmit={handleRegister}
          className="w-full md:w-3/4 lg:w-1/2 mx-auto p-4 md:p-10  border-t-2 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="Text"
              name="name"
              placeholder="Your name"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="password"
              name="photo"
              placeholder="Password"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <input type="checkbox" name="cheakbox" id="" placeholder="accept" />
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white bg-slate-950">
              Register
            </button>
          </div>
        </form>
        <p className="font-semibold text-sm text-center">
          Already have an account ?{" "}
          <span className=" text-blue-500">
            {" "}
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
