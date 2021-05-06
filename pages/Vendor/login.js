import React from "react";
import Header from "../../Layouts/header";
import LogIn from "../../Components/Vendor/logIn";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Footer from "../../Layouts/footer";

function Login(props) {
  const router = useRouter();
  return (
    <div>
      <Header />
      <LogIn />
      <Button onClick={() => router.push("/Vendor/homePage")}>
        Vendor page
      </Button>
      <Footer />
    </div>
  );
}

export default Login;
