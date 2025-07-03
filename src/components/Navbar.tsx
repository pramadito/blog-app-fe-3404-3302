import { lato } from "@/lib/fonts";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto p-4 flex justify-between items-center ">
      <Link href="/">
        <p className={`text-3xl font-bold ${lato.className}`}>BlogGo</p>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/write">Write</Link>
      </div>
    </nav>
  );
};

export default Navbar;
