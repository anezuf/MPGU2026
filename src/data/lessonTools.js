export const TOOL_SIDEBAR_ITEMS = [
  { id: 'all', label: 'Все инструменты', icon: '✨' },
  { id: 'explanation', label: 'Объяснение материала', icon: '📖' },
  { id: 'practice', label: 'Задания и практика', icon: '✏️' },
  { id: 'testing', label: 'Тестирование', icon: '📝' },
  { id: 'surveys', label: 'Опросы и обратная связь', icon: '📋' },
]

export const LESSON_TOOLS = [
  {
    id: 'd1',
    type: 'explanation',
    typeLabel: 'ОБЪЯСНЕНИЕ',
    variant: 'teal',
    title: 'Российская электронная школа',
    description: 'Материалы для объяснения нового содержания: видеоуроки, тренировочные задания и проверочные работы.',
    usageNote: 'Видеоуроки и задания',
    url: 'https://resh.edu.ru',
  },
  {
    id: 'd2',
    type: 'practice',
    typeLabel: 'ЗАДАНИЯ',
    variant: 'teal',
    title: 'ЯКласс',
    description: 'Платформа для подбора заданий, самостоятельной работы, тренировки навыков и быстрой проверки результатов.',
    usageNote: 'Самостоятельная работа',
    url: 'https://www.yaklass.ru',
  },
  {
    id: 'd3',
    type: 'practice',
    typeLabel: 'ПРАКТИКА',
    variant: 'pink',
    title: 'Учи.ру',
    description: 'Интерактивные упражнения и сценарии для закрепления материала с учётом возраста обучающихся.',
    usageNote: 'Закрепление темы',
    url: 'https://uchi.ru',
  },
  {
    id: 'd4',
    type: 'testing',
    typeLabel: 'ТЕСТИРОВАНИЕ',
    variant: 'purple',
    title: 'Online Test Pad',
    description: 'Конструктор тестов, опросов, анкет и кроссвордов для входной, текущей и итоговой проверки понимания темы.',
    usageNote: 'Проверка знаний',
    url: 'https://onlinetestpad.com',
  },
  {
    id: 'd5',
    type: 'surveys',
    typeLabel: 'ОПРОСЫ',
    variant: 'teal',
    title: 'Яндекс Формы',
    description: 'Инструмент для сбора ответов, обратной связи, мини-опросов и рефлексии после урока.',
    usageNote: 'Обратная связь',
    url: 'https://forms.yandex.ru',
  },
]

export const TOOLS_INFO_BLOCKS = [
  {
    id: 'goal',
    icon: '🎯',
    title: 'Под цель урока',
    text: 'Выбирайте сервис по задаче: объяснить тему, закрепить материал, проверить понимание или собрать обратную связь.',
  },
  {
    id: 'example-1',
    icon: '📺',
    title: 'Пример (объяснение)',
    text: 'РЭШ — для видеоуроков и заданий при введении новой темы по обществознанию.',
  },
  {
    id: 'example-2',
    icon: '📊',
    title: 'Пример (проверка)',
    text: 'Online Test Pad и Яндекс Формы — для быстрой диагностики и рефлексии в конце урока.',
  },
]
