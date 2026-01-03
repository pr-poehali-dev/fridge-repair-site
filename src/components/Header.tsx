import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Wrench" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Ремонт Холодильников</h1>
              <p className="text-xs text-muted-foreground">Профессионально и надежно</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              Услуги
            </Link>
            <a href="tel:+79001234567" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity font-medium">
              <Icon name="Phone" size={18} />
              +7 (900) 123-45-67
            </a>
          </nav>

          <button className="md:hidden text-foreground">
            <Icon name="Menu" size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
