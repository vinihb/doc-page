
import { useState } from "react";
import { Link } from "react-router-dom";
import { heart } from "lucide-react";

interface HeaderProps {
  name: string;
  profession: string;
}

const Header = ({ name, profession }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-blue-500 text-3xl">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-8 h-8">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.74-4.5 2.05C10.832 3.74 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-blue-500 text-xl md:text-2xl font-bold">{name}</h1>
            <p className="text-gray-500 text-sm md:text-base">{profession}</p>
          </div>
        </Link>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
          </div>
        </button>
        
        <nav className={`absolute top-full left-0 w-full bg-white shadow-lg md:static md:shadow-none md:w-auto md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-6 p-4 md:p-0">
            <li><Link to="/" className="block py-2 hover:text-blue-500">Home</Link></li>
            <li><Link to="#about" className="block py-2 hover:text-blue-500">About</Link></li>
            <li><Link to="#services" className="block py-2 hover:text-blue-500">Services</Link></li>
            <li><Link to="#testimonials" className="block py-2 hover:text-blue-500">Testimonials</Link></li>
            <li><Link to="#contact" className="block py-2 hover:text-blue-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
