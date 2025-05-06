
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  name: string;
  profession: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

const Hero = ({ name, profession, description, primaryCTA, secondaryCTA }: HeroProps) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-blue-500 text-lg mb-2">Welcome to</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gray-800">{name}'s</span>
            <br />
            <span className="text-blue-500">{profession}</span> Practice
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              {primaryCTA}
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-6 text-lg"
              onClick={scrollToServices}
            >
              {secondaryCTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
