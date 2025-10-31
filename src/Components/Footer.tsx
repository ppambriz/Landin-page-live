import { ContactItem} from "./footer/contact-item"

export const Footer = () => {
  return (
    <footer className="pt-[200px] pb-[300px] px-6">
        <img src="/images/logo.svg" alt="logo" />        

        <ContactItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" iconUrl="/images/icon-location.svg" alt="icon location" />

        <ContactItem text="+1-543-123-4567" iconUrl="/images/icon-phone.svg" alt="icon phone"/>
    </footer>
  )
}
