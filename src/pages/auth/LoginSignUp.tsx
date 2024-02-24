import { useState } from "react";
import "./LoginSignUp.css";
import { ExtendEvent, LoginState, UserState } from "./types/Login";

type Props = {};

export default function LoginSignUp({}: Props) {
  const [state, setState] = useState<LoginState>("Login");
  const [formData, setFormData] = useState<UserState>({
    username: "",
    password: "",
    email: "",
  });

  const sanitizeInput = (input: string): string => {
    return input.replace(/<[^>]*>?/gm, "");
  };

  const changeHandler = (e: ExtendEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: sanitizeInput(e.target.value),
    });
  };

  const login = async () => {
    console.log("login", formData);

    try {
      const response = await fetch("http://localhost:5100/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to Login");
      }

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData!.errors);
      }
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  const SignUp = async () => {
    console.log("Sign Up", formData);

    try {
      const response = await fetch("http://localhost:5100/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData!.errors);
      }
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state === "Login" ? "Login" : "Sign Up"}</h1>
        <div className="loginsignup-fields">
          {state === "SignUp" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your Name"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
          />
          <button
            onClick={() => {
              state === "Login" ? login() : SignUp();
            }}
          >
            {state}
          </button>
          {state === "SignUp" ? (
            <p className="loginsignup-login">
              Already have an Account?
              <span
                onClick={() => {
                  setState("Login");
                }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Create an account?
              <span
                onClick={() => {
                  setState("SignUp");
                }}
              >
                Click here
              </span>
            </p>
          )}

          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
