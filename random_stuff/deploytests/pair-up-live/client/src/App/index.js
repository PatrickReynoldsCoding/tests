import "./index.css";
import { Component, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Components
import LoginAndSignup from "./LoginAndSignup/index";
import Login from "./LoginAndSignup/Login/index";
import Profile from "./Profile/index";
import ProfileUser from "./ProfileUser/index";
import SignupName from "./LoginAndSignup/Signup/SignupName/index";
import SignupSkill from "./LoginAndSignup/Signup/SignupSkill/index";
import SignupLanguage from "./LoginAndSignup/Signup/SignupLanguage/index";
import SignupCredentials from "./LoginAndSignup/Signup/SignupCredentials/index";

import AddFriendButton from "../Components/AddFriendButton";
import Welcome from "./Welcome/index";
import NewProjectPage from "./Projects/NewProjectPage";
import HomepageProjects from "./Projects/HomepageProjects/HomepageProjects";
import ViewProjectPage from "./Projects/ViewProjectPage/ViewProjectPage";
import JoiningProjectPage from "./Projects/JoiningProjectPage/JoiningProjectPage";
import Find from "./Find/index";
import PairNow from "./PairNow/PairNow";

import NewUserCard from "./Welcome/NewUserCard";

// Functions
import { createUser } from "./LoginAndSignup/Signup/functions/createUser";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import ResponsiveAppBarLoggedIn from "../Components/ResponsiveAppBarLoggedIn";

function App() {
  //state = {};

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    skill: "",
    languages: [],
    username: "",
    email: "",
    password: "",
    postcode: "",
  });

  const [userSignIn, setuserSignIn] = useState({
    email: "",
    password: "",
  });

  //user SU functions - move to componant
  const addName = (fname, lname) => {
    setUser({ ...user, fname: fname, lname: lname });
  };

  const addSkill = (skill) => {
    setUser({ ...user, skill: skill });
  };

  const addLang = (lang) => {
    setUser({ ...user, languages: lang });
  };

  const createSignInObject = (email, password) => {
    setuserSignIn({ email: email, password: password });
  };

  const addCredentials = (username, email, password, postcode) => {
    setUser({
      ...user,
      username: username,
      email: email,
      password: password,
      postcode: postcode,
    });
  };

  //pass user and neccisary functions to the individual paths
  // render() {
  //   if (localStorage.getItem('token') !== null) {
  //     return (
  //       <BrowserRouter>
  //         <h2>Hi, welcome to Pair Up!</h2>
  //         <button onClick={() => localStorage.clear()} className="log-out">
  //           Logout
  //         </button>
  //         <Routes>
  //           <Route path="/projects/newproject" element={<NewProjectPage />} />
  //           {/* <Route path="/" element={<LoginAndSignup />} /> */}
  //           {/* <Route path="/welcome" element={<Welcome />} /> */}
  //           <Route path="/find" element={<Find />} />
  //           <Route path="/profile" element={<Profile />} />
  //           <Route path="/profile/:id" element={<ProfileUser />} />
  //           <Route path="/home/projects" element={<HomepageProjects />} />
  //         </Routes>
  //       </BrowserRouter>
  //     );
  //   }
  return (
    <BrowserRouter>
      {/* {localStorage.getItem('token') !== null ? (
        <ResponsiveAppBarLoggedIn />
      ) : (
        <ResponsiveAppBar />
      )} */}
      {/* <ResponsiveAppBarLoggedIn /> */}
      {/* <ResponsiveAppBar /> */}
      <Routes>
        <Route path="/projects/newproject" element={<NewProjectPage />} />
        <Route path="/" element={<LoginAndSignup />} />
        <Route
          path="/login"
          element={
            <Login
              userSignIn={userSignIn}
              createSignInObject={createSignInObject}
            />
          }
        />
        <Route
          path="/signupname"
          element={<SignupName addName={addName} user={user} />}
        />
        <Route
          path="/signupskill"
          element={<SignupSkill addSkill={addSkill} user={user} />}
        />
        <Route
          path="/signuplanguage"
          element={<SignupLanguage addLang={addLang} user={user} />}
        />
        <Route path="/pairnow" element={<PairNow />} />
        <Route
          path="/signupcredentials"
          element={
            <SignupCredentials
              user={user}
              addCredentials={addCredentials}
              createUser={createUser}
            />
          }
        />
        <Route path="/test" element={<NewUserCard />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/find" element={<Find />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project/home" element={<HomepageProjects />} />
        <Route path="/project/newproject" element={<NewProjectPage />} />
        <Route path="/project/view/:id" element={<ViewProjectPage />} />
        <Route
          path="/project/joinrequestsent"
          element={<JoiningProjectPage />}
        />
        <Route path="/profile/:id" element={<ProfileUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
