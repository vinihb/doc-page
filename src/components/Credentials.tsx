
interface CredentialItem {
  category: string;
  institution: string;
  details: string;
  period?: string;
  role?: string;
}

interface CredentialsProps {
  title: string;
  credentials: CredentialItem[];
}

const Credentials = ({ title, credentials }: CredentialsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{title}</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="grid gap-8 max-w-3xl mx-auto">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-blue-500 text-xl mb-2">{credential.category}</h3>
              <h4 className="text-xl font-bold mb-1">{credential.institution}</h4>
              <p className="text-gray-700 mb-1">{credential.details}</p>
              {credential.role && <p className="text-gray-600 mb-1">{credential.role}</p>}
              {credential.period && <p className="text-gray-500">{credential.period}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
