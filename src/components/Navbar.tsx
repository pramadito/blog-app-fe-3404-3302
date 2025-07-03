import { lato } from "@/lib/fonts";

const Navbar = () => {
  return (
    <nav className="container mx-auto p-4 flex justify-between items-center ">
      <p className={`text-3xl font-bold ${lato.className}`}>BlogGo</p>

      <div className="flex items-center gap-4">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
