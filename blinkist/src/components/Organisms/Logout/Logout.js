import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '../../atoms/Button/TabButtons'

const LogoutButton = () => {
  const { logout,isAuthenticated } = useAuth0();

  return (
      isAuthenticated &&
    <Button onClick={() => logout({ returnTo: window.location.origin })}
      name="Log Out" />
  );
};

export default LogoutButton;