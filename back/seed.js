const { disconnect, connect } = require('./db/connect')
const FilmModel = require('./models/film')

connect()

const allMovies = [
  {
    title: "Побег из Шоушенка",
    genre: ["Драма", "Детектив"],
    withWom: ["Один одна", "С другом", "С большой компанией"],
    mood: ["Приуныл", "Серьезное", "Мотивирующее"],
    idKP: 326
  },
  {
    title: "Зеленая миля",
    genre: ["Драма", "Детектив"],
    withWom: ["Один одна", "С ним ней", "С другом"],
    mood: ["Серьезное", "Плаксивое"],
    idKP: 435
  },
  {
    title: "Властелин колец: Возвращение короля",
    genre: ["Фантастика", "Драма", "Приключения"],
    withWom: ["С семьей", "С ребенком", "С ним ней", "С большой компанией"],
    mood: ["Пофигистическое", "Приуныл", "Серьезное", "Мотивирующее"],
    idKP: 3498
  },
  {
    title: "Властелин колец: Две крепости",
    genre: ["Фантастика", "Драма", "Приключения"],
    withWom: ["С семьей", "С ребенком", "С ним ней", "С большой компанией"],
    mood: ["Пофигистическое", "Приуныл", "Серьезное", "Мотивирующее"],
    idKP: 312
  },
  {
    title: "Интерстеллар",
    genre: ["Фантастика", "Драма", "Приключения"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Серьезное", "Пофигистическое", "Приуныл"],
    idKP: 258687
  },
  {
    title: "Форрест Гамп",
    genre: ["Драма", "Комедия", "Мелодрама"],
    withWom: ["Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Мотивирующее"],
    idKP: 448
  },
  {
    title: "Список Шиндлера",
    genre: ["Драма", "Исторический", "Биография"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 329
  },
  {
    title: "Друзья: Воссоединение",
    genre: ["Комедия"],
    withWom: ["С ним ней", "С большой компанией", "С другом"],
    mood: ["Веселое", "Романтичное", "Игривое"],
    idKP: 1346686
  },
  {
    title: "Иван Васильевич меняет профессию",
    genre: ["Приключения", "Комедия"],
    withWom: ["С семьей", "С большой компанией"],
    mood: ["Веселое", "Приуныл"],
    idKP: 42664
  },
  {
    title: "Король Лев",
    genre: ["Драма", "Мюзикл", "Сказка"],
    withWom: ["С ним ней", "С семьей", "С ребенком"],
    mood: ["Пофигистическое", "Приуныл", "Плаксивое", "Мотивирующее"],
    idKP: 2360
  },
  {
    title: "Тайна Коко",
    genre: ["Драма", "Приключения", "Сказка"],
    withWom: ["С ним ней", "С семьей", "Один одна"],
    mood: ["Серьезное", "Мотивирующее"],
    idKP: 679486
  },
  {
    title: "Назад в будущее",
    genre: ["Фантастика", "Приключения", "Комедия"],
    withWom: ["С семьей", "С ребенком", "С большой компанией", "С другом"],
    mood: ["Веселое", "Пофигистическое", "Мотивирующее"],
    idKP: 476
  },
  {
    title: "Клаус",
    genre: ["Приключения", "Комедия", "Сказка"],
    withWom: ["С семьей", "С ребенком"],
    mood: ["Веселое", "Приуныл", "Мотивирующее"],
    idKP: 957887
  },
  {
    title: "Криминальное чтиво",
    genre: ["Комедия", "Триллер"],
    withWom: ["С ним ней", "С большой компанией", "Один одна"],
    mood: ["Веселое", "Сердитое", "Пофигистическое", "Игривое"],
    idKP: 342
  },
  {
    title: "Карты, деньги, два ствола",
    genre: ["Боевик", "Комедия"],
    withWom: ["С большой компанией", "Один одна", "С другом"],
    mood: ["Веселое", "Пофигистическое", "Приуныл", "Игривое"],
    idKP: 522
  },
  {
    title: "ВАЛЛ·И",
    genre: ["Фантастика", "Приключения", "Сказка"],
    withWom: ["С семьей", "С ребенком", "С другом"],
    mood: ["Приуныл", "Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 279102
  },
  {
    title: "Начало",
    genre: ["Фантастика", "Драма", "Боевик", "Триллер"],
    withWom: ["С ним ней", "С большой компанией", "С другом"],
    mood: ["Пофигистическое", "Приуныл", "Серьезное", "Мотивирующее"],
    idKP: 447301
  },
  {
    title: "Унесённые призраками",
    genre: ["Фантастика", "Приключения", "Сказка"],
    withWom: ["Один одна", "С другом"],
    mood: ["Приуныл", "Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 370
  },
  {
    title: "В бой идут одни «старики»",
    genre: ["Драма"],
    withWom: ["С семьей", "С другом"],
    mood: ["Серьезное", "Мотивирующее"],
    idKP: 25108
  },
  {
    title: "1+1",
    genre: ["Драма", "Биография", "Комедия"],
    withWom: ["С ним ней", "С семьей", "Один одна", "С другом"],
    mood: ["Веселое", "Приуныл", "Игривое", "Мотивирующее"],
    idKP: 535341
  },
  {
    title: "Большой куш",
    genre: ["Боевик", "Комедия"],
    withWom: ["С большой компанией", "С другом"],
    mood: ["Веселое", "Приуныл"],
    idKP: 526
  },
  {
    title: "Джентльмены удачи",
    genre: ["Драма", "Приключения", "Комедия"],
    withWom: ["С семьей", "С большой компанией"],
    mood: ["Веселое", "Приуныл"],
    idKP: 44386
  },
  {
    title: "Остров проклятых",
    genre: ["Драма", "Триллер"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Сердитое", "Серьезное"],
    idKP: 397667
  },
  {
    title: "Достучаться до небес",
    genre: ["Драма", "Комедия"],
    withWom: ["С другом"],
    mood: ["Веселое", "Мотивирующее", "Философское"],
    idKP: 32898
  },
  {
    title: "Бойцовский клуб",
    genre: ["Драма", "Триллер"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Веселое", "Серьезное", "Мотивирующее"],
    idKP: 361
  },
  {
    title: "Матрица",
    genre: ["Фантастика", "Боевик"],
    withWom: ["С большой компанией", "С другом"],
    mood: ["Сердитое", "Пофигистическое"],
    idKP: 301
  },
  {
    title: "Престиж",
    genre: ["Фантастика", "Драма", "Триллер"],
    withWom: ["С ним ней", "С большой компанией", "Один одна"],
    mood: ["Сердитое", "Серьезное"],
    idKP: 195334
  },
  {
    title: "Джентльмены",
    genre: ["Боевик", "Комедия"],
    withWom: ["С ним ней", "С большой компанией", "С другом"],
    mood: ["Веселое", "Игривое", "Серьезное"],
    idKP: 1143242
  },
  {
    title: "Шрэк",
    genre: ["Фантастика", "Приключения", "Комедия", "Сказка"],
    withWom: ["С семьей", "С ребенком"],
    mood: ["Веселое", "Пофигистическое", "Приуныл", "Игривое", "Мотивирующее"],
    idKP: 430
  },
  {
    title: "Пираты Карибского моря: Проклятие Черной жемчужины ",
    genre: ["Фантастика", "Приключения", "Боевик"],
    withWom: ["С семьей", "С большой компанией", "С другом"],
    mood: ["Веселое", "Пофигистическое", "Приуныл", "Игривое"],
    idKP: 4374
  },
  {
    title: "Один дома",
    genre: ["Комедия"],
    withWom: ["С семьей", "С ребенком"],
    mood: ["Веселое", "Приуныл"],
    idKP: 8124
  },
  {
    title: "Брат",
    genre: ["Драма", "Боевик"],
    withWom: ["Один одна", "С другом"],
    mood: ["Сердитое", "Серьезное"],
    idKP: 41519
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    genre: ["Фантастика", "Приключения", "Сказка"],
    withWom: ["С семьей", "С ребенком"],
    mood: ["Приуныл", "Игривое", "Мотивирующее"],
    idKP: 322
  },
  {
    title: "Джанго освобожденный",
    genre: ["Драма", "Боевик", "Комедия", "Экшн"],
    withWom: ["С ним ней", "С большой компанией", "С другом"],
    mood: ["Приуныл", "Игривое", "Серьезное"],
    idKP: 586397
  },
  {
    title: "Леон",
    genre: ["Драма", "Боевик", "Триллер"],
    withWom: ["С ним ней", "С семьей", "Один одна"],
    mood: ["Сердитое", "Серьезное", "Плаксивое"],
    idKP: 389
  },
  {
    title: "Игры разума",
    genre: ["Драма", "Биография", "Мелодрама"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Пофигистическое", "Приуныл", "Серьезное", "Мотивирующее"],
    idKP: 530
  },
  {
    title: "Одержимость",
    genre: ["Драма"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Сердитое", "Мотивирующее"],
    idKP: 725190
  },
  {
    title: "Гладиатор",
    genre: ["Драма", "Приключения", "Боевик", "Исторический"],
    withWom: ["С семьей", "Один одна", "С другом"],
    mood: ["Серьезное", "Мотивирующее"],
    idKP: 474
  },
  {
    title: "Отступники",
    genre: ["Драма", "Триллер"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Сердитое", "Серьезное"],
    idKP: 81314
  },
  {
    title: "Поймай меня, если сможешь",
    genre: ["Биография", "Комедия"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Веселое", "Романтичное", "Пофигистическое", "Приуныл", "Игривое"],
    idKP: 324
  },

  {
    title: "Душа",
    genre: ["Приключения", "Сказка"],
    withWom: ["С семьей", "С ребенком", "Один одна"],
    mood: ["Веселое", "Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 775273
  },

  {
    title: "Крестный отец",
    genre: ["Драма", "Триллер"],
    withWom: ["С ним ней", "С семьей", "С другом"],
    mood: ["Сердитое", "Серьезное"],
    idKP: 325
  },

  {
    title: "Зеленая книга",
    genre: ["Драма", "Биография", "Комедия"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Пофигистическое", "Приуныл", "Мотивирующее"],
    idKP: 1108577
  },

  {
    title: "Молчание ягнят",
    genre: ["Драма", "Триллер", "Хоррор"],
    withWom: ["Один одна", "С другом"],
    mood: ["Сердитое", "Серьезное"],
    idKP: 325
  },

  {
    title: "Невидимая сторона",
    genre: ["Драма", "Биография"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 450213
  },
  {
    title: "Ford против Ferrari",
    genre: ["Драма", "Боевик"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Пофигистическое", "Приуныл", "Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 835086
  },
  {
    title: "Корпорация монстров",
    genre: ["Фантастика", "Комедия", "Сказка"],
    withWom: ["С семьей", "С ребенком", "С большой компанией"],
    mood: ["Веселое", "Приуныл", "Мотивирующее"],
    idKP: 458
  },
  {
    title: "Ходячий замок",
    genre: ["Приключения", "Мелодрама", "Сказка"],
    withWom: ["С ним ней", "С семьей", "Один одна", "С другом"],
    mood: ["Приуныл", "Серьезное", "Плаксивое"],
    idKP: 49684
  },
  {
    title: "Титаник",
    genre: ["Драма", "Исторический", "Мелодрама"],
    withWom: ["С ним ней"],
    mood: ["Романтичное", "Плаксивое"],
    idKP: 2213
  },
  {
    title: "Волк с Уолл-стрит",
    genre: ["Драма", "Биография", "Комедия"],
    withWom: ["С большой компанией", "С другом"],
    mood: ["Веселое", "Пофигистическое", "Мотивирующее"],
    idKP: 462682
  },
  {
    title: "Рататуй",
    genre: ["Фантастика", "Приключения", "Комедия", "Сказка"],
    withWom: ["С семьей", "С ребенком"],
    mood: ["Веселое", "Пофигистическое", "Игривое", "Мотивирующее"],
    idKP: 89514
  },
  {
    title: "Шоу Трумана",
    genre: ["Драма", "Комедия"],
    withWom: ["Один одна", "С другом"],
    mood: ["Серьезное", "Философское"],
    idKP: 4541
  },
  {
    title: "Звёздные войны: Эпизод 3 — Месть Ситхов",
    genre: ["Фантастика", "Приключения", "Боевик"],
    withWom: ["С семьей", "С ребенком", "С большой компанией"],
    mood: ["Сердитое", "Серьезное", "Плаксивое"],
    idKP: 5619
  },
  {
    title: "Омерзительная восьмерка",
    genre: ["Драма", "Триллер"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Веселое", "Пофигистическое", "Игривое", "Серьезное"],
    idKP: 819101
  },
  {
    title: "Пианист",
    genre: ["Драма", "Исторический", "Биография"],
    withWom: ["Один одна"],
    mood: ["Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 355
  },
  {
    title: "Стальной гигант",
    genre: ["Фантастика", "Боевик", "Комедия"],
    withWom: ["С семьей", "С ребенком"],
    mood: ["Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 538
  },
  {
    title: "Семь жизней",
    genre: ["Драма", "Мелодрама",],
    withWom: ["Один одна", "С другом"],
    mood: ["Приуныл", "Серьезное", "Плаксивое"],
    idKP: 395787
  },
  {
    title: "Гран Торино",
    genre: ["Драма"],
    withWom: ["Один одна"],
    mood: ["Сердитое", "Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 408410
  },
  {
    title: "Пролетая над гнездом кукушки",
    genre: ["Драма"],
    withWom: ["Один одна"],
    mood: ["Сердитое", "Серьезное", "Мотивирующее"],
    idKP: 336
  },
  {
    title: "Игра",
    genre: ["Драма", "Приключения", "Триллер"],
    withWom: ["Один одна", "С другом"],
    mood: ["Сердитое", "Приуныл", "Серьезное"],
    idKP: 12198
  },
  {
    title: "Зверополис",
    genre: ["Приключения", "Комедия", "Сказка"],
    withWom: ["С семьей", "С ребенком"],
    mood: ["Веселое", "Приуныл", "Мотивирующее"],
    idKP: 775276
  },
  {
    title: "Изгой",
    genre: ["Драма", "Приключения", "Мелодрама"],
    withWom: ["Один одна"],
    mood: ["Мотивирующее"],
    idKP: 627
  },
  {
    title: "Эффект бабочки",
    genre: ["Фантастика", "Драма", "Триллер"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Пофигистическое", "Приуныл", "Серьезное", "Философское"],
    idKP: 5167
  },
  {
    title: "По соображениям совести",
    genre: ["Драма", "Исторический", "Биография"],
    withWom: ["Один одна", "С другом"],
    mood: ["Серьезное", "Плаксивое", "Мотивирующее", "Философское"],
    idKP: 649917
  },
  {
    title: "Прислуга",
    genre: ["Драма"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Серьезное", "Плаксивое", "Философское"],
    idKP: 470553
  },
  {
    title: "В поисках Немо",
    genre: ["Приключения", "Комедия", "Сказка"],
    withWom: ["С семьей", "С ребенком"],
    mood: ["Веселое", "Приуныл", "Игривое"],
    idKP: 7908
  },
  {
    title: "Три билборда на границе Эббинга, Миссури",
    genre: ["Драма"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Серьезное", "Плаксивое", "Философское"],
    idKP: 944098
  },
  {
    title: "Хатико: Самый верный друг",
    genre: ["Драма", "Биография"],
    withWom: ["С семьей", "С ребенком", "Один одна"],
    mood: ["Серьезное", "Плаксивое", "Философское"],
    idKP: 387556
  },
  {
    title: "Железный человек",
    genre: ["Фантастика", "Приключения", "Боевик", "Экшн"],
    withWom: ["С семьей", "С большой компанией"],
    mood: ["Веселое", "Приуныл", "Игривое"],
    idKP: 61237
  },
  {
    title: "Исчезнувшая",
    genre: ["Драма", "Триллер"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Сердитое", "Серьезное"],
    idKP: 692861
  },
  {
    title: "Терминал",
    genre: ["Драма", "Комедия", "Мелодрама"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Пофигистическое", "Приуныл", "Серьезное"],
    idKP: 6877
  },
  {
    title: "Достать ножи",
    genre: ["Драма", "Комедия"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Игривое", "Серьезное"],
    idKP: 1188529
  },
  {
    title: "Ешь, молись, люби",
    genre: ["Драма", "Биография", "Мелодрама"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Веселое", "Романтичное", "Философское"],
    idKP: 454522
  },
  {
    title: "Мамма MIA!",
    genre: ["Комедия", "Мелодрама", "Мюзикл"],
    withWom: ["С ним ней", "С семьей", "С большой компанией"],
    mood: ["Веселое", "Романтичное", "Игривое"],
    idKP: 276478
  },
  {
    title: "Гордость и предубеждение",
    genre: ["Драма", "Мелодрама"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Романтичное", "Серьезное", "Плаксивое"],
    idKP: 81733
  },
  {
    title: "Красотка",
    genre: ["Мелодрама", "Комедия"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Веселое", "Романтичное", "Игривое"],
    idKP: 8125
  },
  {
    title: "Вики Кристина Барселона",
    genre: ["Драма", "Комедия", "Мелодрама"],
    withWom: ["С ним ней"],
    mood: ["Веселое", "Романтичное"],
    idKP: 278171
  },
  {
    title: "Круэлла",
    genre: ["Драма", "Комедия"],
    withWom: ["С ним ней", "С семьей", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл"],
    idKP: 804662
  },
  {
    title: "Ледяной драйв",
    genre: ["Драма", "Приключения", "Триллер"],
    withWom: ["С большой компанией", "С другом"],
    mood: ["Пофигистическое", "Приуныл", "Серьезное"],
    idKP: 968501
  },
  {
    title: "Телохранитель киллера",
    genre: ["Боевик", "Комедия"],
    withWom: ["С ним ней", "С большой компанией", "С другом"],
    mood: ["Веселое", "Приуныл", "Игривое"],
    idKP: 835877
  },
  {
    title: "Тихое место 2",
    genre: ["Фантастика", "Драма", "Триллер", "Хоррор"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Сердитое", "Приуныл", "Серьезное"],
    idKP: 1129900
  },
  {
    title: "Облачный атлас",
    genre: ["Фантастика", "Драма"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Серьезное", "Философское"],
    idKP: 464484
  },
  {
    title: "На игле",
    genre: ["Драма"],
    withWom: ["Один одна", "С другом"],
    mood: ["Пофигистическое", "Серьезное", "Философское"],
    idKP: 515
  },
  {
    title: "Самая безумная свадьба",
    genre: ["Драма", "Комедия", "Мелодрама"],
    withWom: ["С ним ней", "С семьей", "С другом"],
    mood: ["Веселое", "Романтичное", "Игривое"],
    idKP: 1065036
  },
  {
    title: "Гнев человеческий",
    genre: ["Боевик", "Триллер"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Серьезное", "Философское"],
    idKP: 1318972
  },
  {
    title: "Лига справедливости Зака Снайдера",
    genre: ["Фантастика", "Боевик", "Экшн"],
    withWom: ["С большой компанией"],
    mood: ["Веселое", "Игривое", "Мотивирующее"],
    idKP: 1387021
  },
  {
    title: "Великий",
    genre: ["Драма", "Биография"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Сердитое", "Приуныл", "Серьезное", "Мотивирующее"],
    idKP: 1208173
  },
  {
    title: "Довод",
    genre: ["Фантастика", "Боевик", "Экшн", "Триллер"],
    withWom: ["С большой компанией", "С другом"],
    mood: ["Игривое", "Серьезное", "Философское"],
    idKP: 1236063
  },
  {
    title: "Еще по одной",
    genre: ["Драма", "Комедия"],
    withWom: ["С другом"],
    mood: ["Веселое", "Философское"],
    idKP: 1263705
  },
  {
    title: "Аферистка",
    genre: ["Комедия", "Триллер"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Пофигистическое", "Игривое"],
    idKP: 1248786
  },
  {
    title: "Дьявол носит Prada",
    genre: ["Комедия"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Веселое", "Романтичное", "Игривое", "Мотивирующее"],
    idKP: 104992
  },
  {
    title: "Кукла",
    genre: ["Триллер", "Хоррор"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Сердитое"],
    idKP: 1291939
  },
  {
    title: "Дэдпул",
    genre: ["Фантастика", "Приключения", "Боевик", "Комедия"],
    withWom: ["С ним ней", "С большой компанией", "С другом"],
    mood: ["Веселое", "Игривое"],
    idKP: 462360
  },
  {
    title: "Побег из Претории",
    genre: ["Экшн", "Триллер"],
    withWom: ["С ним ней", "С большой компанией", "С другом"],
    mood: ["Сердитое", "Приуныл", "Серьезное", "Мотивирующее"],
    idKP: 1055528
  },
  {
    title: "Грязь",
    genre: ["Драма"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл"],
    idKP: 467293
  },
  {
    title: "12 обезьян",
    genre: ["Фантастика", "Триллер"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Игривое", "Философское"],
    idKP: 502
  },
  {
    title: "Эйс Вентура: Розыск домашних животных",
    genre: ["Приключения", "Комедия"],
    withWom: ["С ним ней", "С семьей", "С ребенком", "С другом"],
    mood: ["Веселое", "Игривое"],
    idKP: 2868
  },
  {
    title: "Турист",
    genre: ["Драма", "Приключения", "Триллер"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Романтичное", "Игривое"],
    idKP: 428715
  },
  {
    title: "Послезавтра",
    genre: ["Фантастика", "Драма", "Фильм-катастрофа"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Приуныл", "Мотивирующее"],
    idKP: 2053
  },
  {
    title: "Разлом Сан-Андреас",
    genre: ["Фантастика", "Драма", "Фильм-катастрофа"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Сердитое", "Приуныл", "Мотивирующее"],
    idKP: 652692
  },
  {
    title: "Заражение",
    genre: ["Драма", "Фильм-катастрофа"],
    withWom: ["С ним ней", "С большой компанией", "Один одна", "С другом"],
    mood: ["Серьезное", "Мотивирующее"],
    idKP: 1111
  },
  {
    title: "Невозможное",
    genre: ["Драма", "Фильм-катастрофа"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Серьезное", "Плаксивое"],
    idKP: 518037
  },
  {
    title: "Экипаж",
    genre: ["Драма", "Триллер", "Фильм-катастрофа"],
    withWom: ["С ним ней", "С другом"],
    mood: ["Приуныл", "Серьезное", "Плаксивое"],
    idKP: 592203
  },
  {
    title: "Землетрясение",
    genre: ["Драма", "Фильм-катастрофа"],
    withWom: ["Один одна", "С другом"],
    mood: ["Серьезное", "Плаксивое"],
    idKP: 463694
  },
  {
    title: "И грянул шторм",
    genre: ["Драма", "Фильм-катастрофа"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Сердитое", "Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 608559
  },
  {
    title: "2012",
    genre: ["Фантастика", "Драма", "Экшн", "Фильм-катастрофа"],
    withWom: ["С ним ней", "С большой компанией", "Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Серьезное", "Мотивирующее"],
    idKP: 413447
  },
  {
    title: "Годзилла против Конга",
    genre: ["Фантастика", "Экшн",],
    withWom: ["С ним ней", "С семьей", "С ребенком", "С большой компанией", "Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Серьезное", "Плаксивое", "Мотивирующее"],
    idKP: 965936
  },
  {
    title: "Первому игроку приготовиться",
    genre: ["Фантастика", "Приключения", "Боевик", "Экшн"],
    withWom: ["С ним ней", "С семьей", "С ребенком", "С большой компанией", "Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Игривое", "Серьезное", "Мотивирующее"],
    idKP: 538225
  },
  {
    title: "Нечто",
    genre: ["Фантастика", "Триллер", "Хоррор"],
    withWom: ["С ним ней", "С большой компанией", "Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Серьезное",],
    idKP: 1111
  },
  {
    title: "28 дней спустя",
    genre: ["Фантастика", "Драма", "Боевик", "Экшн", "Триллер", "Хоррор"],
    withWom: ["С ним ней", "С большой компанией", "Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Серьезное"],
    idKP: 577
  },
  {
    title: "Изгоняющий дьявола",
    genre: ["Триллер", "Хоррор"],
    withWom: ["С ним ней", "Один одна", "С другом", "С большой компанией"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Серьезное", "Плаксивое"],
    idKP: 1111
  },
  {
    title: "Сияние",
    genre: ["Триллер", "Хоррор"],
    withWom: ["С ним ней", "С большой компанией", "Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Серьезное"],
    idKP: 409
  },
  {
    title: "Звонок",
    genre: ["Драма", "Триллер", "Хоррор"],
    withWom: ["С ним ней", "С семьей", "Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Серьезное"],
    idKP: 804
  },
  {
    title: "Убийство в Восточном экспрессе",
    genre: ["Драма", "Детектив"],
    withWom: ["С ним ней", "С семьей", "Один одна", "С другом"],
    mood: ["Сердитое", "Пофигистическое", "Приуныл", "Серьезное"],
    idKP: 817969
  },
  {
    title: "Чудо-женщина: 1984",
    genre: ["Фантастика", "Приключения", "Боевик", "Экшн"],
    withWom: ["С ним ней", "С семьей", "С большой компанией", "Один одна", "С другом"],
    mood: ["Веселое", "Сердитое", "Приуныл", "Игривое", "Серьезное", "Мотивирующее"],
    idKP: 1046969
  },
  {
    title: "Аватар",
    genre: ["Драма", "Фантастика", "Приключения", "Боевик", "Экшн"],
    withWom: ["С ним ней", "С семьей", "С большой компанией", "С ребенком", "Один одна", "С другом"],
    mood: ["Веселое", "Сердитое", "Приуныл", "Игривое", "Серьезное", "Мотивирующее"],
    idKP: 251733
  },
  {
    title: "Человек-паук",
    genre: ["Фантастика", "Приключения", "Боевик", "Экшн"],
    withWom: ["С семьей", "С большой компанией", "С ребенком", "С другом"],
    mood: ["Веселое", "Пофигистическое", "Приуныл", "Игривое", "Серьезное", "Мотивирующее"],
    idKP: 838
  },
  {
    title: "Бетховен 2",
    genre: ["Мелодрама", "Приключения", "Комедия"],
    withWom: ["С семьей", "С большой компанией", "С ребенком", "С другом"],
    mood: ["Веселое", "Серьезное", "Пофигистическое", "Приуныл", "Игривое", "Мотивирующее"],
    idKP: 15635
  },
  {
    title: "Аладдин",
    genre: ["Мелодрама", "Мюзикл", "Приключения", "Комедия"],
    withWom: ["С ним ней", "С семьей", "С большой компанией", "С ребенком", "С другом"],
    mood: ["Веселое", "Пофигистическое", "Приуныл", "Игривое", "Мотивирующее"],
    idKP: 1007049
  },
  {
    title: "Знакомство с Факерами",
    genre: ["Мелодрама", "Мюзикл", "Приключения", "Комедия"],
    withWom: ["С ним ней", "С семьей", "С большой компанией", "С другом"],
    mood: ["Веселое", "Пофигистическое", "Приуныл", "Игривое", "Мотивирующее"],
    idKP: 61439
  },
  {
    title: "Мулен Руж",
    genre: ["Драма", "Мелодрама", "Мюзикл", "Приключения", "Комедия"],
    withWom: ["С ним ней", "С семьей", "С другом"],
    mood: ["Веселое", "Приуныл", "Игривое", "Плаксивое", "Мотивирующее", "Философское"],
    idKP: 558
  },
  {
    title: "Великий Гэтсби ",
    genre: ["Драма", "Мелодрама", "Мюзикл"],
    withWom: ["С ним ней", "С семьей", "С большой компанией", "С другом"],
    mood: ["Приуныл", "Игривое", "Серьезное", "Плаксивое", "Мотивирующее", "Философское"],
    idKP: 463724
  },
  {
    title: "Бурлеск",
    genre: ["Драма", "Мелодрама", "Мюзикл"],
    withWom: ["С ним ней", "С семьей", "Один одна", "С другом"],
    mood: ["Веселое", , "Приуныл", "Игривое", "Мотивирующее"],
    idKP: 461904
  },
  {
    title: "Чикаго",
    genre: ["Драма", "Мелодрама", "Мюзикл", "Комедия"],
    withWom: ["С ним ней", "С семьей", "Один одна", "С большой компанией", "С другом"],
    mood: ["Веселое", "Серьезное", "Приуныл", "Игривое", "Плаксивое", "Мотивирующее"],
    idKP: 634
  },
  {
    title: "Красавица и чудовище",
    genre: ["Мелодрама", "Мюзикл", "Комедия"],
    withWom: ["С ним ней", "С семьей", "С ребенком", "Один одна", "С большой компанией", "С другом"],
    mood: ["Веселое", "Приуныл", "Игривое", "Плаксивое", "Мотивирующее", "Философское"],
    idKP: 744987
  },
  {
    title: "Мэри Поппинс возвращается",
    genre: ["Мюзикл", "Приключения", "Комедия"],
    withWom: ["С ним ней", "С семьей", "С ребенком", "Один одна", "С большой компанией", "С другом"],
    mood: ["Веселое", "Приуныл", "Сердитое", "Пофигистическое", "Игривое", "Мотивирующее", "Философское"],
    idKP: 933182
  },
  {
    title: "Красивый, плохой, злой",
    genre: ["Биография", "Триллер", "Драма"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Серьезное", "Веселое", "Приуныл", "Сердитое", "Пофигистическое"],
    idKP: 726805
  },
  {
    title: "Троя",
    genre: ["Биография", "Боевик", "Драма", "Исторический"],
    withWom: ["С ним ней", "Один одна", "С другом"],
    mood: ["Серьезное", "Приуныл", "Сердитое", "Пофигистическое", "Философское"],
    idKP: 3442
  },
  {
    title: "Война токов",
    genre: ["Биография", "Историчесикй", "Драма"],
    withWom: ["С ним ней", "Один одна", "С большой компанией", "С другом"],
    mood: ["Серьезное", "Веселое", "Приуныл", "Сердитое", "Пофигистическое", "Философское"],
    idKP: 680851
  },
  {
    title: "Калигула",
    genre: ["Биография", "Исторический", "Триллер", "Драма", "Мелодрама"],
    withWom: ["С ним ней", "Один одна"],
    mood: ["Серьезное", "Веселое", "Игривое", "Приуныл", "Мотивирующее"],
    idKP: 10142
  },
  {
    title: "Непокоренный",
    genre: ["Биография", "Исторический", "Триллер", "Драма"],
    withWom: ["С ним ней", "Один одна", "С семьей", "С большой компанией", "С другом"],
    mood: ["Серьезное", "Приуныл", "Сердитое", "Пофигистическое", "Философское"],
    idKP: 391085
  },

]

async function seed() {
  connect()
  await Promise.all(allMovies.map((movie) => FilmModel.create(movie)))
  disconnect()
}

//seed()
