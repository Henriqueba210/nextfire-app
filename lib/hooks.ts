import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebase";

export function useUserData() {
  const [user] = useAuthState(auth);
  const [userName, setUsername] = useState<string | null | undefined>(null);

  useEffect(() => {
    let unsubsribe;

    if (user) {
      const ref = doc(firestore, `users/${user.uid}`);
      unsubsribe = onSnapshot(ref, (doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }
    return unsubsribe;
  }, [user]);
  return { user, userName };
}
