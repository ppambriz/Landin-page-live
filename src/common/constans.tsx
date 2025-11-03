import type { ContactInformation, Media, Feature, Testimonial } from "../tipes/type";
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

export const features: Feature[] = [
  {
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    iconUrl: "/images/icon-access-anywhere.svg",
  },
  {
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
    iconUrl: "/images/icon-security.svg",
  },
  {
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    iconUrl: "/images/icon-collaboration.svg",
  },
  {
    title: "Store any type of file",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    iconUrl: "/images/icon-any-file.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Satish Patel",
    role: "Founder & CEO, Huddle",
    image: "/images/profile-1.jpg",
    quote:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },

  {
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
    image: "/images/profile-2.jpg",
    quote:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },

  {
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",
    image: "/images/profile-3.jpg",
    quote:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
];