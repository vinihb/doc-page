
export type SiteConfig = {
  professional: {
    name: string;
    profession: string;
    tagline: string;
    description: string;
    profileImage: string;
    teamImage?: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  branding: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    logo?: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: "user" | "briefcase" | "heart" | "phone";
  }>;
  about: {
    paragraphs: string[];
  };
  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  credentials: Array<{
    category: string;
    institution: string;
    details: string;
    period?: string;
    role?: string;
  }>;
  memberships: Array<{
    organization: string;
    role: string;
  }>;
  testimonials: Array<{
    quote: string;
    name: string;
    rating: number;
    initials: string;
  }>;
  contact: {
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
  };
  footer: {
    quickLinks: Array<{
      label: string;
      href: string;
    }>;
    socialLinks?: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  };
};

// Default site configuration
export const defaultSiteConfig: SiteConfig = {
  professional: {
    name: "Dr. Viniiiii",
    profession: "Cardiology",
    tagline: "Providing expert cardiac care with compassion and advanced medical knowledge.",
    description: "Specialized cardiac care with a compassionate approach for your heart health needs.",
    profileImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1000",
    teamImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    primaryCTA: "Schedule Appointment",
    secondaryCTA: "Explore Services",
  },
  branding: {
    primaryColor: "#3b82f6", // blue-500
    secondaryColor: "#1e40af", // blue-800
    accentColor: "#eff6ff", // blue-50
    logo: "",
  },
  features: [
    {
      title: "Personalized Care",
      description: "Tailored to each patient",
      icon: "user",
    },
    {
      title: "Heart Health Expert",
      description: "Advanced diagnostics",
      icon: "heart",
    },
    {
      title: "15+ Years Experience",
      description: "Trusted expertise",
      icon: "briefcase",
    },
    {
      title: "Modern Approach",
      description: "Latest techniques",
      icon: "phone",
    },
  ],
  about: {
    paragraphs: [
      "With over 15 years of experience in cardiology, Dr. Sarah Johnson has established herself as a leading expert in cardiovascular health. Her patient-centered approach combines cutting-edge medical knowledge with compassionate care.",
      "Dr. Johnson specializes in preventive cardiology, heart disease management, and cardiac rehabilitation. Her philosophy centers on empowering patients through education and personalized treatment plans that address each individual's unique health needs."
    ],
  },
  services: [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.74-4.5 2.05C10.832 3.74 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>',
      title: "Cardiac Consultation",
      description: "Thorough evaluation of heart health with personalized recommendations.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" /></path><path d="M3.5 12h6"/><path d="M4 6.5h6"/><path d="M14 20.5L15 11l.7 9.5"/><path d="M10.5 7.5h4"/></svg>',
      title: "Diagnostic Testing",
      description: "Advanced cardiac testing including ECG, echocardiography, and stress tests.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><path d="M14 3a7 7 0 0 1 0 14h-4a7 7 0 0 1 0-14h4z"/></svg>',
      title: "Preventive Cardiology",
      description: "Risk assessment and strategies to prevent cardiac disease.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M12 13.5V19"/></svg>',
      title: "Heart Disease Management",
      description: "Ongoing care and management for patients with existing heart conditions.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
      title: "Cardiac Rehabilitation",
      description: "Supervised programs to improve cardiovascular health after cardiac events.",
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="14" x="8" y="3" rx="1"/><path d="M8 8h8"/><path d="M8 12h8"/><circle cx="12" cy="20" r="1"/></svg>',
      title: "Medication Management",
      description: "Optimization of cardiac medication regimens with regular monitoring.",
    },
  ],
  credentials: [
    {
      category: "Medical Degree",
      institution: "Harvard Medical School",
      details: "Doctor of Medicine with Honors",
      period: "2003 - 2007",
    },
    {
      category: "Residency",
      institution: "Massachusetts General Hospital",
      details: "Internal Medicine",
      period: "2007 - 2010",
    },
    {
      category: "Fellowship",
      institution: "Cleveland Clinic",
      details: "Cardiovascular Medicine",
      period: "2010 - 2013",
    },
  ],
  memberships: [
    {
      organization: "American College of Cardiology",
      role: "Fellow",
    },
    {
      organization: "American Heart Association",
      role: "Professional Member",
    },
    {
      organization: "Society of Cardiovascular Angiography and Interventions",
      role: "Active Member",
    },
  ],
  testimonials: [
    {
      quote: "Dr. Johnson took the time to explain my condition in detail and answered all my questions. Her approach made me feel comfortable and confident in my treatment plan.",
      name: "Robert B.",
      rating: 5,
      initials: "RB",
    },
    {
      quote: "I've been seeing Dr. Johnson for 3 years and she's helped me manage my heart condition with expertise and compassion. I always feel well-cared for during my visits.",
      name: "Maria T.",
      rating: 5,
      initials: "MT",
    },
    {
      quote: "After my heart attack, Dr. Johnson's cardiac rehabilitation program has been instrumental in my recovery. Her guidance helped me make important lifestyle changes.",
      name: "James L.",
      rating: 5,
      initials: "JL",
    },
  ],
  contact: {
    description: "Contact us today to schedule your consultation with Dr. Johnson. We're committed to providing prompt and professional care for all your cardiac health needs.",
    office: {
      address: [
        "123 Heartbeat Avenue",
        "Medical Center, Suite 405",
        "Boston, MA 02115",
      ],
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      phone: "(617) 555-0123",
      email: "info@drjohnsoncardiology.com",
    },
    contactMethods: {
      whatsapp: "+16175550123",
      phone: "+16175550123",
      email: "appointments@drjohnsoncardiology.com",
    },
  },
  footer: {
    quickLinks: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
      {
        platform: "Twitter",
        url: "https://twitter.com/drjohnsoncardio",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>'
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/drjohnsoncardio",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
      }
    ]
  },
};

