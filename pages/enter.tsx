import { auth, googleAuthProvider } from "../lib/firebase";
import Image from "next/image";

export default function enter({}) {
  const user = null;
  const username = null;

  return (
    <main>
      {user ? (
        !username ? (
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
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
        <div className="btn-signin">
            <Image alt="google logo" src={"/google.svg"} width="32px" height="32px"/>
        </div>
        <span>Sign in with Google</span>
    </button>
  );
}

function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign out</button>;
}

function UsernameForm() {
    return <div/>;
}
