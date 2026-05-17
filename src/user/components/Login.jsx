import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./css/Login.css";

function Login({ close, openRegister, openForgot }) {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const API = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  useEffect(() => {

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };

  }, []);

  const handleLogin = (e) => {

    e.preventDefault();

    fetch(API + "/auth/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),

    })

      .then((res) => {

        if (!res.ok) {
          throw new Error("Invalid credentials");
        }

        return res.json();

      })

      .then((data) => {

        setError("");

        setSuccess("Login successful!");

        // 🔥 Store token
        localStorage.setItem("token", data.token);

        // 🔥 Store email
        localStorage.setItem("email", email);

        setTimeout(() => {

          // 🔥 Admin Login
          if (email === "admin@gmail.com") {

            navigate("/admin");

          } else {

            navigate("/");

          }

          close();

        }, 1000);

      })

      .catch(() => {

        setError("Invalid email or password");

        setSuccess("");

      });

  };

  return (

    <div className="login-container">

      <form
        className="login-card"
        onSubmit={handleLogin}
      >

        <span
          className="close-btn"
          onClick={close}
        >
          &times;
        </span>

        <h2>Login</h2>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {success && (
          <p className="success">
            {success}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        {/* 🔥 Forgot Password */}
        <p
          style={{
            color: "blue",
            cursor: "pointer",
          }}
          onClick={openForgot}
        >
          Forgot Password?
        </p>

        <button type="submit">
          Login
        </button>

        <p>

          Don't have account?{" "}

          <span
            style={{
              cursor: "pointer",
              color: "blue",
            }}
            onClick={openRegister}
          >
            Register
          </span>

        </p>

      </form>

    </div>

  );
}

export default Login;