import SectionContainer from "@/components/SectionContainer";
import Link from "next/link";
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { Button, buttonVariants } from "@/components/Button";
import Scramble from "@/components/Scramble";

export default function MainSection() {
  return (
    <SectionContainer>
      <h1
        className=
          " text-green-400 md:text-base text-sm animate-fade300"
      >
        Hello, my name is
      </h1>
      <div className="flex flex-col font-ocrb md:gap-4 gap-2 w-full animate-fade500">
        <h1 className="font-semibold md:text-6xl text-4xl">Lakshya Gupta</h1>
        {/* <h1 className="text-green-400 font-semibold md:text-6xl text-4xl">
          I craft digital experiences.
        </h1> */}
        <Scramble/>
      </div>
      <p className="w-full max-w-3xl md:text-lg text-sm tracking-wide text-sky-200 text-opacity-75 animate-fade700">
        I'm a curious developer and software engineer who loves creating
        accessible, user-focused solutions that truly shine{" "}
        <span className="text-opacity-100 text-white">✨</span> but who also takes cybersecurity seriously. 
        Truely passionated, navigating cutting-edge tech and orchestrating workflows that leave a
        lasting impression !
      </p>
      <Link
        href="/Lakshya_Gupta_Resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-row items-center gap-2 md:text-base text-sm hover:text-green-400 animate-fade900"
      >
        View Resumé <FiExternalLink />
      </Link>
      <div className="flex flex-row items-center gap-6 animate-fade900">
        <Link
          href="https://github.com/LakshyaGupta26"
          className={buttonVariants({ variant: "ghost" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/LakshyaGupta26/"
          className={buttonVariants({ variant: "ghost" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiLinkedin />
        </Link>
        <Link
          href="https://x.com/LakshyaGupta26"
          className={buttonVariants({ variant: "ghost" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiTwitter />
        </Link>
        <Link
          href="mailto:lakshyagupta2602@gmail.com"
          className={buttonVariants({ variant: "ghost" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiMail />
        </Link>
      </div>
    </SectionContainer>
  );
}