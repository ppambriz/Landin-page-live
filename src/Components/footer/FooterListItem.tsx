
interface Props {
  text: string;
  style?: string;
}

export const FooterListItem = ({ text, style='' }: Props) => {
  return (
    <li>
      <a className={`hover:text-teal-200 ${style}`} href="">
        {text}
      </a>
    </li>
  );
};
