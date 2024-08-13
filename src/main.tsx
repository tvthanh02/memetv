import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
//import SignIn from "./page/auth/SignIn.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <App />
      {/* <SignIn /> */}
    </>
  </React.StrictMode>
);
