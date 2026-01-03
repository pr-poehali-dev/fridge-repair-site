import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Wrench" size={28} className="text-primary" />
              <h3 className="text-xl font-bold">Ремонт Холодильников</h3>
            </div>
            <p className="text-sm opacity-90">
              Профессиональный ремонт холодильников любых марок с гарантией качества
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                +7 (900) 123-45-67
              </a>
              <a href="mailto:info@remont-holod.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={18} />
                info@remont-holod.ru
              </a>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                <span>Москва, работаем по всему городу</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Режим работы</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} />
                <span>Ежедневно: 8:00 - 22:00</span>
              </div>
              <p className="opacity-90 mt-3">
                Выезд мастера в течение 2 часов после заявки
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Ремонт Холодильников. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
