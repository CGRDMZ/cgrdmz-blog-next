import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope, faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

type ContactType = "Email" | "LinkedIn" | "Github" | "Twitter";

const SocialBtn = ({social, color, url}: {social: ContactType, color: string, url: string}) => {

  const socialMap : {[key: string]: IconDefinition} = {
    "LinkedIn": faLinkedinIn,
    "Github": faGithub,
    "Email": faEnvelope,
    "Twitter": faTwitter,
  }

  return (
    <Link href={url} passHref>
      <a rel="noreferrer noopener" target="_blank">
        <div className="rounded-full p-2" style={{backgroundColor: color}}>
          <div className="w-6 h-6">
            <FontAwesomeIcon icon={socialMap[social]} size="sm" color="white" />
          </div>
        </div>
      </a>
    </Link>
  );
};

const GetInTouch = () => {
  return (
    <div className={classNames("flex justify-center items-center w-full mt-8")}>
      <div className={classNames("flex-1 max-w-md")}>
        <h2 className="text-7xl sm:text-9xl font-mono font-extrabold text-center">
          Wanna get in touch?
        </h2>
      </div>
    </div>
  );
};

const ContactDetail = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-6">
        <h1 className="text-5xl text-gray-500 italic text-center font-thin">
          here are my contacts!
        </h1>
        <div className="flex flex-row gap-4 my-8">
          <SocialBtn social="LinkedIn" color="#0e76a8" url="https://www.linkedin.com/in/cgrdmz/" />
          <SocialBtn social="Github" color="#4078c0" url="https://github.com/CGRDMZ" />
          <SocialBtn social="Email" color="#1f2937" url="mailto:cgrdmzz@gmail.com" />
          <SocialBtn social="Twitter" color="#1DA1F2" url="https://twitter.com/CGRDMZ" />
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <div className="overflow-hidden w-full max-w-5xl mx-auto">
      <GetInTouch />
      <ContactDetail />
    </div>
  );
};

export default Contact;
