import React from "react";
import Header from "../../Layouts/header";
import LogIn from "../../Components/Vendor/logIn";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

function Login(props) {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div>
        <LogIn />
        <Button onClick={() => router.push("/Vendor/homePage")}>
          Vendor page
        </Button>
      </div>
    </div>
  );
}

export default Login;
