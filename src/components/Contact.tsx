
import { Button } from "@/components/ui/button";

interface ContactProps {
  title: string;
  description: string;
  office: {
    address: string[];
    hours: string;
    phone: string;
    email: string;
  };
  contactMethods: {
    whatsapp?: string;
    phone?: string;
    email?: string;
  };
}

const Contact = ({ title, description, office, contactMethods }: ContactProps) => {
  return (
    <section id="contact" className="bg-blue-500 text-white py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{title}</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        
        <p className="text-center mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="bg-white text-gray-800 rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold text-blue-500 mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-blue-500 mr-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Office Location</h4>
                {office.address.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-blue-500 mr-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Office Hours</h4>
                <p className="text-gray-600">{office.hours}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-8 mb-4">Schedule Directly</h3>
          <p className="mb-4 text-gray-600">Choose your preferred method to schedule your appointment:</p>
          
          <div className="space-y-4">
            {contactMethods.whatsapp && (
              <Button className="w-full bg-green-500 hover:bg-green-600">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Schedule via WhatsApp
              </Button>
            )}
            
            {contactMethods.phone && (
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Schedule
              </Button>
            )}
            
            {contactMethods.email && (
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 mr-2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email for Appointment
              </Button>
            )}
          </div>
          
          <p className="mt-8 text-center text-gray-500">
            Emergency? Please call 911 or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
