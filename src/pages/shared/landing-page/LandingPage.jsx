import React, { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    console.log("Landing Page mounted");

    return () => {
      console.log("Landing Page unmounted");
    };
  }, []);

  return <h2>Welcome To Student Manager</h2>;
};

export default LandingPage;
