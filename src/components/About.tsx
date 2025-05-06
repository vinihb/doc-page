
interface AboutProps {
  name: string;
  paragraphs: string[];
  profileImage: string;
  teamImage?: string;
}

const About = ({ name, paragraphs, profileImage, teamImage }: AboutProps) => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">About {name}</h2>
        <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-full overflow-hidden aspect-square max-w-md mx-auto">
            <img 
              src={profileImage} 
              alt={`${name} profile`} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {teamImage && (
          <div className="mt-12">
            <img 
              src={teamImage} 
              alt="Team" 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
