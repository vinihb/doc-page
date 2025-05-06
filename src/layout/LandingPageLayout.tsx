
import { ReactNode } from "react";
import { SiteConfig } from "@/config/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface LandingPageLayoutProps {
  config: SiteConfig;
  children: ReactNode;
}

const LandingPageLayout = ({ config, children }: LandingPageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        name={config.professional.name} 
        profession={config.professional.profession} 
      />
      
      <main className="flex-grow">
        {children}
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
      
      <ScrollToTop />
    </div>
  );
};

export default LandingPageLayout;
