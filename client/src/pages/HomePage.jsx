import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Layout
        title={"Home Page - Ecommerce Page"}
        description={"this is the main page"}
        keywords={"home , indexpage , dashword"}
      >
        <h1>home page</h1>
        <pre>{localStorage.getItem("auth")}</pre>
      </Layout>
    </>
  );
};

export default HomePage;
