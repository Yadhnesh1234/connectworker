import React from "react";
import Navbar from "../src/Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import SignUp from "./Components/signup/signup";
import SignUpClient from "./Components/signup/signupclient";
import SignIn from "./Components/signin/signin";
import GetStarted from "./Components/GetStarted";
import ClientPostingPage from "./Components/ClientPostingPage";
import VerificationCard from "./Components/signup/VerificationCard";
import WorkerProfilePage from "./Components/ProfilePage/WorkerProfilePage";
import PostResponsesPage from "./Components/PostResponsesPage";
import ReadMore from "./Components/ReadMore";
import DashBoard from "./Components/clientdashboard/Dashboard"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/getstarted" exact element={<GetStarted />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/signupclient" exact element={<SignUpClient />} />
          <Route path="/verifyPhone" exact element={<VerificationCard />} />
          <Route path="/profile/worker" exact element={<WorkerProfilePage />} />
          <Route path="/post-work" exact element={<ClientPostingPage />} />
          <Route path="/post/responses" exact element={<PostResponsesPage />} />
          <Route path="/post/response/read-more" exact element={<ReadMore />} />
          <Route path="/dashboard" exact element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
