import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const ProtectedRoute = (props) => {
  const auth = useAuth();

  if (auth.token) {
    return props.children;
  } else {
    return <Navigate to="/sign_in" />;
  }
};

export default ProtectedRoute;
