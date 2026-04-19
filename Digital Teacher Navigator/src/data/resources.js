export const resources = []

export const TEMPLATES = [
  {
    id: 't1',
    title: 'Шаблон урока — Обществознание',
    description: 'Готовая презентация с структурой урока для 9 класса',
    type: 'presentation',
    url: 'https://disk.yandex.ru/placeholder1',
  },
  {
    id: 't2',
    title: 'Рабочий лист — История',
    description: 'Лист с заданиями для самостоятельной работы учеников',
    type: 'worksheet',
    url: 'https://disk.yandex.ru/placeholder2',
  },
]

export const AI_PROMPTS = [
  {
    id: 'p1',
    title: 'Составить план урока',
    text: 'Составь подробный план урока по теме [ТЕМА] для [КЛАСС] класса. Включи: цель урока, этапы, методы работы, домашнее задание.',
  },
  {
    id: 'p2',
    title: 'Создать проверочные вопросы',
    text: 'Создай 10 проверочных вопросов разного уровня сложности по теме [ТЕМА] для [КЛАСС] класса. Добавь правильные ответы.',
  },
]

export const AI_SERVICES = [
  {
    id: 's1',
    title: 'YandexGPT',
    description: 'Нейросеть от Яндекса для генерации текстов и ответов на вопросы',
    url: 'https://300.ya.ru',
  },
  {
    id: 's2',
    title: 'GigaChat',
    description: 'Языковая модель от Сбера, работает на русском языке',
    url: 'https://gigachat.devices.sberbank.ru',
  },
]

export const INTERACTIVE_TOOLS = [
  {
    id: 'i1',
    title: 'Quizizz',
    description: 'Создавай викторины и опросы для класса. Российский аналог Kahoot.',
    url: 'https://quizizz.com',
    pdfUrl: null,
    videoUrl: 'https://rutube.ru/placeholder1',
  },
  {
    id: 'i2',
    title: 'Mentimeter',
    description: 'Интерактивные презентации с живым голосованием аудитории.',
    url: 'https://mentimeter.com',
    pdfUrl: 'https://disk.yandex.ru/placeholder2',
    videoUrl: null,
  },
  {
    id: 'i3',
    title: 'Wordwall',
    description: 'Игровые задания и упражнения: кроссворды, анаграммы, викторины.',
    url: 'https://wordwall.net',
    pdfUrl: null,
    videoUrl: null,
  },
]
