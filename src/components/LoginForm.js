import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LoginForm.css";
import config from "../utils/config";

const loginApiUrl = config.loginUrl;

const LoginForm = ({ setUser, setUserPresent }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // setUser({ userName, userId, jwt });
  // setUserPresent(true);

  const handleLogin = (e) => {
    // const loadingToaster = toast.loading("Loging In...");
    e.preventDefault();
    setIsDisabled(true);
    let data = {
      userId: username,
      password: password,
    };

    axios
      .post(loginApiUrl, data)
      .then((response) => {
        console.log("api resp==> ", response.data);
        setUser(response.data);
        setUserPresent(true);
        // toast.update(loadingToaster, {
        //   render: "Email Sent Successfuly",
        //   type: "success",
        //   isLoading: false,
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        // });
        toast.success("Login Successful");
        setIsDisabled(false);
      })
      .catch((error) => {
        console.log("api err==> ", error);
        toast.error("Login Failed");
        // toast.update(loadingToaster, {
        //   render: "Error Sending Email",
        //   type: "error",
        //   isLoading: false,
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        // });
        setIsDisabled(false);
      });
  };
  const inputHandler = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <div className="login-header-wrapper">
        <h2 className="login-header">LOGIN</h2>
      </div>
      <input
        className="form-input"
        placeholder="Username"
        type="text"
        onChange={(e) => inputHandler(e, setUsername)}
        value={username}
        required
      />
      <input
        className="form-input"
        placeholder="Password"
        type="password"
        onChange={(e) => inputHandler(e, setPassword)}
        value={password}
        required
      />
      <button className="form-btn btn btn-info navbank" disabled={isDisabled}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
