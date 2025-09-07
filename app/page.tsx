
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex gap-10 p-10 text-blue-700">
      <p>Navigate to the pages through these link :</p>
      <Link href="/product" className="link">Product</Link>
      <Link href="/SignIn" className="link">SignIn</Link>
      <Link href="/search" className="link">Search</Link>
      <Link href="/SignUp" className="link">SignUp</Link>
      <Link href="/favourites" className="link">Favourites</Link>
      <Link href="/Cart" className="link">Cart</Link>
    </div>
  );
}
