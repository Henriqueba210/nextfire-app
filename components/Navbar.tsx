import Link from "next/link"
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {
    const { user, username } = useContext(UserContext);

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">Feed</button>
                    </Link>
                </li>

                {/* user is signed-in and has a username */}
                {
                    username && (
                        <>
                        <li className="push-left">
                            <Link href="/admin" passHref>
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`} passHref>
                                <img alt="User Image" src={user?.photoURL}/>
                            </Link>
                        </li>
                        </>
                    )
                }
                {/* user is not signed-in or has not created a username */}
                {!username && (
                    <li>
                        <Link href="/enter" passHref>
                            <button className="btn-blue">Log In</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
};
