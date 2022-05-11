import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SignInSide from "./page/SignIn/SignIn";
import SignUp from "./page/SignUp/SignUp";
import SignIn from "./page/SignIn/SignIn";
import { Home } from "./page/Home/Home";
import { Header } from "./page/Header/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routing = (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
const page = <div className="ract-root">{routing}</div>;
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <SignIn />
    <SignUp />
  </React.StrictMode>
);

root.render(<React.StrictMode>{page}</React.StrictMode>);
