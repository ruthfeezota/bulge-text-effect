import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const Greeting = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  return (
    <div>
      {user ? <h1>Hi {user.email}!</h1> : <h1>Please log in to continue.</h1>}
    </div>
  );
};

export default Greeting;
