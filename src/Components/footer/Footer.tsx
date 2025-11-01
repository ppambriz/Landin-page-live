import { ContactItem } from "./contact-item";
import { FooterListItem } from "./FooterListItem";
import { conditions, contactInformation, medias, pages } from "../../common/constans";
import type { ContactInformation } from "../../tipes/type";

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
