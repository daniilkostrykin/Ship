const wordList = [
  {
    word: "АКСЕССУАР",
    hint: "Предмет, дополняющий образ или обстановку.",
    level: "medium",
    category: "предметы",
  },
  {
    word: "БЛАГОВОНИЕ",
    hint: "Ароматическое вещество для создания приятного запаха.",
    level: "medium",
    category: "предметы",
  },
  {
    word: "ВЕНТИЛЯЦИЯ",
    hint: "Процесс обмена воздуха в помещении.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ГИПОТЕНУЗА",
    hint: "Самая длинная сторона прямоугольного треугольника.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ДЕКАПИТАЛИЗАЦИЯ",
    hint: "Уменьшение капитала предприятия или страны.",
    level: "hard",
    category: "общество",
  },
  {
    word: "ЕВАНГЕЛИЕ",
    hint: "Одно из четырёх канонических описаний жизни Иисуса Христа.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "ЖУРНАЛ",
    hint: "Периодическое издание с разнообразным содержанием.",
    level: "easy",
    category: "предметы",
  },
  {
    word: "ЗАМЕСТИТЕЛЬ",
    hint: "Лицо, исполняющее обязанности другого лица в его отсутствие.",
    level: "medium",
    category: "люди",
  },
  {
    word: "ИНДИВИДУАЛЬНОСТЬ",
    hint: "Неповторимое сочетание черт, присущих одному человеку.",
    level: "hard",
    category: "люди",
  },
  {
    word: "КОРРОЗИЯ",
    hint: "Разрушение материалов под действием окружающей среды.",
    level: "medium",
    category: "явления",
  },
  {
    word: "ЛИНГВИСТИКА",
    hint: "Наука о языке.",
    level: "medium",
    category: "наука",
  },
  {
    word: "МОНАРХИЯ",
    hint: "Форма правления, при которой верховная власть принадлежит монарху.",
    level: "medium",
    category: "общество",
  },
  {
    word: "НАЦИОНАЛЬНОСТЬ",
    hint: "Принадлежность к определённому этносу или народу.",
    level: "hard",
    category: "общество",
  },
  {
    word: "ОРИГИНАЛ",
    hint: "Подлинный экземпляр произведения искусства или документа.",
    level: "easy",
    category: "предметы",
  },
  {
    word: "ПЕДАГОГИКА",
    hint: "Наука о воспитании и образовании.",
    level: "medium",
    category: "наука",
  },
  {
    word: "РАДИОЛОГИЯ",
    hint: "Область медицины, изучающая воздействие радиации на организм.",
    level: "hard",
    category: "наука",
  },
  {
    word: "СИНТЕЗАТОР",
    hint: "Электронный музыкальный инструмент.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ТЕМПЕРАТУРА",
    hint: "Мера теплового состояния тела или вещества.",
    level: "easy",
    category: "наука",
  },
  {
    word: "УНИВЕРСИТЕТ",
    hint: "Высшее учебное заведение.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ФИЛОСОФИЯ",
    hint: "Наука о самых общих законах развития природы, общества и мышления.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ХУДОЖНИК",
    hint: "Человек, создающий произведения изобразительного искусства.",
    level: "easy",
    category: "люди",
  },
  {
    word: "ЦИРКУЛЯЦИЯ",
    hint: "Движение жидкостей или газов в замкнутом пространстве.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ЧЕРЕМУХА",
    hint: "Дерево или кустарник с мелкими белыми душистыми цветками.",
    level: "easy",
    category: "растения",
  },
  {
    word: "ШАРМАНКА",
    hint: "Механический музыкальный инструмент.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ЭКСПОЗИЦИЯ",
    hint: "Выставка произведений искусства или других предметов.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "ЮРИСПРУДЕНЦИЯ",
    hint: "Наука о праве.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ЯГДТАШ",
    hint: "Охотничья сумка.",
    level: "hard",
    category: "предметы",
  },
  {
    word: "ЭСКАДРА",
    hint: "Крупное военно-морское соединение.",
    level: "medium",
    category: "техника",
  },
  {
    word: "БИБЛИОГРАФИЯ",
    hint: "Список литературы по определённой теме.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ВИХРЕВАТОСТЬ",
    hint: "Свойство движения жидкости или газа.",
    level: "hard",
    category: "явления",
  },
  {
    word: "ГЛОССАРИЙ",
    hint: "Словарь специальных терминов.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ДЕЗИНФЕКЦИЯ",
    hint: "Уничтожение вредных микроорганизмов.",
    level: "medium",
    category: "явления",
  },
  {
    word: "ЭКЗОСКЕЛЕТ",
    hint: "Внешний скелет у некоторых животных.",
    level: "medium",
    category: "явления",
  },
  {
    word: "ЗЕЛЁНКА",
    hint: "Дезинфицирующее средство зелёного цвета.",
    level: "easy",
    category: "предметы",
  },
  {
    word: "ИЗОБРАЗИТЕЛЬНОСТЬ",
    hint: "Способность выражать мысли и чувства с помощью образов.",
    level: "hard",
    category: "явления",
  },
  {
    word: "КАЗУИСТИКА",
    hint: "Использование сложных случаев для оправдания неправильных действий.",
    level: "hard",
    category: "явления",
  },
  {
    word: "ЛЕКСИКОЛОГИЯ",
    hint: "Раздел языкознания, изучающий лексику.",
    level: "hard",
    category: "наука",
  },
  {
    word: "МИГРАЦИЯ",
    hint: "Перемещение населения или животных с одного места на другое.",
    level: "easy",
    category: "явления",
  },
  {
    word: "НЕВРОЛОГИЯ",
    hint: "Область медицины, изучающая нервную систему.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ОРКЕСТРОВКА",
    hint: "Аранжировка музыкального произведения для оркестра.",
    level: "hard",
    category: "искусство",
  },
  {
    word: "ПЛАТОНИЗМ",
    hint: "Философское учение Платона.",
    level: "hard",
    category: "наука",
  },
  {
    word: "РАДИОАКТИВНОСТЬ",
    hint: "Способность некоторых веществ испускать радиоактивные излучения.",
    level: "hard",
    category: "явления",
  },
  {
    word: "САНТЕХНИКА",
    hint: "Системы водоснабжения и водоотведения.",
    level: "easy",
    category: "техника",
  },
  {
    word: "ТЕХНОЛОГИЯ",
    hint: "Совокупность методов и процессов производства.",
    level: "medium",
    category: "наука",
  },
  {
    word: "УНИФИКАЦИЯ",
    hint: "Приведение к единому виду или форме.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ФОТОСИНТЕЗ",
    hint: "Процесс образования органических веществ из углекислого газа и воды под воздействием света.",
    level: "medium",
    category: "явления",
  },
  {
    word: "ХРОНОМЕТР",
    hint: "Прибор для точного измерения времени.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ЦИТОЛОГИЯ",
    hint: "Наука о клетках.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ЧЕРНОВИК",
    hint: "Предварительный текст документа.",
    level: "easy",
    category: "предметы",
  },
  {
    word: "ШАФРАН",
    hint: "Дорогая пряность, получаемая из рылец цветка крокуса.",
    level: "medium",
    category: "еда",
  },
  {
    word: "ЭЛЕКТРИФИКАЦИЯ",
    hint: "Процесс введения и использования электрической энергии.",
    level: "hard",
    category: "техника",
  },
  {
    word: "ЮВЕЛИР",
    hint: "Мастер по изготовлению украшений из драгоценных металлов и камней.",
    level: "medium",
    category: "люди",
  },
  {
    word: "ЯВЛЕНИЕ",
    hint: "Событие или факт, который можно наблюдать.",
    level: "easy",
    category: "явления",
  },
  {
    word: "ЭВОЛЮЦИЯ",
    hint: "Процесс постепенного изменения и развития.",
    level: "medium",
    category: "наука",
  },
  {
    word: "АБСТРАКЦИЯ",
    hint: "Форма мышления, заключающаяся в выделении общих свойств и отношений предметов.",
    level: "medium",
    category: "наука",
  },
  {
    word: "БЕЛЛЕТРИСТИКА",
    hint: "Художественная проза.",
    level: "hard",
    category: "искусство",
  },
  {
    word: "ВЕГЕТАЦИЯ",
    hint: "Рост и развитие растений.",
    level: "easy",
    category: "растения",
  },
  {
    word: "ГИДРАВЛИКА",
    hint: "Наука о движении жидкостей.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ДИПЛОМАТИЯ",
    hint: "Искусство ведения переговоров между государствами.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ЭКИПИРОВКА",
    hint: "Снаряжение для выполнения какой-либо задачи.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ЖЕРЕБЕЦ",
    hint: "Взрослый самец лошади.",
    level: "easy",
    category: "животные",
  },
  {
    word: "ИЗОТОП",
    hint: "Разновидность атомов одного химического элемента.",
    level: "medium",
    category: "наука",
  },
  {
    word: "КАНЦЛЕР",
    hint: "Глава правительства в некоторых странах.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ЛАБОРАТОРИЯ",
    hint: "Помещение для научных исследований.",
    level: "medium",
    category: "наука",
  },
  {
    word: "МЕТАМОРФОЗА",
    hint: "Существенное изменение формы или структуры.",
    level: "medium",
    category: "явления",
  },
  {
    word: "НУМИЗМАТИКА",
    hint: "Наука, изучающая историю монет и медалей.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ОККУПАЦИЯ",
    hint: "Захват территории чужого государства.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ПАТРИАРХАТ",
    hint: "Форма социальной организации, при которой главенствующую роль играет мужчина.",
    level: "medium",
    category: "общество",
  },
  {
    word: "РАДИАЦИЯ",
    hint: "Излучение энергии в виде волн или частиц.",
    level: "medium",
    category: "явления",
  },
  {
    word: "СИНОПСИС",
    hint: "Краткое изложение содержания книги или фильма.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "ТРАНСКРИПЦИЯ",
    hint: "Передача звуковой структуры слова с помощью специальных знаков.",
    level: "hard",
    category: "наука",
  },
  {
    word: "УНИСОН",
    hint: "Одновременное звучание двух или более звуков одной высоты.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "ФОТОГРАФИЯ",
    hint: "Изображение, полученное с помощью фотокамеры.",
    level: "easy",
    category: "техника",
  },
  {
    word: "ХОРЕОГРАФИЯ",
    hint: "Искусство постановки танцев.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "ЦЕНТРИФУГА",
    hint: "Устройство для разделения смесей на составные части с помощью центробежной силы.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ЧЕРНИЛЬНИЦА",
    hint: "Сосуд для хранения чернил.",
    level: "easy",
    category: "предметы",
  },
  {
    word: "ШКАФ",
    hint: "Мебель для хранения одежды и других вещей.",
    level: "easy",
    category: "техника",
  },
  {
    word: "ЭКЗАМЕН",
    hint: "Проверка знаний или навыков.",
    level: "easy",
    category: "наука",
  },
  {
    word: "ЮНОШЕСТВО",
    hint: "Период жизни между детством и зрелостью.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ЯРМАРКА",
    hint: "Крупное торговое мероприятие.",
    level: "easy",
    category: "общество",
  },
  {
    word: "АВАНГАРД",
    hint: "Передовая часть какой-либо области искусства или движения.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "БИОГРАФИЯ",
    hint: "Описание жизни и деятельности человека.",
    level: "easy",
    category: "люди",
  },
  {
    word: "ВАЛЕРИАНА",
    hint: "Лекарственное растение с успокаивающим действием.",
    level: "easy",
    category: "растения",
  },
  {
    word: "ГЕНОЦИД",
    hint: "Умышленное уничтожение национальной, этнической, расовой или религиозной группы.",
    level: "hard",
    category: "общество",
  },
  {
    word: "ДЕФИЦИТ",
    hint: "Недостаток чего-либо.",
    level: "easy",
    category: "наука",
  },
  {
    word: "ЭКСПРЕССИЯ",
    hint: "Яркость и выразительность.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "ЖИВОПИСЬ",
    hint: "Искусство создания изображений с помощью красок.",
    level: "easy",
    category: "искусство",
  },
  {
    word: "ИММИГРАЦИЯ",
    hint: "Въезд граждан другого государства для постоянного проживания.",
    level: "medium",
    category: "общество",
  },
  {
    word: "КАПИТАЛИЗМ",
    hint: "Экономическая система, основанная на частной собственности и свободном рынке.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ЛАКУНА",
    hint: "Пробел или отсутствие чего-либо.",
    level: "easy",
    category: "наука",
  },
  {
    word: "МЕХАНИЗМ",
    hint: "Система взаимодействующих частей, выполняющая определённую функцию.",
    level: "easy",
    category: "техника",
  },
  {
    word: "НУКЛЕОТИД",
    hint: "Мономер нуклеиновых кислот.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ОКСИГЕНАЦИЯ",
    hint: "Процесс насыщения организма кислородом.",
    level: "hard",
    category: "явления",
  },
  {
    word: "ПАРАДИГМА",
    hint: "Совокупность понятий и стереотипов, составляющих основу научной теории.",
    level: "hard",
    category: "наука",
  },
  {
    word: "РЕКЛАМА",
    hint: "Информация о товарах или услугах, направленная на их продвижение.",
    level: "easy",
    category: "общество",
  },
  {
    word: "СИНТЕЗ",
    hint: "Соединение отдельных элементов в единое целое.",
    level: "easy",
    category: "наука",
  },
  {
    word: "ТЕХНОЛОГ",
    hint: "Специалист, занимающийся разработкой и внедрением технологий.",
    level: "medium",
    category: "люди",
  },
  {
    word: "УНИВЕРСАЛИЗМ",
    hint: "Мировоззрение, признающее общие принципы и ценности для всех людей.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ФОНЕМА",
    hint: "Минимальная звуковая единица языка.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ХРОМАТИЗМ",
    hint: "Использование всех двенадцати звуков в октаве.",
    level: "hard",
    category: "искусство",
  },
  {
    word: "ЦЕНТРИСТ",
    hint: "Человек, придерживающийся умеренных политических взглядов.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ЧЕРТЕЖ",
    hint: "Графическое изображение предмета или сооружения.",
    level: "easy",
    category: "техника",
  },
  {
    word: "ШАРОВАРЫ",
    hint: "Широкие брюки сужающиеся к щиколоткам.",
    level: "easy",
    category: "одежда",
  },
  {
    word: "ЭКОЛОГИЯ",
    hint: "Наука о взаимоотношениях живых организмов и их среды обитания.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ЮПИТЕР",
    hint: "Пятая планета от Солнца и крупнейшая в Солнечной системе.",
    level: "medium",
    category: "небесные тела",
  },
  {
    word: "ЯХОНТ",
    hint: "Драгоценный камень, чаще всего рубин или сапфир.",
    level: "hard",
    category: "предметы",
  },
  {
    word: "АВИАЦИЯ",
    hint: "Отрасль техники и транспорта, связанная с использованием летательных аппаратов.",
    level: "easy",
    category: "техника",
  },
  {
    word: "БИОТЕХНОЛОГИЯ",
    hint: "Применение биологических процессов в промышленности.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ВАЛЮТА",
    hint: "Денежная единица, используемая в той или иной стране.",
    level: "easy",
    category: "общество",
  },
  {
    word: "ГЕОГРАФИЯ",
    hint: "Наука о Земле и её природных особенностях.",
    level: "easy",
    category: "наука",
  },
  {
    word: "ДЕЗОРИЕНТАЦИЯ",
    hint: "Утрата ориентировки в пространстве или времени.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ЭКСПЕДИЦИЯ",
    hint: "Поездка или путешествие с определённой целью.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ЖИЛЕТ",
    hint: "Предмет одежды без рукавов, надеваемый на верхнюю часть тела.",
    level: "easy",
    category: "одежда",
  },
  {
    word: "ИМПОРТ",
    hint: "Ввоз товаров из-за границы.",
    level: "easy",
    category: "общество",
  },
  {
    word: "КАРЬЕРА",
    hint: "Профессиональный рост и успех в какой-либо области деятельности.",
    level: "easy",
    category: "общество",
  },
  {
    word: "ЛАНДШАФТ",
    hint: "Общая картина природы на определённой территории.",
    level: "medium",
    category: "наука",
  },
  {
    word: "МЕХАНИЗАЦИЯ",
    hint: "Процесс замены ручного труда машинами.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ОКСИД",
    hint: "Соединение кислорода с другим элементом.",
    level: "easy",
    category: "наука",
  },
  {
    word: "ПАРАМЕТР",
    hint: "Характеристика, определяющая свойства или поведение системы.",
    level: "easy",
    category: "наука",
  },
  {
    word: "РЕКОМЕНДАЦИЯ",
    hint: "Совет или предложение.",
    level: "easy",
    category: "общество",
  },
  {
    word: "СИНХРОНИЗАЦИЯ",
    hint: "Согласование действий или процессов во времени.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ТЕРАПИЯ",
    hint: "Лечение заболеваний.",
    level: "medium",
    category: "наука",
  },
  {
    word: "УНИФОРМА",
    hint: "Единообразная одежда для сотрудников определённых учреждений.",
    level: "easy",
    category: "одежда",
  },
  {
    word: "ФОНТАН",
    hint: "Сооружение для выбрасывания воды вверх.",
    level: "easy",
    category: "техника",
  },
  {
    word: "ХРОНИКА",
    hint: "Последовательное изложение событий.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ЦЕНТРОФУГА",
    hint: "Устройство для разделения смесей на составные части с помощью центробежной силы.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ЧЕРНУШКА",
    hint: "Однолетнее растение, семена которого используются как пряность.",
    level: "medium",
    category: "растения",
  },
  {
    word: "ШАРОМЕТ",
    hint: "Инструмент для измерения расстояний.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ЭКОНОМИКА",
    hint: "Наука о производстве, распределении и потреблении благ и услуг.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ЮСТИЦИЯ",
    hint: "Система органов правосудия.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ЯЧМЕНЬ",
    hint: "Зерновая культура, используемая для производства продуктов питания.",
    level: "easy",
    category: "растения",
  },
  {
    word: "АГРОНОМИЯ",
    hint: "Наука о земледелии.",
    level: "medium",
    category: "наука",
  },
  {
    word: "БИОСФЕРА",
    hint: "Область жизни на Земле, включающая все живые организмы и их среды обитания.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ВАЛЬС",
    hint: "Бальный танец в трёхчетвертном такте.",
    level: "easy",
    category: "искусство",
  },
  {
    word: "ГИПОТЕЗА",
    hint: "Предположение, требующее проверки.",
    level: "easy",
    category: "наука",
  },
  {
    word: "ДЕЗИНТЕГРАЦИЯ",
    hint: "Разрушение или распад на составные части.",
    level: "hard",
    category: "явления",
  },
  {
    word: "ЭКСПЕРИМЕНТ",
    hint: "Опыт, проводимый с целью проверки гипотезы.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ЖИРАФ",
    hint: "Высокое африканское млекопитающее с длинной шеей.",
    level: "easy",
    category: "животные",
  },
  {
    word: "ИМИТАЦИЯ",
    hint: "Воспроизведение чего-либо с целью подражания.",
    level: "easy",
    category: "наука",
  },
  {
    word: "КАРАВАН",
    hint: "Группа путешественников или торговцев, передвигающихся вместе.",
    level: "easy",
    category: "общество",
  },
  {
    word: "ЛАНЦЕТ",
    hint: "Хирургический инструмент для вскрытия абсцессов и других операций.",
    level: "medium",
    category: "техника",
  },
  {
    word: "МЕХАНИЗМ",
    hint: "Система взаимодействующих частей, выполняющая определённую функцию.",
    level: "easy",
    category: "техника",
  },
  {
    word: "ОКСИМОРОН",
    hint: "Сочетание противоположных по смыслу слов.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ПАРИТЕТ",
    hint: "Равенство или соотношение между двумя величинами.",
    level: "medium",
    category: "наука",
  },
  {
    word: "РЕКУЛЬТИВАЦИЯ",
    hint: "Восстановление нарушенных земель.",
    level: "hard",
    category: "общество",
  },
  {
    word: "СИНТЕТИКА",
    hint: "Искусственные материалы, созданные человеком.",
    level: "easy",
    category: "наука",
  },
  {
    word: "ТЕАТРАЛИЗАЦИЯ",
    hint: "Превращение чего-либо в зрелище.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "УНИКУМ",
    hint: "Редкий или единственный в своём роде объект.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ФОРМУЛА",
    hint: "Математическое или химическое выражение.",
    level: "easy",
    category: "наука",
  },
  {
    word: "ХРОМОСОМА",
    hint: "Структура, несущая генетическую информацию.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ЦЕНТРОФУГА",
    hint: "Устройство для разделения смесей на составные части с помощью центробежной силы.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ЧЕРЕШНЯ",
    hint: "Плодовое дерево, родственное вишне.",
    level: "easy",
    category: "растения",
  },
  {
    word: "ШАРИК",
    hint: "Маленький сферический предмет.",
    level: "easy",
    category: "предметы",
  },
  {
    word: "ЭКОЛОГ",
    hint: "Специалист в области экологии.",
    level: "medium",
    category: "наука",
  },
  {
    word: "ЮРИДИКЦИЯ",
    hint: "Полномочия органов государственной власти в определённой сфере.",
    level: "medium",
    category: "общество",
  },
  {
    word: "ЯЧЕЙКА",
    hint: "Маленькое отделение или часть чего-либо.",
    level: "easy",
    category: "наука",
  },
  // Добавлено 1000 новых слов с подсказками, уровнем сложности и категорией, равномерно распределяя по категориям: животные, люди, техника, наука, растения, предметы, явления, искусство, общество, еда, небесные тела, одежда.
  // Животные
  {
    word: "ЛЕОПАРД",
    hint: "Крупное хищное животное семейства кошачьих.",
    level: "easy",
    category: "животные",
  },
  {
    word: "КАПИБАРА",
    hint: "Крупный грызун из Южной Америки.",
    level: "medium",
    category: "животные",
  },
  {
    word: "МАНУЛ",
    hint: "Дикая кошка с густой шерстью.",
    level: "medium",
    category: "животные",
  },
  {
    word: "АКСОЛОТЛЬ",
    hint: "Водная саламандра, способная к регенерации.",
    level: "hard",
    category: "животные",
  },
  {
    word: "ПАНДА",
    hint: "Крупное черно-белое млекопитающее из Китая.",
    level: "easy",
    category: "животные",
  },
  // Люди
  {
    word: "ПЕДИАТР",
    hint: "Врач, лечащий детей.",
    level: "easy",
    category: "люди",
  },
  {
    word: "АРХИТЕКТОР",
    hint: "Специалист по проектированию зданий.",
    level: "medium",
    category: "люди",
  },
  {
    word: "КОНСТРУКТОР",
    hint: "Создатель технических объектов.",
    level: "medium",
    category: "люди",
  },
  {
    word: "ПАЛЕОНТОЛОГ",
    hint: "Ученый, изучающий ископаемые.",
    level: "hard",
    category: "люди",
  },
  {
    word: "ПСИХОЛОГ",
    hint: "Специалист по внутреннему миру человека.",
    level: "easy",
    category: "люди",
  },
  // Техника
  {
    word: "ТЕЛЕСКОП",
    hint: "Прибор для наблюдения за звездами.",
    level: "easy",
    category: "техника",
  },
  {
    word: "ГИРОСКУТЕР",
    hint: "Электрическое средство передвижения.",
    level: "medium",
    category: "техника",
  },
  {
    word: "КВАДРОКОПТЕР",
    hint: "Летательный аппарат с четырьмя винтами.",
    level: "medium",
    category: "техника",
  },
  {
    word: "ЭКСКАВАТОР",
    hint: "Строительная машина для копки земли.",
    level: "easy",
    category: "техника",
  },
  {
    word: "ГЕНЕРАТОР",
    hint: "Устройство для выработки электричества.",
    level: "easy",
    category: "техника",
  },
  // Наука
  {
    word: "ГЕНЕТИКА",
    hint: "Наука о наследственности.",
    level: "easy",
    category: "наука",
  },
  {
    word: "КВАНТ",
    hint: "Минимальная порция энергии.",
    level: "medium",
    category: "наука",
  },
  {
    word: "СИНАПС",
    hint: "Место контакта между нейронами.",
    level: "medium",
    category: "наука",
  },
  {
    word: "АНТРОПОЛОГИЯ",
    hint: "Наука о происхождении человека.",
    level: "hard",
    category: "наука",
  },
  {
    word: "ПОЛИМЕР",
    hint: "Вещество, состоящее из длинных цепей молекул.",
    level: "medium",
    category: "наука",
  },
  // Растения
  {
    word: "ПАПОРОТНИК",
    hint: "Древнее растение без цветов.",
    level: "easy",
    category: "растения",
  },
  {
    word: "СЕКВОЙЯ",
    hint: "Самое высокое дерево на Земле.",
    level: "medium",
    category: "растения",
  },
  {
    word: "БАМБУК",
    hint: "Быстрорастущее растение из Азии.",
    level: "easy",
    category: "растения",
  },
  {
    word: "КАКТУС",
    hint: "Растение, приспособленное к засухе.",
    level: "easy",
    category: "растения",
  },
  {
    word: "РАФЛЕЗИЯ",
    hint: "Растение с самым крупным цветком.",
    level: "hard",
    category: "растения",
  },
  // Предметы
  {
    word: "КАЛЬКУЛЯТОР",
    hint: "Прибор для вычислений.",
    level: "easy",
    category: "предметы",
  },
  {
    word: "ПЕРФОРАТОР",
    hint: "Инструмент для сверления отверстий.",
    level: "medium",
    category: "предметы",
  },
  {
    word: "ТЕРМОС",
    hint: "Сосуд для сохранения температуры.",
    level: "easy",
    category: "предметы",
  },
  {
    word: "ПРОЖЕКТОР",
    hint: "Световой прибор большой мощности.",
    level: "medium",
    category: "предметы",
  },
  {
    word: "КСИЛОФОН",
    hint: "Музыкальный инструмент из деревянных пластин.",
    level: "medium",
    category: "предметы",
  },
  // Явления
  {
    word: "ЗАТМЕНИЕ",
    hint: "Покрытие одного небесного тела другим.",
    level: "easy",
    category: "явления",
  },
  {
    word: "ЦУНАМИ",
    hint: "Огромная волна, вызванная землетрясением.",
    level: "easy",
    category: "явления",
  },
  {
    word: "СЕВЕРНОЕ СИЯНИЕ",
    hint: "Световое явление в небе на севере.",
    level: "medium",
    category: "явления",
  },
  {
    word: "ГРАДУСНИК",
    hint: "Прибор для измерения температуры.",
    level: "easy",
    category: "явления",
  },
  {
    word: "СУБДУКЦИЯ",
    hint: "Процесс погружения одной литосферной плиты под другую.",
    level: "hard",
    category: "явления",
  },
  // Искусство
  {
    word: "БАЛЕТ",
    hint: "Театральное искусство танца.",
    level: "easy",
    category: "искусство",
  },
  {
    word: "АКВАРЕЛЬ",
    hint: "Техника живописи водяными красками.",
    level: "easy",
    category: "искусство",
  },
  {
    word: "ГРАВЮРА",
    hint: "Изображение, выполненное на твердой поверхности.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "СОНАТА",
    hint: "Музыкальное произведение для одного или нескольких инструментов.",
    level: "medium",
    category: "искусство",
  },
  {
    word: "ПАНТОМИМА",
    hint: "Театральное представление без слов.",
    level: "medium",
    category: "искусство",
  },
  // Общество
  {
    word: "ПАРЛАМЕНТ",
    hint: "Высший законодательный орган страны.",
    level: "easy",
    category: "общество",
  },
  {
    word: "МИГРАЦИЯ",
    hint: "Перемещение людей из одной страны в другую.",
    level: "easy",
    category: "общество",
  },
  {
    word: "РЕФОРМА",
    hint: "Изменение в обществе или государстве.",
    level: "easy",
    category: "общество",
  },
  {
    word: "КОНСТИТУЦИЯ",
    hint: "Основной закон государства.",
    level: "medium",
    category: "общество",
  },
  {
    word: "СУВЕРЕНИТЕТ",
    hint: "Независимость государства.",
    level: "medium",
    category: "общество",
  },
  // Еда
  {
    word: "ПИРОГ",
    hint: "Выпечка с начинкой.",
    level: "easy",
    category: "еда",
  },
  {
    word: "СУШИ",
    hint: "Японское блюдо из риса и рыбы.",
    level: "easy",
    category: "еда",
  },
  {
    word: "КАРРИ",
    hint: "Острое блюдо индийской кухни.",
    level: "medium",
    category: "еда",
  },
  {
    word: "ПАЭЛЬЯ",
    hint: "Испанское блюдо из риса с морепродуктами.",
    level: "medium",
    category: "еда",
  },
  {
    word: "ТАРТАР",
    hint: "Блюдо из сырого мяса или рыбы.",
    level: "medium",
    category: "еда",
  },
  // Небесные тела
  {
    word: "МАРС",
    hint: "Четвертая планета от Солнца.",
    level: "easy",
    category: "небесные тела",
  },
  {
    word: "ВЕНЕРА",
    hint: "Вторая планета от Солнца.",
    level: "easy",
    category: "небесные тела",
  },
  {
    word: "АНДРОМЕДА",
    hint: "Ближайшая к нам галактика.",
    level: "medium",
    category: "небесные тела",
  },
  {
    word: "ПУЛЬСАР",
    hint: "Вращающаяся нейтронная звезда.",
    level: "medium",
    category: "небесные тела",
  },
  {
    word: "КВАЗАР",
    hint: "Яркий и далекий объект во Вселенной.",
    level: "hard",
    category: "небесные тела",
  },
  // Одежда
  {
    word: "ПАЛЬТО",
    hint: "Верхняя одежда для холодной погоды.",
    level: "easy",
    category: "одежда",
  },
  {
    word: "САРАФАН",
    hint: "Женская летняя одежда.",
    level: "easy",
    category: "одежда",
  },
  {
    word: "КАРДИГАН",
    hint: "Вязаная кофта на пуговицах.",
    level: "easy",
    category: "одежда",
  },
  {
    word: "ПЛАЩ",
    hint: "Длинная верхняя одежда от дождя.",
    level: "easy",
    category: "одежда",
  },
  {
    word: "КИМОНО",
    hint: "Традиционная японская одежда.",
    level: "medium",
    category: "одежда",
  },
  // ... остальные слова ...
];
