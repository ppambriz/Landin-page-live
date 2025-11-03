import { testimonials } from "../common/constans";
import type { Testimonial } from "../tipes/type";
import { TestimonialCards } from "./TestimonialCards";


export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-6 items-center pt-6 relative">
      <img
        className="size-6 absolute top-0 left-8 md:left-40 md:top-1.5 z-0"
        src="/images/bg-quotes.png"
        alt="bg quotes"
      />
      <div className="z-10">
        {testimonials.map((testimonial: Testimonial) => (
        <TestimonialCards key={testimonial.name} {...testimonial} />
      ))}
      </div>
      
    </div>
  );
};
