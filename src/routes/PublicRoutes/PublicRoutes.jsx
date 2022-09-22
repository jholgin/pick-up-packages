import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoutes = ({ redirectTo }) => {
  return <Outlet />;
};

PublicRoutes.propTypes = {
  redirectTo: PropTypes.string,
};

export default PublicRoutes;
