import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш мастер свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/5 to-background py-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Профессиональный ремонт холодильников
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Более 10 лет опыта. Ремонт любой сложности. Выезд мастера в день обращения. 
                Гарантия на все виды работ до 12 месяцев.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm border">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Быстрый выезд</h3>
                    <p className="text-sm text-muted-foreground">В течение 2 часов после заявки</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm border">
                  <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Гарантия</h3>
                    <p className="text-sm text-muted-foreground">До 12 месяцев на работы</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm border">
                  <Icon name="Wrench" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Опыт</h3>
                    <p className="text-sm text-muted-foreground">Более 10 лет на рынке</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm border">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Качество</h3>
                    <p className="text-sm text-muted-foreground">Оригинальные запчасти</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg font-semibold"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg font-semibold"
                  onClick={() => navigate('/services')}
                >
                  Наши услуги
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="https://cdn.poehali.dev/projects/0ef39b22-0f7f-493a-ba4f-46a6047fdf33/files/8b6167aa-b924-4420-9385-2670957983cb.jpg" 
                alt="Профессиональный ремонт холодильников" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              
              <div className="bg-card rounded-lg shadow-lg p-8 border">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="ClipboardList" size={28} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Оставить заявку</h2>
                </div>
              
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
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
                    Телефон
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Описание проблемы
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Опишите, что случилось с холодильником..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full text-lg font-semibold" size="lg">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  Или позвоните нам прямо сейчас:
                </p>
                <a 
                  href="tel:+79001234567" 
                  className="flex items-center justify-center gap-2 mt-3 text-lg font-bold text-primary hover:underline"
                >
                  <Icon name="Phone" size={20} />
                  +7 (900) 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="ThumbsUp" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Профессионализм</h3>
              <p className="text-muted-foreground">
                Сертифицированные мастера с опытом работы более 10 лет
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Оперативность</h3>
              <p className="text-muted-foreground">
                Выезд мастера в течение 2 часов. Большинство ремонтов — за один визит
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="BadgeCheck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Надежность</h3>
              <p className="text-muted-foreground">
                Гарантия на все работы и запчасти. Прозрачное ценообразование
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;