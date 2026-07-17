import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";
import logo from "../../assets/Logo-photo.png";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  const { username, password } = formData;

  // Validation
  if (!username.trim() || !password.trim()) {
    setError("Please enter Username and Password.");
    return;
  }

  setError("");

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      // Login Success
      navigate("/dashboard");
    } else {
      // Invalid Username / Password
      setError(data.message);
    }
  } catch (err) {
    console.error(err);
    setError("Unable to connect to the server.");
  }
};
  return (
    <div className="login-page">

      <div className="login-card">

        <img
          src={logo}
          alt="GV Application"
          className="logo"
        />

        <h1>GV Application</h1>

        <p className="subtitle">
          Healthcare CRM Management System
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />

          </div>

          <div className="input-group">

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          <div className="login-options">

            <label className="remember">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() =>
                  setRememberMe(!rememberMe)
                }
              />

              Remember Me

            </label>

            <button
              type="button"
              className="forgot-link"
            >
              Forgot Password?
            </button>

          </div>

          {error && (
            <div className="error-box">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;