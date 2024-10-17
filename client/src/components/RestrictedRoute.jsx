import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/weather",
}) => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return isLoggedin ? <Navigate to={redirectTo} /> : Component;
};
