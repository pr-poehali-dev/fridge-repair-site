import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      title: 'Диагностика холодильника',
      description: 'Полная проверка всех систем и выявление неисправностей',
      price: 'от 500 ₽',
      icon: 'Search',
    },
    {
      title: 'Ремонт компрессора',
      description: 'Замена и ремонт компрессора любой сложности',
      price: 'от 3000 ₽',
      icon: 'Settings',
    },
    {
      title: 'Замена терморегулятора',
      description: 'Установка нового терморегулятора с гарантией',
      price: 'от 1500 ₽',
      icon: 'Thermometer',
    },
    {
      title: 'Устранение утечки фреона',
      description: 'Поиск и устранение утечки, заправка системы',
      price: 'от 2500 ₽',
      icon: 'Wind',
    },
    {
      title: 'Замена уплотнителя двери',
      description: 'Установка качественного уплотнителя для любых моделей',
      price: 'от 800 ₽',
      icon: 'DoorOpen',
    },
    {
      title: 'Ремонт системы No Frost',
      description: 'Восстановление работы системы автоматической разморозки',
      price: 'от 2000 ₽',
      icon: 'Snowflake',
    },
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт более 15 лет',
      description: 'Успешно отремонтировано более 5000 холодильников',
    },
    {
      icon: 'Clock',
      title: 'Быстрый выезд',
      description: 'Приедем в течение 2 часов после вашего звонка',
    },
    {
      icon: 'Shield',
      title: 'Гарантия 6 месяцев',
      description: 'На все виды работ и установленные запчасти',
    },
    {
      icon: 'Wrench',
      title: 'Профессиональное оборудование',
      description: 'Используем современные инструменты и оригинальные детали',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Refrigerator" className="text-primary" size={32} />
            <span className="text-xl font-bold text-secondary">РемонтХолод</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button size="lg" className="hidden md:flex gap-2">
            <Icon name="Phone" size={20} />
            +7 (999) 123-45-67
          </Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Работаем без выходных
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Профессиональный ремонт холодильников в Москве
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Быстро устраним любую неисправность. Выезд мастера в день обращения. Гарантия на все работы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
              <div className="mt-8 flex gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span>Оригинальные запчасти</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span>Выезд бесплатно</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white">
                <Icon name="Refrigerator" size={200} className="mx-auto opacity-20" />
                <div className="absolute top-8 right-8 bg-white rounded-lg p-4 text-secondary shadow-lg">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
                <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 text-secondary shadow-lg">
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-sm">ремонтов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground">
              Надежность и качество, проверенные временем
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground">
              Полный спектр работ по ремонту холодильников
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Оставьте заявку
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Заполните форму, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите проблему с холодильником"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary mb-6">Контакты</h3>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <a href="tel:+79991234567" className="text-lg text-primary hover:underline">
                        +7 (999) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <a href="https://wa.me/79991234567" className="text-lg text-green-600 hover:underline">
                        Написать в WhatsApp
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Быстрый ответ в мессенджере</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:info@remontholod.ru" className="text-lg text-primary hover:underline">
                        info@remontholod.ru
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">Москва и Московская область</p>
                      <p className="text-sm text-muted-foreground mt-1">Выезд на дом</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Refrigerator" size={32} />
                <span className="text-xl font-bold">РемонтХолод</span>
              </div>
              <p className="text-white/80">
                Профессиональный ремонт холодильников в Москве с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#advantages" className="hover:text-white transition-colors">
                    Преимущества
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (999) 123-45-67</li>
                <li>info@remontholod.ru</li>
                <li>Москва, выезд на дом</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 РемонтХолод. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
