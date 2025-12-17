import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

type Presentation = 'restoration' | 'conservation';

interface Slide {
  title: string;
  content: string[];
  icon: string;
  isTitleSlide?: boolean;
  isFinalSlide?: boolean;
}

const restorationSlides: Slide[] = [
  {
    title: 'Современные виды реставрации',
    icon: 'Presentation',
    content: [
      'Бондаренко Лилия',
      'Группа Д-23'
    ],
    isTitleSlide: true
  },
  {
    title: 'Введение в реставрацию',
    icon: 'Brush',
    content: [
      'Реставрация — это комплекс научно обоснованных мероприятий по сохранению культурных ценностей',
      'Цель: восстановление первоначального облика объекта при сохранении его исторической подлинности',
      'Основана на междисциплинарном подходе: история, химия, физика, искусствоведение'
    ]
  },
  {
    title: 'История развития',
    icon: 'BookOpen',
    content: [
      'XVIII век: первые попытки научной реставрации в Европе',
      '1964 год: Венецианская хартия — международный документ по реставрации',
      'XX век: переход от "творческой реставрации" к научно обоснованным методам',
      'XXI век: цифровые технологии и неинвазивные методы исследования'
    ]
  },
  {
    title: 'Современные методы',
    icon: 'Microscope',
    content: [
      '3D-сканирование и моделирование объектов',
      'Лазерная очистка поверхностей без механического воздействия',
      'Цифровая реконструкция утраченных фрагментов',
      'Рентгенофлуоресцентный анализ для определения состава материалов',
      'Нанотехнологии в укреплении структуры памятников'
    ]
  },
  {
    title: 'Практические примеры',
    icon: 'Landmark',
    content: [
      'Сикстинская капелла: 20-летняя реставрация фресок Микеланджело',
      'Янтарная комната: полная реконструкция с применением современных технологий',
      'Собор Парижской Богоматери: цифровое моделирование для восстановления после пожара',
      'Терракотовая армия: стабилизация полихромии с помощью полимерных материалов'
    ]
  },
  {
    title: 'Перспективы развития',
    icon: 'TrendingUp',
    content: [
      'Искусственный интеллект для прогнозирования разрушений',
      'Биотехнологии в борьбе с биологическими повреждениями',
      'Виртуальная реальность для презентации исторических объектов',
      'Развитие обратимых методов реставрации',
      'Международное сотрудничество и обмен опытом'
    ]
  },
  {
    title: 'Спасибо за внимание',
    icon: 'Heart',
    content: [
      'Бондаренко Лилия',
      'Группа Д-23'
    ],
    isFinalSlide: true
  }
];

const conservationSlides: Slide[] = [
  {
    title: 'Современные виды консервации',
    icon: 'Presentation',
    content: [
      'Бондаренко Лилия',
      'Группа Д-23'
    ],
    isTitleSlide: true
  },
  {
    title: 'Введение в консервацию',
    icon: 'Shield',
    content: [
      'Консервация — комплекс мер по предотвращению разрушения культурных ценностей',
      'Главная задача: сохранение объекта в существующем состоянии без изменений',
      'Приоритет: профилактика и минимальное вмешательство',
      'Отличие от реставрации: консервация не восстанавливает утраты'
    ]
  },
  {
    title: 'Исторический путь',
    icon: 'Clock',
    content: [
      'Древний мир: первые методы мумификации и сохранения артефактов',
      'XIX век: развитие научной консервации в музейной практике',
      'Середина XX века: создание специализированных консервационных центров',
      'Современность: превентивная консервация как приоритетное направление'
    ]
  },
  {
    title: 'Современные технологии',
    icon: 'Cpu',
    content: [
      'Климат-контроль: точная регуляция температуры и влажности',
      'Бескислородное хранение особо ценных экспонатов',
      'Мониторинг состояния объектов с помощью датчиков',
      'Защита от ультрафиолетового излучения специальными фильтрами',
      'Применение нанокомпозитных защитных покрытий'
    ]
  },
  {
    title: 'Успешные кейсы',
    icon: 'Award',
    content: [
      'Мёртвое море: сохранение древних свитков с помощью контролируемой среды',
      'Эрмитаж: система превентивной консервации для миллионов экспонатов',
      'Британский музей: программа мониторинга египетских мумий',
      'Лувр: внедрение интеллектуальной системы климат-контроля'
    ]
  },
  {
    title: 'Будущее консервации',
    icon: 'Sparkles',
    content: [
      'IoT-технологии для непрерывного мониторинга состояния объектов',
      'Предиктивная аналитика для предупреждения разрушений',
      'Экологичные консервационные материалы',
      'Цифровая консервация: создание точных копий для будущих поколений',
      'Глобальные базы данных методик и результатов консервации'
    ]
  },
  {
    title: 'Спасибо за внимание',
    icon: 'Heart',
    content: [
      'Бондаренко Лилия',
      'Группа Д-23'
    ],
    isFinalSlide: true
  }
];

const Index = () => {
  const [selectedPresentation, setSelectedPresentation] = useState<Presentation | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = selectedPresentation === 'restoration' ? restorationSlides : conservationSlides;
  const presentationTitle = selectedPresentation === 'restoration' 
    ? 'Современные виды реставрации' 
    : 'Современные виды консервации';

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleReset = () => {
    setSelectedPresentation(null);
    setCurrentSlide(0);
  };

  if (!selectedPresentation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-4xl w-full animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-center mb-4 text-foreground">
            Презентации
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Выберите тему для просмотра
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card 
              className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              onClick={() => setSelectedPresentation('restoration')}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Brush" size={32} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-semibold">
                  Современные виды реставрации
                </h2>
                <p className="text-muted-foreground">
                  Методы восстановления и сохранения культурного наследия
                </p>
              </div>
            </Card>

            <Card 
              className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              onClick={() => setSelectedPresentation('conservation')}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-semibold">
                  Современные виды консервации
                </h2>
                <p className="text-muted-foreground">
                  Технологии предотвращения разрушения артефактов
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="font-heading text-xl font-semibold text-foreground">
            {presentationTitle}
          </h1>
          <Button variant="ghost" onClick={handleReset}>
            <Icon name="Home" size={20} className="mr-2" />
            Назад к выбору
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="bg-card rounded-lg border border-border p-12 min-h-[500px] flex flex-col justify-center animate-fade-in">
            {slides[currentSlide].isTitleSlide || slides[currentSlide].isFinalSlide ? (
              <div className="text-center space-y-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name={slides[currentSlide].icon} size={40} className="text-primary" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  {slides[currentSlide].title}
                </h2>
                <div className="space-y-4 pt-8">
                  {slides[currentSlide].content.map((text, index) => (
                    <p 
                      key={index} 
                      className="text-2xl text-muted-foreground animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={slides[currentSlide].icon} size={28} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    {slides[currentSlide].title}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {slides[currentSlide].content.map((text, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-lg text-foreground leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>

            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              className="gap-2"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <div className="text-center mt-4 text-sm text-muted-foreground">
            Слайд {currentSlide + 1} из {slides.length}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;