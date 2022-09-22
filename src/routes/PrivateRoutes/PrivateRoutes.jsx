import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children, redirectTo, isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};

PrivateRoutes.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  isAllowed: PropTypes.bool.isRequired,
};

export default PrivateRoutes;
