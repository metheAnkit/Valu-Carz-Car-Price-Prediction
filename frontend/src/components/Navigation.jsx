import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Car, Info } from 'lucide-react';

const RupeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4" fill="currentColor">
    <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z" />
  </svg>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-accent' : 'text-white hover:text-accent';
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-19 h-7 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <img src="/logo.png" alt="Valu Carz" className="w-16 h-12 object-contain" />
            </div>
            <span className="text-2xl font-bold italic group-hover:text-accent transition-colors hidden sm:inline">Valu Carz</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`flex items-center space-x-1 transition-colors ${isActive('/')}`}>
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/predict-price" className={`flex items-center space-x-1 transition-colors ${isActive('/predict-price')}`}>
              <RupeeIcon />
              <span>Predict Price</span>
            </Link>
            <Link to="/car-explorer" className={`flex items-center space-x-1 transition-colors ${isActive('/car-explorer')}`}>
              <Car size={18} />
              <span>Car Explorer</span>
            </Link>
            <Link to="/about" className={`flex items-center space-x-1 transition-colors ${isActive('/about')}`}>
              <Info size={18} />
              <span>About</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link
              to="/predict-price"
              className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${isActive('/predict-price')}`}
              onClick={() => setIsOpen(false)}
            >
              <RupeeIcon />
              <span>Predict Price</span>
            </Link>
            <Link
              to="/car-explorer"
              className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${isActive('/car-explorer')}`}
              onClick={() => setIsOpen(false)}
            >
              <Car size={18} />
              <span>Car Explorer</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${isActive('/about')}`}
              onClick={() => setIsOpen(false)}
            >
              <Info size={18} />
              <span>About</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
