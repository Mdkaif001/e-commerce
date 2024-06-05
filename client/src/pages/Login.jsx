import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData, "===");
  }

  return (
    <section id="login">
      <div className="mx-auto container p-4 flex items-center">
        <div>
          <div>
            <img src={loginIcon} alt="login icon" />
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Email: </label>
              <div>
                <input
                  name="email"
                  onChange={handleOnChange}
                  type="email"
                  placeholder="Enter Email"
                  value={formData?.email}
                />
              </div>
            </div>

            <div className="flex">
              <div>
                <label>Password: </label>
                <input
                  name="password"
                  onChange={handleOnChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={formData?.password}
                />
              </div>

              <div>
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div>
              <Link to={"/forgot-password"}>Forgot Password ?</Link>
            </div>
            <div>
              <button>Login</button>
            </div>
          </form>
          <div>
            Don't have a account ?<Link to={"/sign-up"}>Sign up</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
