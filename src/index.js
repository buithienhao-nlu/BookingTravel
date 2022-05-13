import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUp from "./page/SignUp/SignUp";
import SignIn from "./page/SignIn/SignIn";
import { Home } from "./page/Home/Home";
import { Header } from "./page/Header/Header";
import { About } from "./page/About/About";
import { Contact } from "./page/Contact/Contact";
import { Footer } from "./page/Footer/Footer";
import { Destination } from "./page/Destination/Destination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routing = (
  <BrowserRouter>
    <Header />
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="destination" element={<Destination />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
const page = <div className="ract-root">{routing}</div>;
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Destination />
    <About />
    <Contact />
    <SignIn />
    <SignUp />
    <Footer />
  </React.StrictMode>
);

root.render(<React.StrictMode>{page}</React.StrictMode>);
