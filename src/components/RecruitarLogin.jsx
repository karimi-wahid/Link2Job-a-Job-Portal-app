import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import AppContext from "../context/AppContext";

const RecruitarLogin = () => {
  const [state, setState] = useState("Login");
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [image, setImage] = useState("");
  const [isNextDataSubmited, setIsNextDataSubmited] = useState(false);
  const {setShowRecruiterLogin} = useContext(AppContext)

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUser({
        ...user, [name]:value
    })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Sign up" && !isNextDataSubmited) {
      setIsNextDataSubmited(true);
    }
  };

  useEffect(()=> {
    document.body.style.overflow = 'hidden'

    return ()=> {
        document.body.style.overflow = 'unset'
    }
  },[])

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 justify-center items-center flex">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state === "Sign up" && isNextDataSubmited ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  className="cursor-pointer"
                  hidden
                  id="image"
                />
              </label>
              <p>
                Upload Company <br /> logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  name="name"
                  onChange={handleInputChange}
                  value={user.name}
                  className="outline-none text-sm"
                />
              </div>
            )}
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="" />
              <input
                type="email"
                placeholder="Email Id"
                required
                name="email"
                onChange={handleInputChange}
                value={user.email}
                className="outline-none text-sm"
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={handleInputChange}
                value={user.password}
                className="outline-none text-sm"
              />
            </div>
          </>
        )}

        {state === "Login" && (
          <p className="text-sm text-blue-600 mt-4 cursor-pointer">
            forgot password
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-4">
          {state === "Login"
            ? "Login"
            : isNextDataSubmited
            ? "Next"
            : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign up")}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}>
              Login
            </span>
          </p>
        )}

        <img src={assets.cross_icon} className=" absolute top-5 right-5 cursor-pointer" onClick={()=> setShowRecruiterLogin(false)} alt="" />
      </form>
    </div>
  );
};

export default RecruitarLogin;
