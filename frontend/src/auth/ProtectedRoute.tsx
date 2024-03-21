import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "@/components/ui/Loading";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  useEffect(() => {
    const handleRedirectPath = () => {
      const storedPath = sessionStorage.getItem("redirectPath");
      if (storedPath && isAuthenticated) {
        setRedirectPath(storedPath);
        sessionStorage.removeItem("redirectPath");
      }
    };

    handleRedirectPath();
  }, [isAuthenticated]);

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return redirectPath ? <Navigate to={redirectPath} replace /> : <Outlet />;
  }

  // Store current path before redirecting to home
  if (window.location.pathname !== "/") {
    sessionStorage.setItem("redirectPath", window.location.pathname);
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
