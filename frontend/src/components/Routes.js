import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./SignUp/SignUp";
import LogInForm from "./login/LoginForm";
import LogOutForm from "./login/logoutForm";
import AboutUs from "./aboutUs/AboutUs";
import ContactUs from "./contactUs/ContactUs";
import Basket from "./Basket/basket";
import Packages from "./packages/packages";
import Orders from "./orders/Orders";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signupform" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/logout" element={<LogOutForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

