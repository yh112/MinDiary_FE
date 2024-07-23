import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  console.log(clientId);

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/main");
  };

  return (
     <>
      <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={(res) => {
                console.log(jwtDecode(res.credential));
                onClick();
              }}
              onFailure={(err) => {
                console.log(err);
              }}
            />
      </GoogleOAuthProvider>
    </>
  );
};

export default LoginButton;