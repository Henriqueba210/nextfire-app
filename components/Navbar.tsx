import Link from "next/link"

export default function Navbar() {
   const user = null;
   const username = null;

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
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img alt="User Image" src={user?.photoURL}/>
                            </Link>
                        </li>
                        </>
                    )
                }
                {/* user is not signed-in or has not created a username */}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log In</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
};
