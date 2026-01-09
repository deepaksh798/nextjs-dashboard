"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavBar";
import Cookies from "js-cookie";

interface Props {
  children: ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getToken = () => {
    return Cookies.get("loggedIn");
  };
  useEffect(() => {
    const token = getToken();
    const isLoginPage = pathname === "/login";

    if (token) {
      setIsAuthenticated(true);

      // Redirect authenticated users away from login or root to /
      if (isLoginPage || pathname === "/") {
        router.push("/");
      }
    } else {
      setIsAuthenticated(false);

      // Only redirect to login if the user is NOT already on the login page
      if (!isLoginPage) {
        router.push("/login");
      }
    }

    setIsLoading(false);
  }, [pathname, router]);

  // Show a loading indicator while checking authentication
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 h-screen">
        <span className="auth-loader"></span>
        <p className="text-xl">Checking authentication</p>
      </div>
    );
  }

  // After isLoading check

  if (isAuthenticated) {
    return (
      <div className="h-screen flex overflow-hidden">
        <SideNavbar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="py-8 px-8 h-full overflow-y-scroll">{children}</div>
        </div>
      </div>
    );
  }

  // Allow unauthenticated users to access /login
  if (!isAuthenticated && pathname === "/login") {
    return <>{children}</>;
  }

  // Otherwise (e.g., trying to access /dashboard unauthenticated), render nothing
  return null;
};

export default AuthProvider;
