import { Card, Typography } from "@material-ui/core";
import Head from "next/head";
import Header from "../Layouts/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Card>
        <Typography>This is Home Page</Typography>
      </Card>
    </div>
  );
}
