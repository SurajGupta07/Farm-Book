import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  const token = localStorage?.getItem("login");
  return token ? children : <Navigate to="/login" />;
};
