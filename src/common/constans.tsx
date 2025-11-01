import type { ContactInformation, Media } from "../tipes/type";
import { FacebookIcon } from "../Components/footer/FacebookIcon";
import { XIcon } from "../Components/footer/XIcon";
import { InstagramIcon } from "../Components/footer/InstagramIcon";


export const contactInformation: ContactInformation[] = [
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

export const pages: string[] = ["About us", "Job", "Press", "Blog"];

export const conditions: string[] = ["Contact us", "Terms", "Privacy"];

export const medias: Media[] = [
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