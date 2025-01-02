import Link from "next/link";
import { buttonVariants } from "./Button";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between fixed top-0 left-0 backdrop-blur-sm px-4 py-2 w-full z-20 animate-fadeIn">
      <Link href="/">
        {/* <Image src={logo} alt="logo" className="w-8 h-8" /> */}
      </Link>

      <div className="flex flex-row items-center md:gap-10 gap-4 md:px-0 px-2">
      <Link
          href="/#home"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Home
        </Link>
        <Link
          href="/#about"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          About
        </Link>
        <Link
          href="/#projects"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
