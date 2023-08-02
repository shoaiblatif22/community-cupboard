
import { Routes, Route } from "react-router-dom";
import App from "./app/App.js";

import SignUpForm from "./SignUp/SignUp";
import LogInForm from "./login/LoginForm";
import LogOutForm from "./login/logoutForm";
import AboutUs from "./aboutUs/AboutUs";
import ContactUs from "./contactUs/ContactUs";
import Basket from "./Basket/basket";
import Packages from "./Packages/packages";
import Checkout from "./Checkout/Checkout";
import Home from "./Home/Home"
import GetInvolved from "./getInvolved/getInvolved"
import Notifications from "./notifications/notifications.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" component={App} />
      <Route path="/home" element={<Home />} />
      <Route path="/getinvolved" element={<GetInvolved />} />

      <Route path="/signupform" element={<SignUpForm />} />
      <Route path="/login" element={<LogInForm />} />
      <Route path="/logout" element={<LogOutForm />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
};

export default AppRoutes;