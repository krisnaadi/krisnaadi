import Link from "next/link";

export default function Header() {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>krisnaadi</li>
        </ul>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
