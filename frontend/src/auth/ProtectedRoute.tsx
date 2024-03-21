import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import Loading from "@/components/ui/Loading";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }
  // return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
