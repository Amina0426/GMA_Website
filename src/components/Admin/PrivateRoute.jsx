import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase"; // adjust path
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>; // optional loader

  // if user is logged in, render children (dashboard)
  // if not, redirect to /admin login
  return user ? children : <Navigate to="/admin" replace />;
}
