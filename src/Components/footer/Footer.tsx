import { ContactItem } from "./contact-item";
import { FooterListItem } from "./FooterListItem";
import type { JSX } from "react";
import { FacebookIcon } from "./FacebookIcon";
import { XIcon } from "./XIcon";
import { InstagramIcon } from "./InstagramIcon";

interface ContactInformation {
  text: string;
  iconUrl: string;
  alt: string;
}

const contactInformation: ContactInformation[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    iconUrl: "/images/icon-location.svg",
    alt: "icon location",
  },

  {
    text: "+1-543-123-4567",
    iconUrl: "/images/icon-phone.svg",
    alt: "icon phone",
  },

  {
    text: "example@fylo.com",
    iconUrl: "/images/icon-email.svg",
    alt: "icon imail",
  },
];

const pages: string[] = ["About us", "Job", "Press", "Blog"];

const conditions: string[] = ["Contact us", "Terms", "Privacy"];

interface Media {
  text: string;
  icon: JSX.Element;
}

const medias: Media[] = [
  {
    text: "facebook",
    icon: <FacebookIcon />,
  },
  {
    text: "x",
    icon: <XIcon />,
  },
  {
    text: "instagram",
    icon: <InstagramIcon />,
  },
];

export const Footer = () => {
  return (
    <footer className="pt-[260px] pb-[50px] px-6">
      <img className="mb-10" src="/images/logo.svg" alt="logo" />

      <div className="flex flex-col gap-4">
        {contactInformation.map((contact: ContactInformation) => (
          <ContactItem key={contact.alt} {...contact} />
        ))}
      </div>

      <div className="flex flex-col gap-8 mt-16">
        <ul>
          {pages.map((page: string) => (
            <FooterListItem key={page} text={page} />
          ))}
        </ul>

        <ul>
          {conditions.map((condition: string) => (
            <FooterListItem key={condition} text={condition} />
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4 pt-20">
        {medias.map((media: any) => (
          <div
            key={media.text}
            className="text-white hover:text-teal-200 cursor-pointer border rounded-full size-7 p-0.5"
          >
            {media.icon}
          </div>
        ))}
      </div>
    </footer>
  );
};
