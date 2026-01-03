import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Services = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш мастер свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const services = [
    {
      icon: "Thermometer",
      title: "Замена термостата",
      description: "Диагностика и замена термостата при неправильной температуре в камерах",
      price: "от 1 500 ₽",
      duration: "1-2 часа"
    },
    {
      icon: "Wind",
      title: "Заправка фреоном",
      description: "Устранение утечки хладагента и заправка системы фреоном",
      price: "от 2 500 ₽",
      duration: "2-3 часа"
    },
    {
      icon: "Zap",
      title: "Ремонт компрессора",
      description: "Замена или ремонт компрессора при отсутствии охлаждения",
      price: "от 3 500 ₽",
      duration: "3-4 часа"
    },
    {
      icon: "DoorClosed",
      title: "Замена уплотнителя",
      description: "Установка нового резинового уплотнителя двери для герметичности",
      price: "от 800 ₽",
      duration: "30 минут"
    },
    {
      icon: "Snowflake",
      title: "Ремонт системы No Frost",
      description: "Восстановление работы автоматической системы разморозки",
      price: "от 2 000 ₽",
      duration: "2-3 часа"
    },
    {
      icon: "Power",
      title: "Ремонт электронного модуля",
      description: "Диагностика и замена платы управления холодильника",
      price: "от 2 800 ₽",
      duration: "2-3 часа"
    },
    {
      icon: "Droplet",
      title: "Устранение протечек",
      description: "Поиск и устранение причин протекания воды из холодильника",
      price: "от 1 200 ₽",
      duration: "1-2 часа"
    },
    {
      icon: "Fan",
      title: "Замена вентилятора",
      description: "Ремонт или замена вентилятора охлаждения в холодильной камере",
      price: "от 1 800 ₽",
      duration: "1-2 часа"
    },
    {
      icon: "Lightbulb",
      title: "Замена освещения",
      description: "Замена лампочки или ремонт системы освещения внутри холодильника",
      price: "от 500 ₽",
      duration: "15 минут"
    }
  ];

  const brands = [
    "Indesit", "Ariston", "Samsung", "LG", "Bosch", "Siemens", 
    "Liebherr", "Electrolux", "Atlant", "Stinol", "Beko", "Whirlpool"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши услуги
            </h1>
            <p className="text-lg text-muted-foreground">
              Полный спектр услуг по ремонту и обслуживанию холодильников всех марок. 
              Работаем с оригинальными запчастями и предоставляем гарантию на все виды работ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button 
                      size="sm"
                      onClick={() => {
                        setFormData({ ...formData, service: service.title });
                        document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ремонтируем холодильники всех марок
            </h2>
            <p className="text-muted-foreground">
              Наши мастера имеют опыт работы с холодильниками любых производителей
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="bg-card border rounded-lg px-6 py-3 font-medium text-foreground hover:border-primary transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" id="order-form">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Заказать услугу
              </h2>
              <p className="text-muted-foreground">
                Оставьте заявку, и наш мастер свяжется с вами в течение 15 минут
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Ваше имя *
                      </label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (900) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Выберите услугу
                    </label>
                    <Input
                      id="service"
                      placeholder="Введите название услуги или выберите выше"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Описание проблемы
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите подробнее о неисправности холодильника..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg font-semibold" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Или позвоните нам прямо сейчас:
                  </p>
                  <a 
                    href="tel:+79001234567" 
                    className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:underline"
                  >
                    <Icon name="Phone" size={24} />
                    +7 (900) 123-45-67
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-primary-foreground">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Срочный ремонт холодильников
              </h2>
              <p className="text-lg mb-6 opacity-95">
                Выезд мастера в течение 2 часов. Ремонт в день обращения. 
                Работаем без выходных с 8:00 до 22:00
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+79001234567">
                  <Button size="lg" variant="secondary" className="text-lg font-semibold">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить сейчас
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
