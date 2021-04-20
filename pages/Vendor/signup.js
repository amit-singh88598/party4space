import React from "react";
import SignUp from "../../Components/Vendor/signUp";
import Header from "../../Layouts/header";

function Signup(props) {
  return (
    <div>
      <Header />
      <div>
        <SignUp />
      </div>
    </div>
  );
}

export default Signup;
