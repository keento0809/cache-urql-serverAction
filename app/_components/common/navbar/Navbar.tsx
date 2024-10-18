import Link from "next/link";
import { FC } from "react";

type NavbarProps = {
  isLoggedIn: boolean;
  onToggle: () => void;
};

export const Navbar: FC<NavbarProps> = ({ isLoggedIn, onToggle }) => {
  return (
    <div className="w-full px-6 py-4 text-xl font-semibold flex justify-between items-center">
      <Link href="/">Nav</Link>
      {isLoggedIn && <div onClick={onToggle}>Logout</div>}
    </div>
  );
};
