import { useEffect, useId, useState } from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState({});
  const queryParameters = new URLSearchParams(window.location.search);
  const userId = queryParameters.get("userId");
  const jwtToken = queryParameters.get("jwtToken");
  const name = queryParameters.get("name");

  // console.log("name==> ", name);
  // console.log("userId=> ", userId);
  // console.log("jwtToken=> ", jwtToken);

  useEffect(() => {
    if (name && useId && jwtToken) {
      setUser({ name, userId, jwtToken });
    }
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("extd");
  //     if (typeof window.AvMessagingSdk === "object") {
  //       const avMessenger = window.AvMessagingSdk;
  //       console.log("avMessenger==> ", avMessenger);
  //       avMessenger.login(userId, jwtToken);
  //     } else {
  //       console.error("msg function not available.");
  //     }
  //   }, 5000);
  // }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Home user={user} setUser={setUser} />
    </div>
  );
}

export default App;
