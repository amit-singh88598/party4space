import React from "react";
import SignUp from "../../Components/Vendor/signUp";
import Footer from "../../Layouts/footer";
import Header from "../../Layouts/header";

function Signup(props) {
  return (
    <div>
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}

export default Signup;
