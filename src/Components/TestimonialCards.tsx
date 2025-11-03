interface Props {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const TestimonialCards = ({name,image,quote,role}: Props) => {
  return (
    <div className="bg-navy-850 rounded-sm p-6 w-[280px] md:w-[420px]">
      <blockquote className="text-[0.75rem] mb-4">{quote}</blockquote>
      <div className="gap-2 flex items-center">
        <img className="size-6 rounded-full" src={image} alt="name" />
        <div>
          <h3 className="font-bold text-[0.625rem]">{name}</h3>
          <p className="text-[7px]">{role}</p>
        </div>
      </div>
    </div>
  );
};
