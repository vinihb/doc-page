
import { useConfig } from "@/context/ConfigContext";
import ContentManager from "@/components/ContentManager";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConfigEditor = () => {
  const { config, updateConfig } = useConfig();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Site Configuration</h1>
        <Button asChild>
          <Link to="/">Return to Site</Link>
        </Button>
      </div>
      
      <ContentManager 
        initialConfig={config} 
        onSave={updateConfig} 
      />
    </div>
  );
};

export default ConfigEditor;
