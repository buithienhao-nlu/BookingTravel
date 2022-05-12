import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUp from "./page/SignUp/SignUp";
import SignIn from "./page/SignIn/SignIn";
import { Home } from "./page/Home/Home";
import { Header } from "./page/Header/Header";
import { About } from "./page/About/About";
import { Contact } from "./page/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routing = (
  <BrowserRouter>
    <Header />
    {/* <Home /> */}
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
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
    <About />
    <Contact />
    <SignIn />
    <SignUp />
  </React.StrictMode>
);

root.render(<React.StrictMode>{page}</React.StrictMode>);
