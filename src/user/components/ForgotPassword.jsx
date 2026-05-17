import { useState, useEffect } from "react";
import "./css/Login.css";

function ForgotPassword({ close, openLogin }) {

  const API = import.meta.env.VITE_API_URL;

  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [step, setStep] = useState(1);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };

  }, []);

  // 🔥 SEND OTP
  const sendOtp = async () => {

    try {

      const res = await fetch(API + "/auth/send-otp", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
        }),

      });

      const data = await res.text();

      if (!res.ok) {

        setError(data);

        setMessage("");

        return;
      }

      setMessage(data);

      setError("");

      setStep(2);

    } catch {

      setError("Something went wrong");

    }

  };

  // 🔥 RESET PASSWORD
  const resetPassword = async () => {

    try {

      const res = await fetch(API + "/auth/reset-password", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          otp,
          newPassword,
        }),

      });

      const data = await res.text();

      if (!res.ok) {

        setError(data);

        setMessage("");

        return;
      }

      setMessage(data);

      setError("");

      setStep(3);

     setTimeout(() => {

  // 🔥 close forgot password popup
  close();

  // 🔥 open login popup
  openLogin();

}, 2000);


    } catch {

      setError("Something went wrong");

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <span
          className="close-btn"
          onClick={close}
        >
          &times;
        </span>

        <h2>
          Forgot Password
        </h2>

        {message && (
          <p className="success">
            {message}
          </p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <button onClick={sendOtp}>
              Send OTP
            </button>

          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(e.target.value)
              }
            />

            <button onClick={resetPassword}>
              Reset Password
            </button>

          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Redirecting to Login...
            </p>

          </>
        )}

      </div>

    </div>

  );
}

export default ForgotPassword;