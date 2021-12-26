import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "joe" },
        }}
      >
        <a>Joe's Profile</a>
      </Link>
    </div>
  );
}
