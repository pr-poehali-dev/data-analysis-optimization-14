import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon, { IconName } from '@/components/ui/icon';

const bgImages = [
  'https://cdn.poehali.dev/projects/de3fdf14-087f-430f-a23c-b1a48233a15f/files/2df1c7e4-5068-48d9-a90c-d645158d0ef3.jpg',
  'https://cdn.poehali.dev/projects/de3fdf14-087f-430f-a23c-b1a48233a15f/files/94a44341-1222-44cf-b906-00e5383debfb.jpg',
  'https://cdn.poehali.dev/projects/de3fdf14-087f-430f-a23c-b1a48233a15f/files/bacbe037-d7f0-4011-927c-ae9782c8eccc.jpg',
];

const services = [
  { icon: 'Users', title: 'Семейное право', desc: 'Расторжение брака, раздел имущества, споры о детях, установление отцовства' },
  { icon: 'MapPin', title: 'Земельные споры', desc: 'Кадастровые вопросы, сделки с землёй, споры о праве собственности' },
  { icon: 'TrendingDown', title: 'Банкротство физлиц', desc: 'Сопровождение процедуры банкротства, реструктуризация долгов' },
  { icon: 'BookOpen', title: 'Наследственное право', desc: 'Помощь в вступлении в наследство, оспаривание завещаний' },
  { icon: 'Briefcase', title: 'Арбитражные споры', desc: 'Представительство в арбитражных судах всех инстанций' },
  { icon: 'Home', title: 'Жилищное право', desc: 'Споры по недвижимости, пенсионные и социальные вопросы' },
  { icon: 'Car', title: 'Автоправо', desc: 'Споры по ОСАГО и КАСКО, взыскание ущерба при ДТП' },
  { icon: 'Scale', title: 'Исковые заявления', desc: 'Составление исков, апелляционных жалоб, представление в судах' },
];

const principles = [
  { icon: 'Eye', text: 'Честная оценка перспектив и рисков дела' },
  { icon: 'Shield', text: 'Упорство и настойчивость в защите интересов клиента' },
  { icon: 'Search', text: 'Внимание к деталям при анализе документов' },
  { icon: 'MessageCircle', text: 'Прозрачность и взаимное уважение в работе с клиентом' },
  { icon: 'Zap', text: 'Современные юридические технологии и базы данных' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          {bgImages.map((src, index) => (
            <div
              key={src}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex max-w-2xl flex-col gap-10">
              {/* Portrait */}
              <div
                className={cn(
                  'transform transition-all duration-1000 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl md:h-60 md:w-60">
                  <img
                    src="https://cdn.poehali.dev/projects/de3fdf14-087f-430f-a23c-b1a48233a15f/files/49ab29fe-7f2b-4b6c-9c74-2687154d49d8.jpg"
                    alt="Дмитрий Аркадьевич Телицын"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div
                className={cn(
                  'transform transition-all duration-1000 delay-300 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Юрист · Ижевск
                  </p>
                  <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                    Дмитрий Аркадьевич<br />Телицын
                  </p>
                  <p className="text-lg font-light text-white/70 md:text-xl">
                    Более 10 лет юридической практики
                  </p>
                  <p className="max-w-md text-sm text-white/50 leading-relaxed">
                    Семейное право · Банкротство физлиц · Земельные споры · Наследство · Жилищное право
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="tel:+79501608782"
                      className="inline-flex items-center gap-2 rounded-none border border-white/80 bg-transparent px-6 py-3 text-sm font-light text-white transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      <Icon name="Phone" size={16} />
                      +7 950 160-87-82
                    </a>
                    <a
                      href="https://wa.me/79501608782"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-none border border-white/30 bg-transparent px-6 py-3 text-sm font-light text-white/70 transition-all duration-300 hover:border-white/80 hover:text-white"
                    >
                      <Icon name="MessageSquare" size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {bgImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1 transition-all duration-300',
                currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
              )}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/30 mb-4">
              Услуги
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Направления работы
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-black p-8 transition-colors duration-300 hover:bg-white/5"
              >
                <Icon name={service.icon as IconName} size={28} className="text-white/40 mb-6 transition-colors group-hover:text-white/70" />
                <h3 className="text-base font-medium text-white mb-3">{service.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-neutral-950 py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/30 mb-4">
                Подход
              </p>
              <h2 className="text-3xl font-light text-white md:text-4xl mb-8">
                Принципы работы
              </h2>
              <p className="text-white/50 leading-relaxed mb-12 text-sm max-w-md">
                За 10+ лет практики сформировал подход, который позволяет добиваться результата даже в самых сложных делах.
              </p>
              <ul className="space-y-6">
                {principles.map((p) => (
                  <li key={p.text} className="flex items-start gap-4">
                    <Icon name={p.icon as IconName} size={18} className="text-white/40 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/de3fdf14-087f-430f-a23c-b1a48233a15f/files/49ab29fe-7f2b-4b6c-9c74-2687154d49d8.jpg"
                  alt="Дмитрий Телицын"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white text-2xl font-light">10+</p>
                <p className="text-white/50 text-sm">лет юридической практики</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/30 mb-4">
              Контакты
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Запишитесь на консультацию
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            <div className="bg-black p-10">
              <Icon name="Phone" size={24} className="text-white/40 mb-6" />
              <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Телефон</p>
              <a href="tel:+79501608782" className="text-xl font-light text-white hover:text-white/70 transition-colors block mb-2">
                +7 950 160-87-82
              </a>
              <p className="text-sm text-white/40">WhatsApp, Viber</p>
            </div>

            <div className="bg-black p-10">
              <Icon name="Mail" size={24} className="text-white/40 mb-6" />
              <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Email</p>
              <a href="mailto:yur-depo@mail.ru" className="text-xl font-light text-white hover:text-white/70 transition-colors block mb-2">
                yur-depo@mail.ru
              </a>
              <p className="text-sm text-white/40">Ответим в течение дня</p>
            </div>

            <div className="bg-black p-10">
              <Icon name="MapPin" size={24} className="text-white/40 mb-6" />
              <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Адрес</p>
              <p className="text-xl font-light text-white mb-2">
                ул. Пастухова, 41А
              </p>
              <p className="text-sm text-white/40">Ижевск · Пн–Пт, 10:00–19:00</p>
            </div>
          </div>

          <div className="mt-px bg-white/10">
            <div className="bg-black p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white text-lg font-light mb-1">Готовы обсудить ваше дело?</p>
                <p className="text-white/40 text-sm">Первичная консультация поможет оценить перспективы</p>
              </div>
              <a
                href="tel:+79501608782"
                className="inline-flex items-center gap-3 border border-white/80 bg-transparent px-8 py-4 text-sm font-light text-white transition-all duration-300 hover:bg-white hover:text-black whitespace-nowrap"
              >
                <Icon name="Phone" size={16} />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 py-8 border-t border-white/5">
        <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">
            © 2026 Дмитрий Аркадьевич Телицын — Юридические услуги, Ижевск
          </p>
          <a
            href="http://юристы-ижевск18.рф"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 text-sm hover:text-white/50 transition-colors"
          >
            юристы-ижевск18.рф
          </a>
        </div>
      </footer>
    </>
  );
}