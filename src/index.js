import React from "react";
import ReactDOM from "react-dom";
import './index.css'

import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";

const frontendApi = "sk_test_fAPsnPOqMX6Bh54fBR77DW4P0uWB3dpMe4RPSxnb5i"; // Replace with your actual Clerk frontend API key
const publishableKey =
  "pk_test_cHJlc2VudC1jb3diaXJkLTMwLmNsZXJrLmFjY291bnRzLmRldiQ"; // Replace with your actual Clerk publishable key

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider frontendApi={frontendApi} publishableKey={publishableKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
