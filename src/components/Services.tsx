
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  services: ServiceItem[];
}

const Services = ({ title, services }: ServicesProps) => {
  return (
    <section id="services" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{title}</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-blue-500 text-xl mb-4" dangerouslySetInnerHTML={{ __html: service.icon }} />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-blue-500 p-0">
                  Learn more <span className="ml-1">→</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
