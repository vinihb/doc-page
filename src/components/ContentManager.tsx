
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { SiteConfig, defaultSiteConfig } from "@/config/siteConfig";

const ContentManager = ({ initialConfig = defaultSiteConfig, onSave }: { 
  initialConfig?: SiteConfig; 
  onSave?: (config: SiteConfig) => void;
}) => {
  const [config, setConfig] = useState<SiteConfig>(initialConfig);

  const handleChange = (path: string[], value: any) => {
    setConfig((prevConfig) => {
      const newConfig = { ...prevConfig };
      let current = newConfig;
      
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i] as keyof typeof current] as any;
      }
      
      const lastKey = path[path.length - 1];
      current[lastKey as keyof typeof current] = value;
      
      return newConfig;
    });
  };

  const handleSave = () => {
    const configString = JSON.stringify(config, null, 2);
    
    // Save to localStorage for persistence
    localStorage.setItem('siteConfig', configString);
    
    // Copy to clipboard
    navigator.clipboard.writeText(configString)
      .then(() => {
        toast({
          title: "Configuration saved!",
          description: "The configuration has been copied to clipboard and saved to local storage.",
        });
      })
      .catch(() => {
        toast({
          title: "Configuration saved!",
          description: "The configuration has been saved to local storage.",
          variant: "default",
        });
      });
      
    if (onSave) {
      onSave(config);
    }
  };

  const handleReset = () => {
    setConfig(defaultSiteConfig);
    toast({
      title: "Configuration reset",
      description: "All changes have been discarded and the configuration has been reset to default.",
      variant: "destructive",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Content Manager</CardTitle>
          <CardDescription>
            Update your website content, colors, and images in one place.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="professional">
              <AccordionTrigger>Professional Information</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <Input 
                      value={config.professional.name} 
                      onChange={(e) => handleChange(['professional', 'name'], e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Profession</label>
                    <Input 
                      value={config.professional.profession} 
                      onChange={(e) => handleChange(['professional', 'profession'], e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Tagline</label>
                    <Input 
                      value={config.professional.tagline} 
                      onChange={(e) => handleChange(['professional', 'tagline'], e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <Textarea 
                      value={config.professional.description} 
                      onChange={(e) => handleChange(['professional', 'description'], e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Profile Image URL</label>
                    <Input 
                      value={config.professional.profileImage} 
                      onChange={(e) => handleChange(['professional', 'profileImage'], e.target.value)}
                    />
                    {config.professional.profileImage && (
                      <div className="mt-2">
                        <img 
                          src={config.professional.profileImage} 
                          alt="Profile Preview" 
                          className="h-20 w-20 object-cover rounded-full" 
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Team Image URL (optional)</label>
                    <Input 
                      value={config.professional.teamImage || ''} 
                      onChange={(e) => handleChange(['professional', 'teamImage'], e.target.value)}
                    />
                    {config.professional.teamImage && (
                      <div className="mt-2">
                        <img 
                          src={config.professional.teamImage} 
                          alt="Team Preview" 
                          className="h-20 object-cover rounded" 
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Primary CTA</label>
                    <Input 
                      value={config.professional.primaryCTA} 
                      onChange={(e) => handleChange(['professional', 'primaryCTA'], e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Secondary CTA</label>
                    <Input 
                      value={config.professional.secondaryCTA} 
                      onChange={(e) => handleChange(['professional', 'secondaryCTA'], e.target.value)}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="branding">
              <AccordionTrigger>Branding & Colors</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Primary Color</label>
                    <div className="flex items-center">
                      <Input 
                        type="color"
                        value={config.branding.primaryColor} 
                        onChange={(e) => handleChange(['branding', 'primaryColor'], e.target.value)}
                        className="w-12 h-12 p-1"
                      />
                      <Input 
                        type="text"
                        value={config.branding.primaryColor} 
                        onChange={(e) => handleChange(['branding', 'primaryColor'], e.target.value)}
                        className="ml-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Secondary Color</label>
                    <div className="flex items-center">
                      <Input 
                        type="color"
                        value={config.branding.secondaryColor} 
                        onChange={(e) => handleChange(['branding', 'secondaryColor'], e.target.value)}
                        className="w-12 h-12 p-1"
                      />
                      <Input 
                        type="text"
                        value={config.branding.secondaryColor} 
                        onChange={(e) => handleChange(['branding', 'secondaryColor'], e.target.value)}
                        className="ml-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Accent Color</label>
                    <div className="flex items-center">
                      <Input 
                        type="color"
                        value={config.branding.accentColor} 
                        onChange={(e) => handleChange(['branding', 'accentColor'], e.target.value)}
                        className="w-12 h-12 p-1"
                      />
                      <Input 
                        type="text"
                        value={config.branding.accentColor} 
                        onChange={(e) => handleChange(['branding', 'accentColor'], e.target.value)}
                        className="ml-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Logo URL (optional)</label>
                    <Input 
                      value={config.branding.logo || ''} 
                      onChange={(e) => handleChange(['branding', 'logo'], e.target.value)}
                    />
                    {config.branding.logo && (
                      <div className="mt-2">
                        <img 
                          src={config.branding.logo} 
                          alt="Logo Preview" 
                          className="h-12 object-contain" 
                        />
                      </div>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* We would add more sections for other parts of the config */}
            <AccordionItem value="exportConfig">
              <AccordionTrigger>Export/Import Configuration</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Current Configuration</label>
                    <Textarea 
                      value={JSON.stringify(config, null, 2)}
                      rows={10}
                      readOnly
                      className="font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Import Configuration</label>
                    <Textarea 
                      placeholder="Paste configuration JSON here..."
                      rows={5}
                      className="font-mono text-sm"
                      onChange={(e) => {
                        try {
                          const importedConfig = JSON.parse(e.target.value);
                          setConfig(importedConfig);
                          toast({
                            title: "Configuration imported!",
                            description: "The new configuration has been loaded.",
                          });
                        } catch (error) {
                          // Only show error if there's content
                          if (e.target.value.trim()) {
                            toast({
                              title: "Invalid JSON",
                              description: "Please check the format and try again.",
                              variant: "destructive",
                            });
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleReset}>Reset to Default</Button>
          <Button onClick={handleSave}>Save Configuration</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContentManager;
