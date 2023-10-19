import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePicture from "../public/assets/profile.webp";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center space-y-5">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-full w-40 lg:w-60"
            src={profilePicture}
            alt="Picture of me"
            priority
          />
        </div>
        <div className="space-y-2 lg:space-y-2">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gradient bg-gradient-to-r from-[#F3F2FD] via-[#7466EC] to-[#5EBCD4]">
            Isaac Cilia Attard
          </h1>
          <h2 className="italic">Aspiring Computer Scientist</h2>
        </div>
        <div className="space-y-1">
          <p className="text-lg lg:text-xl italic font-semibold text-white ">
            <q>Nothing is to be feared, it is only to be understood.</q>
          </p>
          <p>&mdash; Marie Curie</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <Link href="https://github.com/ica574" target="_blank">
            <FontAwesomeIcon icon={faGithub} width={20} />
          </Link>
          <Link href="mailto:contact@isaacciliaattard.com">
            <FontAwesomeIcon icon={faEnvelope} width={20} />
          </Link>
          <Link href="https://twitter.com/IsaaCiliaAttard" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} width={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/isaacciliaattard/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} width={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
