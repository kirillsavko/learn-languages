import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store/types'
import { Level, Word } from '@/types/words'

type WordsState = {
  words: Word[]
  chosenLevel: Level | null
}

const initialState: WordsState = {
  words: [
    {
      en: 'To be',
      ru: 'Быть',
      level: 'A1',
      done: false
    },
    {
      en: 'To do',
      ru: 'Делать',
      level: 'A1',
      done: false
    },
    {
      en: 'To feel',
      ru: 'Чувствовать',
      level: 'A1',
      done: false
    },
    {
      en: 'To see',
      ru: 'Видеть',
      level: 'A1',
      done: false
    },
    {
      en: 'To hear',
      ru: 'Слышать',
      level: 'A1',
      done: false
    },
    {
      en: 'To run',
      ru: 'Бежать',
      level: 'A1',
      done: false
    },
    {
      en: 'To get',
      ru: 'Получать',
      level: 'A1',
      done: false
    },
    {
      en: 'To make',
      ru: 'Сделать',
      level: 'A1',
      done: false
    },
    {
      en: 'To cook',
      ru: 'Готовить',
      level: 'A1',
      done: false
    },
    {
      en: 'To sing',
      ru: 'Петь',
      level: 'A1',
      done: false
    },
    {
      en: 'To speak',
      ru: 'Разговаривать',
      level: 'A1',
      done: false
    },
    {
      en: 'To say',
      ru: 'Говорить',
      level: 'A1',
      done: false
    },
    {
      en: 'To tell',
      ru: 'Рассказывать',
      level: 'A1',
      done: false
    },
    {
      en: 'To take',
      ru: 'Брать',
      level: 'A1',
      done: false
    },
    {
      en: 'To sit',
      ru: 'Садиться',
      level: 'A1',
      done: false
    },
    {
      en: 'To stand',
      ru: 'Стоять',
      level: 'A1',
      done: false
    },
    {
      en: 'To laugh',
      ru: 'Смеяться',
      level: 'A1',
      done: false
    },
    {
      en: 'To smile',
      ru: 'Улыбаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To open',
      ru: 'Открывать',
      level: 'A1',
      done: false
    },
    {
      en: 'To close',
      ru: 'Закрывать',
      level: 'A1',
      done: false
    },
    {
      en: 'To love',
      ru: 'Любить',
      level: 'A1',
      done: false
    },
    {
      en: 'To like',
      ru: 'Нравиться',
      level: 'A1',
      done: false
    },
    {
      en: 'To give',
      ru: 'Давать',
      level: 'A1',
      done: false
    },
    {
      en: 'To bring',
      ru: 'Приносить',
      level: 'A1',
      done: false
    },
    {
      en: 'To breath',
      ru: 'Дышать',
      level: 'A1',
      done: false
    },
    {
      en: 'To buy',
      ru: 'Покупать',
      level: 'A1',
      done: false
    },
    {
      en: 'To sell',
      ru: 'Продавать',
      level: 'A1',
      done: false
    },
    {
      en: 'To forget',
      ru: 'Забывать',
      level: 'A1',
      done: false
    },
    {
      en: 'To believe',
      ru: 'Верить',
      level: 'A1',
      done: false
    },
    {
      en: 'To have',
      ru: 'Иметь',
      level: 'A1',
      done: false
    },
    {
      en: 'To go',
      ru: 'Идти',
      level: 'A1',
      done: false
    },
    {
      en: 'To know',
      ru: 'Знать',
      level: 'A1',
      done: false
    },
    {
      en: 'To think',
      ru: 'Думать',
      level: 'A1',
      done: false
    },
    {
      en: 'To come',
      ru: 'Приходить',
      level: 'A1',
      done: false
    },
    {
      en: 'To want',
      ru: 'Хотеть',
      level: 'A1',
      done: false
    },
    {
      en: 'To use',
      ru: 'Использовать',
      level: 'A1',
      done: false
    },
    {
      en: 'To find',
      ru: 'Находить',
      level: 'A1',
      done: false
    },
    {
      en: 'To work',
      ru: 'Работать',
      level: 'A1',
      done: false
    },
    {
      en: 'To eat',
      ru: 'Есть',
      level: 'A1',
      done: false
    },
    {
      en: 'To drink',
      ru: 'Пить',
      level: 'A1',
      done: false
    },
    {
      en: 'To write',
      ru: 'Писать',
      level: 'A1',
      done: false
    },
    {
      en: 'To read',
      ru: 'Читать',
      level: 'A1',
      done: false
    },
    {
      en: 'To call',
      ru: 'Звонить',
      level: 'A1',
      done: false
    },
    {
      en: 'To try',
      ru: 'Пытаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To need',
      ru: 'Нуждаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To become',
      ru: 'Становиться',
      level: 'A1',
      done: false
    },
    {
      en: 'To put',
      ru: 'Класть',
      level: 'A1',
      done: false
    },
    {
      en: 'To leave',
      ru: 'Оставлять',
      level: 'A1',
      done: false
    },
    {
      en: 'To pay',
      ru: 'Платить',
      level: 'A1',
      done: false
    },
    {
      en: 'To play',
      ru: 'Играть',
      level: 'A1',
      done: false
    },
    {
      en: 'To pray',
      ru: 'Молиться',
      level: 'A1',
      done: false
    },
    {
      en: 'To stay',
      ru: 'Оставаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To mean',
      ru: 'Означать',
      level: 'A1',
      done: false
    },
    {
      en: 'To keep',
      ru: 'Держать, хранить',
      level: 'A1',
      done: false
    },
    {
      en: 'To let',
      ru: 'Оставлять',
      level: 'A1',
      done: false
    },
    {
      en: 'To begin',
      ru: 'Начинать',
      level: 'A1',
      done: false
    },
    {
      en: 'To start',
      ru: 'Стартовать',
      level: 'A1',
      done: false
    },
    {
      en: 'To finish',
      ru: 'Заканчивать',
      level: 'A1',
      done: false
    },
    {
      en: 'To help',
      ru: 'Помогать',
      level: 'A1',
      done: false
    },
    {
      en: 'To show',
      ru: 'Показывать',
      level: 'A1',
      done: false
    },
    {
      en: 'To cry',
      ru: 'Плакать',
      level: 'A1',
      done: false
    },
    {
      en: 'To move',
      ru: 'Двигаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To jump',
      ru: 'Прыгать',
      level: 'A1',
      done: false
    },
    {
      en: 'To live',
      ru: 'Жить',
      level: 'A1',
      done: false
    },
    {
      en: 'To die',
      ru: 'Умирать',
      level: 'A1',
      done: false
    },
    {
      en: 'To happen',
      ru: 'Случаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To lose',
      ru: 'Проигрывать',
      level: 'A1',
      done: false
    },
    {
      en: 'To hate',
      ru: 'Ненавидеть',
      level: 'A1',
      done: false
    },
    {
      en: 'To include',
      ru: 'Включать в себя',
      level: 'A1',
      done: false
    },
    {
      en: 'To turn on',
      ru: 'Включать (о приборе)',
      level: 'A1',
      done: false
    },
    {
      en: 'To turn off',
      ru: 'Выключать',
      level: 'A1',
      done: false
    },
    {
      en: 'To continue',
      ru: 'Продолжать',
      level: 'A1',
      done: false
    },
    {
      en: 'To change',
      ru: 'Менять',
      level: 'A1',
      done: false
    },
    {
      en: 'To wash',
      ru: 'Мыть',
      level: 'A1',
      done: false
    },
    {
      en: 'To clean',
      ru: 'Убирать, очищать',
      level: 'A1',
      done: false
    },
    {
      en: 'To lead',
      ru: 'Вести',
      level: 'A1',
      done: false
    },
    {
      en: 'To understand',
      ru: 'Понимать',
      level: 'A1',
      done: false
    },
    {
      en: 'To watch',
      ru: 'Смотреть',
      level: 'A1',
      done: false
    },
    {
      en: 'To discover',
      ru: 'Исследовать',
      level: 'A1',
      done: false
    },
    {
      en: 'To imagine',
      ru: 'Представлять',
      level: 'A1',
      done: false
    },
    {
      en: 'To introduce',
      ru: 'Представить',
      level: 'A1',
      done: false
    },
    {
      en: 'To follow',
      ru: 'Следовать',
      level: 'A1',
      done: false
    },
    {
      en: 'To create',
      ru: 'Создавать',
      level: 'A1',
      done: false
    },
    {
      en: 'To grow',
      ru: 'Расти',
      level: 'A1',
      done: false
    },
    {
      en: 'To spend',
      ru: 'Тратить',
      level: 'A1',
      done: false
    },
    {
      en: 'To win',
      ru: 'Выигрывать',
      level: 'A1',
      done: false
    },
    {
      en: 'To offer',
      ru: 'Предлагать',
      level: 'A1',
      done: false
    },
    {
      en: 'To learn',
      ru: 'Изучать',
      level: 'A1',
      done: false
    },
    {
      en: 'To appear',
      ru: 'Появляться',
      level: 'A1',
      done: false
    },
    {
      en: 'To disappear',
      ru: 'Исчезать',
      level: 'A1',
      done: false
    },
    {
      en: 'To build',
      ru: 'Строить',
      level: 'A1',
      done: false
    },
    {
      en: 'To break',
      ru: 'Ломать',
      level: 'A1',
      done: false
    },
    {
      en: 'To send',
      ru: 'Посылать',
      level: 'A1',
      done: false
    },
    {
      en: 'To fall',
      ru: 'Падать',
      level: 'A1',
      done: false
    },
    {
      en: 'To cut',
      ru: 'Резать',
      level: 'A1',
      done: false
    },
    {
      en: 'To achieve',
      ru: 'Достигать',
      level: 'A1',
      done: false
    },
    {
      en: 'To communicate',
      ru: 'Общаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To kill',
      ru: 'Убивать',
      level: 'A1',
      done: false
    },
    {
      en: 'To pass',
      ru: 'Проходить',
      level: 'A1',
      done: false
    },
    {
      en: 'To fly',
      ru: 'Летать',
      level: 'A1',
      done: false
    },
    {
      en: 'To swim',
      ru: 'Плавать',
      level: 'A1',
      done: false
    },
    {
      en: 'To decide',
      ru: 'Решать',
      level: 'A1',
      done: false
    },
    {
      en: 'To return',
      ru: 'Возвращаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To hope',
      ru: 'Надеяться',
      level: 'A1',
      done: false
    },
    {
      en: 'To explain',
      ru: 'Объяснять',
      level: 'A1',
      done: false
    },
    {
      en: 'To propose',
      ru: 'Предлагать',
      level: 'A1',
      done: false
    },
    {
      en: 'To develop',
      ru: 'Развивать',
      level: 'A1',
      done: false
    },
    {
      en: 'To support',
      ru: 'Поддерживать',
      level: 'A1',
      done: false
    },
    {
      en: 'To dance',
      ru: 'Танцевать',
      level: 'A1',
      done: false
    },
    {
      en: 'To draw',
      ru: 'Рисовать',
      level: 'A1',
      done: false
    },
    {
      en: 'To book',
      ru: 'Бронировать',
      level: 'A1',
      done: false
    },
    {
      en: 'To be afraid',
      ru: 'Бояться',
      level: 'A1',
      done: false
    },
    {
      en: 'To agree',
      ru: 'Соглашаться',
      level: 'A1',
      done: false
    },
    {
      en: 'To check up',
      ru: 'Проверять',
      level: 'A1',
      done: false
    },
    {
      en: 'To delete',
      ru: 'Удалять',
      level: 'A1',
      done: false
    },
    {
      en: 'To choose',
      ru: 'Выбирать',
      level: 'A1',
      done: false
    },
    {
      en: 'To catch',
      ru: 'Ловить',
      level: 'A1',
      done: false
    },
    {
      en: 'To ask',
      ru: 'Спрашивать',
      level: 'A1',
      done: false
    },
    {
      en: 'To answer',
      ru: 'Отвечать',
      level: 'A1',
      done: false
    },
    {
      en: 'To hesitate',
      ru: 'Cомневаться',
      level: 'A1',
      done: false
    },
    {
      en: 'air',
      ru: 'Воздух',
      level: 'A1',
      done: false
    },
    {
      en: 'wind',
      ru: 'Ветер',
      level: 'A1',
      done: false
    },
    {
      en: 'water',
      ru: 'Вода',
      level: 'A1',
      done: false
    },
    {
      en: 'west',
      ru: 'Запад',
      level: 'A1',
      done: false
    },
    {
      en: 'east',
      ru: 'Восток',
      level: 'A1',
      done: false
    },
    {
      en: 'north',
      ru: 'Север',
      level: 'A1',
      done: false
    },
    {
      en: 'south',
      ru: 'Юг',
      level: 'A1',
      done: false
    },
    {
      en: 'tree',
      ru: 'Дерево',
      level: 'A1',
      done: false
    },
    {
      en: 'sea',
      ru: 'Море',
      level: 'A1',
      done: false
    },
    {
      en: 'ocean',
      ru: 'Океан',
      level: 'A1',
      done: false
    },
    {
      en: 'rock',
      ru: 'Скала',
      level: 'A1',
      done: false
    },
    {
      en: 'plant',
      ru: 'Растение',
      level: 'A1',
      done: false
    },
    {
      en: 'flower',
      ru: 'Цветок',
      level: 'A1',
      done: false
    },
    {
      en: 'forest',
      ru: 'Лес',
      level: 'A1',
      done: false
    },
    {
      en: 'person',
      ru: 'Личность',
      level: 'A1',
      done: false
    },
    {
      en: 'night',
      ru: 'Ночь',
      level: 'A1',
      done: false
    },
    {
      en: 'morning',
      ru: 'Утро',
      level: 'A1',
      done: false
    },
    {
      en: 'day',
      ru: 'День',
      level: 'A1',
      done: false
    },
    {
      en: 'evening',
      ru: 'Вечер',
      level: 'A1',
      done: false
    },
    {
      en: 'life',
      ru: 'Жизнь',
      level: 'A1',
      done: false
    },
    {
      en: 'mountain',
      ru: 'Гора',
      level: 'A1',
      done: false
    },
    {
      en: 'land',
      ru: 'Земля',
      level: 'A1',
      done: false
    },
    {
      en: 'house',
      ru: 'Дом',
      level: 'A1',
      done: false
    },
    {
      en: 'fire',
      ru: 'Огонь',
      level: 'A1',
      done: false
    },
    {
      en: 'country',
      ru: 'Страна',
      level: 'A1',
      done: false
    },
    {
      en: 'animal',
      ru: 'Животное',
      level: 'A1',
      done: false
    },
    {
      en: 'bird',
      ru: 'Птица',
      level: 'A1',
      done: false
    },
    {
      en: 'fish',
      ru: 'Рыба',
      level: 'A1',
      done: false
    },
    {
      en: 'insect',
      ru: 'Насекомое',
      level: 'A1',
      done: false
    },
    {
      en: 'city',
      ru: 'Город',
      level: 'A1',
      done: false
    },
    {
      en: 'world',
      ru: 'Мир',
      level: 'A1',
      done: false
    },
    {
      en: 'boy',
      ru: 'мальчик',
      level: 'A1',
      done: false
    },
    {
      en: 'girl',
      ru: 'девочка',
      level: 'A1',
      done: false
    },
    {
      en: 'mother',
      ru: 'мама',
      level: 'A1',
      done: false
    },
    {
      en: 'father',
      ru: 'папа',
      level: 'A1',
      done: false
    },
    {
      en: 'son',
      ru: 'сын',
      level: 'A1',
      done: false
    },
    {
      en: 'daughter',
      ru: 'дочь',
      level: 'A1',
      done: false
    },
    {
      en: 'baby',
      ru: 'ребенок',
      level: 'A1',
      done: false
    },
    {
      en: 'family',
      ru: 'семья',
      level: 'A1',
      done: false
    },
    {
      en: 'grand mother',
      ru: 'бабушка',
      level: 'A1',
      done: false
    },
    {
      en: 'grand father',
      ru: 'дедушка',
      level: 'A1',
      done: false
    },
    {
      en: 'children',
      ru: 'дети',
      level: 'A1',
      done: false
    },
    {
      en: 'home',
      ru: 'дом',
      level: 'A1',
      done: false
    },
    {
      en: 'love',
      ru: 'любовь',
      level: 'A1',
      done: false
    },
    {
      en: 'apartment',
      ru: 'квартира',
      level: 'A1',
      done: false
    },
    {
      en: 'joy',
      ru: 'радость',
      level: 'A1',
      done: false
    },
    {
      en: 'nephew',
      ru: 'племянник',
      level: 'A1',
      done: false
    },
    {
      en: 'aunt',
      ru: 'тетя',
      level: 'A1',
      done: false
    },
    {
      en: 'uncle',
      ru: 'дядя',
      level: 'A1',
      done: false
    },
    {
      en: 'cousin',
      ru: 'кузен',
      level: 'A1',
      done: false
    },
    {
      en: 'man',
      ru: 'мужчина',
      level: 'A1',
      done: false
    },
    {
      en: 'woman',
      ru: 'женщина',
      level: 'A1',
      done: false
    },
    {
      en: 'child',
      ru: 'ребенок',
      level: 'A1',
      done: false
    },
    {
      en: 'sister',
      ru: 'сестра',
      level: 'A1',
      done: false
    },
    {
      en: 'brother',
      ru: 'брат',
      level: 'A1',
      done: false
    },
    {
      en: 'Relatives',
      ru: 'родственники',
      level: 'A1',
      done: false
    },
    {
      en: 'friend',
      ru: 'друг',
      level: 'A1',
      done: false
    },
    {
      en: 'wife',
      ru: 'жена',
      level: 'A1',
      done: false
    },
    {
      en: 'husband',
      ru: 'муж',
      level: 'A1',
      done: false
    },
    {
      en: 'address',
      ru: 'адрес',
      level: 'A1',
      done: false
    },
    {
      en: 'happiness',
      ru: 'счастье',
      level: 'A1',
      done: false
    },
    {
      en: 'People',
      ru: 'люди',
      level: 'A1',
      done: false
    },
    {
      en: 'phone',
      ru: 'Телефон',
      level: 'A1',
      done: false
    },
    {
      en: 'question',
      ru: 'Вопрос',
      level: 'A1',
      done: false
    },
    {
      en: 'place',
      ru: 'Место',
      level: 'A1',
      done: false
    },
    {
      en: 'market',
      ru: 'Рынок',
      level: 'A1',
      done: false
    },
    {
      en: 'order',
      ru: 'Заказ',
      level: 'A1',
      done: false
    },
    {
      en: 'food',
      ru: 'Еда',
      level: 'A1',
      done: false
    },
    {
      en: 'work',
      ru: 'Работа',
      level: 'A1',
      done: false
    },
    {
      en: 'communication',
      ru: 'Общение',
      level: 'A1',
      done: false
    },
    {
      en: 'story',
      ru: 'История',
      level: 'A1',
      done: false
    },
    {
      en: 'relax',
      ru: 'Отдых',
      level: 'A1',
      done: false
    },
    {
      en: 'time',
      ru: 'Время',
      level: 'A1',
      done: false
    },
    {
      en: 'word',
      ru: 'Слово',
      level: 'A1',
      done: false
    },
    {
      en: 'dialogue',
      ru: 'Диалог',
      level: 'A1',
      done: false
    },
    {
      en: 'meeting',
      ru: 'Встреча',
      level: 'A1',
      done: false
    },
    {
      en: 'week',
      ru: 'Неделя',
      level: 'A1',
      done: false
    },
    {
      en: 'distance',
      ru: 'Дистанция',
      level: 'A1',
      done: false
    },
    {
      en: 'club',
      ru: 'Клуб',
      level: 'A1',
      done: false
    },
    {
      en: 'theatre',
      ru: 'Театр',
      level: 'A1',
      done: false
    },
    {
      en: 'cinema',
      ru: 'Кинотеатр',
      level: 'A1',
      done: false
    },
    {
      en: 'coffee shop',
      ru: 'Кофейня',
      level: 'A1',
      done: false
    },
    {
      en: 'friendship',
      ru: 'Дружба',
      level: 'A1',
      done: false
    },
    {
      en: 'behavior',
      ru: 'Поведение',
      level: 'A1',
      done: false
    },
    {
      en: 'attitude',
      ru: 'Отношение',
      level: 'A1',
      done: false
    },
    {
      en: 'student',
      ru: 'Студент',
      level: 'A1',
      done: false
    },
    {
      en: 'university',
      ru: 'Университет',
      level: 'A1',
      done: false
    },
    {
      en: 'union',
      ru: 'Объединение',
      level: 'A1',
      done: false
    },
    {
      en: 'party',
      ru: 'Вечеринка',
      level: 'A1',
      done: false
    },
    {
      en: 'date',
      ru: 'Свидание',
      level: 'A1',
      done: false
    },
    {
      en: 'sweetheart',
      ru: 'Партнер, возлюбленный',
      level: 'A1',
      done: false
    },
    {
      en: 'leisure time',
      ru: 'Досуг',
      level: 'A1',
      done: false
    },
    {
      en: 'road',
      ru: 'Дорога',
      level: 'A1',
      done: false
    },
    {
      en: 'ticket',
      ru: 'Билет',
      level: 'A1',
      done: false
    },
    {
      en: 'map',
      ru: 'Карта',
      level: 'A1',
      done: false
    },
    {
      en: 'motel',
      ru: 'Мотель',
      level: 'A1',
      done: false
    },
    {
      en: 'highway',
      ru: 'Шоссе',
      level: 'A1',
      done: false
    },
    {
      en: 'reception',
      ru: 'Регистратура, ресепшн',
      level: 'A1',
      done: false
    },
    {
      en: 'wallet',
      ru: 'Бумажник',
      level: 'A1',
      done: false
    },
    {
      en: 'bank',
      ru: 'Банк',
      level: 'A1',
      done: false
    },
    {
      en: 'subway',
      ru: 'Метро',
      level: 'A1',
      done: false
    },
    {
      en: 'cab',
      ru: 'Такси',
      level: 'A1',
      done: false
    },
    {
      en: 'parking',
      ru: 'Парковка',
      level: 'A1',
      done: false
    },
    {
      en: 'food order',
      ru: 'Заказ еды',
      level: 'A1',
      done: false
    },
    {
      en: 'cash',
      ru: 'Наличные',
      level: 'A1',
      done: false
    },
    {
      en: 'passport',
      ru: 'Паспорт',
      level: 'A1',
      done: false
    },
    {
      en: 'permission',
      ru: 'Разрешение',
      level: 'A1',
      done: false
    },
    {
      en: 'lawyer',
      ru: 'Адвокат',
      level: 'A1',
      done: false
    },
    {
      en: 'problem',
      ru: 'Проблема',
      level: 'A1',
      done: false
    },
    {
      en: 'waiting room',
      ru: 'Зал ожидания',
      level: 'A1',
      done: false
    },
    {
      en: 'transfer',
      ru: 'Пересадка',
      level: 'A1',
      done: false
    },
    {
      en: 'bag',
      ru: 'Сумка',
      level: 'A1',
      done: false
    },
    {
      en: 'suitcase',
      ru: 'Чемодан',
      level: 'A1',
      done: false
    },
    {
      en: 'property',
      ru: 'Имущество',
      level: 'A1',
      done: false
    },
    {
      en: 'law',
      ru: 'Право, закон',
      level: 'A1',
      done: false
    },
    {
      en: 'police station',
      ru: 'Полицейский участок',
      level: 'A1',
      done: false
    },
    {
      en: 'price',
      ru: 'Стоимость, цена',
      level: 'A1',
      done: false
    },
    {
      en: 'price list',
      ru: 'Ценник',
      level: 'A1',
      done: false
    },
    {
      en: 'courier',
      ru: 'Курьер',
      level: 'A1',
      done: false
    },
    {
      en: 'delivery',
      ru: 'Доставка',
      level: 'A1',
      done: false
    },
    {
      en: 'location',
      ru: 'Местоположение',
      level: 'A1',
      done: false
    },
    {
      en: 'route',
      ru: 'Маршрут',
      level: 'A1',
      done: false
    },
    {
      en: 'agreement',
      ru: 'Договор',
      level: 'A1',
      done: false
    },
    {
      en: 'hospital',
      ru: 'Больница',
      level: 'A1',
      done: false
    },
    {
      en: 'ambulance',
      ru: 'Скорая помощь',
      level: 'A1',
      done: false
    },
    {
      en: 'Afraid',
      ru: 'Напуганный',
      level: 'A1',
      done: false
    },
    {
      en: 'Angry',
      ru: 'Сердитый',
      level: 'A1',
      done: false
    },
    {
      en: 'Asleep',
      ru: 'Спящий',
      level: 'A1',
      done: false
    },
    {
      en: 'Attentive',
      ru: 'Внимательный',
      level: 'A1',
      done: false
    },
    {
      en: 'Available',
      ru: 'Доступный',
      level: 'A1',
      done: false
    },
    {
      en: 'Basic',
      ru: 'Базовый',
      level: 'A1',
      done: false
    },
    {
      en: 'Beautiful',
      ru: 'Красивый',
      level: 'A1',
      done: false
    },
    {
      en: 'Big',
      ru: 'Большой',
      level: 'A1',
      done: false
    },
    {
      en: 'Brave',
      ru: 'Смелый',
      level: 'A1',
      done: false
    },
    {
      en: 'Busy',
      ru: 'Занятой',
      level: 'A1',
      done: false
    },
    {
      en: 'Calm',
      ru: 'Спокойный',
      level: 'A1',
      done: false
    },
    {
      en: 'Careful',
      ru: 'Внимательный, заботливый',
      level: 'A1',
      done: false
    },
    {
      en: 'Cheap',
      ru: 'Дешевый',
      level: 'A1',
      done: false
    },
    {
      en: 'Clean',
      ru: 'Чистый',
      level: 'A1',
      done: false
    },
    {
      en: 'Clever',
      ru: 'Умный',
      level: 'A1',
      done: false
    },
    {
      en: 'Cold',
      ru: 'Холодный',
      level: 'A1',
      done: false
    },
    {
      en: 'Comfortable',
      ru: 'Комфортный',
      level: 'A1',
      done: false
    },
    {
      en: 'Confident',
      ru: 'Уверенный',
      level: 'A1',
      done: false
    },
    {
      en: 'Constant',
      ru: 'Постоянный',
      level: 'A1',
      done: false
    },
    {
      en: 'Curious',
      ru: 'Любопытный',
      level: 'A1',
      done: false
    },
    {
      en: 'Dangerous',
      ru: 'Опасный',
      level: 'A1',
      done: false
    },
    {
      en: 'Dark',
      ru: 'Темный',
      level: 'A1',
      done: false
    },
    {
      en: 'Deep',
      ru: 'Глубокий',
      level: 'A1',
      done: false
    },
    {
      en: 'Different',
      ru: 'Разный',
      level: 'A1',
      done: false
    },
    {
      en: 'Difficult',
      ru: 'Трудный',
      level: 'A1',
      done: false
    },
    {
      en: 'Dirty',
      ru: 'Грязный',
      level: 'A1',
      done: false
    },
    {
      en: 'Easy',
      ru: 'Легкий',
      level: 'A1',
      done: false
    },
    {
      en: 'Every',
      ru: 'Каждый',
      level: 'A1',
      done: false
    },
    {
      en: 'Expensive',
      ru: 'Дорогой',
      level: 'A1',
      done: false
    },
    {
      en: 'Exact',
      ru: 'Точный',
      level: 'A1',
      done: false
    },
    {
      en: 'Fast',
      ru: 'Быстрый',
      level: 'A1',
      done: false
    },
    {
      en: 'Fair',
      ru: 'Честный, светлый',
      level: 'A1',
      done: false
    },
    {
      en: 'Fine',
      ru: 'Замечательный',
      level: 'A1',
      done: false
    },
    {
      en: 'Foreign',
      ru: 'Иностранный',
      level: 'A1',
      done: false
    },
    {
      en: 'Free',
      ru: 'Свободный',
      level: 'A1',
      done: false
    },
    {
      en: 'Fresh',
      ru: 'Свежий',
      level: 'A1',
      done: false
    },
    {
      en: 'Full',
      ru: 'Полный',
      level: 'A1',
      done: false
    },
    {
      en: 'Funny',
      ru: 'Забавный',
      level: 'A1',
      done: false
    },
    {
      en: 'Guilty',
      ru: 'Виновный',
      level: 'A1',
      done: false
    },
    {
      en: 'Healthy',
      ru: 'Здоровый',
      level: 'A1',
      done: false
    },
    {
      en: 'Hard',
      ru: 'Тяжелый',
      level: 'A1',
      done: false
    },
    {
      en: 'Helpful',
      ru: 'Полезный',
      level: 'A1',
      done: false
    },
    {
      en: 'Honest',
      ru: 'Честный',
      level: 'A1',
      done: false
    },
    {
      en: 'Hot',
      ru: 'Горячий',
      level: 'A1',
      done: false
    },
    {
      en: 'Hungry',
      ru: 'Голодный',
      level: 'A1',
      done: false
    },
    {
      en: 'Important',
      ru: 'Важный',
      level: 'A1',
      done: false
    },
    {
      en: 'Illegal',
      ru: 'Нелегальный, незаконный',
      level: 'A1',
      done: false
    },
    {
      en: 'Impossible',
      ru: 'Невозможный',
      level: 'A1',
      done: false
    },
    {
      en: 'Independent',
      ru: 'Независимый',
      level: 'A1',
      done: false
    },
    {
      en: 'Interesting',
      ru: 'Интересный',
      level: 'A1',
      done: false
    },
    {
      en: 'Kind',
      ru: 'Добрый',
      level: 'A1',
      done: false
    },
    {
      en: 'Legal',
      ru: 'Законный',
      level: 'A1',
      done: false
    },
    {
      en: 'Little',
      ru: 'Маленький',
      level: 'A1',
      done: false
    },
    {
      en: 'Lucky',
      ru: 'Удачливый',
      level: 'A1',
      done: false
    },
    {
      en: 'Necessary',
      ru: 'Необходимый',
      level: 'A1',
      done: false
    },
    {
      en: 'Normal',
      ru: 'Нормальный',
      level: 'A1',
      done: false
    },
    {
      en: 'Old',
      ru: 'Старый',
      level: 'A1',
      done: false
    },
    {
      en: 'Opposite',
      ru: 'Противоположный',
      level: 'A1',
      done: false
    },
    {
      en: 'Perfect',
      ru: 'Идеальный',
      level: 'A1',
      done: false
    },
    {
      en: 'Poor',
      ru: 'Бедный',
      level: 'A1',
      done: false
    },
    {
      en: 'Powerful',
      ru: 'Мощный',
      level: 'A1',
      done: false
    },
    {
      en: 'Possible',
      ru: 'Возможный',
      level: 'A1',
      done: false
    },
    {
      en: 'Quiet',
      ru: 'Тихий',
      level: 'A1',
      done: false
    },
    {
      en: 'Rare',
      ru: 'Редкий',
      level: 'A1',
      done: false
    },
    {
      en: 'Recent',
      ru: 'Недавний',
      level: 'A1',
      done: false
    },
    {
      en: 'Relevant',
      ru: 'Релевантный, актуальный',
      level: 'A1',
      done: false
    },
    {
      en: 'Remote',
      ru: 'Удаленный',
      level: 'A1',
      done: false
    },
    {
      en: 'Safe',
      ru: 'Безопасный',
      level: 'A1',
      done: false
    },
    {
      en: 'Short',
      ru: 'Короткий',
      level: 'A1',
      done: false
    },
    {
      en: 'Small',
      ru: 'Маленький',
      level: 'A1',
      done: false
    },
    {
      en: 'Strange',
      ru: 'Странный, незнакомый, чужой',
      level: 'A1',
      done: false
    },
    {
      en: 'Successful',
      ru: 'Успешный',
      level: 'A1',
      done: false
    },
    {
      en: 'Tasty',
      ru: 'Вкусный, приятный',
      level: 'A1',
      done: false
    },
    {
      en: 'Terrible',
      ru: 'Жуткий',
      level: 'A1',
      done: false
    },
    {
      en: 'Tired',
      ru: 'Усталый',
      level: 'A1',
      done: false
    },
    {
      en: 'Warm',
      ru: 'Теплый',
      level: 'A1',
      done: false
    },
    {
      en: 'Weak',
      ru: 'Слабый',
      level: 'A1',
      done: false
    },
    {
      en: 'Responsible',
      ru: 'Ответственный, надежный',
      level: 'A1',
      done: false
    },
    {
      en: 'Sad',
      ru: 'Грустный',
      level: 'A1',
      done: false
    },
    {
      en: 'International',
      ru: 'Международный',
      level: 'A1',
      done: false
    },
    {
      en: 'Together',
      ru: 'Вместе',
      level: 'A1',
      done: false
    },
    {
      en: 'According',
      ru: 'В соответствии',
      level: 'A1',
      done: false
    },
    {
      en: 'Again',
      ru: 'Снова',
      level: 'A1',
      done: false
    },
    {
      en: 'Always',
      ru: 'Всегда',
      level: 'A1',
      done: false
    },
    {
      en: 'Beautifully',
      ru: 'Красиво',
      level: 'A1',
      done: false
    },
    {
      en: 'Carefully',
      ru: 'Осторожно',
      level: 'A1',
      done: false
    },
    {
      en: 'Correctly',
      ru: 'Верно, правильно',
      level: 'A1',
      done: false
    },
    {
      en: 'Especially',
      ru: 'Особенно',
      level: 'A1',
      done: false
    },
    {
      en: 'Friendly',
      ru: 'Дружелюбно',
      level: 'A1',
      done: false
    },
    {
      en: 'Indeed',
      ru: 'Действительно',
      level: 'A1',
      done: false
    },
    {
      en: 'Above',
      ru: 'Выше',
      level: 'A1',
      done: false
    },
    {
      en: 'Accidentally',
      ru: 'Случайно',
      level: 'A1',
      done: false
    },
    {
      en: 'Actually',
      ru: 'На самом деле',
      level: 'A1',
      done: false
    },
    {
      en: 'Badly',
      ru: 'Плохо',
      level: 'A1',
      done: false
    },
    {
      en: 'Besides',
      ru: 'Помимо этого',
      level: 'A1',
      done: false
    },
    {
      en: 'Briefly',
      ru: 'Кратко',
      level: 'A1',
      done: false
    },
    {
      en: 'Certainly',
      ru: 'Конечно',
      level: 'A1',
      done: false
    },
    {
      en: 'Daily',
      ru: 'Ежедневно',
      level: 'A1',
      done: false
    },
    {
      en: 'Dreamily',
      ru: 'Мечтательно',
      level: 'A1',
      done: false
    },
    {
      en: 'Even',
      ru: 'Даже',
      level: 'A1',
      done: false
    },
    {
      en: 'Eventually',
      ru: 'В конце концов',
      level: 'A1',
      done: false
    },
    {
      en: 'Foolishly',
      ru: 'Глупо',
      level: 'A1',
      done: false
    },
    {
      en: 'Forward',
      ru: 'Вперед',
      level: 'A1',
      done: false
    },
    {
      en: 'Ever',
      ru: 'Когда-либо',
      level: 'A1',
      done: false
    },
    {
      en: 'Equally',
      ru: 'Одинаково',
      level: 'A1',
      done: false
    },
    {
      en: 'Fortunately',
      ru: 'К счастью',
      level: 'A1',
      done: false
    },
    {
      en: 'Honestly',
      ru: 'Честно',
      level: 'A1',
      done: false
    },
    {
      en: 'Instead',
      ru: 'Вместо',
      level: 'A1',
      done: false
    },
    {
      en: 'Inside',
      ru: 'Внутри',
      level: 'A1',
      done: false
    },
    {
      en: 'Also',
      ru: 'Также',
      level: 'A1',
      done: false
    },
    {
      en: 'Hardly',
      ru: 'С трудом',
      level: 'A1',
      done: false
    },
    {
      en: 'Lately',
      ru: 'Недавно',
      level: 'A1',
      done: false
    },
    {
      en: 'Less',
      ru: 'Меньше',
      level: 'A1',
      done: false
    },
    {
      en: 'Loudly',
      ru: 'Громко, шумно',
      level: 'A1',
      done: false
    },
    {
      en: 'Nearly',
      ru: 'Около',
      level: 'A1',
      done: false
    },
    {
      en: 'Never',
      ru: 'Никогда',
      level: 'A1',
      done: false
    },
    {
      en: 'Only',
      ru: 'Только',
      level: 'A1',
      done: false
    },
    {
      en: 'Once',
      ru: 'Один раз',
      level: 'A1',
      done: false
    },
    {
      en: 'Often',
      ru: 'Часто',
      level: 'A1',
      done: false
    },
    {
      en: 'Perhaps',
      ru: 'Возможно',
      level: 'A1',
      done: false
    },
    {
      en: 'Quickly',
      ru: 'Быстро',
      level: 'A1',
      done: false
    },
    {
      en: 'Probably',
      ru: 'Вероятно',
      level: 'A1',
      done: false
    },
    {
      en: 'Rarely',
      ru: 'Редко',
      level: 'A1',
      done: false
    },
    {
      en: 'Really',
      ru: 'Действительно',
      level: 'A1',
      done: false
    },
    {
      en: 'Sometimes',
      ru: 'Иногда',
      level: 'A1',
      done: false
    },
    {
      en: 'Yesterday',
      ru: 'Вчера',
      level: 'A1',
      done: false
    },
    {
      en: 'Thus',
      ru: 'Таким образом',
      level: 'A1',
      done: false
    },
    {
      en: 'Somehow',
      ru: 'Как-то',
      level: 'A1',
      done: false
    },
    {
      en: 'Soon',
      ru: 'Скоро',
      level: 'A1',
      done: false
    },
    {
      en: 'Regularly',
      ru: 'Регулярно',
      level: 'A1',
      done: false
    },
    {
      en: 'Somewhere',
      ru: 'Где-то',
      level: 'A1',
      done: false
    },
    {
      en: "To appear",
      ru: "Появляться",
      level: "A2",
      done: false
    },
    {
      en: "To cancel",
      ru: "Отменять",
      level: "A2",
      done: false
    },
    {
      en: "To bite",
      ru: "Кусать, укусить",
      level: "A2",
      done: false
    },
    {
      en: "To regret",
      ru: "Сожалеть",
      level: "A2",
      done: false
    },
    {
      en: "To blow",
      ru: "Дуть (о ветре), развеять, раздувать",
      level: "A2",
      done: false
    },
    {
      en: "To compose",
      ru: "Составлять",
      level: "A2",
      done: false
    },
    {
      en: "To congratulate",
      ru: "Поздравлять",
      level: "A2",
      done: false
    },
    {
      en: "To correct",
      ru: "Исправлять",
      level: "A2",
      done: false
    },
    {
      en: "To fall asleep",
      ru: "Засыпать",
      level: "A2",
      done: false
    },
    {
      en: "To burn",
      ru: "Гореть",
      level: "A2",
      done: false
    },
    {
      en: "To invent",
      ru: "Придумать, изобретать",
      level: "A2",
      done: false
    },
    {
      en: "To mention",
      ru: "Упоминать, заметить, отметить",
      level: "A2",
      done: false
    },
    {
      en: "To suppose",
      ru: "Предполагать",
      level: "A2",
      done: false
    },
    {
      en: "To suggest",
      ru: "Предлагать, намекать",
      level: "A2",
      done: false
    },
    {
      en: "To consider",
      ru: "Размышлять, учитывать",
      level: "A2",
      done: false
    },
    {
      en: "To escape",
      ru: "Сбегать, убегать",
      level: "A2",
      done: false
    },
    {
      en: "To publish",
      ru: "Публиковать",
      level: "A2",
      done: false
    },
    {
      en: "To solve",
      ru: "Решить, разгадать",
      level: "A2",
      done: false
    },
    {
      en: "To tidy up",
      ru: "Убираться, наводить порядок",
      level: "A2",
      done: false
    },
    {
      en: "To win",
      ru: "Выиграть",
      level: "A2",
      done: false
    },
    {
      en: "To swallow",
      ru: "Глотать",
      level: "A2",
      done: false
    },
    {
      en: "To follow",
      ru: "Следовать",
      level: "A2",
      done: false
    },
    {
      en: "To abandon",
      ru: "Покидать, оставлять",
      level: "A2",
      done: false
    },
    {
      en: "To be able",
      ru: "Быть в состоянии",
      level: "A2",
      done: false
    },
    {
      en: "To abuse",
      ru: "Оскорблять",
      level: "A2",
      done: false
    },
    {
      en: "To accelerate",
      ru: "Ускорять",
      level: "A2",
      done: false
    },
    {
      en: "To reveal",
      ru: "Раскрывать",
      level: "A2",
      done: false
    },
    {
      en: "To consist of",
      ru: "Состоять из",
      level: "A2",
      done: false
    },
    {
      en: "To include",
      ru: "Включать",
      level: "A2",
      done: false
    },
    {
      en: "To guess",
      ru: "Думать, предполагать",
      level: "A2",
      done: false
    },
    {
      en: "To accept",
      ru: "Одобрять, согласовать",
      level: "A2",
      done: false
    },
    {
      en: "To formulate",
      ru: "Формулировать",
      level: "A2",
      done: false
    },
    {
      en: "To form",
      ru: "Формировать",
      level: "A2",
      done: false
    },
    {
      en: "To achieve",
      ru: "Достигать",
      level: "A2",
      done: false
    },
    {
      en: "To acknowledge",
      ru: "Подтверждать",
      level: "A2",
      done: false
    },
    {
      en: "To act",
      ru: "Действовать",
      level: "A2",
      done: false
    },
    {
      en: "To adhere",
      ru: "Придерживаться",
      level: "A2",
      done: false
    },
    {
      en: "To admire",
      ru: "Восхищаться",
      level: "A2",
      done: false
    },
    {
      en: "To adjust",
      ru: "Адаптировать, настроить",
      level: "A2",
      done: false
    },
    {
      en: "To advise",
      ru: "Советовать",
      level: "A2",
      done: false
    },
    {
      en: "To allow",
      ru: "Позволять, разрешать",
      level: "A2",
      done: false
    },
    {
      en: "To improve",
      ru: "Улучшать",
      level: "A2",
      done: false
    },
    {
      en: "To edit",
      ru: "Редактировать",
      level: "A2",
      done: false
    },
    {
      en: "To conclude",
      ru: "Включать в себя",
      level: "A2",
      done: false
    },
    {
      en: "To settle",
      ru: "Располагаться, поселиться",
      level: "A2",
      done: false
    },
    {
      en: "To handle",
      ru: "Справиться",
      level: "A2",
      done: false
    },
    {
      en: "To boost",
      ru: "Увеличить, поддержать",
      level: "A2",
      done: false
    },
    {
      en: "To amplify",
      ru: "Усилить, расширить",
      level: "A2",
      done: false
    },
    {
      en: "To appeal",
      ru: "Просить, обращаться",
      level: "A2",
      done: false
    },
    {
      en: "To assemble",
      ru: "Собираться, созывать",
      level: "A2",
      done: false
    },
    {
      en: "To assess",
      ru: "Оценивать, рассматривать",
      level: "A2",
      done: false
    },
    {
      en: "To assist",
      ru: "Присутствовать, помогать",
      level: "A2",
      done: false
    },
    {
      en: "To astonish",
      ru: "Удивлять",
      level: "A2",
      done: false
    },
    {
      en: "To assure",
      ru: "Убеждать, заверять",
      level: "A2",
      done: false
    },
    {
      en: "To avoid",
      ru: "Избегать",
      level: "A2",
      done: false
    },
    {
      en: "To await",
      ru: "Ожидать",
      level: "A2",
      done: false
    },
    {
      en: "To pick up",
      ru: "Подбирать, забирать",
      level: "A2",
      done: false
    },
    {
      en: "To cross off",
      ru: "Вычеркивать",
      level: "A2",
      done: false
    },
    {
      en: "To claim",
      ru: "Утверждать, заявлять",
      level: "A2",
      done: false
    },
    {
      en: "To hurry up",
      ru: "Торопиться",
      level: "A2",
      done: false
    },
    {
      en: "To find out",
      ru: "Находить",
      level: "A2",
      done: false
    },
    {
      en: "To divide",
      ru: "Делить, разделять",
      level: "A2",
      done: false
    },
    {
      en: "To bark",
      ru: "Лаять",
      level: "A2",
      done: false
    },
    {
      en: "To bathe",
      ru: "Купаться",
      level: "A2",
      done: false
    },
    {
      en: "To beat",
      ru: "Бить, превосходить",
      level: "A2",
      done: false
    },
    {
      en: "To blackmail",
      ru: "Шантажировать",
      level: "A2",
      done: false
    },
    {
      en: "To spent",
      ru: "Тратить",
      level: "A2",
      done: false
    },
    {
      en: "To send",
      ru: "Посылать",
      level: "A2",
      done: false
    },
    {
      en: "To laugh",
      ru: "Смеяться",
      level: "A2",
      done: false
    },
    {
      en: "To struggle",
      ru: "Бороться",
      level: "A2",
      done: false
    },
    {
      en: "To motivate",
      ru: "Мотивировать",
      level: "A2",
      done: false
    },
    {
      en: "To perceive",
      ru: "Воспринимать",
      level: "A2",
      done: false
    },
    {
      en: "To receive",
      ru: "Получать",
      level: "A2",
      done: false
    },
    {
      en: "To recognize",
      ru: "Распознавать",
      level: "A2",
      done: false
    },
    {
      en: "To remain",
      ru: "Напоминать",
      level: "A2",
      done: false
    },
    {
      en: "To retain",
      ru: "Удержать",
      level: "A2",
      done: false
    },
    {
      en: "To remember",
      ru: "Помнить, запоминать",
      level: "A2",
      done: false
    },
    {
      en: "To observed",
      ru: "Исследовать",
      level: "A2",
      done: false
    },
    {
      en: "To fight",
      ru: "Драться",
      level: "A2",
      done: false
    },
    {
      en: "To renew",
      ru: "Обновлять",
      level: "A2",
      done: false
    },
    {
      en: "To keep calm",
      ru: "Успокаиваться",
      level: "A2",
      done: false
    },
    {
      en: "To break up",
      ru: "Разрушать, расходиться",
      level: "A2",
      done: false
    },
    {
      en: "To focus",
      ru: "Фокусироваться",
      level: "A2",
      done: false
    },
    {
      en: "To perform",
      ru: "Исполнять обязанности",
      level: "A2",
      done: false
    },
    {
      en: "To offer",
      ru: "Предлагать",
      level: "A2",
      done: false
    },
    {
      en: "To display",
      ru: "Отображать",
      level: "A2",
      done: false
    },
    {
      en: "To behave",
      ru: "Вести себя",
      level: "A2",
      done: false
    },
    {
      en: "To get rid",
      ru: "Избавляться",
      level: "A2",
      done: false
    },
    {
      en: "To squeeze",
      ru: "Выжимать",
      level: "A2",
      done: false
    },
    {
      en: "To release",
      ru: "Выпускать, публиковать",
      level: "A2",
      done: false
    },
    {
      en: "To push",
      ru: "Толкать",
      level: "A2",
      done: false
    },
    {
      en: "To foster",
      ru: "Поощрять",
      level: "A2",
      done: false
    },
    {
      en: "To enhance",
      ru: "Расширять, поощрять",
      level: "A2",
      done: false
    },
    {
      en: "To develop",
      ru: "Развивать, разрабатывать",
      level: "A2",
      done: false
    },
    {
      en: "To envelop",
      ru: "Окутывать, обволакивать",
      level: "A2",
      done: false
    },
    {
      en: "To obtain",
      ru: "Получить, добиться, приобрести",
      level: "A2",
      done: false
    },
    {
      en: "To investigate",
      ru: "Расследовать",
      level: "A2",
      done: false
    },
    {
      en: "To adore",
      ru: "Обожать",
      level: "A2",
      done: false
    },
    {
      en: "To block out",
      ru: "Блокировать",
      level: "A2",
      done: false
    },
    {
      en: "To boil",
      ru: "Кипеть",
      level: "A2",
      done: false
    },
    {
      en: "To bother",
      ru: "Побеспокоить, заморачиваться",
      level: "A2",
      done: false
    },
    {
      en: "To breathe",
      ru: "Дышать",
      level: "A2",
      done: false
    },
    {
      en: "To brew",
      ru: "Варить, заваривать",
      level: "A2",
      done: false
    },
    {
      en: "To celebrate",
      ru: "Отмечать",
      level: "A2",
      done: false
    },
    {
      en: "To broadcast",
      ru: "Вещать, транслировать",
      level: "A2",
      done: false
    },
    {
      en: "To modify",
      ru: "Изменять, модифицировать",
      level: "A2",
      done: false
    },
    {
      en: "To bump",
      ru: "Ударять",
      level: "A2",
      done: false
    },
    {
      en: "To buzz",
      ru: "Жужжать",
      level: "A2",
      done: false
    },
    {
      en: "To lead",
      ru: "Вести, лидировать, быть лидером",
      level: "A2",
      done: false
    },
    {
      en: "To call back",
      ru: "Перезвонить",
      level: "A2",
      done: false
    },
    {
      en: "To waste",
      ru: "Тратить впустую, мусорить",
      level: "A2",
      done: false
    },
    {
      en: "To take care",
      ru: "Заботиться",
      level: "A2",
      done: false
    },
    {
      en: "To carry out",
      ru: "Выполнять, осуществлять",
      level: "A2",
      done: false
    },
    {
      en: "To carve",
      ru: "Вырезать",
      level: "A2",
      done: false
    },
    {
      en: "To cease",
      ru: "Прекратить",
      level: "A2",
      done: false
    },
    {
      en: "To collaborate",
      ru: "Сотрудничать",
      level: "A2",
      done: false
    },
    {
      en: "To reward",
      ru: "Награждать",
      level: "A2",
      done: false
    },
    {
      en: "To come back",
      ru: "Возвращаться",
      level: "A2",
      done: false
    },
    {
      en: "To relate",
      ru: "Относиться, касаться",
      level: "A2",
      done: false
    },
    {
      en: "To upgrade",
      ru: "Обновлять",
      level: "A2",
      done: false
    },
    {
      en: "To restore",
      ru: "Восстановить",
      level: "A2",
      done: false
    },
    {
      en: "To describe",
      ru: "Описывать",
      level: "A2",
      done: false
    },
    {
      en: "To share",
      ru: "Делиться",
      level: "A2",
      done: false
    },
    {
      en: "To increase",
      ru: "Увеличивать",
      level: "A2",
      done: false
    },
    {
      en: "To automate",
      ru: "Автоматизировать",
      level: "A2",
      done: false
    },
    {
      en: "To manage",
      ru: "Управлять",
      level: "A2",
      done: false
    },
    {
      en: "To provide",
      ru: "Обеспечивать",
      level: "A2",
      done: false
    },
    {
      en: "To integrate",
      ru: "Соединять, интегрировать",
      level: "A2",
      done: false
    },
    {
      en: "To realize",
      ru: "Реализовывать, осуществлять",
      level: "A2",
      done: false
    },
    {
      en: "To remind",
      ru: "Напоминать",
      level: "A2",
      done: false
    },
    {
      en: "To install",
      ru: "Устанавливать",
      level: "A2",
      done: false
    },
    {
      en: "To download",
      ru: "Загружать",
      level: "A2",
      done: false
    },
    {
      en: "To unpack",
      ru: "Распаковать",
      level: "A2",
      done: false
    },
    {
      en: "To engage",
      ru: "Увлечь, привлечь",
      level: "A2",
      done: false
    },
    {
      en: "To create",
      ru: "Создавать",
      level: "A2",
      done: false
    },
    {
      en: "To prefer",
      ru: "Предпочитать",
      level: "A2",
      done: false
    },
    {
      en: "To inspire",
      ru: "Вдохновлять",
      level: "A2",
      done: false
    },
    {
      en: "To apply",
      ru: "Применять",
      level: "A2",
      done: false
    },
    {
      en: "To explain",
      ru: "Объяснять",
      level: "A2",
      done: false
    },
    {
      en: "To simplify",
      ru: "Упрощать",
      level: "A2",
      done: false
    },
    {
      en: "To strive",
      ru: "Стремиться",
      level: "A2",
      done: false
    },
    {
      en: "To arrive",
      ru: "Прибывать",
      level: "A2",
      done: false
    },
    {
      en: "To enable",
      ru: "Разрешить, включить",
      level: "A2",
      done: false
    },
    {
      en: "To support",
      ru: "Поддерживать",
      level: "A2",
      done: false
    },
    {
      en: "To allot",
      ru: "Выделить",
      level: "A2",
      done: false
    },
    {
      en: "To empower",
      ru: "Разрешать, уполномочить",
      level: "A2",
      done: false
    },
    {
      en: "To overwhelm",
      ru: "Переполнять",
      level: "A2",
      done: false
    },
    {
      en: "To fulfill",
      ru: "Выполнять",
      level: "A2",
      done: false
    },
    {
      en: "To take over",
      ru: "Принять на себя",
      level: "A2",
      done: false
    },
    {
      en: "To encourage",
      ru: "Поощрять",
      level: "A2",
      done: false
    },
    {
      en: "To stimulate",
      ru: "Стимулировать",
      level: "A2",
      done: false
    },
    {
      en: "To cause",
      ru: "Вызывать",
      level: "A2",
      done: false
    },
    {
      en: "To deal",
      ru: "Справляться",
      level: "A2",
      done: false
    },
    {
      en: "To reach",
      ru: "Достигать",
      level: "A2",
      done: false
    },
    {
      en: "To touch",
      ru: "Прикасаться",
      level: "A2",
      done: false
    },
    {
      en: "To attain",
      ru: "Достигать, получать",
      level: "A2",
      done: false
    },
    {
      en: "To require",
      ru: "Запрашивать, требовать",
      level: "A2",
      done: false
    },
    {
      en: "To figure out",
      ru: "Разбираться",
      level: "A2",
      done: false
    },
    {
      en: "To forgive",
      ru: "Прощать",
      level: "A2",
      done: false
    },
    {
      en: "To light",
      ru: "Освещать, светить",
      level: "A2",
      done: false
    },
    {
      en: "To shine",
      ru: "Сиять",
      level: "A2",
      done: false
    },
    {
      en: "To spread",
      ru: "Распространять",
      level: "A2",
      done: false
    },
    {
      en: "To throw",
      ru: "Бросать",
      level: "A2",
      done: false
    },
    {
      en: "To spoil",
      ru: "Испортить",
      level: "A2",
      done: false
    },
    {
      en: "To split",
      ru: "Разбить, разделить",
      level: "A2",
      done: false
    },
    {
      en: "To go mad",
      ru: "Сходить с ума",
      level: "A2",
      done: false
    },
    {
      en: "To steal",
      ru: "Украсть",
      level: "A2",
      done: false
    },
    {
      en: "To smell",
      ru: "Пахнуть",
      level: "A2",
      done: false
    },
    {
      en: "activity",
      ru: "Деятельность",
      level: "A2",
      done: false
    },
    {
      en: "amount",
      ru: "Сумма, количество",
      level: "A2",
      done: false
    },
    {
      en: "author",
      ru: "Автор",
      level: "A2",
      done: false
    },
    {
      en: "character",
      ru: "Характер",
      level: "A2",
      done: false
    },
    {
      en: "dictionary",
      ru: "Словарь",
      level: "A2",
      done: false
    },
    {
      en: "event",
      ru: "Событие",
      level: "A2",
      done: false
    },
    {
      en: "guess",
      ru: "Предположение, догадка",
      level: "A2",
      done: false
    },
    {
      en: "dashboard",
      ru: "Панель управления",
      level: "A2",
      done: false
    },
    {
      en: "task manager",
      ru: "Планировщик задач",
      level: "A2",
      done: false
    },
    {
      en: "sick day",
      ru: "Больничный",
      level: "A2",
      done: false
    },
    {
      en: "trouble",
      ru: "Проблема",
      level: "A2",
      done: false
    },
    {
      en: "deadline",
      ru: "Дедлайн",
      level: "A2",
      done: false
    },
    {
      en: "reason",
      ru: "Причина, смысл",
      level: "A2",
      done: false
    },
    {
      en: "to-do list",
      ru: "Список дел",
      level: "A2",
      done: false
    },
    {
      en: "remark",
      ru: "Замечание, ремарка",
      level: "A2",
      done: false
    },
    {
      en: "proofreading",
      ru: "Редактирование, вычитка",
      level: "A2",
      done: false
    },
    {
      en: "performance",
      ru: "Исполнение, выступление",
      level: "A2",
      done: false
    },
    {
      en: "co-working space",
      ru: "Ко-воркинг",
      level: "A2",
      done: false
    },
    {
      en: "duty",
      ru: "Обязанность",
      level: "A2",
      done: false
    },
    {
      en: "function",
      ru: "Функция",
      level: "A2",
      done: false
    },
    {
      en: "burnout",
      ru: "Выгорание",
      level: "A2",
      done: false
    },
    {
      en: "goal",
      ru: "Цель",
      level: "A2",
      done: false
    },
    {
      en: "timetable",
      ru: "Расписание",
      level: "A2",
      done: false
    },
    {
      en: "area",
      ru: "Сфера, область",
      level: "A2",
      done: false
    },
    {
      en: "state",
      ru: "Состояние, положение",
      level: "A2",
      done: false
    },
    {
      en: "mentoring",
      ru: "Менторство",
      level: "A2",
      done: false
    },
    {
      en: "tiredness",
      ru: "Усталость",
      level: "A2",
      done: false
    },
    {
      en: "probation period",
      ru: "Испытательный срок",
      level: "A2",
      done: false
    },
    {
      en: "expectation",
      ru: "Ожидание",
      level: "A2",
      done: false
    },
    {
      en: "benefit",
      ru: "Прибыль",
      level: "A2",
      done: false
    },
    {
      en: "salary",
      ru: "Зарплата",
      level: "A2",
      done: false
    },
    {
      en: "outsource",
      ru: "Аутсорс",
      level: "A2",
      done: false
    },
    {
      en: "team",
      ru: "Команда",
      level: "A2",
      done: false
    },
    {
      en: "lead",
      ru: "Лидер, тимлидер",
      level: "A2",
      done: false
    },
    {
      en: "project",
      ru: "Проект",
      level: "A2",
      done: false
    },
    {
      en: "check out",
      ru: "Проверка",
      level: "A2",
      done: false
    },
    {
      en: "research",
      ru: "Исследование",
      level: "A2",
      done: false
    },
    {
      en: "routine",
      ru: "Рутина",
      level: "A2",
      done: false
    },
    {
      en: "planner",
      ru: "Планнер, блокнот",
      level: "A2",
      done: false
    },
    {
      en: "schedule",
      ru: "Расписание",
      level: "A2",
      done: false
    },
    {
      en: "cartoon",
      ru: "Мультфильм",
      level: "A2",
      done: false
    },
    {
      en: "movie",
      ru: "Фильм",
      level: "A2",
      done: false
    },
    {
      en: "circus",
      ru: "Цирк",
      level: "A2",
      done: false
    },
    {
      en: "composer",
      ru: "Композитор",
      level: "A2",
      done: false
    },
    {
      en: "dream",
      ru: "Мечта",
      level: "A2",
      done: false
    },
    {
      en: "daily routine",
      ru: "Ежедневная рутина",
      level: "A2",
      done: false
    },
    {
      en: "horror",
      ru: "Ужастик",
      level: "A2",
      done: false
    },
    {
      en: "laughter",
      ru: "Смех",
      level: "A2",
      done: false
    },
    {
      en: "novel",
      ru: "Роман",
      level: "A2",
      done: false
    },
    {
      en: "story",
      ru: "История",
      level: "A2",
      done: false
    },
    {
      en: "weather forecast",
      ru: "Прогноз погоды",
      level: "A2",
      done: false
    },
    {
      en: "thought",
      ru: "Мысль",
      level: "A2",
      done: false
    },
    {
      en: "writer",
      ru: "Писатель",
      level: "A2",
      done: false
    },
    {
      en: "access",
      ru: "Доступ",
      level: "A2",
      done: false
    },
    {
      en: "account",
      ru: "Аккаунт",
      level: "A2",
      done: false
    },
    {
      en: "adventure",
      ru: "Приключение",
      level: "A2",
      done: false
    },
    {
      en: "affair",
      ru: "Страх",
      level: "A2",
      done: false
    },
    {
      en: "anniversary",
      ru: "Дело, интрига",
      level: "A2",
      done: false
    },
    {
      en: "entertainment",
      ru: "Развлечение",
      level: "A2",
      done: false
    },
    {
      en: "amusement",
      ru: "Веселье",
      level: "A2",
      done: false
    },
    {
      en: "influence",
      ru: "Влияние",
      level: "A2",
      done: false
    },
    {
      en: "attraction",
      ru: "Достопримечательность, аттракцион",
      level: "A2",
      done: false
    },
    {
      en: "rock-climbing",
      ru: "Скалолазание",
      level: "A2",
      done: false
    },
    {
      en: "cycling",
      ru: "Катание на велосипеде",
      level: "A2",
      done: false
    },
    {
      en: "number painting",
      ru: "Живопись по номерам",
      level: "A2",
      done: false
    },
    {
      en: "swimming pool",
      ru: "Бассейн",
      level: "A2",
      done: false
    },
    {
      en: "yoga",
      ru: "Йога",
      level: "A2",
      done: false
    },
    {
      en: "coffee shop",
      ru: "Кофейня",
      level: "A2",
      done: false
    },
    {
      en: "central park",
      ru: "Центральный парк",
      level: "A2",
      done: false
    },
    {
      en: "inspiration",
      ru: "Вдохновение",
      level: "A2",
      done: false
    },
    {
      en: "scenery",
      ru: "Пейзаж",
      level: "A2",
      done: false
    },
    {
      en: "landscape",
      ru: "Ландшафт, пейзаж",
      level: "A2",
      done: false
    },
    {
      en: "computer game",
      ru: "Компьютерная игра",
      level: "A2",
      done: false
    },
    {
      en: "mood",
      ru: "Настроение",
      level: "A2",
      done: false
    },
    {
      en: "situation",
      ru: "Ситуация",
      level: "A2",
      done: false
    },
    {
      en: "movement",
      ru: "Движение",
      level: "A2",
      done: false
    },
    {
      en: "arrangement",
      ru: "Договоренность",
      level: "A2",
      done: false
    },
    {
      en: "accommodation",
      ru: "Жилье",
      level: "A2",
      done: false
    },
    {
      en: "beverage",
      ru: "Напиток",
      level: "A2",
      done: false
    },
    {
      en: "binge",
      ru: "Гулянка",
      level: "A2",
      done: false
    },
    {
      en: "activist",
      ru: "Активист",
      level: "A2",
      done: false
    },
    {
      en: "pollution",
      ru: "Загрязнение",
      level: "A2",
      done: false
    },
    {
      en: "impurity",
      ru: "Примеси, загрязнение",
      level: "A2",
      done: false
    },
    {
      en: "algae",
      ru: "Водоросли",
      level: "A2",
      done: false
    },
    {
      en: "Earth",
      ru: "Земля",
      level: "A2",
      done: false
    },
    {
      en: "atmosphere",
      ru: "Атмосфера",
      level: "A2",
      done: false
    },
    {
      en: "environment",
      ru: "Окружающий мир",
      level: "A2",
      done: false
    },
    {
      en: "climate",
      ru: "Климат",
      level: "A2",
      done: false
    },
    {
      en: "air",
      ru: "Воздух",
      level: "A2",
      done: false
    },
    {
      en: "water reserve",
      ru: "Водные ресурсы",
      level: "A2",
      done: false
    },
    {
      en: "greenhouse effect",
      ru: "Парниковый эффект",
      level: "A2",
      done: false
    },
    {
      en: "oxygen",
      ru: "Кислород",
      level: "A2",
      done: false
    },
    {
      en: "explorer",
      ru: "Исследователь",
      level: "A2",
      done: false
    },
    {
      en: "investigation",
      ru: "Расследование",
      level: "A2",
      done: false
    },
    {
      en: "future",
      ru: "Будущее",
      level: "A2",
      done: false
    },
    {
      en: "tropic forest",
      ru: "Тропический лес",
      level: "A2",
      done: false
    },
    {
      en: "humidity",
      ru: "Влажность, влага",
      level: "A2",
      done: false
    },
    {
      en: "flora",
      ru: "Флора",
      level: "A2",
      done: false
    },
    {
      en: "wildlife",
      ru: "Дикая природа, животные",
      level: "A2",
      done: false
    },
    {
      en: "plastic waste",
      ru: "Пластиковые отходы",
      level: "A2",
      done: false
    },
    {
      en: "А recycling",
      ru: "Переработка",
      level: "A2",
      done: false
    },
    {
      en: "hydrosphere",
      ru: "Гидросфера",
      level: "A2",
      done: false
    },
    {
      en: "meeting",
      ru: "Митинг",
      level: "A2",
      done: false
    },
    {
      en: "background",
      ru: "Происхождение, фон",
      level: "A2",
      done: false
    },
    {
      en: "bank",
      ru: "Берег",
      level: "A2",
      done: false
    },
    {
      en: "banner",
      ru: "Баннер, реклама",
      level: "A2",
      done: false
    },
    {
      en: "beast",
      ru: "Зверь, животное",
      level: "A2",
      done: false
    },
    {
      en: "cave",
      ru: "Пещера, грот",
      level: "A2",
      done: false
    },
    {
      en: "caviar",
      ru: "Икра",
      level: "A2",
      done: false
    },
    {
      en: "charity",
      ru: "Благотворительность",
      level: "A2",
      done: false
    },
    {
      en: "chemistry",
      ru: "Химия",
      level: "A2",
      done: false
    },
    {
      en: "economical use",
      ru: "Экономное потребление",
      level: "A2",
      done: false
    },
    {
      en: "cohesion",
      ru: "Уголь",
      level: "A2",
      done: false
    },
    {
      en: "commitment",
      ru: "Обязательство",
      level: "A2",
      done: false
    },
    {
      en: "concern",
      ru: "Озабоченность",
      level: "A2",
      done: false
    },
    {
      en: "conscience",
      ru: "Совесть, сознание",
      level: "A2",
      done: false
    },
    {
      en: "court",
      ru: "Суд",
      level: "A2",
      done: false
    },
    {
      en: "custody",
      ru: "Опека, сохранение",
      level: "A2",
      done: false
    },
    {
      en: "desert",
      ru: "Пустыня",
      level: "A2",
      done: false
    },
    {
      en: "dimension",
      ru: "Разрушение",
      level: "A2",
      done: false
    },
    {
      en: "disaster",
      ru: "Катастрофа",
      level: "A2",
      done: false
    },
    {
      en: "disease",
      ru: "Заболевание",
      level: "A2",
      done: false
    },
    {
      en: "downturn",
      ru: "Убыток, спад",
      level: "A2",
      done: false
    },
    {
      en: "drain",
      ru: "Сток, слив",
      level: "A2",
      done: false
    },
    {
      en: "emphasis",
      ru: "Акцент",
      level: "A2",
      done: false
    },
    {
      en: "engine",
      ru: "Двигатель",
      level: "A2",
      done: false
    },
    {
      en: "evidence",
      ru: "Доказательство",
      level: "A2",
      done: false
    },
    {
      en: "excess",
      ru: "Превышение",
      level: "A2",
      done: false
    },
    {
      en: "famine",
      ru: "Голод",
      level: "A2",
      done: false
    },
    {
      en: "detriment",
      ru: "Ущерб",
      level: "A2",
      done: false
    },
    {
      en: "Blind",
      ru: "Слепой",
      level: "A2",
      done: false
    },
    {
      en: "Catchy",
      ru: "Броский, запоминающийся",
      level: "A2",
      done: false
    },
    {
      en: "Common",
      ru: "Распространенный",
      level: "A2",
      done: false
    },
    {
      en: "Familiar",
      ru: "Знакомый",
      level: "A2",
      done: false
    },
    {
      en: "Frequent",
      ru: "Частый",
      level: "A2",
      done: false
    },
    {
      en: "Recurrent",
      ru: "Повторяющийся",
      level: "A2",
      done: false
    },
    {
      en: "Enormous",
      ru: "Огромный",
      level: "A2",
      done: false
    },
    {
      en: "Expensive",
      ru: "Дорогой",
      level: "A2",
      done: false
    },
    {
      en: "Valuable",
      ru: "Ценный",
      level: "A2",
      done: false
    },
    {
      en: "Muslim",
      ru: "Мусульманский",
      level: "A2",
      done: false
    },
    {
      en: "Lucky",
      ru: "Удачный",
      level: "A2",
      done: false
    },
    {
      en: "Clear",
      ru: "Чистый, понятный",
      level: "A2",
      done: false
    },
    {
      en: "Scientific",
      ru: "Научный",
      level: "A2",
      done: false
    },
    {
      en: "Huge",
      ru: "Большой, огромный",
      level: "A2",
      done: false
    },
    {
      en: "Messy",
      ru: "Беспорядочный",
      level: "A2",
      done: false
    },
    {
      en: "Unforgettable",
      ru: "Незабываемый",
      level: "A2",
      done: false
    },
    {
      en: "False",
      ru: "Неверный, неправильный",
      level: "A2",
      done: false
    },
    {
      en: "Fierce",
      ru: "Свирепый, жестокий",
      level: "A2",
      done: false
    },
    {
      en: "Explicit",
      ru: "Ярко выраженный",
      level: "A2",
      done: false
    },
    {
      en: "Exterior",
      ru: "Внешний",
      level: "A2",
      done: false
    },
    {
      en: "Hidden",
      ru: "Скрытый",
      level: "A2",
      done: false
    },
    {
      en: "Powerful",
      ru: "Мощный",
      level: "A2",
      done: false
    },
    {
      en: "Internal",
      ru: "Внутренний",
      level: "A2",
      done: false
    },
    {
      en: "Fabulous",
      ru: "Невероятный",
      level: "A2",
      done: false
    },
    {
      en: "Beautiful",
      ru: "Красивый",
      level: "A2",
      done: false
    },
    {
      en: "Gorgeous",
      ru: "Великолепный",
      level: "A2",
      done: false
    },
    {
      en: "Fruitful",
      ru: "Плодотворный",
      level: "A2",
      done: false
    },
    {
      en: "Formidable",
      ru: "Замечательный",
      level: "A2",
      done: false
    },
    {
      en: "Fortunate",
      ru: "Удачливый, счастливый",
      level: "A2",
      done: false
    },
    {
      en: "Frail",
      ru: "Хилый, хрупкий",
      level: "A2",
      done: false
    },
    {
      en: "Friendly",
      ru: "Дружелюбный",
      level: "A2",
      done: false
    },
    {
      en: "Loyal",
      ru: "Лояльный",
      level: "A2",
      done: false
    },
    {
      en: "General",
      ru: "Общий, генеральный",
      level: "A2",
      done: false
    },
    {
      en: "Generous",
      ru: "Щедрый",
      level: "A2",
      done: false
    },
    {
      en: "Gradual",
      ru: "Постепенный",
      level: "A2",
      done: false
    },
    {
      en: "Productive",
      ru: "Продуктивный",
      level: "A2",
      done: false
    },
    {
      en: "Protected",
      ru: "Защищенный",
      level: "A2",
      done: false
    },
    {
      en: "Hardy",
      ru: "Выносливый",
      level: "A2",
      done: false
    },
    {
      en: "Peaceful",
      ru: "Мирный, миролюбивый",
      level: "A2",
      done: false
    },
    {
      en: "Digital",
      ru: "Цифровой",
      level: "A2",
      done: false
    },
    {
      en: "Social",
      ru: "Социальный",
      level: "A2",
      done: false
    },
    {
      en: "Hideous",
      ru: "Отвратительный",
      level: "A2",
      done: false
    },
    {
      en: "Awful",
      ru: "Ужасный",
      level: "A2",
      done: false
    },
    {
      en: "Awesome",
      ru: "Милый",
      level: "A2",
      done: false
    },
    {
      en: "High-quality",
      ru: "Высококачественный",
      level: "A2",
      done: false
    },
    {
      en: "Helpless",
      ru: "Беспомощный",
      level: "A2",
      done: false
    },
    {
      en: "Hilarious",
      ru: "Уморительный",
      level: "A2",
      done: false
    },
    {
      en: "Idle",
      ru: "Безработный",
      level: "A2",
      done: false
    },
    {
      en: "Immediate",
      ru: "Незамедлительный",
      level: "A2",
      done: false
    },
    {
      en: "Main",
      ru: "Главный",
      level: "A2",
      done: false
    },
    {
      en: "European",
      ru: "Европейский",
      level: "A2",
      done: false
    },
    {
      en: "Simultaneous",
      ru: "Одновременный",
      level: "A2",
      done: false
    },
    {
      en: "Special",
      ru: "Специальный",
      level: "A2",
      done: false
    },
    {
      en: "Visible",
      ru: "Видимый",
      level: "A2",
      done: false
    },
    {
      en: "Honest",
      ru: "Честный",
      level: "A2",
      done: false
    },
    {
      en: "Mortal",
      ru: "Смертельный",
      level: "A2",
      done: false
    },
    {
      en: "Hyperactive",
      ru: "Гиперактивный",
      level: "A2",
      done: false
    },
    {
      en: "Personal",
      ru: "Личный, персональный",
      level: "A2",
      done: false
    },
    {
      en: "Foolish",
      ru: "Безумный, глупый",
      level: "A2",
      done: false
    },
    {
      en: "Sudden",
      ru: "Внезапный",
      level: "A2",
      done: false
    },
    {
      en: "Endlessly",
      ru: "Бесконечно",
      level: "A2",
      done: false
    },
    {
      en: "Unselfishly",
      ru: "Бескорыстно",
      level: "A2",
      done: false
    },
    {
      en: "Generously",
      ru: "Щедро",
      level: "A2",
      done: false
    },
    {
      en: "Along",
      ru: "Вдоль, по",
      level: "A2",
      done: false
    },
    {
      en: "Accordingly",
      ru: "Соответственно",
      level: "A2",
      done: false
    },
    {
      en: "Subsequently",
      ru: "Впоследствии",
      level: "A2",
      done: false
    },
    {
      en: "Subtly",
      ru: "Тонко",
      level: "A2",
      done: false
    },
    {
      en: "Precisely",
      ru: "Точно, четко",
      level: "A2",
      done: false
    },
    {
      en: "Better",
      ru: "Лучше",
      level: "A2",
      done: false
    },
    {
      en: "Everywhere",
      ru: "Везде, где угодно",
      level: "A2",
      done: false
    },
    {
      en: "Out",
      ru: "За, из",
      level: "A2",
      done: false
    },
    {
      en: "Fully",
      ru: "Полностью",
      level: "A2",
      done: false
    },
    {
      en: "Partly",
      ru: "Частично",
      level: "A2",
      done: false
    },
    {
      en: "Utterly",
      ru: "Полностью",
      level: "A2",
      done: false
    },
    {
      en: "Entirely",
      ru: "Совершенно, целиком",
      level: "A2",
      done: false
    },
    {
      en: "Therefore",
      ru: "Поэтому",
      level: "A2",
      done: false
    },
    {
      en: "Hence",
      ru: "Вот почему, отсюда",
      level: "A2",
      done: false
    },
    {
      en: "Consequently",
      ru: "Таким образом, соответственно",
      level: "A2",
      done: false
    },
    {
      en: "Bravely",
      ru: "Отважно, храбро",
      level: "A2",
      done: false
    },
    {
      en: "Carefully",
      ru: "Внимательно, осторожно",
      level: "A2",
      done: false
    },
    {
      en: "Seldom",
      ru: "Редко",
      level: "A2",
      done: false
    },
    {
      en: "Frequently",
      ru: "Часто",
      level: "A2",
      done: false
    },
    {
      en: "Outside",
      ru: "Снаружи",
      level: "A2",
      done: false
    },
    {
      en: "Upstairs",
      ru: "Наверху",
      level: "A2",
      done: false
    },
    {
      en: "Downstairs",
      ru: "Внизу",
      level: "A2",
      done: false
    },
    {
      en: "Quite",
      ru: "Вполне",
      level: "A2",
      done: false
    },
    {
      en: "Early",
      ru: "Рано",
      level: "A2",
      done: false
    },
    {
      en: "Simply",
      ru: "Легко, просто",
      level: "A2",
      done: false
    },
    {
      en: "Hard",
      ru: "Трудно",
      level: "A2",
      done: false
    },
    {
      en: "Late",
      ru: "Поздно",
      level: "A2",
      done: false
    },
    {
      en: "To abolish",
      ru: "Отменять, уничтожать, упразднять",
      level: "B1",
      done: false
    },
    {
      en: "To approve",
      ru: "Утвердить, одобрить",
      level: "B1",
      done: false
    },
    {
      en: "To boast",
      ru: "Гордиться, хвастаться",
      level: "B1",
      done: false
    },
    {
      en: "To contribute",
      ru: "Жертвовать, вносить свой вклад",
      level: "B1",
      done: false
    },
    {
      en: "To deliver",
      ru: "Доставлять, поставлять, приносить",
      level: "B1",
      done: false
    },
    {
      en: "To descend",
      ru: "Спуститься, сходить, снизойти",
      level: "B1",
      done: false
    },
    {
      en: "To concentrate",
      ru: "Сосредотачиваться",
      level: "B1",
      done: false
    },
    {
      en: "To distract",
      ru: "Отвлечь, отвлекать",
      level: "B1",
      done: false
    },
    {
      en: "To torture",
      ru: "Мучить, терзать",
      level: "B1",
      done: false
    },
    {
      en: "To confuse",
      ru: "Путать, запутать, сбить с толку",
      level: "B1",
      done: false
    },
    {
      en: "To abandon",
      ru: "Покинуть, бросить, оставить",
      level: "B1",
      done: false
    },
    {
      en: "To escape",
      ru: "Совершить побег, убежать, сбежать",
      level: "B1",
      done: false
    },
    {
      en: "To distribute",
      ru: "Распространять, распределить",
      level: "B1",
      done: false
    },
    {
      en: "To elaborate",
      ru: "Разрабатывать, прорабатывать",
      level: "B1",
      done: false
    },
    {
      en: "To construct",
      ru: "Строить, построить",
      level: "B1",
      done: false
    },
    {
      en: "To humiliate",
      ru: "Унижать",
      level: "B1",
      done: false
    },
    {
      en: "To maintain",
      ru: "Поддерживать",
      level: "B1",
      done: false
    },
    {
      en: "To squeeze",
      ru: "Сжимать, выжимать, сжать",
      level: "B1",
      done: false
    },
    {
      en: "To delegate",
      ru: "Делегировать, посылать",
      level: "B1",
      done: false
    },
    {
      en: "To transfer",
      ru: "Передавать, перечислять",
      level: "B1",
      done: false
    },
    {
      en: "To employ",
      ru: "Нанимать, использовать, работать",
      level: "B1",
      done: false
    },
    {
      en: "To catch",
      ru: "Поймать, ловить",
      level: "B1",
      done: false
    },
    {
      en: "To commit",
      ru: "Совершить, зафиксировать, поручить",
      level: "B1",
      done: false
    },
    {
      en: "To arrange",
      ru: "Организовать, устроить",
      level: "B1",
      done: false
    },
    {
      en: "To implement",
      ru: "Внедрить, реализовать, осуществить",
      level: "B1",
      done: false
    },
    {
      en: "To insulate",
      ru: "Ограждать",
      level: "B1",
      done: false
    },
    {
      en: "To encourage",
      ru: "Стимулировать",
      level: "B1",
      done: false
    },
    {
      en: "To foster",
      ru: "Поощрять",
      level: "B1",
      done: false
    },
    {
      en: "To boost",
      ru: "Повышать",
      level: "B1",
      done: false
    },
    {
      en: "To optimize",
      ru: "Оптимизировать",
      level: "B1",
      done: false
    },
    {
      en: "To rank",
      ru: "Ранжировать",
      level: "B1",
      done: false
    },
    {
      en: "To identify",
      ru: "Определить, идентифицировать",
      level: "B1",
      done: false
    },
    {
      en: "To empower",
      ru: "Наделить полномочиями, расширять",
      level: "B1",
      done: false
    },
    {
      en: "To ensure",
      ru: "Обеспечить, убедить, гарантировать",
      level: "B1",
      done: false
    },
    {
      en: "To accomplish",
      ru: "Выполнить, завершить, осуществить",
      level: "B1",
      done: false
    },
    {
      en: "To customize",
      ru: "Настроить, сделать",
      level: "B1",
      done: false
    },
    {
      en: "To localize",
      ru: "Локализовать, определить",
      level: "B1",
      done: false
    },
    {
      en: "To tailor",
      ru: "Приспособить",
      level: "B1",
      done: false
    },
    {
      en: "To validate",
      ru: "Удостоверять",
      level: "B1",
      done: false
    },
    {
      en: "To reserve",
      ru: "Резервировать",
      level: "B1",
      done: false
    },
    {
      en: "To estimate",
      ru: "Оценивать",
      level: "B1",
      done: false
    },
    {
      en: "To consulate",
      ru: "Консультировать",
      level: "B1",
      done: false
    },
    {
      en: "To regard",
      ru: "Рассматривать, учитывать, относиться",
      level: "B1",
      done: false
    },
    {
      en: "To indicate",
      ru: "Указывать, обозначать, показывать",
      level: "B1",
      done: false
    },
    {
      en: "To unify",
      ru: "Объединять",
      level: "B1",
      done: false
    },
    {
      en: "To digitalize",
      ru: "Оцифровать, перевести в online-формат",
      level: "B1",
      done: false
    },
    {
      en: "To expose",
      ru: "Подвергать",
      level: "B1",
      done: false
    },
    {
      en: "To idealize",
      ru: "Идеализировать",
      level: "B1",
      done: false
    },
    {
      en: "To navigate",
      ru: "Ориентироваться",
      level: "B1",
      done: false
    },
    {
      en: "To sustain",
      ru: "Выдерживать",
      level: "B1",
      done: false
    },
    {
      en: "To constrain",
      ru: "Сдерживать",
      level: "B1",
      done: false
    },
    {
      en: "To evade",
      ru: "Обойти",
      level: "B1",
      done: false
    },
    {
      en: "To purchase",
      ru: "Приобретать",
      level: "B1",
      done: false
    },
    {
      en: "To earn",
      ru: "Зарабатывать",
      level: "B1",
      done: false
    },
    {
      en: "To make sure",
      ru: "Убедиться",
      level: "B1",
      done: false
    },
    {
      en: "To prototype",
      ru: "Создать протопит, план",
      level: "B1",
      done: false
    },
    {
      en: "To endeavour",
      ru: "Стремиться",
      level: "B1",
      done: false
    },
    {
      en: "To blend",
      ru: "Смешивать",
      level: "B1",
      done: false
    },
    {
      en: "To prioritize",
      ru: "Расставить приоритеты",
      level: "B1",
      done: false
    },
    {
      en: "To mitigate",
      ru: "Смягчать, принимать",
      level: "B1",
      done: false
    },
    {
      en: "To emphasize",
      ru: "Подчеркнуть, придать акцент",
      level: "B1",
      done: false
    },
    {
      en: "To observe",
      ru: "Наблюдать, замечать",
      level: "B1",
      done: false
    },
    {
      en: "To evolve",
      ru: "Развиваться, расти, проявляться",
      level: "B1",
      done: false
    },
    {
      en: "To incentivize",
      ru: "Стимулировать, побуждать",
      level: "B1",
      done: false
    },
    {
      en: "To respond",
      ru: "Реагировать, отвечать",
      level: "B1",
      done: false
    },
    {
      en: "To connect",
      ru: "Соединить",
      level: "B1",
      done: false
    },
    {
      en: "To command",
      ru: "Командовать",
      level: "B1",
      done: false
    },
    {
      en: "To check-out",
      ru: "Проверить, оформить",
      level: "B1",
      done: false
    },
    {
      en: "To extend",
      ru: "Продлить, расширить, увеличить",
      level: "B1",
      done: false
    },
    {
      en: "To retain",
      ru: "Оставить, удержать, сохранить",
      level: "B1",
      done: false
    },
    {
      en: "To exhibit",
      ru: "Показывать",
      level: "B1",
      done: false
    },
    {
      en: "To invent",
      ru: "Изобретать",
      level: "B1",
      done: false
    },
    {
      en: "To abridge",
      ru: "Ограничивать",
      level: "B1",
      done: false
    },
    {
      en: "To self-express",
      ru: "Самовыражаться",
      level: "B1",
      done: false
    },
    {
      en: "To neglect",
      ru: "Пренебрегать",
      level: "B1",
      done: false
    },
    {
      en: "To negotiate",
      ru: "Договариваться, вести переговоры",
      level: "B1",
      done: false
    },
    {
      en: "To upgrade",
      ru: "Повышать, улучшать",
      level: "B1",
      done: false
    },
    {
      en: "To renew",
      ru: "Обновить",
      level: "B1",
      done: false
    },
    {
      en: "To specialize",
      ru: "Специализироваться",
      level: "B1",
      done: false
    },
    {
      en: "To balance",
      ru: "Уравновешивать",
      level: "B1",
      done: false
    },
    {
      en: "To absorb",
      ru: "Поглощать",
      level: "B1",
      done: false
    },
    {
      en: "To overwhelm",
      ru: "Переполнять",
      level: "B1",
      done: false
    },
    {
      en: "To align",
      ru: "Выравнивать",
      level: "B1",
      done: false
    },
    {
      en: "To withdraw",
      ru: "Отстраниться",
      level: "B1",
      done: false
    },
    {
      en: "To whistle",
      ru: "Свистеть",
      level: "B1",
      done: false
    },
    {
      en: "To suspect",
      ru: "Подозревать",
      level: "B1",
      done: false
    },
    {
      en: "To surrender",
      ru: "Сдаваться",
      level: "B1",
      done: false
    },
    {
      en: "To depend on",
      ru: "Зависеть от",
      level: "B1",
      done: false
    },
    {
      en: "To correct",
      ru: "Исправлять",
      level: "B1",
      done: false
    },
    {
      en: "To define",
      ru: "Определить",
      level: "B1",
      done: false
    },
    {
      en: "To visualize",
      ru: "Визуализировать",
      level: "B1",
      done: false
    },
    {
      en: "To design",
      ru: "Проектировать",
      level: "B1",
      done: false
    },
    {
      en: "To minimize",
      ru: "Минимизировать",
      level: "B1",
      done: false
    },
    {
      en: "To disturb",
      ru: "Нарушить, беспокоить",
      level: "B1",
      done: false
    },
    {
      en: "To integrate",
      ru: "Интегрировать",
      level: "B1",
      done: false
    },
    {
      en: "To exchange",
      ru: "Обменивать, менять",
      level: "B1",
      done: false
    },
    {
      en: "To organize",
      ru: "Организовать",
      level: "B1",
      done: false
    },
    {
      en: "To collaborate",
      ru: "Сотрудничать",
      level: "B1",
      done: false
    },
    {
      en: "To embed",
      ru: "Встраивать",
      level: "B1",
      done: false
    },
    {
      en: "To generate",
      ru: "Генерировать",
      level: "B1",
      done: false
    },
    {
      en: "addiction",
      ru: "Зависимость, пристрастие",
      level: "B1",
      done: false
    },
    {
      en: "amateur",
      ru: "Любитель",
      level: "B1",
      done: false
    },
    {
      en: "ambivalence",
      ru: "Нерешительность",
      level: "B1",
      done: false
    },
    {
      en: "commission",
      ru: "Комиссия, поручение, заказчик",
      level: "B1",
      done: false
    },
    {
      en: "confidence",
      ru: "Доверие, уверенность, достоверность",
      level: "B1",
      done: false
    },
    {
      en: "craving",
      ru: "Желание, тяга, стремление, жажда",
      level: "B1",
      done: false
    },
    {
      en: "district",
      ru: "Район",
      level: "B1",
      done: false
    },
    {
      en: "evidence",
      ru: "Доказательство, признак, факт",
      level: "B1",
      done: false
    },
    {
      en: "honesty",
      ru: "Честность",
      level: "B1",
      done: false
    },
    {
      en: "circumstance",
      ru: "Обстоятельство, случай, событие",
      level: "B1",
      done: false
    },
    {
      en: "kindness",
      ru: "Доброта",
      level: "B1",
      done: false
    },
    {
      en: "justice",
      ru: "Справедливость",
      level: "B1",
      done: false
    },
    {
      en: "disgust",
      ru: "Отвращение, брезгливость",
      level: "B1",
      done: false
    },
    {
      en: "А suggestion",
      ru: "Предложение, суждение, идея",
      level: "B1",
      done: false
    },
    {
      en: "А nobility",
      ru: "Благородство, достоинство",
      level: "B1",
      done: false
    },
    {
      en: "commotion",
      ru: "Суета",
      level: "B1",
      done: false
    },
    {
      en: "adherence",
      ru: "Приверженность",
      level: "B1",
      done: false
    },
    {
      en: "devotion",
      ru: "Преданность",
      level: "B1",
      done: false
    },
    {
      en: "enticement",
      ru: "Приманка, соблазн, заманивание",
      level: "B1",
      done: false
    },
    {
      en: "attractiveness",
      ru: "Привлекательность",
      level: "B1",
      done: false
    },
    {
      en: "freedom-loving",
      ru: "Свободолюбие",
      level: "B1",
      done: false
    },
    {
      en: "rebel",
      ru: "Бунтарь",
      level: "B1",
      done: false
    },
    {
      en: "influence",
      ru: "Влияние",
      level: "B1",
      done: false
    },
    {
      en: "sway",
      ru: "Колебание",
      level: "B1",
      done: false
    },
    {
      en: "willpower",
      ru: "Сила воли",
      level: "B1",
      done: false
    },
    {
      en: "inequality",
      ru: "Неравенство",
      level: "B1",
      done: false
    },
    {
      en: "А violence",
      ru: "Насилие, жестокость",
      level: "B1",
      done: false
    },
    {
      en: "А bullying",
      ru: "Издевательство, травля",
      level: "B1",
      done: false
    },
    {
      en: "А godliness",
      ru: "Благочестие, бодрость",
      level: "B1",
      done: false
    },
    {
      en: "А compassion",
      ru: "Сострадание",
      level: "B1",
      done: false
    },
    {
      en: "inclusivity",
      ru: "Инклюзивность",
      level: "B1",
      done: false
    },
    {
      en: "А reciprocity",
      ru: "Взаимность, обоюдность",
      level: "B1",
      done: false
    },
    {
      en: "friskiness",
      ru: "Игривость, раскованность, живость",
      level: "B1",
      done: false
    },
    {
      en: "fervor",
      ru: "Пылкость, задор, рвение",
      level: "B1",
      done: false
    },
    {
      en: "А youth",
      ru: "Молодежь, юноша, молодость",
      level: "B1",
      done: false
    },
    {
      en: "adolescence",
      ru: "Подростковый возраст, отрочество",
      level: "B1",
      done: false
    },
    {
      en: "А prerequisite",
      ru: "Предпосылка, условие",
      level: "B1",
      done: false
    },
    {
      en: "fortune",
      ru: "Судьба, удача, желание, успех",
      level: "B1",
      done: false
    },
    {
      en: "А Stubbornness",
      ru: "Упрямость",
      level: "B1",
      done: false
    },
    {
      en: "disappointment",
      ru: "Разочарование",
      level: "B1",
      done: false
    },
    {
      en: "distancing",
      ru: "Дистанцирование",
      level: "B1",
      done: false
    },
    {
      en: "isolation",
      ru: "Изоляция",
      level: "B1",
      done: false
    },
    {
      en: "self-care",
      ru: "Забота о себе",
      level: "B1",
      done: false
    },
    {
      en: "medication",
      ru: "Лекарство",
      level: "B1",
      done: false
    },
    {
      en: "celebration",
      ru: "Мероприятие",
      level: "B1",
      done: false
    },
    {
      en: "physician",
      ru: "Врач, доктор, терапевт",
      level: "B1",
      done: false
    },
    {
      en: "treatment",
      ru: "Лечение",
      level: "B1",
      done: false
    },
    {
      en: "improvement",
      ru: "Улучшение",
      level: "B1",
      done: false
    },
    {
      en: "symptom",
      ru: "Симптом",
      level: "B1",
      done: false
    },
    {
      en: "dismay",
      ru: "Огорчение",
      level: "B1",
      done: false
    },
    {
      en: "cancellation",
      ru: "Отмена",
      level: "B1",
      done: false
    },
    {
      en: "suspiciousness",
      ru: "Подозрительность",
      level: "B1",
      done: false
    },
    {
      en: "escalation",
      ru: "Обострение, эскалация",
      level: "B1",
      done: false
    },
    {
      en: "proceeding",
      ru: "Разбирательство",
      level: "B1",
      done: false
    },
    {
      en: "awareness",
      ru: "Осознание",
      level: "B1",
      done: false
    },
    {
      en: "responsibility",
      ru: "Ответственность",
      level: "B1",
      done: false
    },
    {
      en: "aftermath",
      ru: "Последствие",
      level: "B1",
      done: false
    },
    {
      en: "weakness",
      ru: "Слабость",
      level: "B1",
      done: false
    },
    {
      en: "rivalry",
      ru: "Соперничество, противостояние",
      level: "B1",
      done: false
    },
    {
      en: "restlessness",
      ru: "Беспокойство",
      level: "B1",
      done: false
    },
    {
      en: "uncertainty",
      ru: "Неуверенность, неопределенность",
      level: "B1",
      done: false
    },
    {
      en: "stress resistance",
      ru: "Стрессоустойчивость",
      level: "B1",
      done: false
    },
    {
      en: "conscience",
      ru: "Совесть",
      level: "B1",
      done: false
    },
    {
      en: "А mindfulness",
      ru: "Внимательность, мышление, осознанность",
      level: "B1",
      done: false
    },
    {
      en: "protection",
      ru: "Защита, протекция",
      level: "B1",
      done: false
    },
    {
      en: "referral",
      ru: "Направление",
      level: "B1",
      done: false
    },
    {
      en: "hopelessness",
      ru: "Безнадежность",
      level: "B1",
      done: false
    },
    {
      en: "reliability",
      ru: "Надежность",
      level: "B1",
      done: false
    },
    {
      en: "verification",
      ru: "Проверка",
      level: "B1",
      done: false
    },
    {
      en: "self-isolation",
      ru: "Самоизоляция",
      level: "B1",
      done: false
    },
    {
      en: "А provocation",
      ru: "Провокация",
      level: "B1",
      done: false
    },
    {
      en: "prevention",
      ru: "Профилактика",
      level: "B1",
      done: false
    },
    {
      en: "side effect",
      ru: "Побочный эффект",
      level: "B1",
      done: false
    },
    {
      en: "vaccination",
      ru: "Вакцинация",
      level: "B1",
      done: false
    },
    {
      en: "immunization",
      ru: "Иммунизация",
      level: "B1",
      done: false
    },
    {
      en: "contradiction",
      ru: "Противоречие",
      level: "B1",
      done: false
    },
    {
      en: "emotion",
      ru: "Эмоция",
      level: "B1",
      done: false
    },
    {
      en: "disagreement",
      ru: "Разногласие",
      level: "B1",
      done: false
    },
    {
      en: "misunderstanding",
      ru: "Недоразумение, недопонимание",
      level: "B1",
      done: false
    },
    {
      en: "negotiation",
      ru: "Переговоры",
      level: "B1",
      done: false
    },
    {
      en: "Слово",
      ru: "Перевод",
      level: "B1",
      done: false
    },
    {
      en: "downfall",
      ru: "Падение, упадок, крах, понижение",
      level: "B1",
      done: false
    },
    {
      en: "А setback",
      ru: "Неудача, провал",
      level: "B1",
      done: false
    },
    {
      en: "А bad luck",
      ru: "Невезение, несчастье",
      level: "B1",
      done: false
    },
    {
      en: "depression",
      ru: "Депрессия",
      level: "B1",
      done: false
    },
    {
      en: "А solitude",
      ru: "Одиночество",
      level: "B1",
      done: false
    },
    {
      en: "А self-blame",
      ru: "Самобичевание",
      level: "B1",
      done: false
    },
    {
      en: "А disorder",
      ru: "Расстройство, разлад",
      level: "B1",
      done: false
    },
    {
      en: "А instability",
      ru: "Нестабильность",
      level: "B1",
      done: false
    },
    {
      en: "А challenge",
      ru: "Вызов, сложность",
      level: "B1",
      done: false
    },
    {
      en: "А sustainability",
      ru: "Устойчивость, жизнеспособность",
      level: "B1",
      done: false
    },
    {
      en: "duration",
      ru: "Продолжительность",
      level: "B1",
      done: false
    },
    {
      en: "А luckiness",
      ru: "Удачливость, везение",
      level: "B1",
      done: false
    },
    {
      en: "А fluke",
      ru: "Случайность, шанс",
      level: "B1",
      done: false
    },
    {
      en: "А winning",
      ru: "Выигрыш, победа, завоевание",
      level: "B1",
      done: false
    },
    {
      en: "lottery",
      ru: "Лотерея",
      level: "B1",
      done: false
    },
    {
      en: "destination",
      ru: "Предназначение",
      level: "B1",
      done: false
    },
    {
      en: "advantage",
      ru: "Преимущество",
      level: "B1",
      done: false
    },
    {
      en: "win-win",
      ru: "Победа, выигрыш",
      level: "B1",
      done: false
    },
    {
      en: "condition",
      ru: "Условие, обстоятельство, состояние",
      level: "B1",
      done: false
    },
    {
      en: "contest",
      ru: "Соревнование, борьба, конкурс",
      level: "B1",
      done: false
    },
    {
      en: "А humbleness",
      ru: "Смирение, скромность, покорность",
      level: "B1",
      done: false
    },
    {
      en: "А fearlessness",
      ru: "Бесстрашие",
      level: "B1",
      done: false
    },
    {
      en: "А hardening",
      ru: "Закалка, твердость",
      level: "B1",
      done: false
    },
    {
      en: "А buoyancy",
      ru: "Оживленность, жизнелюбие",
      level: "B1",
      done: false
    },
    {
      en: "А cheerfulness",
      ru: "Жизнерадостность, веселость",
      level: "B1",
      done: false
    },
    {
      en: "А hospitality",
      ru: "Гостеприимство, радушие",
      level: "B1",
      done: false
    },
    {
      en: "А pessimism",
      ru: "Пессимизм",
      level: "B1",
      done: false
    },
    {
      en: "А morale",
      ru: "Мораль, дух, нрав, мужество",
      level: "B1",
      done: false
    },
    {
      en: "А wisdom",
      ru: "Мудрость",
      level: "B1",
      done: false
    },
    {
      en: "А Prociency",
      ru: "Мастерство, умение, квалификация",
      level: "B1",
      done: false
    },
    {
      en: "applicant",
      ru: "Претендент, соискать, заявитель",
      level: "B1",
      done: false
    },
    {
      en: "А decisiveness",
      ru: "Решительность",
      level: "B1",
      done: false
    },
    {
      en: "А loophole",
      ru: "Лазейка, дыра",
      level: "B1",
      done: false
    },
    {
      en: "А frustration",
      ru: "Фрустрация, разочарование",
      level: "B1",
      done: false
    },
    {
      en: "А knowledge",
      ru: "Знание, познание",
      level: "B1",
      done: false
    },
    {
      en: "А decision-making",
      ru: "Принятие решения",
      level: "B1",
      done: false
    },
    {
      en: "alacrity",
      ru: "Аккуратность, активность, стремительность",
      level: "B1",
      done: false
    },
    {
      en: "extremity",
      ru: "Крайность, упорство, чрезмерность",
      level: "B1",
      done: false
    },
    {
      en: "А background",
      ru: "Фон, предпосылка",
      level: "B1",
      done: false
    },
    {
      en: "А preparatory",
      ru: "Подготовка",
      level: "B1",
      done: false
    },
    {
      en: "Слово",
      ru: "Перевод",
      level: "B1",
      done: false
    },
    {
      en: "Arrogant",
      ru: "Высокомерный, заносчивый",
      level: "B1",
      done: false
    },
    {
      en: "Civilian",
      ru: "Гражданский",
      level: "B1",
      done: false
    },
    {
      en: "Commercial",
      ru: "Коммерческий",
      level: "B1",
      done: false
    },
    {
      en: "Convenient",
      ru: "Удобный",
      level: "B1",
      done: false
    },
    {
      en: "Creative",
      ru: "Креативный, творческий",
      level: "B1",
      done: false
    },
    {
      en: "Naughty",
      ru: "Озорной, шаловливый",
      level: "B1",
      done: false
    },
    {
      en: "Stationary",
      ru: "Стационарный",
      level: "B1",
      done: false
    },
    {
      en: "Valuable",
      ru: "Ценный",
      level: "B1",
      done: false
    },
    {
      en: "Significant",
      ru: "Значительный, существенный",
      level: "B1",
      done: false
    },
    {
      en: "Foremost",
      ru: "Передовой, основной, главный",
      level: "B1",
      done: false
    },
    {
      en: "Recent",
      ru: "Недавний",
      level: "B1",
      done: false
    },
    {
      en: "Updated",
      ru: "Обновленный",
      level: "B1",
      done: false
    },
    {
      en: "Operational",
      ru: "Оперативный, рабочий, действующий",
      level: "B1",
      done: false
    },
    {
      en: "Intuitive",
      ru: "Интуитивно понятный, интуитивный",
      level: "B1",
      done: false
    },
    {
      en: "Essential",
      ru: "Существенный, важный",
      level: "B1",
      done: false
    },
    {
      en: "Numerous",
      ru: "Многочисленный",
      level: "B1",
      done: false
    },
    {
      en: "Compliant",
      ru: "Соответствующий",
      level: "B1",
      done: false
    },
    {
      en: "Straightforward",
      ru: "Прямой, прямолинейный",
      level: "B1",
      done: false
    },
    {
      en: "Understandable",
      ru: "Понятный, доступный",
      level: "B1",
      done: false
    },
    {
      en: "Uncompromising",
      ru: "Беспрекословный",
      level: "B1",
      done: false
    },
    {
      en: "Distinguished",
      ru: "Выдающийся, уважаемый, отличительный",
      level: "B1",
      done: false
    },
    {
      en: "Separate",
      ru: "Отдельный",
      level: "B1",
      done: false
    },
    {
      en: "Outstanding",
      ru: "Незаурядный",
      level: "B1",
      done: false
    },
    {
      en: "Principal",
      ru: "Принципиальный, главный",
      level: "B1",
      done: false
    },
    {
      en: "Leading",
      ru: "Ведущий, лидирующий",
      level: "B1",
      done: false
    },
    {
      en: "Cognitive",
      ru: "Когнитивный, познавательный",
      level: "B1",
      done: false
    },
    {
      en: "Cutting-edge",
      ru: "Современный, новейший",
      level: "B1",
      done: false
    },
    {
      en: "Precise",
      ru: "Точный, четкий",
      level: "B1",
      done: false
    },
    {
      en: "Unmatched",
      ru: "Неповторимый, непревзойденный",
      level: "B1",
      done: false
    },
    {
      en: "Reasonable",
      ru: "Разумный, целесообразный",
      level: "B1",
      done: false
    },
    {
      en: "Fundamental",
      ru: "Основополагающий",
      level: "B1",
      done: false
    },
    {
      en: "Brilliant",
      ru: "Блестящий, гениальный",
      level: "B1",
      done: false
    },
    {
      en: "Inflexible",
      ru: "Несгибаемый, непогрешимый",
      level: "B1",
      done: false
    },
    {
      en: "Crucial",
      ru: "Решающий, критический, важный",
      level: "B1",
      done: false
    },
    {
      en: "Contemporary",
      ru: "Современный, актуальный",
      level: "B1",
      done: false
    },
    {
      en: "Duplicated",
      ru: "Дублированный",
      level: "B1",
      done: false
    },
    {
      en: "Tedious",
      ru: "Утомительный, кропотливый, надоедливый",
      level: "B1",
      done: false
    },
    {
      en: "Multiple",
      ru: "Множественный, многочисленный",
      level: "B1",
      done: false
    },
    {
      en: "Individual",
      ru: "Личный, индивидуальный",
      level: "B1",
      done: false
    },
    {
      en: "Fitting",
      ru: "Подходящий",
      level: "B1",
      done: false
    },
    {
      en: "Monotonous",
      ru: "Монотонный, однообразный",
      level: "B1",
      done: false
    },
    {
      en: "Ruthless",
      ru: "Бесчеловечный",
      level: "B1",
      done: false
    },
    {
      en: "Multi-channel",
      ru: "Многоканальный",
      level: "B1",
      done: false
    },
    {
      en: "Astonishing",
      ru: "Удивительный, изумительный",
      level: "B1",
      done: false
    },
    {
      en: "Ambitious",
      ru: "Амбициозный, честолюбивый",
      level: "B1",
      done: false
    },
    {
      en: "Captivating",
      ru: "Захватывающий, завораживающий",
      level: "B1",
      done: false
    },
    {
      en: "Profound",
      ru: "Глубокомысленный",
      level: "B1",
      done: false
    },
    {
      en: "Qualified",
      ru: "Квалифицированный",
      level: "B1",
      done: false
    },
    {
      en: "Remarkable",
      ru: "Замечательный, примечательный, выдающийся",
      level: "B1",
      done: false
    },
    {
      en: "Additional",
      ru: "Дополнительный",
      level: "B1",
      done: false
    },
    {
      en: "Burning",
      ru: "Горящий, жгучий",
      level: "B1",
      done: false
    },
    {
      en: "Unassuming",
      ru: "Непритязательный",
      level: "B1",
      done: false
    },
    {
      en: "Meaningful",
      ru: "Значимый, осмысленный",
      level: "B1",
      done: false
    },
    {
      en: "Private",
      ru: "Личный, частный",
      level: "B1",
      done: false
    },
    {
      en: "Careful",
      ru: "Бережный, осторожный",
      level: "B1",
      done: false
    },
    {
      en: "Obscure",
      ru: "Наблюдательный, непонятный",
      level: "B1",
      done: false
    },
    {
      en: "Accomplished",
      ru: "Состоятельный, успешный, достигнутый",
      level: "B1",
      done: false
    },
    {
      en: "Ridiculous",
      ru: "Нелепый, смешной",
      level: "B1",
      done: false
    },
    {
      en: "Contemptuous",
      ru: "Презрительный",
      level: "B1",
      done: false
    },
    {
      en: "Fashionable",
      ru: "Модный",
      level: "B1",
      done: false
    },
    {
      en: "Наречие",
      ru: "Перевод",
      level: "B1",
      done: false
    },
    {
      en: "Invariably",
      ru: "Неизменно",
      level: "B1",
      done: false
    },
    {
      en: "Intermittently",
      ru: "Иногда",
      level: "B1",
      done: false
    },
    {
      en: "Infrequently",
      ru: "Редко",
      level: "B1",
      done: false
    },
    {
      en: "Predominantly",
      ru: "Постоянно",
      level: "B1",
      done: false
    },
    {
      en: "Elsewhere",
      ru: "Где-нибудь",
      level: "B1",
      done: false
    },
    {
      en: "Scarcely",
      ru: "Едва",
      level: "B1",
      done: false
    },
    {
      en: "Otherwise",
      ru: "Иначе",
      level: "B1",
      done: false
    },
    {
      en: "Quickly",
      ru: "Быстро",
      level: "B1",
      done: false
    },
    {
      en: "Quietly",
      ru: "Спокойно, тихо",
      level: "B1",
      done: false
    },
    {
      en: "Moreover",
      ru: "Более того",
      level: "B1",
      done: false
    },
    {
      en: "Nevertheless",
      ru: "Тем не менее",
      level: "B1",
      done: false
    },
    {
      en: "Somewhat",
      ru: "До некоторой степени",
      level: "B1",
      done: false
    },
    {
      en: "Cheerfully",
      ru: "Весело",
      level: "B1",
      done: false
    },
    {
      en: "Clumsily",
      ru: "Неуклюже",
      level: "B1",
      done: false
    },
    {
      en: "In vain",
      ru: "Напрасно",
      level: "B1",
      done: false
    },
    {
      en: "At once",
      ru: "Немедленно",
      level: "B1",
      done: false
    },
    {
      en: "Casually",
      ru: "Случайно",
      level: "B1",
      done: false
    },
    {
      en: "Since that",
      ru: "С тех пор",
      level: "B1",
      done: false
    },
    {
      en: "By all means",
      ru: "Во что бы то ни стало",
      level: "B1",
      done: false
    },
    {
      en: "Readily",
      ru: "Охотно",
      level: "B1",
      done: false
    },
    {
      en: "Outside",
      ru: "Снаружи",
      level: "B1",
      done: false
    },
    {
      en: "Besides",
      ru: "Кроме того",
      level: "B1",
      done: false
    },
    {
      en: "Once",
      ru: "Однажды",
      level: "B1",
      done: false
    },
    {
      en: "However",
      ru: "Однако, как бы ни",
      level: "B1",
      done: false
    },
    {
      en: "Yet",
      ru: "Еще, до сих пор",
      level: "B1",
      done: false
    },
    {
      en: "Foolishly",
      ru: "Глупо, по глупости",
      level: "B1",
      done: false
    },
    {
      en: "Clearly",
      ru: "Очевидно",
      level: "B1",
      done: false
    },
    {
      en: "Actually",
      ru: "В общем, вообще-то",
      level: "B1",
      done: false
    },
    {
      en: "Completely",
      ru: "Совершенно, абсолютно",
      level: "B1",
      done: false
    },
    {
      en: "Extremely",
      ru: "Безумно",
      level: "B1",
      done: false
    },
    {
      en: "Nearby",
      ru: "Рядом, неподалеку",
      level: "B1",
      done: false
    },
    {
      en: "Unmistakable",
      ru: "Безошибочно",
      level: "B1",
      done: false
    },
    {
      en: "Accurately",
      ru: "Точно",
      level: "B1",
      done: false
    },
    {
      en: "Definitely",
      ru: "Абсолютно",
      level: "B1",
      done: false
    },
    {
      en: "Relentlessly",
      ru: "Безостановочно",
      level: "B1",
      done: false
    },
    {
      en: "Incredibly",
      ru: "Невероятно, очень, неимоверно",
      level: "B1",
      done: false
    },
    {
      en: "Decidedly",
      ru: "Решительно",
      level: "B1",
      done: false
    },
    {
      en: "Firmly",
      ru: "Уверенно",
      level: "B1",
      done: false
    },
    {
      en: "Carelessly",
      ru: "Беспечно",
      level: "B1",
      done: false
    },
    {
      en: "Nevertheless",
      ru: "Тем не менее",
      level: "B1",
      done: false
    },
    {
      en: "To abhor",
      ru: "Ненавидеть",
      level: "B2",
      done: false
    },
    {
      en: "To abrogate",
      ru: "Отменить",
      level: "B2",
      done: false
    },
    {
      en: "To abstain",
      ru: "Воздержаться",
      level: "B2",
      done: false
    },
    {
      en: "To strengthen",
      ru: "Укрепить, усилить",
      level: "B2",
      done: false
    },
    {
      en: "To yield",
      ru: "Уступить",
      level: "B2",
      done: false
    },
    {
      en: "To sustain",
      ru: "Поддерживать",
      level: "B2",
      done: false
    },
    {
      en: "To seize",
      ru: "Захватить",
      level: "B2",
      done: false
    },
    {
      en: "To nourish",
      ru: "Питать",
      level: "B2",
      done: false
    },
    {
      en: "To desist",
      ru: "Запретить",
      level: "B2",
      done: false
    },
    {
      en: "To recapitulate",
      ru: "Пересказывать",
      level: "B2",
      done: false
    },
    {
      en: "To proclaim",
      ru: "Провозгласить, объявить",
      level: "B2",
      done: false
    },
    {
      en: "To beget",
      ru: "Родить",
      level: "B2",
      done: false
    },
    {
      en: "To mature",
      ru: "Созреть",
      level: "B2",
      done: false
    },
    {
      en: "To contemplate",
      ru: "Созерцать",
      level: "B2",
      done: false
    },
    {
      en: "To flourish",
      ru: "Процветать",
      level: "B2",
      done: false
    },
    {
      en: "To cable",
      ru: "Проводить",
      level: "B2",
      done: false
    },
    {
      en: "To congregate",
      ru: "Собираться",
      level: "B2",
      done: false
    },
    {
      en: "To induce",
      ru: "Побудить, побуждать",
      level: "B2",
      done: false
    },
    {
      en: "To highlight",
      ru: "Выделять",
      level: "B2",
      done: false
    },
    {
      en: "To foretell",
      ru: "Предсказывать",
      level: "B2",
      done: false
    },
    {
      en: "To foreshadow",
      ru: "Предвещать",
      level: "B2",
      done: false
    },
    {
      en: "To interlace",
      ru: "Переплетать",
      level: "B2",
      done: false
    },
    {
      en: "To relish",
      ru: "Наслаждаться, смаковать",
      level: "B2",
      done: false
    },
    {
      en: "To tread",
      ru: "Ухаживать",
      level: "B2",
      done: false
    },
    {
      en: "To rehearse",
      ru: "Репетировать",
      level: "B2",
      done: false
    },
    {
      en: "To narrate",
      ru: "Рассказывать",
      level: "B2",
      done: false
    },
    {
      en: "To alleviate",
      ru: "Облегчать, облегчить",
      level: "B2",
      done: false
    },
    {
      en: "To bilk",
      ru: "Обналичивать",
      level: "B2",
      done: false
    },
    {
      en: "To refine",
      ru: "Усовершенствовать",
      level: "B2",
      done: false
    },
    {
      en: "To restructure",
      ru: "Реструктурировать",
      level: "B2",
      done: false
    },
    {
      en: "To decay",
      ru: "Распадаться",
      level: "B2",
      done: false
    },
    {
      en: "To corrupt",
      ru: "Развращать",
      level: "B2",
      done: false
    },
    {
      en: "To alter",
      ru: "Изменяться",
      level: "B2",
      done: false
    },
    {
      en: "To discern",
      ru: "Различить",
      level: "B2",
      done: false
    },
    {
      en: "To disclose",
      ru: "Раскрыть",
      level: "B2",
      done: false
    },
    {
      en: "To inscribe",
      ru: "Начертать",
      level: "B2",
      done: false
    },
    {
      en: "To proffer",
      ru: "Предложить",
      level: "B2",
      done: false
    },
    {
      en: "To meddle",
      ru: "Вмешиваться",
      level: "B2",
      done: false
    },
    {
      en: "To violate",
      ru: "Нарушать",
      level: "B2",
      done: false
    },
    {
      en: "To further",
      ru: "Продолжать",
      level: "B2",
      done: false
    },
    {
      en: "To humble",
      ru: "Смирять",
      level: "B2",
      done: false
    },
    {
      en: "To subdue",
      ru: "Покорять",
      level: "B2",
      done: false
    },
    {
      en: "To demote",
      ru: "Понижать, разжаловать",
      level: "B2",
      done: false
    },
    {
      en: "To obey",
      ru: "Подчиняться, слушаться",
      level: "B2",
      done: false
    },
    {
      en: "To employ",
      ru: "Нанимать",
      level: "B2",
      done: false
    },
    {
      en: "To chastise",
      ru: "Наказывать",
      level: "B2",
      done: false
    },
    {
      en: "To concoct",
      ru: "Придумать",
      level: "B2",
      done: false
    },
    {
      en: "To condone",
      ru: "Потворствовать",
      level: "B2",
      done: false
    },
    {
      en: "To cringe",
      ru: "Сокрушаться",
      level: "B2",
      done: false
    },
    {
      en: "To ensconce",
      ru: "Приютить, успокоить",
      level: "B2",
      done: false
    },
    {
      en: "To sanction",
      ru: "Наказывать",
      level: "B2",
      done: false
    },
    {
      en: "To affix",
      ru: "Прикрепить, зафиксировать",
      level: "B2",
      done: false
    },
    {
      en: "To curb",
      ru: "Ограничить, обуздать",
      level: "B2",
      done: false
    },
    {
      en: "To restrain",
      ru: "Сдерживать",
      level: "B2",
      done: false
    },
    {
      en: "To enlarge",
      ru: "Увеличить, повысить",
      level: "B2",
      done: false
    },
    {
      en: "To govern",
      ru: "Управлять",
      level: "B2",
      done: false
    },
    {
      en: "To reckon",
      ru: "Пересчитать",
      level: "B2",
      done: false
    },
    {
      en: "To esteem",
      ru: "Ценить, уважать",
      level: "B2",
      done: false
    },
    {
      en: "To sweeten",
      ru: "Подсластить",
      level: "B2",
      done: false
    },
    {
      en: "To fluctuate",
      ru: "Колебаться",
      level: "B2",
      done: false
    },
    {
      en: "To fare",
      ru: "Зависеть, дорожать, подвергаться",
      level: "B2",
      done: false
    },
    {
      en: "To halt",
      ru: "Остановить, останавливать",
      level: "B2",
      done: false
    },
    {
      en: "To endure",
      ru: "Выдержать, выдерживать",
      level: "B2",
      done: false
    },
    {
      en: "To revenge",
      ru: "Мстить",
      level: "B2",
      done: false
    },
    {
      en: "To attain",
      ru: "Достигать, достичь",
      level: "B2",
      done: false
    },
    {
      en: "To divest",
      ru: "Расставаться",
      level: "B2",
      done: false
    },
    {
      en: "To elucidate",
      ru: "Прояснить",
      level: "B2",
      done: false
    },
    {
      en: "To invent",
      ru: "Изобретать, придумывать",
      level: "B2",
      done: false
    },
    {
      en: "To shield",
      ru: "Защищать",
      level: "B2",
      done: false
    },
    {
      en: "To resemble",
      ru: "Походить, быть похожим, напоминать",
      level: "B2",
      done: false
    },
    {
      en: "To ingest",
      ru: "Проглотить, заглотить",
      level: "B2",
      done: false
    },
    {
      en: "To dispense",
      ru: "Раздавать, дозировать, выдавать",
      level: "B2",
      done: false
    },
    {
      en: "To match",
      ru: "Соответствовать",
      level: "B2",
      done: false
    },
    {
      en: "To engross",
      ru: "Вовлечь, увлечь, задействовать",
      level: "B2",
      done: false
    },
    {
      en: "To collude",
      ru: "Сговориться, войти",
      level: "B2",
      done: false
    },
    {
      en: "To split",
      ru: "Разделить, разрушить",
      level: "B2",
      done: false
    },
    {
      en: "To unveil",
      ru: "Раскрыть, огласить, показать",
      level: "B2",
      done: false
    },
    {
      en: "To bear",
      ru: "Выносить, выдерживать, рожать",
      level: "B2",
      done: false
    },
    {
      en: "To prompt",
      ru: "Подсказать, побудить",
      level: "B2",
      done: false
    },
    {
      en: "To mold",
      ru: "Лепить, формировать",
      level: "B2",
      done: false
    },
    {
      en: "To rub",
      ru: "Натирать, втирать, растирать",
      level: "B2",
      done: false
    },
    {
      en: "To stomp",
      ru: "Топтать, затоптать",
      level: "B2",
      done: false
    },
    {
      en: "To narrate",
      ru: "Рассказывать, повествовать",
      level: "B2",
      done: false
    },
    {
      en: "To sense",
      ru: "Чувствовать, понимать",
      level: "B2",
      done: false
    },
    {
      en: "To outdate",
      ru: "Устаревать",
      level: "B2",
      done: false
    },
    {
      en: "To clutter",
      ru: "Загромождать, захламить",
      level: "B2",
      done: false
    },
    {
      en: "To scrabble",
      ru: "Царапать",
      level: "B2",
      done: false
    },
    {
      en: "To accuse",
      ru: "Обвинять",
      level: "B2",
      done: false
    },
    {
      en: "To summon",
      ru: "Вызвать, созвать",
      level: "B2",
      done: false
    },
    {
      en: "To outfit",
      ru: "Снарядить, обмундировать",
      level: "B2",
      done: false
    },
    {
      en: "To convert",
      ru: "Преобразовать",
      level: "B2",
      done: false
    },
    {
      en: "To override",
      ru: "Переопределить, перераспределить",
      level: "B2",
      done: false
    },
    {
      en: "To bind",
      ru: "Связать",
      level: "B2",
      done: false
    },
    {
      en: "To nurture",
      ru: "Воспитывать",
      level: "B2",
      done: false
    },
    {
      en: "To recount",
      ru: "Пересказывать",
      level: "B2",
      done: false
    },
    {
      en: "To backlog",
      ru: "Отставать",
      level: "B2",
      done: false
    },
    {
      en: "To inspectorate",
      ru: "Инспектировать, проверять",
      level: "B2",
      done: false
    },
    {
      en: "To unearth",
      ru: "Раскопать",
      level: "B2",
      done: false
    },
    {
      en: "To demote",
      ru: "Понизить в должности, разжаловать",
      level: "B2",
      done: false
    },
    {
      en: "To trap",
      ru: "Заманить в ловушку",
      level: "B2",
      done: false
    },
    {
      en: "questionnaire",
      ru: "Анкета, опросник",
      level: "B2",
      done: false
    },
    {
      en: "oversight",
      ru: "Надзор, контроль, проверка",
      level: "B2",
      done: false
    },
    {
      en: "stewardship",
      ru: "Ответственность, управление",
      level: "B2",
      done: false
    },
    {
      en: "estimating",
      ru: "Оценивание, подсчет, оценка",
      level: "B2",
      done: false
    },
    {
      en: "inquiry",
      ru: "Исследование, опрос, изучение, следствие",
      level: "B2",
      done: false
    },
    {
      en: "contemplation",
      ru: "Размышление, обдумывание, рассуждение",
      level: "B2",
      done: false
    },
    {
      en: "alternative",
      ru: "Альтернатива",
      level: "B2",
      done: false
    },
    {
      en: "grade",
      ru: "Класс, ранг, балл, оценка",
      level: "B2",
      done: false
    },
    {
      en: "graduate",
      ru: "Выпускник, дипломник",
      level: "B2",
      done: false
    },
    {
      en: "credential",
      ru: "Диплом, аттестат, свидетельство",
      level: "B2",
      done: false
    },
    {
      en: "accolade",
      ru: "Награда, похвала, благодарность",
      level: "B2",
      done: false
    },
    {
      en: "scale",
      ru: "Шкала, величина",
      level: "B2",
      done: false
    },
    {
      en: "gliding",
      ru: "Планерка",
      level: "B2",
      done: false
    },
    {
      en: "record",
      ru: "Запись, досье, рекорд",
      level: "B2",
      done: false
    },
    {
      en: "measurability",
      ru: "Исчислимость, измеримость, измерение",
      level: "B2",
      done: false
    },
    {
      en: "homeschooler",
      ru: "Ученик на домашнем обучении",
      level: "B2",
      done: false
    },
    {
      en: "worksheet",
      ru: "Рабочий лист, таблица",
      level: "B2",
      done: false
    },
    {
      en: "galore",
      ru: "Множество, куча, обилиие",
      level: "B2",
      done: false
    },
    {
      en: "prompt",
      ru: "Подсказка, совет",
      level: "B2",
      done: false
    },
    {
      en: "membership",
      ru: "Членство, участие, принадлежность, состав",
      level: "B2",
      done: false
    },
    {
      en: "progress tracker",
      ru: "Трекер прогресса",
      level: "B2",
      done: false
    },
    {
      en: "sequence",
      ru: "Последовательность, порядок, очередь",
      level: "B2",
      done: false
    },
    {
      en: "undergraduate",
      ru: "Бакалавр, ученик",
      level: "B2",
      done: false
    },
    {
      en: "degree",
      ru: "Степень, диплом",
      level: "B2",
      done: false
    },
    {
      en: "carer",
      ru: "Воспитатель, опекун",
      level: "B2",
      done: false
    },
    {
      en: "transition",
      ru: "Переход, превращение",
      level: "B2",
      done: false
    },
    {
      en: "recognition",
      ru: "Признание, осознание",
      level: "B2",
      done: false
    },
    {
      en: "workforce",
      ru: "Рабочая сила, кадры",
      level: "B2",
      done: false
    },
    {
      en: "volunteering",
      ru: "Волонтерство",
      level: "B2",
      done: false
    },
    {
      en: "internship",
      ru: "Стажировка, интернатура",
      level: "B2",
      done: false
    },
    {
      en: "accommodation",
      ru: "Проживание, размещение, жилье",
      level: "B2",
      done: false
    },
    {
      en: "enrolment",
      ru: "Зачисление, набор, поступление",
      level: "B2",
      done: false
    },
    {
      en: "guideline",
      ru: "Рекомендация, инструкция",
      level: "B2",
      done: false
    },
    {
      en: "hub",
      ru: "Центр, средоточие, концентратор",
      level: "B2",
      done: false
    },
    {
      en: "piety",
      ru: "Благочестие",
      level: "B2",
      done: false
    },
    {
      en: "impact",
      ru: "Последствие, результат, влияние",
      level: "B2",
      done: false
    },
    {
      en: "well-being",
      ru: "Благополучие",
      level: "B2",
      done: false
    },
    {
      en: "reasoning",
      ru: "Довод, логика, обоснование",
      level: "B2",
      done: false
    },
    {
      en: "incursion",
      ru: "Нарушение, столкновение",
      level: "B2",
      done: false
    },
    {
      en: "venue",
      ru: "Место проведения",
      level: "B2",
      done: false
    },
    {
      en: "doorstep",
      ru: "Порог квартиры",
      level: "B2",
      done: false
    },
    {
      en: "supervisor",
      ru: "Супервайзер",
      level: "B2",
      done: false
    },
    {
      en: "affirmation",
      ru: "Утверждение, подтверждение",
      level: "B2",
      done: false
    },
    {
      en: "uptick",
      ru: "Стимул, увеличение, толчок, подъем",
      level: "B2",
      done: false
    },
    {
      en: "drop-off",
      ru: "Спад, снижение, упадок",
      level: "B2",
      done: false
    },
    {
      en: "conversation",
      ru: "Разговор, беседа, обсуждение",
      level: "B2",
      done: false
    },
    {
      en: "indifference",
      ru: "Безразличие, безучастие",
      level: "B2",
      done: false
    },
    {
      en: "ageism",
      ru: "Эйджизм",
      level: "B2",
      done: false
    },
    {
      en: "segmentation",
      ru: "Сегментация",
      level: "B2",
      done: false
    },
    {
      en: "landmark",
      ru: "Веха, ориентир, достопримечательность",
      level: "B2",
      done: false
    },
    {
      en: "upheaval",
      ru: "Переворот, катастрофа, волнение",
      level: "B2",
      done: false
    },
    {
      en: "harassment",
      ru: "Преследование, домогательство",
      level: "B2",
      done: false
    },
    {
      en: "disarray",
      ru: "Беспорядок, разброд",
      level: "B2",
      done: false
    },
    {
      en: "proof",
      ru: "Доказательство",
      level: "B2",
      done: false
    },
    {
      en: "influx",
      ru: "Наплыв, приток",
      level: "B2",
      done: false
    },
    {
      en: "struggle",
      ru: "Борьба, поединок, спор",
      level: "B2",
      done: false
    },
    {
      en: "loneliness",
      ru: "Одиночество, уединение",
      level: "B2",
      done: false
    },
    {
      en: "mental health",
      ru: "Психическое здоровье",
      level: "B2",
      done: false
    },
    {
      en: "authenticity",
      ru: "Подлинность, самобытность",
      level: "B2",
      done: false
    },
    {
      en: "donation",
      ru: "Пожертвование, донорство",
      level: "B2",
      done: false
    },
    {
      en: "backlash",
      ru: "Обратная реакция",
      level: "B2",
      done: false
    },
    {
      en: "connotation",
      ru: "Подтекст, смысл, намек",
      level: "B2",
      done: false
    },
    {
      en: "affinity",
      ru: "Близость, сходство, симпатия",
      level: "B2",
      done: false
    },
    {
      en: "diversification",
      ru: "Диверсификация, разнообразие",
      level: "B2",
      done: false
    },
    {
      en: "takeover",
      ru: "Поглощение",
      level: "B2",
      done: false
    },
    {
      en: "feminism",
      ru: "Феминизм",
      level: "B2",
      done: false
    },
    {
      en: "equality",
      ru: "Равенство",
      level: "B2",
      done: false
    },
    {
      en: "sustainability",
      ru: "Устойчивость, стабильность",
      level: "B2",
      done: false
    },
    {
      en: "chunk",
      ru: "Кусок, ломоть, глыба",
      level: "B2",
      done: false
    },
    {
      en: "repercussion",
      ru: "Последствия, отзвук",
      level: "B2",
      done: false
    },
    {
      en: "preference",
      ru: "Предпочтение, преимущество",
      level: "B2",
      done: false
    },
    {
      en: "aspiration",
      ru: "Стремление, желание",
      level: "B2",
      done: false
    },
    {
      en: "consumption",
      ru: "Потребление, расход",
      level: "B2",
      done: false
    },
    {
      en: "mismanagement",
      ru: "Бесхозяйственность",
      level: "B2",
      done: false
    },
    {
      en: "keynote",
      ru: "Лейтмотив",
      level: "B2",
      done: false
    },
    {
      en: "rivalry",
      ru: "Соперничество, противостояние",
      level: "B2",
      done: false
    },
    {
      en: "disparity",
      ru: "Несоответствие, неравенство",
      level: "B2",
      done: false
    },
    {
      en: "repayment",
      ru: "Расплата, погашение, возврат",
      level: "B2",
      done: false
    },
    {
      en: "allegation",
      ru: "Обвинение, утверждение",
      level: "B2",
      done: false
    },
    {
      en: "prevalence",
      ru: "Распространенность, преобладание",
      level: "B2",
      done: false
    },
    {
      en: "nostalgia",
      ru: "Ностальгия, сожаление",
      level: "B2",
      done: false
    },
    {
      en: "uplighting",
      ru: "Освещение, просвещение",
      level: "B2",
      done: false
    },
    {
      en: "escapism",
      ru: "Эскапизм, уход, бегство",
      level: "B2",
      done: false
    },
    {
      en: "nonfiction",
      ru: "Нон-фикшн, нехудожественная литература",
      level: "B2",
      done: false
    },
    {
      en: "psychology",
      ru: "Психология",
      level: "B2",
      done: false
    },
    {
      en: "funnel",
      ru: "Воронка, водоворот",
      level: "B2",
      done: false
    },
    {
      en: "amateur",
      ru: "Любитель, фанат",
      level: "B2",
      done: false
    },
    {
      en: "protagonist",
      ru: "Протагонист, главный герой",
      level: "B2",
      done: false
    },
    {
      en: "pinpoint",
      ru: "Точка опоры, привязка",
      level: "B2",
      done: false
    },
    {
      en: "announcement",
      ru: "Анонс, объявление",
      level: "B2",
      done: false
    },
    {
      en: "consequence",
      ru: "Заключение, следствие",
      level: "B2",
      done: false
    },
    {
      en: "exaggeration",
      ru: "Преувеличение, утрирование",
      level: "B2",
      done: false
    },
    {
      en: "scrutiny",
      ru: "Исследование, тщательная проверка",
      level: "B2",
      done: false
    },
    {
      en: "blueprint",
      ru: "План, проект, чертеж",
      level: "B2",
      done: false
    },
    {
      en: "expansion",
      ru: "Развитие, расширение",
      level: "B2",
      done: false
    },
    {
      en: "extent",
      ru: "Степень, размах, масштаб",
      level: "B2",
      done: false
    },
    {
      en: "victim",
      ru: "Жертва",
      level: "B2",
      done: false
    },
    {
      en: "ownership",
      ru: "Право собственности, владение",
      level: "B2",
      done: false
    },
    {
      en: "mass-market",
      ru: "Масс-маркет, массовая торговля",
      level: "B2",
      done: false
    },
    {
      en: "variety",
      ru: "Многообразие, разновидность",
      level: "B2",
      done: false
    },
    {
      en: "headline",
      ru: "Заголовок, заглавие",
      level: "B2",
      done: false
    },
    {
      en: "allegation",
      ru: "Утверждение, заявление, обвинение",
      level: "B2",
      done: false
    },
    {
      en: "restriction",
      ru: "Ограничение, запрет",
      level: "B2",
      done: false
    },
    {
      en: "comprehension",
      ru: "Понимание, осмысление",
      level: "B2",
      done: false
    },
    {
      en: "existence",
      ru: "Бытие, существование",
      level: "B2",
      done: false
    },
    {
      en: "counterpart",
      ru: "Аналог, двойник",
      level: "B2",
      done: false
    },
    {
      en: "goldmine",
      ru: "Золотая жила",
      level: "B2",
      done: false
    },
    {
      en: "applause",
      ru: "Аплодисменты",
      level: "B2",
      done: false
    },
    {
      en: "satisfaction",
      ru: "Удовлетворение, удовольствие",
      level: "B2",
      done: false
    },
    {
      en: "testimonial",
      ru: "Отзыв",
      level: "B2",
      done: false
    },
    {
      en: "empathy",
      ru: "Эмпатия",
      level: "B2",
      done: false
    },
    {
      en: "consideration",
      ru: "Размышление, соображение",
      level: "B2",
      done: false
    },
    {
      en: "touchpoint",
      ru: "Точка соприкосновения",
      level: "B2",
      done: false
    },
    {
      en: "jargon",
      ru: "Жаргон",
      level: "B2",
      done: false
    },
    {
      en: "background",
      ru: "Предыстория",
      level: "B2",
      done: false
    },
    {
      en: "relief",
      ru: "Помощь, разрядка",
      level: "B2",
      done: false
    },
    {
      en: "perception",
      ru: "Восприятие",
      level: "B2",
      done: false
    },
    {
      en: "stance",
      ru: "Позиция, отношение",
      level: "B2",
      done: false
    },
    {
      en: "catharsis",
      ru: "Катарсис",
      level: "B2",
      done: false
    },
    {
      en: "solace",
      ru: "Утешение",
      level: "B2",
      done: false
    },
    {
      en: "Fast-changing",
      ru: "Быстро меняющийся",
      level: "B2",
      done: false
    },
    {
      en: "Highly skilled",
      ru: "Высококвалифицированный",
      level: "B2",
      done: false
    },
    {
      en: "Eligible",
      ru: "Подходящий",
      level: "B2",
      done: false
    },
    {
      en: "Vibrant",
      ru: "Жизнеспособный, яркий, живой",
      level: "B2",
      done: false
    },
    {
      en: "Lifelong",
      ru: "Пожизненный",
      level: "B2",
      done: false
    },
    {
      en: "Fully furnished",
      ru: "Полностью обустроенный",
      level: "B2",
      done: false
    },
    {
      en: "Canonical",
      ru: "Канонический",
      level: "B2",
      done: false
    },
    {
      en: "Research-based",
      ru: "Основанный на исследованиях",
      level: "B2",
      done: false
    },
    {
      en: "Inspirational",
      ru: "Вдохновляющий",
      level: "B2",
      done: false
    },
    {
      en: "Holistic",
      ru: "Целостный",
      level: "B2",
      done: false
    },
    {
      en: "Empirical",
      ru: "Эмпирический",
      level: "B2",
      done: false
    },
    {
      en: "Fun-filled",
      ru: "Наполненный весельем",
      level: "B2",
      done: false
    },
    {
      en: "Award-winning",
      ru: "Отмеченный наградой, награжденный",
      level: "B2",
      done: false
    },
    {
      en: "Rapid",
      ru: "Быстрый",
      level: "B2",
      done: false
    },
    {
      en: "Job-ready",
      ru: "Готовый к работе",
      level: "B2",
      done: false
    },
    {
      en: "Median",
      ru: "Средний, медианный",
      level: "B2",
      done: false
    },
    {
      en: "Lucrative",
      ru: "Выгодный",
      level: "B2",
      done: false
    },
    {
      en: "Savvy",
      ru: "Проницательный",
      level: "B2",
      done: false
    },
    {
      en: "Thoughtful",
      ru: "Вдумчивый",
      level: "B2",
      done: false
    },
    {
      en: "Elusive",
      ru: "Неуловимый",
      level: "B2",
      done: false
    },
    {
      en: "On-demand",
      ru: "Востребованный",
      level: "B2",
      done: false
    },
    {
      en: "Nonexistent",
      ru: "Несуществующий",
      level: "B2",
      done: false
    },
    {
      en: "Luxurious",
      ru: "Роскошный",
      level: "B2",
      done: false
    },
    {
      en: "Entertaining",
      ru: "Развлекательный",
      level: "B2",
      done: false
    },
    {
      en: "Conscious",
      ru: "Сознательный",
      level: "B2",
      done: false
    },
    {
      en: "Mythological",
      ru: "Мифологический",
      level: "B2",
      done: false
    },
    {
      en: "Prosaic",
      ru: "Прозаический",
      level: "B2",
      done: false
    },
    {
      en: "Uplifting",
      ru: "Поднимающий настроение",
      level: "B2",
      done: false
    },
    {
      en: "Looming",
      ru: "Надвигающийся",
      level: "B2",
      done: false
    },
    {
      en: "People-first",
      ru: "Ориентированный на человека",
      level: "B2",
      done: false
    },
    {
      en: "User-generated",
      ru: "Созданный пользователями",
      level: "B2",
      done: false
    },
    {
      en: "Experimental",
      ru: "Экспериментальный",
      level: "B2",
      done: false
    },
    {
      en: "Aesthetic",
      ru: "Эстетический",
      level: "B2",
      done: false
    },
    {
      en: "Feasible",
      ru: "Осуществимый",
      level: "B2",
      done: false
    },
    {
      en: "Foreseeable",
      ru: "Предвидимый",
      level: "B2",
      done: false
    },
    {
      en: "Streamlined",
      ru: "Оптимизированный, удобный, обтекаемый",
      level: "B2",
      done: false
    },
    {
      en: "Brand new",
      ru: "Инновационный",
      level: "B2",
      done: false
    },
    {
      en: "Ephemeral",
      ru: "Эфемерный",
      level: "B2",
      done: false
    },
    {
      en: "Prevalent",
      ru: "Распространенный",
      level: "B2",
      done: false
    },
    {
      en: "Sizable",
      ru: "Большой",
      level: "B2",
      done: false
    },
    {
      en: "Shoppable",
      ru: "Доступный для покупки",
      level: "B2",
      done: false
    },
    {
      en: "Stratospheric",
      ru: "Стратосферный",
      level: "B2",
      done: false
    },
    {
      en: "Major",
      ru: "Крупный, главный",
      level: "B2",
      done: false
    },
    {
      en: "Unprecedented",
      ru: "Беспрецедентный",
      level: "B2",
      done: false
    },
    {
      en: "Exorbitant",
      ru: "Непомерный",
      level: "B2",
      done: false
    },
    {
      en: "Artistic",
      ru: "Художественный, творческий",
      level: "B2",
      done: false
    },
    {
      en: "Prospective",
      ru: "Перспективный",
      level: "B2",
      done: false
    },
    {
      en: "Like-minded",
      ru: "Похожий",
      level: "B2",
      done: false
    },
    {
      en: "Customer-centric",
      ru: "Ориентированный на клиента",
      level: "B2",
      done: false
    },
    {
      en: "Editorial",
      ru: "Редакционный, редакторский",
      level: "B2",
      done: false
    },
    {
      en: "Solitary",
      ru: "Одиночный, уединенный",
      level: "B2",
      done: false
    },
    {
      en: "Controversial",
      ru: "Спорный",
      level: "B2",
      done: false
    },
    {
      en: "Shareable",
      ru: "Делимый, разделяемый",
      level: "B2",
      done: false
    },
    {
      en: "Journalistic",
      ru: "Журналистский",
      level: "B2",
      done: false
    },
    {
      en: "Elegiac",
      ru: "Элегический",
      level: "B2",
      done: false
    },
    {
      en: "Short-lived",
      ru: "Недолговечный",
      level: "B2",
      done: false
    },
    {
      en: "Authoritative",
      ru: "Авторитетный",
      level: "B2",
      done: false
    },
    {
      en: "Subsequent",
      ru: "Последующий",
      level: "B2",
      done: false
    },
    {
      en: "Unavoidable",
      ru: "Неизбежный",
      level: "B2",
      done: false
    },
    {
      en: "Disastrous",
      ru: "Катастрофический",
      level: "B2",
      done: false
    },
    {
      en: "Sustainable",
      ru: "Stable",
      level: "B2",
      done: false
    },
    {
      en: "Qualitative",
      ru: "High quality",
      level: "B2",
      done: false
    },
    {
      en: "Collaboratively",
      ru: "Совместно",
      level: "B2",
      done: false
    },
    {
      en: "Twofold",
      ru: "Вдвойне",
      level: "B2",
      done: false
    },
    {
      en: "Backwards",
      ru: "Наоборот, назад",
      level: "B2",
      done: false
    },
    {
      en: "Alongside",
      ru: "Наряду",
      level: "B2",
      done: false
    },
    {
      en: "Face-to-face",
      ru: "Лицом к лицу",
      level: "B2",
      done: false
    },
    {
      en: "Increasingly",
      ru: "Все чаще",
      level: "B2",
      done: false
    },
    {
      en: "Likewise",
      ru: "Аналогично",
      level: "B2",
      done: false
    },
    {
      en: "Inherently",
      ru: "По своей сути",
      level: "B2",
      done: false
    },
    {
      en: "Yearslong",
      ru: "В течение года",
      level: "B2",
      done: false
    },
    {
      en: "Dramatically",
      ru: "Значительно",
      level: "B2",
      done: false
    },
    {
      en: "Overall",
      ru: "В целом",
      level: "B2",
      done: false
    },
    {
      en: "Sustainably",
      ru: "Устойчиво",
      level: "B2",
      done: false
    },
    {
      en: "Thoroughly",
      ru: "Тщательно",
      level: "B2",
      done: false
    },
    {
      en: "Radically",
      ru: "Радикально",
      level: "B2",
      done: false
    },
    {
      en: "Undeniably",
      ru: "Бесспорно",
      level: "B2",
      done: false
    },
    {
      en: "Amongst",
      ru: "Среди",
      level: "B2",
      done: false
    },
    {
      en: "Specifically",
      ru: "Конкретно",
      level: "B2",
      done: false
    },
    {
      en: "Unless",
      ru: "Если только",
      level: "B2",
      done: false
    },
    {
      en: "Seamless",
      ru: "Беспрепятственно",
      level: "B2",
      done: false
    },
    {
      en: "Alternatively",
      ru: "Альтернативно",
      level: "B2",
      done: false
    },
    {
      en: "Disproportionately",
      ru: "Непропорционально",
      level: "B2",
      done: false
    },
    {
      en: "Innermost",
      ru: "Сокровенно",
      level: "B2",
      done: false
    },
    {
      en: "Midway",
      ru: "Посредине",
      level: "B2",
      done: false
    },
    {
      en: "Unthinkable",
      ru: "Немыслимо",
      level: "B2",
      done: false
    },
    {
      en: "Ruthlessly",
      ru: "Беспощадно",
      level: "B2",
      done: false
    },
    {
      en: "Altogether",
      ru: "В целом",
      level: "B2",
      done: false
    },
    {
      en: "Beneath",
      ru: "Под, внизу",
      level: "B2",
      done: false
    },
    {
      en: "Factually",
      ru: "По-настоящему",
      level: "B2",
      done: false
    },
    {
      en: "Indeed",
      ru: "Действительно",
      level: "B2",
      done: false
    },
    {
      en: "Occasionally",
      ru: "Время от времени",
      level: "B2",
      done: false
    },
    {
      en: "Plenty",
      ru: "Много, достаточно, полно",
      level: "B2",
      done: false
    },
    {
      en: "Anywise",
      ru: "Как угодно",
      level: "B2",
      done: false
    },
    {
      en: "Somewhere",
      ru: "Где-то",
      level: "B2",
      done: false
    },
    {
      en: "Throughout",
      ru: "Повсюду",
      level: "B2",
      done: false
    },
    {
      en: "Scarcely",
      ru: "Скудно, редко",
      level: "B2",
      done: false
    },
    {
      en: "Weekly",
      ru: "Еженедельно",
      level: "B2",
      done: false
    },
    {
      en: "Quietly",
      ru: "Тихо",
      level: "B2",
      done: false
    },
    {
      en: "Rather too",
      ru: "Скорее слишком",
      level: "B2",
      done: false
    },
    {
      en: "Chiefly",
      ru: "В основном",
      level: "B2",
      done: false
    },
    {
      en: "To abate",
      ru: "Сокращать, уменшать, ослаблять",
      level: "C1",
      done: false
    },
    {
      en: "To abjure",
      ru: "Отказаться, отрекаться, воздерживаться",
      level: "C1",
      done: false
    },
    {
      en: "To dangle",
      ru: "Болтаться, зависать, висеть",
      level: "C1",
      done: false
    },
    {
      en: "To abscond",
      ru: "Скрыться, пропасть, уйти",
      level: "C1",
      done: false
    },
    {
      en: "To assuage",
      ru: "Успокаивать, утешать, усмирять",
      level: "C1",
      done: false
    },
    {
      en: "To disabuse",
      ru: "Разочаровать, расстроить, развенчать",
      level: "C1",
      done: false
    },
    {
      en: "To equivocate",
      ru: "Увиливать, оправдываться, оспаривать",
      level: "C1",
      done: false
    },
    {
      en: "To incise",
      ru: "Надрезать",
      level: "C1",
      done: false
    },
    {
      en: "To diminish",
      ru: "Уменьшать",
      level: "C1",
      done: false
    },
    {
      en: "To jeopardize",
      ru: "Ставить под угрозу",
      level: "C1",
      done: false
    },
    {
      en: "To breed",
      ru: "Размножаться",
      level: "C1",
      done: false
    },
    {
      en: "To prevaricate",
      ru: "Преувеличивать",
      level: "C1",
      done: false
    },
    {
      en: "To recant",
      ru: "Отказаться от показаний",
      level: "C1",
      done: false
    },
    {
      en: "To refute",
      ru: "Опровергать",
      level: "C1",
      done: false
    },
    {
      en: "To ignoble",
      ru: "Обольстить",
      level: "C1",
      done: false
    },
    {
      en: "To banish",
      ru: "Изгнать",
      level: "C1",
      done: false
    },
    {
      en: "To disavow",
      ru: "Отречься",
      level: "C1",
      done: false
    },
    {
      en: "To explode",
      ru: "Взорваться",
      level: "C1",
      done: false
    },
    {
      en: "To unearth",
      ru: "Раскопать",
      level: "C1",
      done: false
    },
    {
      en: "To depict",
      ru: "Отобразить",
      level: "C1",
      done: false
    },
    {
      en: "To unpick",
      ru: "Распарывать, распустить",
      level: "C1",
      done: false
    },
    {
      en: "To originate",
      ru: "Зарождаться",
      level: "C1",
      done: false
    },
    {
      en: "To pluck",
      ru: "Вырывать",
      level: "C1",
      done: false
    },
    {
      en: "To amass",
      ru: "Накапливать",
      level: "C1",
      done: false
    },
    {
      en: "To staff",
      ru: "Укомплектовать",
      level: "C1",
      done: false
    },
    {
      en: "To shrink",
      ru: "Сокращаться",
      level: "C1",
      done: false
    },
    {
      en: "To mold",
      ru: "Лепить",
      level: "C1",
      done: false
    },
    {
      en: "To contrive",
      ru: "Придумывать",
      level: "C1",
      done: false
    },
    {
      en: "To entice",
      ru: "Завлекать",
      level: "C1",
      done: false
    },
    {
      en: "To pervade",
      ru: "Пронизывать",
      level: "C1",
      done: false
    },
    {
      en: "To prevail",
      ru: "Преобладать",
      level: "C1",
      done: false
    },
    {
      en: "To supersede",
      ru: "Вытеснять",
      level: "C1",
      done: false
    },
    {
      en: "To redeem",
      ru: "Выкупить",
      level: "C1",
      done: false
    },
    {
      en: "To wrack",
      ru: "Потревожить",
      level: "C1",
      done: false
    },
    {
      en: "To mesh",
      ru: "Зацеплять",
      level: "C1",
      done: false
    },
    {
      en: "To render",
      ru: "Оказывать",
      level: "C1",
      done: false
    },
    {
      en: "To lease",
      ru: "Сдать в аренду",
      level: "C1",
      done: false
    },
    {
      en: "To stipulate",
      ru: "Оговаривать",
      level: "C1",
      done: false
    },
    {
      en: "To decree",
      ru: "Постановить",
      level: "C1",
      done: false
    },
    {
      en: "To reminisce",
      ru: "Вспоминать",
      level: "C1",
      done: false
    },
    {
      en: "To rarefy",
      ru: "Редеть",
      level: "C1",
      done: false
    },
    {
      en: "To venerate",
      ru: "Почитать",
      level: "C1",
      done: false
    },
    {
      en: "To hatch",
      ru: "Вылупляться",
      level: "C1",
      done: false
    },
    {
      en: "To anchor",
      ru: "Бросить якорь",
      level: "C1",
      done: false
    },
    {
      en: "To inherit",
      ru: "Получить в наследство",
      level: "C1",
      done: false
    },
    {
      en: "To stab",
      ru: "Закалывать, нападать, вонзать",
      level: "C1",
      done: false
    },
    {
      en: "To sublet",
      ru: "Сдавать в субаренду",
      level: "C1",
      done: false
    },
    {
      en: "To outline",
      ru: "Начертить, обрисовать, наметить",
      level: "C1",
      done: false
    },
    {
      en: "To infiltrate",
      ru: "Проникнуь, внедриться, просачиваться",
      level: "C1",
      done: false
    },
    {
      en: "To utter",
      ru: "Произносить, изрекать, проговаривать",
      level: "C1",
      done: false
    },
    {
      en: "To vituperate",
      ru: "Издеваться, обижать",
      level: "C1",
      done: false
    },
    {
      en: "To waver",
      ru: "Колебаться, извиваться, дрогнуть",
      level: "C1",
      done: false
    },
    {
      en: "To withstand",
      ru: "Выдерживать, устоять, терпеть",
      level: "C1",
      done: false
    },
    {
      en: "To swap",
      ru: "Поменять местами, сменить",
      level: "C1",
      done: false
    },
    {
      en: "To coax",
      ru: "Соединить",
      level: "C1",
      done: false
    },
    {
      en: "To conspire",
      ru: "Сговориться",
      level: "C1",
      done: false
    },
    {
      en: "To append",
      ru: "Приложить",
      level: "C1",
      done: false
    },
    {
      en: "To entail",
      ru: "Влечь за собой",
      level: "C1",
      done: false
    },
    {
      en: "To repine",
      ru: "Порицать",
      level: "C1",
      done: false
    },
    {
      en: "To glance",
      ru: "Бросить взгляд, мельком глянуть",
      level: "C1",
      done: false
    },
    {
      en: "To resort",
      ru: "Прибегать",
      level: "C1",
      done: false
    },
    {
      en: "To substitute",
      ru: "Заменить",
      level: "C1",
      done: false
    },
    {
      en: "To surpass",
      ru: "Превзойти",
      level: "C1",
      done: false
    },
    {
      en: "To deem",
      ru: "Считать",
      level: "C1",
      done: false
    },
    {
      en: "To prophesy",
      ru: "Пророчествовать",
      level: "C1",
      done: false
    },
    {
      en: "To unveil",
      ru: "Раскрыть",
      level: "C1",
      done: false
    },
    {
      en: "To discard",
      ru: "Отказаться, списывать, отвергнуть",
      level: "C1",
      done: false
    },
    {
      en: "To eradicate",
      ru: "Искоренить",
      level: "C1",
      done: false
    },
    {
      en: "To propagate",
      ru: "Распространять",
      level: "C1",
      done: false
    },
    {
      en: "To terminate",
      ru: "Прекратить",
      level: "C1",
      done: false
    },
    {
      en: "To engross",
      ru: "Захватить",
      level: "C1",
      done: false
    },
    {
      en: "To overtake",
      ru: "Обгонять, нагнать, преодолеть",
      level: "C1",
      done: false
    },
    {
      en: "To shield",
      ru: "Укрыть, заслонить, оградить",
      level: "C1",
      done: false
    },
    {
      en: "To ingest",
      ru: "Проглотить",
      level: "C1",
      done: false
    },
    {
      en: "To malign",
      ru: "Очернить",
      level: "C1",
      done: false
    },
    {
      en: "To exhibit",
      ru: "Выставлять",
      level: "C1",
      done: false
    },
    {
      en: "To extirpate",
      ru: "Уничтожить",
      level: "C1",
      done: false
    },
    {
      en: "To initiate",
      ru: "Инициировать",
      level: "C1",
      done: false
    },
    {
      en: "To adjoy",
      ru: "Придерживаться",
      level: "C1",
      done: false
    },
    {
      en: "To delve",
      ru: "Углубиться",
      level: "C1",
      done: false
    },
    {
      en: "to vow",
      ru: "Клясться, ручаться, обещать",
      level: "C1",
      done: false
    },
    {
      en: "to alienate",
      ru: "отчуждать",
      level: "C1",
      done: false
    },
    {
      en: "to reimburse",
      ru: "возмещать",
      level: "C1",
      done: false
    },
    {
      en: "to disperse",
      ru: "Рассеивать, расходиться",
      level: "C1",
      done: false
    },
    {
      en: "to overlook",
      ru: "упускать из виду",
      level: "C1",
      done: false
    },
    {
      en: "to dismantle",
      ru: "Демонтировать, разобрать, убрать, разрушить",
      level: "C1",
      done: false
    },
    {
      en: "to exhilarate",
      ru: "взбодриться",
      level: "C1",
      done: false
    },
    {
      en: "to thrill",
      ru: "возбуждать",
      level: "C1",
      done: false
    },
    {
      en: "to underpin",
      ru: "поддерживать",
      level: "C1",
      done: false
    },
    {
      en: "to follow-up",
      ru: "следить",
      level: "C1",
      done: false
    },
    {
      en: "to predispose",
      ru: "Предрасполагать, склонять, располагать",
      level: "C1",
      done: false
    },
    {
      en: "to peer",
      ru: "Равняться, сравнивать, подглядывать",
      level: "C1",
      done: false
    },
    {
      en: "to intervene",
      ru: "вмешиваться",
      level: "C1",
      done: false
    },
    {
      en: "to resonate",
      ru: "резонировать",
      level: "C1",
      done: false
    },
    {
      en: "to contradict",
      ru: "Противоречить, возражать, опровергнуть",
      level: "C1",
      done: false
    },
    {
      en: "to distil",
      ru: "Дистиллировать, смягчать, рассеивать",
      level: "C1",
      done: false
    },
    {
      en: "to mitigate",
      ru: "Смягчать, сгладить, ослабить",
      level: "C1",
      done: false
    },
    {
      en: "to bounce back",
      ru: "Отскочить, вернуться, возвращаться, восстановиться",
      level: "C1",
      done: false
    },
    {
      en: "To indulge",
      ru: "Побаловать, потакать, потворствовать",
      level: "C1",
      done: false
    },
    {
      en: "To sniff",
      ru: "Нюхать, принюхиваться, сопеть",
      level: "C1",
      done: false
    },
    {
      en: "Axis",
      ru: "Ось",
      level: "C1",
      done: false
    },
    {
      en: "modality",
      ru: "Метод, форма",
      level: "C1",
      done: false
    },
    {
      en: "Discerning",
      ru: "распознавание",
      level: "C1",
      done: false
    },
    {
      en: "Similarity",
      ru: "Сходство, подобие, аналогия",
      level: "C1",
      done: false
    },
    {
      en: "Pattern",
      ru: "Образец, модель, схема",
      level: "C1",
      done: false
    },
    {
      en: "Sequencing",
      ru: "Последовательность, порядок, упорядочивание",
      level: "C1",
      done: false
    },
    {
      en: "Anthropologist",
      ru: "Антрополог",
      level: "C1",
      done: false
    },
    {
      en: "Oversight",
      ru: "Надзор, контроль",
      level: "C1",
      done: false
    },
    {
      en: "Exhibition",
      ru: "Выставка",
      level: "C1",
      done: false
    },
    {
      en: "Specimen",
      ru: "Образец, модель, экспонат",
      level: "C1",
      done: false
    },
    {
      en: "Interference",
      ru: "Интерференция, вмешательство",
      level: "C1",
      done: false
    },
    {
      en: "Bureaucracy",
      ru: "Бюрократия",
      level: "C1",
      done: false
    },
    {
      en: "Generation",
      ru: "Поколение",
      level: "C1",
      done: false
    },
    {
      en: "Evolutionist",
      ru: "Эволюционист",
      level: "C1",
      done: false
    },
    {
      en: "Significance",
      ru: "Значение, значимость, важность",
      level: "C1",
      done: false
    },
    {
      en: "Unveiling",
      ru: "Разоблачение, раскрытие",
      level: "C1",
      done: false
    },
    {
      en: "Implication",
      ru: "Следствие, последствие, подтекст, влияние",
      level: "C1",
      done: false
    },
    {
      en: "Biomarker",
      ru: "Биомаркер",
      level: "C1",
      done: false
    },
    {
      en: "Offspring",
      ru: "Потомство",
      level: "C1",
      done: false
    },
    {
      en: "Cognition",
      ru: "Познание",
      level: "C1",
      done: false
    },
    {
      en: "Prevalence",
      ru: "Распространенность, превалирование, предрасположенность",
      level: "C1",
      done: false
    },
    {
      en: "Conjecture",
      ru: "Догадка, гипотеза",
      level: "C1",
      done: false
    },
    {
      en: "Percentage",
      ru: "Процент, процентовка",
      level: "C1",
      done: false
    },
    {
      en: "Existence",
      ru: "Существование, наличие",
      level: "C1",
      done: false
    },
    {
      en: "Assertion",
      ru: "Утверждение, заявление",
      level: "C1",
      done: false
    },
    {
      en: "Correlation",
      ru: "Соотношение, корреляция, взаимосвязь",
      level: "C1",
      done: false
    },
    {
      en: "Cohort",
      ru: "Когорта, выборка, совокупность",
      level: "C1",
      done: false
    },
    {
      en: "Extent",
      ru: "Протяженность, объем, степень",
      level: "C1",
      done: false
    },
    {
      en: "Coherence",
      ru: "Когерентность, слаженность, связь",
      level: "C1",
      done: false
    },
    {
      en: "Abstractedness",
      ru: "Абстрактность",
      level: "C1",
      done: false
    },
    {
      en: "Gist",
      ru: "Суть, сущность, понятие, смысл",
      level: "C1",
      done: false
    },
    {
      en: "Likelihood",
      ru: "Вероятность, правдоподобность, достоверность",
      level: "C1",
      done: false
    },
    {
      en: "Instance",
      ru: "Экземпляр, объект, вариант",
      level: "C1",
      done: false
    },
    {
      en: "Vindication",
      ru: "Доказательство",
      level: "C1",
      done: false
    },
    {
      en: "Ambiguity",
      ru: "Двусмысленность, неоднозначность",
      level: "C1",
      done: false
    },
    {
      en: "Perseverance",
      ru: "Настойчивость, упорство",
      level: "C1",
      done: false
    },
    {
      en: "Disobedience",
      ru: "Непослушание, непокорность",
      level: "C1",
      done: false
    },
    {
      en: "Adolescent",
      ru: "Подросток",
      level: "C1",
      done: false
    },
    {
      en: "Neuroticism",
      ru: "Невротизм",
      level: "C1",
      done: false
    },
    {
      en: "Attempt",
      ru: "Попытка, испытание",
      level: "C1",
      done: false
    },
    {
      en: "Willingness",
      ru: "Готовность, желание, воля, стремление",
      level: "C1",
      done: false
    },
    {
      en: "Impulsivity",
      ru: "Импульсивность, порыв, побуждение",
      level: "C1",
      done: false
    },
    {
      en: "Proponent",
      ru: "Сторонник",
      level: "C1",
      done: false
    },
    {
      en: "Irritability",
      ru: "Раздражительность, вспыльчивость",
      level: "C1",
      done: false
    },
    {
      en: "Prison conviction",
      ru: "Тюремное заключение, приговор",
      level: "C1",
      done: false
    },
    {
      en: "Anxiety",
      ru: "Беспокойство, тревога, раздражительность",
      level: "C1",
      done: false
    },
    {
      en: "Restlessness",
      ru: "Сдержанность, невозмутимость",
      level: "C1",
      done: false
    },
    {
      en: "Disparity",
      ru: "Неравенство, несоответствие",
      level: "C1",
      done: false
    },
    {
      en: "Procrastination",
      ru: "Прокрастинация",
      level: "C1",
      done: false
    },
    {
      en: "Downward",
      ru: "Снижение, уныние",
      level: "C1",
      done: false
    },
    {
      en: "Self-restraint",
      ru: "Самоограничение, самоконтроль",
      level: "C1",
      done: false
    },
    {
      en: "Temptation",
      ru: "Искушение, соблазн",
      level: "C1",
      done: false
    },
    {
      en: "Boundary-setting",
      ru: "Установление границ",
      level: "C1",
      done: false
    },
    {
      en: "Distraction",
      ru: "Отвлечение, рассеянность",
      level: "C1",
      done: false
    },
    {
      en: "Compassion",
      ru: "Сострадание, сочувствие, жалость",
      level: "C1",
      done: false
    },
    {
      en: "Stigma",
      ru: "Клеймо",
      level: "C1",
      done: false
    },
    {
      en: "Affection",
      ru: "Привязанность, симпатия, любовь",
      level: "C1",
      done: false
    },
    {
      en: "Discrimination",
      ru: "Дискриминация",
      level: "C1",
      done: false
    },
    {
      en: "Conscientiousness",
      ru: "Совестливость, осознанность",
      level: "C1",
      done: false
    },
    {
      en: "Bias",
      ru: "Предубеждение, предвзятость",
      level: "C1",
      done: false
    },
    {
      en: "Ingenuity",
      ru: "Изобретательность",
      level: "C1",
      done: false
    },
    {
      en: "Upbringing",
      ru: "Воспитание",
      level: "C1",
      done: false
    },
    {
      en: "Deterrent",
      ru: "Сдерживающий фактор",
      level: "C1",
      done: false
    },
    {
      en: "Multitude",
      ru: "Многочисленность, разнообразие",
      level: "C1",
      done: false
    },
    {
      en: "Inheritance",
      ru: "Наследственность",
      level: "C1",
      done: false
    },
    {
      en: "Compromise",
      ru: "Компромисс, примирение",
      level: "C1",
      done: false
    },
    {
      en: "Untidiness",
      ru: "Неопрятность, неряшливость",
      level: "C1",
      done: false
    },
    {
      en: "Footprint",
      ru: "След, отпечаток, воздействие",
      level: "C1",
      done: false
    },
    {
      en: "Conservationist",
      ru: "Консерватор, хранитель, сторонник",
      level: "C1",
      done: false
    },
    {
      en: "Feasibility",
      ru: "Осуществимость, обоснованность",
      level: "C1",
      done: false
    },
    {
      en: "Earthquake",
      ru: "Землетрясение",
      level: "C1",
      done: false
    },
    {
      en: "Stillness",
      ru: "Неподвижность, штиль, затишье",
      level: "C1",
      done: false
    },
    {
      en: "Contamination",
      ru: "Загрязнение, заражение",
      level: "C1",
      done: false
    },
    {
      en: "Lifespan",
      ru: "Продолжительность жизни",
      level: "C1",
      done: false
    },
    {
      en: "Wilderness",
      ru: "Дикая природа",
      level: "C1",
      done: false
    },
    {
      en: "Predator",
      ru: "Хищник",
      level: "C1",
      done: false
    },
    {
      en: "Overpopulation",
      ru: "Перенаселение",
      level: "C1",
      done: false
    },
    {
      en: "Aftermath",
      ru: "Последствия",
      level: "C1",
      done: false
    },
    {
      en: "Wasteland",
      ru: "Пустошь",
      level: "C1",
      done: false
    },
    {
      en: "Grassland",
      ru: "Пастбище",
      level: "C1",
      done: false
    },
    {
      en: "Cattle",
      ru: "Крупный рогатый скот",
      level: "C1",
      done: false
    },
    {
      en: "Carbon emission",
      ru: "Выброс углерода",
      level: "C1",
      done: false
    },
    {
      en: "Deteriorating",
      ru: "Ухудшение, деградация",
      level: "C1",
      done: false
    },
    {
      en: "Erasure",
      ru: "Стирание",
      level: "C1",
      done: false
    },
    {
      en: "Drought",
      ru: "Засуха",
      level: "C1",
      done: false
    },
    {
      en: "Dieback",
      ru: "Вымирание",
      level: "C1",
      done: false
    },
    {
      en: "Foraging",
      ru: "Кормление",
      level: "C1",
      done: false
    },
    {
      en: "Breeding",
      ru: "Размножение",
      level: "C1",
      done: false
    },
    {
      en: "Fluctuation",
      ru: "Колебания, зыбкость",
      level: "C1",
      done: false
    },
    {
      en: "Resilience",
      ru: "Жизнеспособность, устойчивость",
      level: "C1",
      done: false
    },
    {
      en: "Hedgerow",
      ru: "Живая изгородь",
      level: "C1",
      done: false
    },
    {
      en: "Ditche",
      ru: "Канава, траншея, сточная яма",
      level: "C1",
      done: false
    },
    {
      en: "Coastal",
      ru: "Прибрежная зона",
      level: "C1",
      done: false
    },
    {
      en: "Combustion",
      ru: "Сжигание, горение",
      level: "C1",
      done: false
    },
    {
      en: "Restoration",
      ru: "Восстановление",
      level: "C1",
      done: false
    },
    {
      en: "Disturbance",
      ru: "Нарушение, вмешательство",
      level: "C1",
      done: false
    },
    {
      en: "Encroachment",
      ru: "Вторжение, захват, поглощение",
      level: "C1",
      done: false
    },
    {
      en: "Photosynthesis",
      ru: "Фотосинтез",
      level: "C1",
      done: false
    },
    {
      en: "Annihilation",
      ru: "Уничтожение, разрушение, удаление",
      level: "C1",
      done: false
    },
    {
      en: "Overload",
      ru: "Перегрузка",
      level: "C1",
      done: false
    },
    {
      en: "Biodiversity",
      ru: "Биологическое разнообразие",
      level: "C1",
      done: false
    },
    {
      en: "Sustenance",
      ru: "Пропитание, питание",
      level: "C1",
      done: false
    },
    {
      en: "Limestone",
      ru: "Известняк",
      level: "C1",
      done: false
    },
    {
      en: "Sequestration",
      ru: "Секвестрация, поглощение",
      level: "C1",
      done: false
    },
    {
      en: "Wilderness",
      ru: "Дикая природа",
      level: "C1",
      done: false
    },
    {
      en: "Inaccessible",
      ru: "Недоступный",
      level: "C1",
      done: false
    },
    {
      en: "Pioneering",
      ru: "Новаторский, первый",
      level: "C1",
      done: false
    },
    {
      en: "Astonishing",
      ru: "Поразительный",
      level: "C1",
      done: false
    },
    {
      en: "Eccentric",
      ru: "Эксцентричный, экстравагантный",
      level: "C1",
      done: false
    },
    {
      en: "Ethnographic",
      ru: "Этнографический",
      level: "C1",
      done: false
    },
    {
      en: "Quintessential",
      ru: "Полный, оригинальный",
      level: "C1",
      done: false
    },
    {
      en: "Colonial",
      ru: "Колониальный",
      level: "C1",
      done: false
    },
    {
      en: "Religious",
      ru: "Религиозный",
      level: "C1",
      done: false
    },
    {
      en: "Multi-sensory",
      ru: "Мультисенсорный, чувственный",
      level: "C1",
      done: false
    },
    {
      en: "Life-threatening",
      ru: "Опасный для жизни, угрожающий",
      level: "C1",
      done: false
    },
    {
      en: "Subsequent",
      ru: "Последующий, дальнейший",
      level: "C1",
      done: false
    },
    {
      en: "Uneventful",
      ru: "Беспристрастный",
      level: "C1",
      done: false
    },
    {
      en: "Insightful",
      ru: "Проницательный",
      level: "C1",
      done: false
    },
    {
      en: "Apparent",
      ru: "Очевидный",
      level: "C1",
      done: false
    },
    {
      en: "Disrespectful",
      ru: "Неуважительный",
      level: "C1",
      done: false
    },
    {
      en: "Inefficient",
      ru: "Неэффективный",
      level: "C1",
      done: false
    },
    {
      en: "Abnormal",
      ru: "Аномальный",
      level: "C1",
      done: false
    },
    {
      en: "Detectable",
      ru: "Обнаруживаемый, различимый, выявляемый",
      level: "C1",
      done: false
    },
    {
      en: "Cellular",
      ru: "Клеточный",
      level: "C1",
      done: false
    },
    {
      en: "Counterintuitive",
      ru: "Нелогичный, противоречивый, парадоксальный",
      level: "C1",
      done: false
    },
    {
      en: "Disparate",
      ru: "Разрозненный, несопоставимый",
      level: "C1",
      done: false
    },
    {
      en: "Excessive",
      ru: "Чрезмерный, избыточный",
      level: "C1",
      done: false
    },
    {
      en: "Detrimental",
      ru: "Пагубный, губительный, вредный",
      level: "C1",
      done: false
    },
    {
      en: "Indecisive",
      ru: "Нерешительный, неопределенный, неясный",
      level: "C1",
      done: false
    },
    {
      en: "Resilient",
      ru: "Устойчивый, упругий, эластичный",
      level: "C1",
      done: false
    },
    {
      en: "Adverse",
      ru: "Неблагоприятный, негативный",
      level: "C1",
      done: false
    },
    {
      en: "Manageable",
      ru: "Управляемый, поддающийся, преодолимый",
      level: "C1",
      done: false
    },
    {
      en: "Ingenious",
      ru: "Изобретательный, оригинальный",
      level: "C1",
      done: false
    },
    {
      en: "Free-roaming",
      ru: "Свободный",
      level: "C1",
      done: false
    },
    {
      en: "Harsh",
      ru: "Суровый, резкий, жесткий, грубый",
      level: "C1",
      done: false
    },
    {
      en: "Warm-blooded",
      ru: "Теплокровный",
      level: "C1",
      done: false
    },
    {
      en: "Ground-breaking",
      ru: "Новаторский",
      level: "C1",
      done: false
    },
    {
      en: "Uninhabitable",
      ru: "Непригодный для жизни",
      level: "C1",
      done: false
    },
    {
      en: "Hilarious",
      ru: "Уморительный, веселый",
      level: "C1",
      done: false
    },
    {
      en: "Unconscious",
      ru: "Бессознательный, неосознанный",
      level: "C1",
      done: false
    },
    {
      en: "Reproducible",
      ru: "Воспроизводимый",
      level: "C1",
      done: false
    },
    {
      en: "Grim",
      ru: "Мрачный, грозный",
      level: "C1",
      done: false
    },
    {
      en: "Irrefutable",
      ru: "Неопровержимый",
      level: "C1",
      done: false
    },
    {
      en: "Simplistic",
      ru: "Упрощённый, простой, простодушный",
      level: "C1",
      done: false
    },
    {
      en: "Disastrous",
      ru: "Катастрофический",
      level: "C1",
      done: false
    },
    {
      en: "Scarce",
      ru: "Скудный, дефицитный",
      level: "C1",
      done: false
    },
    {
      en: "Vicious",
      ru: "Злобный, порочный, ужасный",
      level: "C1",
      done: false
    },
    {
      en: "Head-to-tail",
      ru: "От начала до конца",
      level: "C1",
      done: false
    },
    {
      en: "Extensively",
      ru: "Широко, основательно, подробно",
      level: "C1",
      done: false
    },
    {
      en: "Mistakenly",
      ru: "Ошибочно",
      level: "C1",
      done: false
    },
    {
      en: "Initially",
      ru: "Первоначально, изначально",
      level: "C1",
      done: false
    },
    {
      en: "Remarkably",
      ru: "Замечательно, удивительно",
      level: "C1",
      done: false
    },
    {
      en: "Broadly",
      ru: "Широко, обширно, значительно",
      level: "C1",
      done: false
    },
    {
      en: "Posthumously",
      ru: "Посмертно, подспудно",
      level: "C1",
      done: false
    },
    {
      en: "Respectively",
      ru: "Соответственно, следовательно",
      level: "C1",
      done: false
    },
    {
      en: "Clumsily",
      ru: "Неуклюже, грубо, неудачно, бестолково",
      level: "C1",
      done: false
    },
    {
      en: "Deliberately",
      ru: "Сознательно",
      level: "C1",
      done: false
    },
    {
      en: "Subconsciously.",
      ru: "Подсознательно, неосознанно",
      level: "C1",
      done: false
    },
    {
      en: "Irrespective",
      ru: "Независимо",
      level: "C1",
      done: false
    },
    {
      en: "Albeit",
      ru: "Хотя, однако, несмотря",
      level: "C1",
      done: false
    },
    {
      en: "Strictly",
      ru: "Строго, неукоснительно, жестко",
      level: "C1",
      done: false
    },
    {
      en: "Fiercely",
      ru: "Яростно, свирепо, решительно",
      level: "C1",
      done: false
    },
    {
      en: "Arguably",
      ru: "Спорно, предположительно",
      level: "C1",
      done: false
    },
    {
      en: "Unremittingly",
      ru: "Неослабно, решительно, безоговорочно",
      level: "C1",
      done: false
    },
    {
      en: "Justifiably",
      ru: "Оправданно",
      level: "C1",
      done: false
    },
    {
      en: "Undeniably",
      ru: "Неоспоримо",
      level: "C1",
      done: false
    },
    {
      en: "Candidly",
      ru: "Откровенно, честно, искренне",
      level: "C1",
      done: false
    },
    {
      en: "Allegedly",
      ru: "Предположительно",
      level: "C1",
      done: false
    },
    {
      en: "Chronically",
      ru: "Хронически",
      level: "C1",
      done: false
    },
    {
      en: "Improperly",
      ru: "Неправильно, неправомерно",
      level: "C1",
      done: false
    },
    {
      en: "Unconsciously",
      ru: "Бессознательно",
      level: "C1",
      done: false
    },
    {
      en: "Worrisomely",
      ru: "Тревожно",
      level: "C1",
      done: false
    },
    {
      en: "Oftentimes",
      ru: "Нередко, зачастую, часто",
      level: "C1",
      done: false
    },
    {
      en: "Self-perpetuatingly",
      ru: "Самостоятельно",
      level: "C1",
      done: false
    },
    {
      en: "Radically",
      ru: "В корне, радикально, принципиально",
      level: "C1",
      done: false
    },
    {
      en: "Wrongfully",
      ru: "Несправедливо, ошибочно",
      level: "C1",
      done: false
    },
    {
      en: "Indisputable",
      ru: "Бесспорно, неоспоримо",
      level: "C1",
      done: false
    },
    { en: 'Aberration', ru: 'искажение', level: 'C2', done: false },
    { en: 'Abhor', ru: 'возненавидеть', level: 'C2', done: false },
    { en: 'Abjure', ru: 'отречься', level: 'C2', done: false },
    { en: 'Abrogate', ru: 'отменить', level: 'C2', done: false },
    { en: 'Abscond', ru: 'скрыться', level: 'C2', done: false },
    { en: 'Abstemious', ru: 'умеренный в еде и питье', level: 'C2', done: false },
    { en: 'Abstruse', ru: 'трудный для понимания', level: 'C2', done: false },
    { en: 'Accost', ru: 'обратиться к кому-либо', level: 'C2', done: false },
    { en: 'Acerbic', ru: 'едкий, кисловатый', level: 'C2', done: false },
    { en: 'Acquiesce', ru: 'согласиться', level: 'C2', done: false },
    { en: 'Acrimonious', ru: 'ядовитый', level: 'C2', done: false },
    { en: 'Adamant', ru: 'непреклонный', level: 'C2', done: false },
    { en: 'Adduce', ru: 'приводить в качестве доказательства', level: 'C2', done: false },
    { en: 'Adherent', ru: 'приверженец', level: 'C2', done: false },
    { en: 'Adulterate', ru: 'подделывать', level: 'C2', done: false },
    { en: 'Adulation', ru: 'льстивое похвалы', level: 'C2', done: false },
    { en: 'Adumbrate', ru: 'намекнуть', level: 'C2', done: false },
    { en: 'Adversary', ru: 'противник', level: 'C2', done: false },
    { en: 'Advocate', ru: 'защищать, поддерживать', level: 'C2', done: false },
    { en: 'Aesthete', ru: 'эстет', level: 'C2', done: false },
    { en: 'Affability', ru: 'приветливость', level: 'C2', done: false },
    { en: 'Affluent', ru: 'богатый', level: 'C2', done: false },
    { en: 'Aggrandize', ru: 'увеличить, преувеличить', level: 'C2', done: false },
    { en: 'Alacrity', ru: 'рвение, готовность', level: 'C2', done: false },
    { en: 'Alias', ru: 'псевдоним', level: 'C2', done: false },
    { en: 'Allege', ru: 'утверждать', level: 'C2', done: false },
    { en: 'Allegory', ru: 'аллегория', level: 'C2', done: false },
    { en: 'Allusion', ru: 'намек, отсылка', level: 'C2', done: false },
    { en: 'Aloof', ru: 'отдаленный', level: 'C2', done: false },
    { en: 'Amalgamate', ru: 'объединять', level: 'C2', done: false },
    { en: 'Ambiguity', ru: 'неопределенность', level: 'C2', done: false },
    { en: 'Ambivalent', ru: 'двойственный', level: 'C2', done: false },
    { en: 'Ameliorate', ru: 'улучшать', level: 'C2', done: false },
    { en: 'Amicable', ru: 'дружеский', level: 'C2', done: false },
    { en: 'Amorphous', ru: 'без формы', level: 'C2', done: false },
    { en: 'Analgesic', ru: 'обезболивающее', level: 'C2', done: false },
    { en: 'Anathema', ru: 'проклятие', level: 'C2', done: false },
    { en: 'Ancillary', ru: 'второстепенный', level: 'C2', done: false },
    { en: 'Animosity', ru: 'враждебность', level: 'C2', done: false },
    { en: 'Annals', ru: 'летописи', level: 'C2', done: false },
    { en: 'Anoint', ru: 'помазать', level: 'C2', done: false },
    { en: 'Antebellum', ru: 'до войны', level: 'C2', done: false },
    { en: 'Antecedent', ru: 'предшествующий', level: 'C2', done: false },
    { en: 'Anthropomorphism', ru: 'антропоморфизм', level: 'C2', done: false },
    { en: 'Antipathy', ru: 'антипатия', level: 'C2', done: false },
    { en: 'Antiquated', ru: 'устаревший', level: 'C2', done: false },
    { en: 'Antithesis', ru: 'противоположность', level: 'C2', done: false },
    { en: 'Apathy', ru: 'безразличие', level: 'C2', done: false },
    { en: 'Apex', ru: 'верхушка', level: 'C2', done: false },
    { en: 'Aphasia', ru: 'афазия', level: 'C2', done: false },
    { en: 'Apotheosis', ru: 'вознесение', level: 'C2', done: false },
    { en: 'Appease', ru: 'утихомирить', level: 'C2', done: false },
    { en: 'Appellation', ru: 'название', level: 'C2', done: false },
    { en: 'Apposite', ru: 'уместный', level: 'C2', done: false },
    { en: 'Appreciable', ru: 'заметный', level: 'C2', done: false },
    { en: 'Aptitude', ru: 'способность', level: 'C2', done: false },
    { en: 'Arbiter', ru: 'арбитр', level: 'C2', done: false },
    { en: 'Arbitrage', ru: 'арбитраж', level: 'C2', done: false },
    { en: 'Arbitrary', ru: 'произвольный', level: 'C2', done: false },
    { en: 'Arcane', ru: 'таинственный', level: 'C2', done: false },
    { en: 'Archetype', ru: 'архетип', level: 'C2', done: false },
    { en: 'Arduous', ru: 'трудный', level: 'C2', done: false },
    { en: 'Argot', ru: 'жаргон', level: 'C2', done: false },
    { en: 'Arrogance', ru: 'высокомерие', level: 'C2', done: false },
    { en: 'Articulate', ru: 'излагать ясно', level: 'C2', done: false },
    { en: 'Ascetic', ru: 'аскет', level: 'C2', done: false },
    { en: 'Ascribe', ru: 'приписывать, относить на счет', level: 'C2', done: false },
    { en: 'Ashen', ru: 'пепельный', level: 'C2', done: false },
    { en: 'Askance', ru: 'косо', level: 'C2', done: false },
    { en: 'Asperity', ru: 'грубость', level: 'C2', done: false },
    { en: 'Assemble', ru: 'собирать', level: 'C2', done: false },
    { en: 'Assent', ru: 'согласие', level: 'C2', done: false },
    { en: 'Assiduous', ru: 'прилежный', level: 'C2', done: false },
    { en: 'Assimilate', ru: 'усваивать', level: 'C2', done: false },
    { en: 'Assuage', ru: 'утолить', level: 'C2', done: false },
    { en: 'Astringent', ru: 'крепкий', level: 'C2', done: false },
    { en: 'Atavism', ru: 'атавизм', level: 'C2', done: false },
    { en: 'Atrophy', ru: 'атрофия', level: 'C2', done: false },
    { en: 'Attenuate', ru: 'ослаблять', level: 'C2', done: false },
    { en: 'Attribute', ru: 'приписывать', level: 'C2', done: false },
    { en: 'Augment', ru: 'увеличивать', level: 'C2', done: false },
    { en: 'August', ru: 'величественный', level: 'C2', done: false },
    { en: 'Auspicious', ru: 'благоприятный', level: 'C2', done: false },
    { en: 'Austere', ru: 'суровый', level: 'C2', done: false },
    { en: 'Autocrat', ru: 'самодержец', level: 'C2', done: false },
    { en: 'Avarice', ru: 'жадность', level: 'C2', done: false },
    { en: 'Avatar', ru: 'аватар', level: 'C2', done: false },
    { en: 'Avenge', ru: 'мстить', level: 'C2', done: false },
    { en: 'Averse', ru: 'неприязненный', level: 'C2', done: false },
    { en: 'Avow', ru: 'признаться', level: 'C2', done: false },
    { en: 'Axiom', ru: 'аксиома', level: 'C2', done: false },
    { en: 'Bacchanal', ru: 'бакханалии', level: 'C2', done: false },
    { en: 'Badger', ru: 'докучать', level: 'C2', done: false },
    { en: 'Baleful', ru: 'зловещий', level: 'C2', done: false },
    { en: 'Balk', ru: 'помешать', level: 'C2', done: false },
    { en: 'Ballast', ru: 'шариковый груз', level: 'C2', done: false },
    { en: 'Balmy', ru: 'мягкий', level: 'C2', done: false },
    { en: 'Banal', ru: 'банальный', level: 'C2', done: false },
    { en: 'Bane', ru: 'яд', level: 'C2', done: false },
    { en: 'Banter', ru: 'шутка, подшучивание', level: 'C2', done: false },
    { en: 'Baroque', ru: 'барокко', level: 'C2', done: false },
    { en: 'Bashful', ru: 'стыдливый', level: 'C2', done: false },
    { en: 'Bask', ru: 'солнцезащитный', level: 'C2', done: false },
    { en: 'Beatific', ru: 'блаженный', level: 'C2', done: false },
    { en: 'Becoming', ru: 'соответствующий', level: 'C2', done: false },
    { en: 'Behest', ru: 'приказ', level: 'C2', done: false },
    { en: 'Belated', ru: 'опоздавший', level: 'C2', done: false },
    { en: 'Belie', ru: 'преувеличивать', level: 'C2', done: false },
    { en: 'Bellicose', ru: 'воинственный', level: 'C2', done: false },
    { en: 'Belligerent', ru: 'беллетрист', level: 'C2', done: false },
    { en: 'Benevolent', ru: 'благожелательный', level: 'C2', done: false },
    { en: 'Benign', ru: 'мягкий, непринужденный', level: 'C2', done: false },
    { en: 'Benison', ru: 'благословение', level: 'C2', done: false },
    { en: 'Beseech', ru: 'умолять', level: 'C2', done: false },
    { en: 'Beset', ru: 'окружать', level: 'C2', done: false },
    { en: 'Besmirch', ru: 'пятнать', level: 'C2', done: false },
    { en: 'Bestial', ru: 'животный', level: 'C2', done: false },
    { en: 'Bevy', ru: 'группа', level: 'C2', done: false },
    { en: 'Bias', ru: 'предвзятость', level: 'C2', done: false },
    { en: 'Bifurcate', ru: 'раздвоение', level: 'C2', done: false },
    { en: 'Bigot', ru: 'фанатик', level: 'C2', done: false },
    { en: 'Bilateral', ru: 'двусторонний', level: 'C2', done: false },
    { en: 'Bizarre', ru: 'странный', level: 'C2', done: false },
    { en: 'Blackguard', ru: 'безмозглый, грубый', level: 'C2', done: false },
    { en: 'Blasé', ru: 'безразличный', level: 'C2', done: false },
    { en: 'Blatant', ru: 'явный', level: 'C2', done: false },
    { en: 'Blazon', ru: 'описать', level: 'C2', done: false },
    { en: 'Bleak', ru: 'мрачный', level: 'C2', done: false },
    { en: 'Blight', ru: 'уничтожение', level: 'C2', done: false },
    { en: 'Bliss', ru: 'блаженство', level: 'C2', done: false },
    { en: 'Bloated', ru: 'бомжатник', level: 'C2', done: false },
    { en: 'Blunt', ru: 'тупой', level: 'C2', done: false },
    { en: 'Blur', ru: 'смазывать', level: 'C2', done: false },
    { en: 'Boisterous', ru: 'шумный', level: 'C2', done: false },
    { en: 'Bombastic', ru: 'бомбастический', level: 'C2', done: false },
    { en: 'Boon', ru: 'благо', level: 'C2', done: false },
    { en: 'Boreal', ru: 'северный', level: 'C2', done: false },
    { en: 'Bountiful', ru: 'щедрый', level: 'C2', done: false },
    { en: 'Bowdlerize', ru: 'одурачивать', level: 'C2', done: false },
    { en: 'Brackish', ru: 'солоноватый', level: 'C2', done: false },
    { en: 'Braggart', ru: 'хвастун', level: 'C2', done: false },
    { en: 'Brandish', ru: 'размахивать', level: 'C2', done: false },
    { en: 'Brazen', ru: 'наглый', level: 'C2', done: false },
    { en: 'Brevity', ru: 'краткость', level: 'C2', done: false },
    { en: 'Brusque', ru: 'резкий', level: 'C2', done: false },
    { en: 'Buoy', ru: 'спасательный пояс', level: 'C2', done: false },
    { en: 'Burgeon', ru: 'расти', level: 'C2', done: false },
    { en: 'Burlesque', ru: 'пародия', level: 'C2', done: false },
    { en: 'Burnish', ru: 'полировать', level: 'C2', done: false },
    { en: 'Cacophonous', ru: 'дисгармоничный', level: 'C2', done: false },
    { en: 'Cajole', ru: 'уговаривать', level: 'C2', done: false },
    { en: 'Calamity', ru: 'бедствие', level: 'C2', done: false },
    { en: 'Callous', ru: 'чувствительный', level: 'C2', done: false },
    { en: 'Calumny', ru: 'клевета', level: 'C2', done: false },
    { en: 'Camaraderie', ru: 'товарищество', level: 'C2', done: false },
    { en: 'Candid', ru: 'искренний', level: 'C2', done: false },
    { en: 'Cant', ru: 'ханжество', level: 'C2', done: false },
    { en: 'Capacious', ru: 'вместительный', level: 'C2', done: false },
    { en: 'Capitulate', ru: 'капитулировать', level: 'C2', done: false },
    { en: 'Capricious', ru: 'капризный', level: 'C2', done: false },
    { en: 'Carapace', ru: 'панцирь', level: 'C2', done: false },
    { en: 'Caricature', ru: 'пародия', level: 'C2', done: false },
    { en: 'Carnage', ru: 'убийство', level: 'C2', done: false },
    { en: 'Carouse', ru: 'пьянствовать', level: 'C2', done: false },
    { en: 'Carrion', ru: 'мертвечина', level: 'C2', done: false },
    { en: 'Carte blanche', ru: 'полномочия', level: 'C2', done: false },
    { en: 'Castigate', ru: 'критиковать', level: 'C2', done: false },
    { en: 'Casuistry', ru: 'казуистика', level: 'C2', done: false },
    { en: 'Cataclysm', ru: 'катаклизм', level: 'C2', done: false },
    { en: 'Catalyst', ru: 'катализатор', level: 'C2', done: false },
    { en: 'Categorical', ru: 'категорический', level: 'C2', done: false },
    { en: 'Catharsis', ru: 'катарсис', level: 'C2', done: false },
    { en: 'Catholic', ru: 'католический', level: 'C2', done: false },
    { en: 'Caucus', ru: 'кокус', level: 'C2', done: false },
    { en: 'Censure', ru: 'осуждение', level: 'C2', done: false },
    { en: 'Centenary', ru: 'столетие', level: 'C2', done: false },
    { en: 'Centrifugal', ru: 'центробежный', level: 'C2', done: false },
    { en: 'Cerebral', ru: 'мозговой', level: 'C2', done: false },
    { en: 'Chafe', ru: 'раздражать', level: 'C2', done: false },
    { en: 'Chaff', ru: 'солома', level: 'C2', done: false },
    { en: 'Chagrin', ru: 'огорчение', level: 'C2', done: false },
    { en: 'Charisma', ru: 'харизма', level: 'C2', done: false },
    { en: 'Chary', ru: 'осторожный', level: 'C2', done: false },
    { en: 'Chasten', ru: 'наказать', level: 'C2', done: false },
    { en: 'Chauvinism', ru: 'шовинизм', level: 'C2', done: false },
    { en: 'Cherubic', ru: 'ангельский', level: 'C2', done: false },
    { en: 'Chicanery', ru: 'хитрость, махинация', level: 'C2', done: false },
    { en: 'Chide', ru: 'корить', level: 'C2', done: false },
    { en: 'Chimerical', ru: 'химерический', level: 'C2', done: false },
    { en: 'Choleric', ru: 'раздражительный, язвительный', level: 'C2', done: false },
    { en: 'Choreography', ru: 'хореография', level: 'C2', done: false },
    { en: 'Chronology', ru: 'хронология', level: 'C2', done: false },
    { en: 'Churl', ru: 'крестьянин', level: 'C2', done: false },
    { en: 'Circuitous', ru: 'косвенный', level: 'C2', done: false },
    { en: 'Cistern', ru: 'цистерна', level: 'C2', done: false },
    { en: 'Clairvoyant', ru: 'ясновидящий, прозорливый', level: 'C2', done: false },
    { en: 'Clamor', ru: 'крик, шум', level: 'C2', done: false },
    { en: 'Claptrap', ru: 'болтовня', level: 'C2', done: false },
    { en: 'Clarion', ru: 'труба', level: 'C2', done: false },
    { en: 'Classification', ru: 'классификация', level: 'C2', done: false },
    { en: 'Clench', ru: 'сжимать', level: 'C2', done: false },
    { en: 'Cliché', ru: 'заезженный оборот', level: 'C2', done: false },
    { en: 'Clientele', ru: 'клиенты', level: 'C2', done: false },
    { en: 'Cloy', ru: 'насыщать', level: 'C2', done: false },
    { en: 'Coalesce', ru: 'соединяться', level: 'C2', done: false },
    { en: 'Coddle', ru: 'разбаловать', level: 'C2', done: false },
    { en: 'Coerce', ru: 'принуждать', level: 'C2', done: false },
    { en: 'Cogent', ru: 'убедительный', level: 'C2', done: false },
    { en: 'Cognizant', ru: 'осведомленный', level: 'C2', done: false },
    { en: 'Collaborate', ru: 'сотрудничать', level: 'C2', done: false },
    { en: 'Colloquial', ru: 'разговорный', level: 'C2', done: false },
    { en: 'Collusion', ru: 'сговор', level: 'C2', done: false },
    { en: 'Colossus', ru: 'колосс, гигант', level: 'C2', done: false },
    { en: 'Comatose', ru: 'коматозный', level: 'C2', done: false },
    { en: 'Combatant', ru: 'боец', level: 'C2', done: false },
    { en: 'Comely', ru: 'привлекательный', level: 'C2', done: false },
    { en: 'Commence', ru: 'начинать', level: 'C2', done: false },
    { en: 'Commend', ru: 'похвалить', level: 'C2', done: false },
    { en: 'Commensurate', ru: 'соизмеримый', level: 'C2', done: false },
    { en: 'Commentate', ru: 'комментировать', level: 'C2', done: false },
    { en: 'Commodify', ru: 'товаризировать', level: 'C2', done: false },
    { en: 'Communal', ru: 'общественный', level: 'C2', done: false },
    { en: 'Compatible', ru: 'совместимый', level: 'C2', done: false },
    { en: 'Compel', ru: 'принуждать', level: 'C2', done: false },
    { en: 'Compendium', ru: 'сводка', level: 'C2', done: false },
    { en: 'Competent', ru: 'компетентный', level: 'C2', done: false },
    { en: 'Compilation', ru: 'сборник', level: 'C2', done: false },
    { en: 'Complacent', ru: 'удовлетворенный', level: 'C2', done: false },
    { en: 'Compliant', ru: 'послушный', level: 'C2', done: false },
    { en: 'Complicity', ru: 'соучастие', level: 'C2', done: false },
    { en: 'Compliment', ru: 'комплимент', level: 'C2', done: false },
    { en: 'Comport', ru: 'соответствовать', level: 'C2', done: false },
    { en: 'Comprehend', ru: 'постигать, понимать', level: 'C2', done: false },
    { en: 'Compromise', ru: 'компромисс', level: 'C2', done: false },
    { en: 'Compunction', ru: 'раскаяние', level: 'C2', done: false },
    { en: 'Concede', ru: 'признать', level: 'C2', done: false },
    { en: 'Concentrate', ru: 'концентрировать', level: 'C2', done: false },
    { en: 'Concept', ru: 'концепция', level: 'C2', done: false },
    { en: 'Conception', ru: 'зачатие', level: 'C2', done: false },
    { en: 'Concerted', ru: 'согласованный', level: 'C2', done: false },
    { en: 'Conciliate', ru: 'умиротворять', level: 'C2', done: false },
    { en: 'Concise', ru: 'краткий', level: 'C2', done: false },
    { en: 'Conclave', ru: 'конклав', level: 'C2', done: false },
    { en: 'Concomitant', ru: 'сопутствующий', level: 'C2', done: false },
    { en: 'Concurrent', ru: 'конкурирующий', level: 'C2', done: false },
    { en: 'Condemn', ru: 'осуждать', level: 'C2', done: false },
    { en: 'Condescend', ru: 'снисходить', level: 'C2', done: false },
    { en: 'Condole', ru: 'соболезновать', level: 'C2', done: false },
    { en: 'Condone', ru: 'сглаживать, прощать', level: 'C2', done: false },
    { en: 'Conducive', ru: 'способствующий', level: 'C2', done: false },
    { en: 'Confabulate', ru: 'беседовать', level: 'C2', done: false },
    { en: 'Confer', ru: 'совещаться', level: 'C2', done: false },
    { en: 'Confide', ru: 'доверять', level: 'C2', done: false },
    { en: 'Configurable', ru: 'конфигурируемый', level: 'C2', done: false },
    { en: 'Conflagration', ru: 'пожар', level: 'C2', done: false },
    { en: 'Confound', ru: 'сбивать с толку', level: 'C2', done: false },
    { en: 'Conglomerate', ru: 'смешанный', level: 'C2', done: false },
    { en: 'Congratulate', ru: 'поздравить', level: 'C2', done: false },
    { en: 'Congregate', ru: 'собираться', level: 'C2', done: false },
    { en: 'Conjecture', ru: 'предположение', level: 'C2', done: false },
    { en: 'Conjure', ru: 'призывать', level: 'C2', done: false },
    { en: 'Connive', ru: 'сговариваться', level: 'C2', done: false },
    { en: 'Connoisseur', ru: 'знаток', level: 'C2', done: false },
    { en: 'Conscript', ru: 'призывник', level: 'C2', done: false },
    { en: 'Consecrate', ru: 'освящать', level: 'C2', done: false },
    { en: 'Consensus', ru: 'консенсус', level: 'C2', done: false },
    { en: 'Consequence', ru: 'последствие', level: 'C2', done: false },
    { en: 'Conserve', ru: 'сохранять', level: 'C2', done: false },
    { en: 'Considerable', ru: 'значительный', level: 'C2', done: false },
    { en: 'Consign', ru: 'поручать', level: 'C2', done: false },
    { en: 'Consistent', ru: 'последовательный', level: 'C2', done: false },
    { en: 'Console', ru: 'утешать', level: 'C2', done: false },
    { en: 'Consolidate', ru: 'укреплять', level: 'C2', done: false },
    { en: 'Consonant', ru: 'согласный', level: 'C2', done: false },
    { en: 'Consort', ru: 'союзник', level: 'C2', done: false },
    { en: 'Conspicuous', ru: 'заметный', level: 'C2', done: false },
    { en: 'Conspiratorial', ru: 'заговорщический', level: 'C2', done: false },
    { en: 'Constancy', ru: 'постоянство', level: 'C2', done: false },
    { en: 'Constituent', ru: 'составляющий', level: 'C2', done: false },
    { en: 'Constrain', ru: 'ограничивать', level: 'C2', done: false },
    { en: 'Construct', ru: 'конструкция, строение', level: 'C2', done: false },
    { en: 'Consummate', ru: 'совершенствовать', level: 'C2', done: false },
    { en: 'Contagious', ru: 'заразный', level: 'C2', done: false },
    { en: 'Contemplate', ru: 'размышлять', level: 'C2', done: false },
    { en: 'Contemporary', ru: 'современный', level: 'C2', done: false },
    { en: 'Contend', ru: 'бороться', level: 'C2', done: false },
    { en: 'Content', ru: 'содержание', level: 'C2', done: false },
    { en: 'Contingency', ru: 'возможность', level: 'C2', done: false },
    { en: 'Contingent', ru: 'связанный', level: 'C2', done: false },
    { en: 'Continuity', ru: 'непрерывность', level: 'C2', done: false },
    { en: 'Contraband', ru: 'контрабанда', level: 'C2', done: false },
    { en: 'Contravene', ru: 'нарушать', level: 'C2', done: false },
    { en: 'Contrite', ru: 'покаявшийся', level: 'C2', done: false },
    { en: 'Contrive', ru: 'выдумывать', level: 'C2', done: false },
    { en: 'Control', ru: 'контроль', level: 'C2', done: false },
    { en: 'Contumacious', ru: 'неповинующийся', level: 'C2', done: false },
    { en: 'Contumely', ru: 'оскорбление', level: 'C2', done: false },
    { en: 'Conundrum', ru: 'загадка', level: 'C2', done: false },
    { en: 'Convene', ru: 'созывать', level: 'C2', done: false },
    { en: 'Convenience', ru: 'удобство', level: 'C2', done: false },
    { en: 'Converge', ru: 'сходиться', level: 'C2', done: false },
    { en: 'Conversant', ru: 'знакомый, ознакомленный', level: 'C2', done: false },
    { en: 'Convert', ru: 'обращать', level: 'C2', done: false },
    { en: 'Convex', ru: 'выпуклый', level: 'C2', done: false },
    { en: 'Convey', ru: 'переносить', level: 'C2', done: false },
    { en: 'Conviction', ru: 'признание виновности', level: 'C2', done: false },
    { en: 'Convivial', ru: 'дружеский', level: 'C2', done: false },
    { en: 'Convoke', ru: 'созывать', level: 'C2', done: false },
    { en: 'Coop', ru: 'сарай', level: 'C2', done: false },
    { en: 'Copious', ru: 'обильный', level: 'C2', done: false },
    { en: 'Coquette', ru: 'кокетка', level: 'C2', done: false },
    { en: 'Cordial', ru: 'душевный', level: 'C2', done: false },
    { en: 'Cornucopia', ru: 'рог изобилия', level: 'C2', done: false },
    { en: 'Corporeal', ru: 'материальный', level: 'C2', done: false },
    { en: 'Corpulent', ru: 'полный', level: 'C2', done: false },
    { en: 'Correlate', ru: 'связывать', level: 'C2', done: false },
    { en: 'Correspond', ru: 'соответствовать', level: 'C2', done: false },
    { en: 'Corroborate', ru: 'подкреплять', level: 'C2', done: false },
    { en: 'Corrosive', ru: 'разъедающий', level: 'C2', done: false },
    { en: 'Corrupt', ru: 'коррумпированный', level: 'C2', done: false },
    { en: 'Cosmopolitan', ru: 'космополит', level: 'C2', done: false },
    { en: 'Coterie', ru: 'компания', level: 'C2', done: false },
    { en: 'Cower', ru: 'сдавиться', level: 'C2', done: false },
    { en: 'Craven', ru: 'трусливый', level: 'C2', done: false },
    { en: 'Crease', ru: 'складка', level: 'C2', done: false },
    { en: 'Credence', ru: 'вера', level: 'C2', done: false },
    { en: 'Credulous', ru: 'доверчивый', level: 'C2', done: false },
    { en: 'Crepuscular', ru: 'сумеречный', level: 'C2', done: false },
    { en: 'Crescendo', ru: 'кульминация', level: 'C2', done: false },
    { en: 'Cripple', ru: 'калечить', level: 'C2', done: false },
    { en: 'Crone', ru: 'ведьма', level: 'C2', done: false },
    { en: 'Crucible', ru: 'горшок', level: 'C2', done: false },
    { en: 'Cryptic', ru: 'таинственный', level: 'C2', done: false },
    { en: 'Culpable', ru: 'виновный', level: 'C2', done: false },
    { en: 'Cultivate', ru: 'выращивать', level: 'C2', done: false },
    { en: 'Cumbersome', ru: 'неудобный', level: 'C2', done: false },
    { en: 'Cunning', ru: 'коварный', level: 'C2', done: false },
    { en: 'Cupidity', ru: 'жадность', level: 'C2', done: false },
    { en: 'Curtail', ru: 'урезать', level: 'C2', done: false },
    { en: 'Cursory', ru: 'поверхностный', level: 'C2', done: false },
    { en: 'Cynical', ru: 'циничный', level: 'C2', done: false },
    { en: 'Dalliance', ru: 'игривая забава', level: 'C2', done: false },
    { en: 'Dearth', ru: 'нехватка', level: 'C2', done: false },
    { en: 'Debase', ru: 'понизить', level: 'C2', done: false },
    { en: 'Debilitate', ru: 'ослаблять', level: 'C2', done: false },
    { en: 'Debouch', ru: 'выходить', level: 'C2', done: false },
    { en: 'Decadence', ru: 'упадок', level: 'C2', done: false },
    { en: 'Decapitate', ru: 'обезглавить', level: 'C2', done: false },
    { en: 'Decelerate', ru: 'замедлять', level: 'C2', done: false },
    { en: 'Decode', ru: 'декодировать', level: 'C2', done: false },
    { en: 'Decorous', ru: 'достойный', level: 'C2', done: false },
    { en: 'Deduce', ru: 'выводить', level: 'C2', done: false },
    { en: 'Deface', ru: 'испортить', level: 'C2', done: false },
  ],
  chosenLevel: null,
}

export const wordsSlice = createSlice({
  name: 'words',
  initialState: initialState,
  reducers: {
    makeWordDone: (state: WordsState, action: PayloadAction<Word>) => {
      state.words = state.words.map(word => {
        if (word.en.toLowerCase() === action.payload.en.toLowerCase()) {
          return {
            ...word,
            done: true,
          }
        }
        return word
      })
    },
    chooseLevel: (state: WordsState, action: PayloadAction<Level>) => {
      state.chosenLevel = action.payload
    },
    resetLevel: (state: WordsState) => {
      state.chosenLevel = null
    }
  },
})

export const wordsReducer = wordsSlice.reducer
export const wordsSelector = (state: RootState) => state.words
export const { makeWordDone, chooseLevel, resetLevel } = wordsSlice.actions
