import { ContactItem } from "./contact-item";
import { FooterListItem } from "./FooterListItem";
import { conditions, contactInformation, medias, pages } from "../../common/constans";
import type { ContactInformation } from "../../tipes/type";

export const Footer = () => {
  return (
    <footer className="pt-[260px] pb-40 px-6 xl:pr-24">
      <img className="mb-10" src="/images/logo.svg" alt="logo" />

      <div className="xl:flex xl:gap-10">
        <div className="flex flex-col gap-4 md:flex-row xl:gap-16">
          <ContactItem styles="flex-1" {...contactInformation[0]} />
          <div className="flex flex-col gap-4 flex-1 xl:flex-none">
            {contactInformation.slice(1,4).map((contact: ContactInformation) => (
              <ContactItem key={contact.alt} {...contact} />
            ))}
          </div>
        </div>
        <div className="md:flex md:justify-center md:gap-24">
          <div className="flex flex-col gap-8 mt-16 xl:mt-0 md:flex-row">
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
        </div>
      </div>
    </footer>
  );
};
