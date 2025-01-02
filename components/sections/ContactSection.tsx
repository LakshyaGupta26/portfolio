import Link from "next/link";
import { buttonVariants } from "@/components/Button";
import { FiLinkedin } from "react-icons/fi";
import SectionContainer from "@/components/SectionContainer";

export default function ContactSection() {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center md:gap-6 gap-4 w-full h-full justify-center">
        <h1 className=" text-green-400 md:text-base text-sm">
        Get in Touch
        </h1>
        <h1 className="md:text-4xl text-xl font-semibold">Share your thoughts !</h1>
        <p className="text-sky-200 text-opacity-75 w-full max-w-xl text-center">
          I&apos;m always up for new adventures, and my inbox is wide open!
          Got a question or just wanna say hi? Drop me a
          message, and I&apos;ll be sure to get back to you! 🚀
        </p>
        <div className="flex flex-row items-center gap-2">
          <Link
            href="mailto:lakshyagupta2602@gmail.com"
            className={buttonVariants({ variant: "default" })}
          >
            Drop a Message
          </Link>
          <Link
          href="https://www.linkedin.com/in/LakshyaGupta26/"
          className={buttonVariants({ variant: "ghost" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiLinkedin />
        </Link>
          {/* <Link href="/blog" className={buttonVariants({ variant: "default" })}>
            Read my Blog
          </Link> */}
        </div>
      </div>
    </SectionContainer>
  );
}