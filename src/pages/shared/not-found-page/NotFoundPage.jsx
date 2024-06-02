import React from "react";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    console.log("Not Found Page mounted");

    return () => {
      console.log("Not Found Page unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Ooops...</h1>
      <h2>There is nothing here...</h2>
    </div>
  );
};

export default NotFoundPage;
