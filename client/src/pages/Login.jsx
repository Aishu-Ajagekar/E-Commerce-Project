import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/");
        }, 5000);

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      <Layout>
        <div className="container py-4">
          <div className="row align-items-center">
            {/* Left Side: Image */}
            <div className="col-md-6 text-center">
              <img
                src="/images/login.jpg"
                alt="Login"
                className="img-fluid rounded"
              />
            </div>

            {/* Right Side: Login Form */}
            <div className="col-md-6">
              <h2 className="mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#D268CC", color: "white" }}
                >
                  Login
                </button>

                <button
                  type="button"
                  className="btn ms-2"
                  style={{ backgroundColor: "#D268CC", color: "white" }}
                  onClick={() => {
                    navigate("/forgot-password")
                  }}
                >
                  Forgot Password
                </button>
              </form>
              <p className="mt-3">
                Don't have an account? <a href="/register">Create an account</a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
