import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import summaryApi from "../common";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData),"===form")
    const response = await fetch(summaryApi.singUp.url, {
      method: summaryApi.singUp.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    console.log(result, "===result");
  };

  return (
    <section id="login">
      <div className="mx-auto container p-4 flex items-center">
        <div>
          <div>
            <img src={loginIcon} alt="login icon" />
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Name: </label>
              <div>
                <input
                  name="name"
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData?.name}
                />
              </div>
            </div>
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

            <div className="flex">
              <div>
                <label>Confirm Password: </label>
                <input
                  name="confirmPassword"
                  onChange={handleOnChange}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  value={formData?.confirmPassword}
                />
              </div>
              <div>
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div>
              <button>Sign Up</button>
            </div>
          </form>
          <div>
            Already have account ?<Link to={"/sign-in"}>Sign In</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
