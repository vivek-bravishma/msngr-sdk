import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import "./Home.css";

import roundedRect from "../assets/roundedRect.svg";
import bgImg from "../assets/images/bg.jpg";
import logoImg from "../assets/images/logo.png";
import { useEffect, useState } from "react";

const Home = ({ user, setUser }) => {
  const [userPresent, setUserPresent] = useState(false);
  const [messengerReady, setMessengerReady] = useState(false);
  // console.log("================z> ", user);
  useEffect(() => {
    if (Object.keys(user).length) {
      setUserPresent(true);
    }
  }, [user]);

  // console.log("userPresent====> ", userPresent);

  useEffect(() => {
    console.log("messengerReady--> ", messengerReady);
    let msgInterval = null;

    if (!messengerReady) {
      msgInterval = setInterval(() => {
        if (window.messengerReady) setMessengerReady(true);
      }, 0);
    }

    if (messengerReady) {
      clearInterval(msgInterval);
    }

    return () => {
      clearInterval(msgInterval);
    };
  }, [messengerReady]);

  useEffect(() => {
    if (userPresent && messengerReady) {
      const { userId, jwtToken } = user;
      msgrLogin(userId, jwtToken);
    }
  }, [user, userPresent, messengerReady]);

  return (
    <div className="main-container">
      {userPresent && <NavBar userName={user.name} />}
      <div className="form-logo-container">
        <img className="logo-img" alt="" src={logoImg} />
        {!userPresent && (
          <LoginForm setUser={setUser} setUserPresent={setUserPresent} />
        )}
      </div>

      <section className="main-bg-container">
        <div className="image-container">
          <img className="bgImg" src={bgImg} alt="" />
        </div>
      </section>
    </div>
  );
};

function msgrLogin(userId, jwtToken) {
  try {
    const avMessenger = window.AvMessagingSdk;
    console.log("avMessenger==> ", avMessenger);
    avMessenger.login(userId, jwtToken);
  } catch (error) {
    console.log("msg function not available.");
  }
}

export default Home;
