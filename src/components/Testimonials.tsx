
interface TestimonialItem {
  quote: string;
  name: string;
  rating: number;
  initials: string;
}

interface TestimonialsProps {
  title: string;
  description: string;
  testimonials: TestimonialItem[];
}

const Testimonials = ({ title, description, testimonials }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{title}</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow border">
              <div className="text-blue-500 text-4xl mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
