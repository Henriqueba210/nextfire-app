import { auth, googleAuthProvider } from "../lib/firebase";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import toast from "react-hot-toast";
import { signInWithPopup } from "firebase/auth";

export default function Enter({}) {
  const { user, userName } = useContext(UserContext);
  console.log(user);
  console.log(userName);

  return (
    <main>
      {user ? (
        !userName ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <div className="btn-signin">
        <Image
          alt="google logo"
          src={"/google.svg"}
          width="32px"
          height="32px"
        />
      </div>
      <span>Sign in with Google</span>
    </button>
  );
}

function SignOutButton() {
  return (
    <button
      onClick={async () => {
        await auth.signOut();
        toast.success("Signed out successfully!");
      }}
    >
      Sign out
    </button>
  );
}

function UsernameForm() {
  return <div />;
}
