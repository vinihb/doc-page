
import { useConfig } from "@/context/ConfigContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyFeatures from "@/components/KeyFeatures";
import Services from "@/components/Services";
import Credentials from "@/components/Credentials";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";
import { EditContentButton } from "@/components/EditContentButton";

const Index = () => {
  const { config } = useConfig();

  // Apply dynamic colors based on configuration
  useEffect(() => {
    const root = document.documentElement;
    
    // Update CSS variables for colors
    if (config.branding) {
      const primaryColorHex = config.branding.primaryColor;
      const secondaryColorHex = config.branding.secondaryColor;
      const accentColorHex = config.branding.accentColor;
      
      document.querySelectorAll('.bg-blue-500').forEach(el => {
        (el as HTMLElement).style.backgroundColor = primaryColorHex;
      });
      
      document.querySelectorAll('.text-blue-500').forEach(el => {
        (el as HTMLElement).style.color = primaryColorHex;
      });
      
      document.querySelectorAll('.border-blue-500').forEach(el => {
        (el as HTMLElement).style.borderColor = primaryColorHex;
      });
      
      document.querySelectorAll('.hover\\:bg-blue-600').forEach(el => {
        el.addEventListener('mouseenter', () => {
          (el as HTMLElement).style.backgroundColor = secondaryColorHex;
        });
        el.addEventListener('mouseleave', () => {
          (el as HTMLElement).style.backgroundColor = '';
        });
      });
    }
  }, [config.branding]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        name={config.professional.name} 
        profession={config.professional.profession} 
      />
      
      <main className="flex-grow">
        <Hero 
          name={config.professional.name}
          profession={config.professional.profession}
          description={config.professional.description}
          primaryCTA={config.professional.primaryCTA}
          secondaryCTA={config.professional.secondaryCTA}
        />
        
        <About 
          name={config.professional.name}
          paragraphs={config.about.paragraphs}
          profileImage={config.professional.profileImage}
          teamImage={config.professional.teamImage}
        />
        
        <KeyFeatures features={config.features} />
        
        <Services 
          title="Our Services" 
          services={config.services}
        />
        
        <Credentials 
          title="Professional Credentials" 
          credentials={config.credentials}
        />
        
        <div className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Professional Memberships</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
            
            <div className="grid gap-6 max-w-3xl mx-auto">
              {config.memberships.map((membership, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border flex items-center gap-6">
                  <div className="text-blue-500">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-8 h-8">
                      <path d="M2 20h.01" />
                      <path d="M7 20v-4" />
                      <path d="M12 20v-8" />
                      <path d="M17 20V8" />
                      <path d="M22 4v16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{membership.organization}</h3>
                    <p className="text-gray-500">{membership.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Testimonials 
          title="Patient Testimonials"
          description="See what our patients have to say about their experience with Dr. Johnson."
          testimonials={config.testimonials}
        />
        
        <Contact 
          title="Schedule an Appointment"
          description={config.contact.description}
          office={config.contact.office}
          contactMethods={config.contact.contactMethods}
        />
      </main>
      
      <Footer 
        name={config.professional.name}
        profession={config.professional.profession}
        tagline={config.professional.tagline}
        quickLinks={config.footer.quickLinks}
        contactInfo={{
          address: config.contact.office.address.join(", "),
          phone: config.contact.office.phone,
          email: config.contact.office.email,
        }}
      />
      
      {/* Admin button placed at the bottom */}
      <div className="container mx-auto text-center py-4">
        <EditContentButton />
      </div>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
