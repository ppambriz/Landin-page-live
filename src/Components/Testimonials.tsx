interface Testimonial {
    name: string;
    role: string;
    image: string;
    quote: string
}


const testimonial: Testimonial[] = [
    {
        name: 'Satish Patel',
        role: 'Founder & CEO, Huddle',
        image:'/images/profile-1.jpg',
        quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    },

    {
        name: 'Bruce McKenzie',
        role: 'Founder & CEO, Huddle',
        image:'/images/profile-2.jpg',
        quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    },

    {
        name: 'Iva Boyd',
        role: 'Founder & CEO, Huddle',
        image:'/images/profile-3.jpg',
        quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    },

]


export const Testimonials = () => {
  return (
    <div>
        {
            testimonial.map(({name, role, image, quote}:Testimonial)=>(
                <div>
                    <blockquote className="text-[10px]">{quote}</blockquote>
                    <div className="gap-2 flex">
                        <img className="size-6 rounded-full" src={image} alt="name" /> 
                        <div>
                            <h3 className="font-bold text-[10px]">{name}</h3>
                            <p className="text-[7px]">{role}</p>
                        </div>
                    </div>
                </div>
            ))
    }
    </div>
  )
}
