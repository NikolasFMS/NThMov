/// Базы данных карт
// Колода отзывов
const reviews = [
    {
        "rating": "positive",
        "up": { "ru": "Мэй Дэй", "en": "May Day" },
        "down": { "ru": "Захватывающий <b>фильм-катастрофа</b>.", "en": "A gripping <b>disaster movie</b>." }
    },
    {
        "rating": "positive",
        "up": { "ru": "М. Ганди", "en": "M. Gandhi" },
        "down": { "ru": "Я был приятно удивлён обнаружить <b>пацифистскую</b> точку зрения в фильме о <b>войне</b>. Очень проникновенно!", "en": "I was pleasantly surprised to find a <b>pacifist</b> perspective in a <b>war movie</b>. Very touching!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "ГерманФримен", "en": "Herman Freeman" },
        "down": { "ru": "Мне очень понравился этот фильм. К тому же я теперь знаю, как планировать <b>побег из тюрьмы</b>.", "en": "I really enjoyed this film. Plus, now I know how to plan a <b>prison break</b>." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Брюс Чан", "en": "Bruce Chan" },
        "down": { "ru": "<b>Боевые сцены</b> в этом фильме поставлены идеально!", "en": "The <b>action scenes</b> in this film were executed perfectly!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Фредди_сатурн*3", "en": "Freddy_Saturn*3" },
        "down": { "ru": "Я не был большим фанатом этой <b>рок-группы</b>, но после просмотра этого <b>биографического фильма</b> купил все их альбомы!", "en": "I wasn't a big fan of this <b>rock band</b>, but after watching this <b>biographical movie</b>, I bought all their albums!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "ЕлизаветаМария", "en": "ElizavetaMaria" },
        "down": { "ru": "Как только они начинают говорить со своим <b>британским акцентом</b>, я таю. Герои моего детства.", "en": "As soon as they start speaking with their <b>British accent</b>, I melt. Heroes of my childhood." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Идущий по лезвию", "en": "Blade Runner" },
        "down": { "ru": "Замечательный фильм о <b>журналистском расследовании</b> пятнадцатилетней давности.", "en": "An excellent movie about a <b>journalistic investigation</b> from fifteen years ago." }
    },
    {
        "rating": "positive",
        "up": { "ru": "неспящий-в-стокгольме", "en": "Insomniac-in-Stockholm" },
        "down": { "ru": "Очень тонкий <b>интроспективный фильм</b>. Замечательно!", "en": "A very delicate <b>introspective film</b>. Wonderful!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Фредди Хичкок", "en": "Freddy Hitchcock" },
        "down": { "ru": "Старая добрая <b>детективная история</b>.", "en": "A classic <b>detective story</b>." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Xx_КоролеваКрика_хХ", "en": "Xx_QueenOfScreams_xX" },
        "down": { "ru": "Я, как поклонница хорроров, была приятно удивлена тем, насколько страшными оказались <b>японские фильмы ужасов</b>!", "en": "As a horror fan, I was pleasantly surprised by how terrifying <b>Japanese horror films</b> turned out to be!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "сол@тудлимнапартнёры", "en": "Salt@ToThePartners" },
        "down": { "ru": "Они сделали историю об <b>уголовном процессе</b> захватывающей для просмотра... Снимаю шляпу!", "en": "They turned a story about a <b>criminal trial</b> into a gripping watch... Hats off!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Микин «мастер на все руки»", "en": "Mikin 'Jack of All Trades'" },
        "down": { "ru": "Эта картина занимает почётное место на пьедестале как лучший <b>спортивный фильм</b>. 🏅", "en": "This film holds a prestigious place as the best <b>sports movie</b>. 🏅" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Дэнни и друзья", "en": "Danny & Friends" },
        "down": { "ru": "Этот фильм об <b>ограблении</b> украдёт сердца кинокритиков. Понял? Хе-хе.", "en": "This <b>heist movie</b> will steal the hearts of film critics. Get it? Hehe." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Ридли Кот", "en": "Ridley Cat" },
        "down": { "ru": "Забавная <b>пародия</b> на классический фильм вплоть до самого названия.", "en": "A funny <b>parody</b> of a classic film, even down to the title." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Дэн Ли", "en": "Dan Lee" },
        "down": { "ru": "Очередной <b>супергеройский фильм</b>... и это здорово! Класс!", "en": "Another <b>superhero movie</b>... and that's great! Cool!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Орсон из Уэльса", "en": "Orson from Wales" },
        "down": { "ru": "Снять столь поэтичный фильм на <b>чёрно-белую плёнку</b> было отличной идеей.", "en": "Filming such a poetic movie on <b>black and white film</b> was a brilliant idea." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Плакса-васка", "en": "Crybaby-Vaska" },
        "down": { "ru": "Приготовьте носовые платки, потому что вы будете <b>рыдать</b> над этой <b>реальной историей</b>!", "en": "Prepare your tissues, because you'll be <b>crying</b> over this <b>true story</b>!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "храбрец22", "en": "Brave22" },
        "down": { "ru": "Хоть я и суровый байкер, должен признаться: я <b>рыдал</b> как младенец!", "en": "Even though I'm a tough biker, I have to admit: I <b>cried</b> like a baby!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Борис Уэйн", "en": "Boris Wayne" },
        "down": { "ru": "Главный персонаж — это тот <b>антигерой</b>, в котором мы сейчас нуждаемся.", "en": "The main character is the <b>anti-hero</b> we need right now." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Доктор Кого", "en": "Doctor Who" },
        "down": { "ru": "Я посмотрел этот новый фильм о <b>путешествиях во времени</b> в следующий понедельник и остался в восторге.", "en": "I watched this new <b>time travel movie</b> next Monday and was delighted." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Марк Юри", "en": "Mark Yuri" },
        "down": { "ru": "Благодаря этому фильму я узнал об этой женщине, <b>настоящей героине</b> нашего времени!", "en": "Thanks to this film, I learned about this woman, a <b>true hero</b> of our time!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Ти Кирк", "en": "T. Kirk" },
        "down": { "ru": "Лучший научно-фантастический фильм всех времён — пусть и довольно-таки старый!", "en": "The best sci-fi film of all time — albeit a bit old!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Джек Гензель", "en": "Jack Genzel" },
        "down": { "ru": "Необычная современная адаптация классической сказки. Пять звёзд!", "en": "A unique modern adaptation of a classic fairy tale. Five stars!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "ДжеймсОО8", "en": "James008" },
        "down": { "ru": "Существует много споров, но я лично считаю, что это лучшая глава всей шпионской саги.", "en": "There are many debates, but I personally believe this is the best installment of the entire spy saga." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Елена Рипли", "en": "Elena Ripley" },
        "down": { "ru": "Наконец! Полностью женский актёрский состав. #топ #фильмы", "en": "Finally! A completely female cast. #top #movies" }
    },
    {
        "rating": "positive",
        "up": { "ru": "«Джаз_Лайтер»", "en": "Jazz_Lighter" },
        "down": { "ru": "Лучший анимационный фильм, который я видел за последнее время. Прекрасное использование трёхмерной графики!", "en": "The best animated film I've seen recently. Great use of 3D graphics!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Деловек в аёрном", "en": "Man in Black" },
        "down": { "ru": "Трогательная комедия, которую должны увидеть каждый. Очень рекомендую!", "en": "A touching comedy that everyone should see. Highly recommend!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Р.У.Д.О.Л.Ь.Ф", "en": "R.U.D.O.L.P.H" },
        "down": { "ru": "Такие глупые комедии как нельзя лучше погружают меня в праздничное настроение.", "en": "Silly comedies like this put me in a festive mood." }
    },
    {
        "rating": "positive",
        "up": { "ru": "БенБотто54321", "en": "BenBotto54321" },
        "down": { "ru": "Фильм основан на детской истории, но снят для взрослых. Потрясающе!", "en": "The film is based on a children's story but made for adults. Amazing!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Алис_Диана", "en": "Alice_Diana" },
        "down": { "ru": "Симпатичный археолог: ЕСТЬ! Захватывающие приключения: ЕСТЬ! Что ещё можно желать?", "en": "Charming archaeologist: CHECK! Thrilling adventures: CHECK! What more could you want?" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Клинт Вествуд", "en": "Clint Westwood" },
        "down": { "ru": "Лёгкий и весёлый фильм категории «Б».", "en": "A light and fun B-movie." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Заяц Роджер", "en": "Roger Rabbit" },
        "down": { "ru": "Говорящие животные на большом экране — это всегда успех!", "en": "Talking animals on the big screen are always a hit!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Тони Мариа", "en": "Tony Maria" },
        "down": { "ru": "Вы ещё очень долго будете напевать под нос заглавную тему из этого весёлого мюзикла.", "en": "You'll be humming the main theme from this fun musical for a long time." }
    },
    {
        "rating": "positive",
        "up": { "ru": "жена_кинокритика", "en": "wife_of_film_critic" },
        "down": { "ru": "Классический сюжет «они ненавидят друг друга, но вынуждены действовать сообща» всё ещё работает!", "en": "The classic 'they hate each other but have to work together' plot still works!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Кровавая Мэри", "en": "Bloody Mary" },
        "down": { "ru": "Чрезвычайно жестокие сцены — просто праздник для фанатов этого жанра.", "en": "Extremely violent scenes — a treat for fans of this genre." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Алекс Петерсон", "en": "Alex Peterson" },
        "down": { "ru": "По-настоящему мифический фильм!", "en": "A truly mythical film!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "джанго_66", "en": "django_66" },
        "down": { "ru": "Я обожаю спагетти-вестерны, и этот фильм не исключение. Отличная операторская работа!", "en": "I love spaghetti westerns, and this film is no exception. Great cinematography!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Марсель М.", "en": "Marcel M." },
        "down": { "ru": "Я сомневался, что из этого получится хорошее немое кино. Я сильно ошибался.", "en": "I doubted this would make a good silent film. I was very wrong." }
    },
    {
        "rating": "positive",
        "up": { "ru": "Аль @Купчино", "en": "Al @Kupchino" },
        "down": { "ru": "Если вы не способны оценить этот классический гангстерский фильм, вам следует отправить на корм рыбам. 💣🪦", "en": "If you can't appreciate this classic gangster film, you should be fed to the fishes. 💣🪦" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Повелитель_перстней", "en": "Lord_of_Rings" },
        "down": { "ru": "Могущественные волшебники, величественные драконы, волшебные мечи… потрясающий фэнтезийный фильм!", "en": "Powerful wizards, majestic dragons, magic swords… an epic fantasy film!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "Вин_солярка", "en": "Win_diesel" },
        "down": { "ru": "Чистый адреналин от начала до конца!", "en": "Pure adrenaline from start to finish!" }
    },
    {
        "rating": "positive",
        "up": { "ru": "танцующий_с_котами", "en": "dances_with_cats" },
        "down": { "ru": "Существует множество фильмов о танцевальных труппах, но этот лучший из них.", "en": "There are many films about dance troupes, but this one is the best." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Акира.Красава_", "en": "Akira.Krasava_" },
        "down": { "ru": "Реплики всех персонажей продублированы субтитрами... на разных языках? Кому это пришло в голову? 🤨", "en": "All character lines were duplicated with subtitles... in different languages? Who thought of this? 🤨" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Роберт Б. У.", "en": "Robert B. U." },
        "down": { "ru": "То есть оказывается... это всё был сон? Верните мне два часа моей жизни.", "en": "So it turns out... it was all a dream? Give me back two hours of my life." }
    },
    {
        "rating": "negative",
        "up": { "ru": "КвентИн Т.", "en": "Quentin T." },
        "down": { "ru": "Я был в восторге... пока они резко не сменили жанр в конце фильма.", "en": "I was thrilled... until they suddenly switched genres at the end of the movie." }
    },
    {
        "rating": "negative",
        "up": { "ru": "звездаБоливуда99", "en": "BollywoodStar99" },
        "down": { "ru": "Поистине ужасное кино. Однако костюмы неплохи.", "en": "Truly a terrible film. But the costumes are decent." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Сестра Кэти", "en": "Sister Katy" },
        "down": { "ru": "Родители, будьте осторожны! Фильм не для детей! 😱", "en": "Parents, beware! This film is not for kids! 😱" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Стэн «Кубрик Рубрика»", "en": "Stan 'Kubrick Rubric'" },
        "down": { "ru": "Сцена сна в конце фильма слишком длинная и запутанная.", "en": "The dream scene at the end of the film is too long and confusing." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Улитка по имени Флэш", "en": "Snail upd Flash" },
        "down": { "ru": "Слишком многоооо сцен в <b>замедленной съёмкееее</b>.", "en": "Too maaaany scenes in <b>slow motion</b>." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Крёстная Мать", "en": "Godmother" },
        "down": { "ru": "Трёхчасовое кино, <b>снятое в одной комнате?</b> Нет, спасибо.", "en": "A three-hour film <b>shot in a single room?</b> No, thanks." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Книжный_червь", "en": "Bookworm" },
        "down": { "ru": "Книга была лучше.", "en": "The book was better." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Сержант Райан", "en": "Sergeant Ryan" },
        "down": { "ru": "Я не ожидал, что действие будет разворачиваться во время Второй мировой войны. Это так странно.", "en": "I didn't expect the story to be set during World War II. That's so weird." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Шакал с Уол-стрит", "en": "Wall Street Jackal" },
        "down": { "ru": "Единственный плюс этого фильма – локация. Я обязательно съезжу туда в отпуск!", "en": "The only plus of this film is the location. I'll definitely visit there on vacation!" }
    },
    {
        "rating": "negative",
        "up": { "ru": "СтивенЗиссу Э.", "en": "StephenZissou E." },
        "down": { "ru": "Приглашать комика на <b>драматическую роль</b> было плохой идеей.", "en": "Casting a comedian for a <b>dramatic role</b> was a bad idea." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Чужой.против.Травоядного", "en": "Alien.vs.Herbivore" },
        "down": { "ru": "Из всех фильмов, куда можно было впихнуть зомби, почему ИМЕННО ЭТОТ?", "en": "Of all the films to put zombies in, why THIS one?" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Петя Альмодовэр", "en": "Peter Almodovar" },
        "down": { "ru": "Три... ДВА... Один... Ииии <b>бомба</b> обезврежена в последнюю секунду. Как оригинально. 😑", "en": "Three... TWO... One... And the <b>bomb</b> is defused at the last second. How original. 😑" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Серая_жемчужина", "en": "Gray Pearl" },
        "down": { "ru": "Актёр, играющий роль пирата, обладает харизмой деревянной доски.", "en": "The actor playing the pirate has the charisma of a wooden plank." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Сай-фай Марти", "en": "Sci-fi Marty" },
        "down": { "ru": "Столько <b>сюжетных дыр</b>. Неужели никому не пришло в голову перечитать финальный сценарий?", "en": "So many <b>plot holes</b>. Did no one think to proofread the final script?" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Л. Кермит", "en": "L. Kermit" },
        "down": { "ru": "Я не уверен, что использовать кукол вместо актёров, чтобы рассказать эту историю, было хорошей идеей.", "en": "I'm not sure that using puppets instead of actors to tell this story was a good idea." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Доктор Сон", "en": "Doctor Sleep" },
        "down": { "ru": "Одно только название кричит о том, что это скучный фильм. Почему я не послушал?", "en": "The title alone screams boring film. Why didn't I listen?" }
    },
    {
        "rating": "negative",
        "up": { "ru": "А Лоялист", "en": "A Loyalist" },
        "down": { "ru": "Актёрский состав из взрослых, играющих детские роли. Жуть! 🤢", "en": "Adult actors playing children's roles. Yikes! 🤢" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Брат-с-Эйвона", "en": "Brother from Avon" },
        "down": { "ru": "Я предпочитаю <b>театральную постановку</b>, она гораздо глубже.", "en": "I prefer the <b>theatrical production</b>, it's much deeper." }
    },
    {
        "rating": "negative",
        "up": { "ru": "СлавныйПарень_74", "en": "NiceGuy_74" },
        "down": { "ru": "Короткометражный фильм с низким бюджетом — и это сразу заметно! 😞", "en": "A low-budget short film — and it's immediately obvious! 😞" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Вачовски Л.", "en": "Wachowski L." },
        "down": { "ru": "Это последний фильм в трилогии и определённо худший...", "en": "This is the last film in the trilogy and definitely the worst..." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Ленни НИМОЙ", "en": "Lenny NIMOY" },
        "down": { "ru": "Создателям фильма стоило потратиться и заменить плохие спецэффекты. Они выглядят так ужасно!", "en": "The filmmakers should have spent more and replaced the bad special effects. They look terrible!" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Миша Лен", "en": "Misha Len" },
        "down": { "ru": "Я вас умоляю! Работник кухни, который становится шеф-поваром за несколько месяцев? Не очень-то правдоподобно.", "en": "Oh please! A kitchen worker who becomes a head chef in a few months? Not very believable." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Сталкер", "en": "Stalker" },
        "down": { "ru": "Мне понравилась лишь заключительная сцена с гигантскими роботами.", "en": "I only liked the final scene with the giant robots." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Док Браун", "en": "Doc Brown" },
        "down": { "ru": "Я пропустил первые 10 минут, погрузившись в чрезмерно замысловатом сюжете. 😞", "en": "I missed the first 10 minutes, getting lost in the overly convoluted plot. 😞" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Дж. Дж. Бинкс", "en": "J. J. Binks" },
        "down": { "ru": "Действительно плохой приквел к классическому фильму! За такое должно быть стыдно!", "en": "A truly bad prequel to a classic movie! They should be ashamed!" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Человек из ЭлектроСтали", "en": "Man from ElectroSteel" },
        "down": { "ru": "Я никогда не слышал о комиксе, на котором основана эта история. Я надеюсь, он лучше, чем сам фильм!", "en": "I've never heard of the comic this story is based on. I hope it's better than the film!" }
    },
    {
        "rating": "negative",
        "up": { "ru": "юный падаван", "en": "young padawan" },
        "down": { "ru": "Политический подтекст показался мне слегка противоречивым — зачем нужно было снимать этот фильм?", "en": "The political undertones seemed a bit contradictory to me — why did they even make this film?" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Агент Макс", "en": "Agent Max" },
        "down": { "ru": "Сначала это была книга. Затем компьютерная игра. Потом сериал. А теперь ещё и фильм. Когда это закончится?!", "en": "First it was a book. Then a computer game. Then a series. And now a movie. When will it end?!" }
    },
    {
        "rating": "negative",
        "up": { "ru": "злобный переводчик", "en": "evil_translator" },
        "down": { "ru": "Фильм ничего, но кто так отвратительно перевёл оригинальное название?", "en": "The film is okay, but who translated the original title so poorly?" }
    },
    {
        "rating": "negative",
        "up": { "ru": "Хан Трио", "en": "Han Trio" },
        "down": { "ru": "Фильм заканчивается на самом интересном месте, но продолжение никто снимать не планирует. Пустая трата времени!", "en": "The film ends at the most interesting point, but no one plans to shoot a sequel. What a waste!" }
    },
    {
        "rating": "negative",
        "up": { "ru": "песочный человек", "en": "sandman" },
        "down": { "ru": "Европейские критики называют это «шедевром». Я называю это «снотворным». 😴", "en": "European critics call it a 'masterpiece.' I call it a 'sleeping pill.' 😴" }
    },
    {
        "rating": "negative",
        "up": { "ru": "УникКиноэкрана", "en": "UniqScreen" },
        "down": { "ru": "Вы хотите сказать, что на съёмки этого бреда ушло ДЕСЯТЬ ЛЕТ?! 😞", "en": "Are you telling me it took TEN YEARS to make this mess?! 😞" }
    },
    {
        "rating": "negative",
        "up": { "ru": "заядлая мандаринка", "en": "persistent_mandarin" },
        "down": { "ru": "Они назвали это «экспериментальным фильмом». Я считаю, эксперимент провалился.", "en": "They called it an 'experimental film.' I think the experiment failed." }
    },
    {
        "rating": "negative",
        "up": { "ru": "любитель_сериалов99", "en": "series_lover99" },
        "down": { "ru": "Фильм слишком короткий и бессвязный — им следовало выпустить его в формате мини-сериала из 6 эпизодов.", "en": "The film is too short and disjointed — they should have released it as a 6-episode mini-series." }
    },
    {
        "rating": "negative",
        "up": { "ru": "крепкая_Фисташка", "en": "firm_Pistachio" },
        "down": { "ru": "Сцены с двумя настоящими актёрами-«двойниками» — единственная достойная часть фильма.", "en": "Scenes with the two real 'double' actors were the only good part of the film." }
    },
    {
        "rating": "negative",
        "up": { "ru": "ДаркХейтер_77", "en": "DarkHater_77" },
        "down": { "ru": "Все персонажи слишком глупые, чтобы быть правдоподобными.", "en": "All the characters are too dumb to be believable." }
    },
    {
        "rating": "negative",
        "up": { "ru": "Абрахам ВХ", "en": "Abraham VH" },
        "review": { "ru": "Спойлер: главный «герой» — вампир. Наверное, именно поэтому этот фильм высосал из меня все жизненные силы.", "en": "Spoiler: the main 'hero' is a vampire. Maybe that's why this film sucked the life out of me." }
    }
]

// Колода с названием фильмов
const namesMovies = [
    {
        "up": { "ru": "ярости", "en": "of fury" },
        "down": { "ru": "кулак", "en": "fist" }
    },
    {
        "up": { "ru": "в лесу", "en": "in the woods" },
        "down": { "ru": "хижина", "en": "cabin" }
    },
    {
        "up": { "ru": "гробниц", "en": "of tombs" },
        "down": { "ru": "расхитительница", "en": "raider" }
    },
    {
        "up": { "ru": "Мадагаскара", "en": "of Madagascar" },
        "down": { "ru": "пингвины", "en": "penguins" }
    },
    {
        "up": { "ru": "рока", "en": "of rock" },
        "down": { "ru": "школа", "en": "school" }
    },
    {
        "up": { "ru": "с бездной", "en": "with the abyss" },
        "down": { "ru": "столкновение", "en": "collision" }
    },
    {
        "up": { "ru": "колец", "en": "of rings" },
        "down": { "ru": "властелин", "en": "lord" }
    },
    {
        "up": { "ru": "в будущее", "en": "to the future" },
        "down": { "ru": "назад", "en": "back" }
    },
    {
        "up": { "ru": "спустя", "en": "later" },
        "down": { "ru": "28 дней", "en": "28 days" }
    },
    {
        "up": { "ru": "и чудовище", "en": "and the beast" },
        "down": { "ru": "красавица", "en": "beauty" }
    },
    {
        "up": { "ru": "невинности", "en": "of innocence" },
        "down": { "ru": "эпоха", "en": "age" }
    },
    {
        "up": { "ru": "мух", "en": "of flies" },
        "down": { "ru": "повелитель", "en": "lord" }
    },
    {
        "up": { "ru": "игры", "en": "of games" },
        "down": { "ru": "правила", "en": "rules" }
    },
    {
        "up": { "ru": "чистого разума", "en": "of pure mind" },
        "down": { "ru": "вечное сияние", "en": "eternal sunshine" }
    },
    {
        "up": { "ru": "Борна", "en": "of Bourne" },
        "down": { "ru": "идентификация", "en": "identity" }
    },
    {
        "up": { "ru": "и шоколадная фабрика", "en": "and the chocolate factory" },
        "down": { "ru": "Чарли", "en": "Charlie" }
    },
    {
        "up": { "ru": "серого", "en": "of grey" },
        "down": { "ru": "пятьдесят оттенков", "en": "fifty shades" }
    },
    {
        "up": { "ru": "через северо-запад", "en": "via the northwest" },
        "down": { "ru": "к северу", "en": "to the north" }
    },
    {
        "up": { "ru": "воды", "en": "of water" },
        "down": { "ru": "форма", "en": "shape" }
    },
    {
        "up": { "ru": "Вероники", "en": "of Veronica" },
        "down": { "ru": "двойная жизнь", "en": "double life" }
    },
    {
        "up": { "ru": "на улице Вязов", "en": "on Elm Street" },
        "down": { "ru": "кошмар", "en": "nightmare" }
    },
    {
        "up": { "ru": "2001 года", "en": "of 2001" },
        "down": { "ru": "космическая Одиссея", "en": "A Space Odyssey" }
    },
    {
        "up": { "ru": "в маленьком Китае", "en": "in Little China" },
        "down": { "ru": "большой переполох", "en": "big trouble" }
    },
    {
        "up": { "ru": "кондора", "en": "of the condor" },
        "down": { "ru": "три дня", "en": "three days" }
    },
    {
        "up": { "ru": "зла", "en": "of evil" },
        "down": { "ru": "обитель", "en": "the abode" }
    },
    {
        "up": { "ru": "невесты", "en": "of the bride" },
        "down": { "ru": "отец", "en": "father" }
    },
    {
        "up": { "ru": "славы", "en": "of glory" },
        "down": { "ru": "тропы", "en": "the paths" }
    },
    {
        "up": { "ru": "через реку Квай", "en": "River Kwai" },
        "down": { "ru": "мост", "en": "bridge" }
    },
    {
        "up": { "ru": "домашних животных", "en": "pets" },
        "down": { "ru": "тайная жизнь", "en": "secret life" }
    },
    {
        "up": { "ru": "должен умереть", "en": "must die" },
        "down": { "ru": "Ромео", "en": "Romeo" }
    },
    {
        "up": { "ru": "самоубийц", "en": "of suicides" },
        "down": { "ru": "отряд", "en": "squad" }
    },
    {
        "up": { "ru": "с Уолл-стрит", "en": "from Wall Street" },
        "down": { "ru": "волк", "en": "wolf" }
    },
    {
        "up": { "ru": "Оушена", "en": "of Ocean" },
        "down": { "ru": "одиннадцать друзей", "en": "eleven friends" }
    },
    {
        "up": { "ru": "Малибу", "en": "of Malibu" },
        "down": { "ru": "спасатели", "en": "lifeguards" }
    },
    {
        "up": { "ru": "пса", "en": "of the dog" },
        "down": { "ru": "власть", "en": "power" }
    },
    {
        "up": { "ru": "у озера", "en": "by the lake" },
        "down": { "ru": "дом", "en": "home" }
    },
    {
        "up": { "ru": "дождя", "en": "of rain" },
        "down": { "ru": "человек", "en": "man" }
    },
    {
        "up": { "ru": "вселенной", "en": "of the universe" },
        "down": { "ru": "властелины", "en": "lords" }
    },
    {
        "up": { "ru": "со всех концов света", "en": "from all corners of the world" },
        "down": { "ru": "новости", "en": "news" }
    },
    {
        "up": { "ru": "ужасов", "en": "of horrors" },
        "down": { "ru": "магазинчик", "en": "shop" }
    },
    {
        "up": { "ru": "по обмену", "en": "by exchange" },
        "down": { "ru": "отпуск", "en": "vacation" }
    },
    {
        "up": { "ru": "музыки", "en": "of music" },
        "down": { "ru": "звуки", "en": "sounds" }
    },
    {
        "up": { "ru": "по мечте", "en": "by dream" },
        "down": { "ru": "Реквием", "en": "Requiem" }
    },
    {
        "up": { "ru": "и семь гномов", "en": "and the seven dwarfs" },
        "down": { "ru": "Белоснежка", "en": "Snow White" }
    },
    {
        "up": { "ru": "живых мертвецов", "en": "of the living dead" },
        "down": { "ru": "ночь", "en": "night" }
    },
    {
        "up": { "ru": "лета", "en": "of summer" },
        "down": { "ru": "500 дней", "en": "500 days" }
    },
    {
        "up": { "ru": "галактики", "en": "of the galaxy" },
        "down": { "ru": "стражи", "en": "guardians" }
    },
    {
        "up": { "ru": "на свете", "en": "in the world" },
        "down": { "ru": "худший человек", "en": "worst person" }
    },
    {
        "up": { "ru": "строптивого", "en": "of the stubborn" },
        "down": { "ru": "укрощение", "en": "taming" }
    },
    {
        "up": { "ru": "назначения", "en": "of destination" },
        "down": { "ru": "пункт", "en": "point" }
    },
    {
        "up": { "ru": "под дождём", "en": "in the rain" },
        "down": { "ru": "поющие", "en": "singing" }
    },
    {
        "up": { "ru": "вампиров", "en": "of vampires" },
        "down": { "ru": "академия", "en": "academy" }
    },
    {
        "up": { "ru": "из трущоб", "en": "from the slums" },
        "down": { "ru": "миллионер", "en": "millionaire" }
    },
    {
        "up": { "ru": "обмана", "en": "of deception" },
        "down": { "ru": "иллюзия", "en": "illusion" }
    },
    {
        "up": { "ru": "девочки-подростка", "en": "of the teenage girl" },
        "down": { "ru": "дневник", "en": "diary" }
    },
    {
        "up": { "ru": "у ворот", "en": "at the gates" },
        "down": { "ru": "враг", "en": "enemy" }
    },
    {
        "up": { "ru": "по-американски", "en": "American style" },
        "down": { "ru": "красота", "en": "beauty" }
    },
    {
        "up": { "ru": "Ленд", "en": "Land" },
        "down": { "ru": "Ла-ла", "en": "La La" }
    },
    {
        "up": { "ru": "вишни", "en": "of cherries" },
        "down": { "ru": "вкус", "en": "taste" }
    },
    {
        "up": { "ru": "короля Артура", "en": "of King Arthur" },
        "down": { "ru": "меч", "en": "sword" }
    },
    {
        "up": { "ru": "моря", "en": "of the sea" },
        "down": { "ru": "песнь", "en": "song" }
    },
    {
        "up": { "ru": "бабочки", "en": "of butterflies" },
        "down": { "ru": "эффект", "en": "effect" }
    },
    {
        "up": { "ru": "покупателей", "en": "of shoppers" },
        "down": { "ru": "даллаский клуб", "en": "Dallas club" }
    },
    {
        "up": { "ru": "и голуби", "en": "and pigeons" },
        "down": { "ru": "любовь", "en": "love" }
    },
    {
        "up": { "ru": "в деталях", "en": "in details" },
        "down": { "ru": "дьявол", "en": "devil" }
    },
    {
        "up": { "ru": "Франкенштейна", "en": "of Frankenstein" },
        "down": { "ru": "невеста", "en": "bride" }
    },
    {
        "up": { "ru": "в сапогах", "en": "in boots" },
        "down": { "ru": "кот", "en": "cat" }
    },
    {
        "up": { "ru": "хаоса", "en": "of chaos" },
        "down": { "ru": "поступь", "en": "walk" }
    },
    {
        "up": { "ru": "ягнят", "en": "of lambs" },
        "down": { "ru": "молчание", "en": "silence" }
    },
    {
        "up": { "ru": "государства", "en": "of the state" },
        "down": { "ru": "глава", "en": "chapter" }
    },
    {
        "up": { "ru": "из-за иного мира", "en": "from another world" },
        "down": { "ru": "нечто", "en": "thing" }
    },
    {
        "up": { "ru": "нью-йорка", "en": "of New York" },
        "down": { "ru": "банды", "en": "gangs" }
    },
    {
        "up": { "ru": "со стволами", "en": "with barrels" },
        "down": { "ru": "парни", "en": "guys" }
    },
    {
        "up": { "ru": "навсегда", "en": "forever" },
        "down": { "ru": "друзья", "en": "friends" }
    },
    {
        "up": { "ru": "в темноте", "en": "in the dark" },
        "down": { "ru": "танцующая", "en": "dancing" }
    },
    {
        "up": { "ru": "из курятника", "en": "from the henhouse" },
        "down": { "ru": "побег", "en": "escape" }
    },
    {
        "up": { "ru": "тьмы", "en": "of darkness" },
        "down": { "ru": "армия", "en": "army" }
    },
    {
        "up": { "ru": "тура", "en": "of the tour" },
        "down": { "ru": "конец", "en": "end" }
    },
    {
        "up": { "ru": "пустыни", "en": "of the desert" },
        "down": { "ru": "белое солнце", "en": "white sun" }
    },
    {
        "up": { "ru": "на драйве", "en": "on the drive" },
        "down": { "ru": "малыш", "en": "baby" }
    },
    {
        "up": { "ru": "моей ненависти", "en": "of my hatred" },
        "down": { "ru": "10 причин", "en": "10 reasons" }
    },
    {
        "up": { "ru": "по лезвию", "en": "on the blade" },
        "down": { "ru": "бегущий", "en": "runner" }
    },
    {
        "up": { "ru": "Карибского моря", "en": "of the Caribbean Sea" },
        "down": { "ru": "пираты", "en": "pirates" }
    },
    {
        "up": { "ru": "без перемен", "en": "without change" },
        "down": { "ru": "на западном фронте", "en": "on the Western Front" }
    },
    {
        "up": { "ru": "во двор", "en": "to the courtyard" },
        "down": { "ru": "окно", "en": "window" }
    },
    {
        "up": { "ru": "перезагрузка", "en": "reboot" },
        "down": { "ru": "Матрица", "en": "Matrix" }
    },
    {
        "up": { "ru": "обезьян", "en": "of apes" },
        "down": { "ru": "планета", "en": "planet" }
    },
    {
        "up": { "ru": "с татуировкой дракона", "en": "with a dragon tattoo" },
        "down": { "ru": "девушка", "en": "girl" }
    },
    {
        "up": { "ru": "полной луны", "en": "of the full moon" },
        "down": { "ru": "королевство", "en": "kingdom" }
    },
    {
        "up": { "ru": "мёртвых поэтов", "en": "of dead poets" },
        "down": { "ru": "общество", "en": "society" }
    },
    {
        "up": { "ru": "большого города", "en": "of the big city" },
        "down": { "ru": "огни", "en": "lights" }
    },
    {
        "up": { "ru": "сьерра-мадре", "en": "Sierra Madre" },
        "down": { "ru": "сокровища", "en": "treasure" }
    },
    {
        "up": { "ru": "финал", "en": "final" },
        "down": { "ru": "Мстители", "en": "Avengers" }
    },
    {
        "up": { "ru": "доставки", "en": "of delivery" },
        "down": { "ru": "ведьмина служба", "en": "witch's service" }
    },
    {
        "up": { "ru": "лёгкого поведения", "en": "of easy behavior" },
        "down": { "ru": "отличница", "en": "honors student" }
    },
    {
        "up": { "ru": "в мехах", "en": "in furs" },
        "down": { "ru": "Венера", "en": "Venus" }
    },
    {
        "up": { "ru": "сурка", "en": "of the groundhog" },
        "down": { "ru": "день", "en": "day" }
    },
    {
        "up": { "ru": "Юрского периода", "en": "of Jurassic period" },
        "down": { "ru": "парк", "en": "park" }
    },
    {
        "up": { "ru": "третьей степени", "en": "of the third degree" },
        "down": { "ru": "близкие контакты", "en": "close encounters" }
    },
    {
        "up": { "ru": "против Конга", "en": "against Kong" },
        "down": { "ru": "Годзилла", "en": "Godzilla" }
    },
    {
        "up": { "ru": "перевода", "en": "of translation" },
        "down": { "ru": "трудности", "en": "difficulties" }
    },
    {
        "up": { "ru": "других", "en": "of others" },
        "down": { "ru": "жизнь", "en": "life" }
    },
    {
        "up": { "ru": "оперы", "en": "of the opera" },
        "down": { "ru": "призрак", "en": "phantom" }
    },
    {
        "up": { "ru": "в законе", "en": "in the law" },
        "down": { "ru": "блондинка", "en": "blonde" }
    },
    {
        "up": { "ru": "земли", "en": "of the earth" },
        "down": { "ru": "дрожь", "en": "tremors" }
    },
    {
        "up": { "ru": "печали", "en": "of sorrow" },
        "down": { "ru": "треугольник", "en": "triangle" }
    },
    {
        "up": { "ru": "перед Рождеством", "en": "before Christmas" },
        "down": { "ru": "кошмар", "en": "nightmare" }
    },
    {
        "up": { "ru": "на убийство", "en": "for murder" },
        "down": { "ru": "лицензия", "en": "license" }
    },
    {
        "up": { "ru": "в Лас-Вегасе", "en": "in Las Vegas" },
        "down": { "ru": "страх и ненависть", "en": "fear and loathing" }
    },
    {
        "up": { "ru": "в чёрном", "en": "in black" },
        "down": { "ru": "люди", "en": "men" }
    },
    {
        "up": { "ru": "и сигареты", "en": "and cigarettes" },
        "down": { "ru": "кофе", "en": "coffee" }
    },
    {
        "up": { "ru": "в доспехах", "en": "in armor" },
        "down": { "ru": "призрак", "en": "ghost" }
    },
    {
        "up": { "ru": "времени", "en": "of time" },
        "down": { "ru": "машина", "en": "machine" }
    },
    {
        "up": { "ru": "лжи", "en": "of lies" },
        "down": { "ru": "совокупность", "en": "network" }
    },
    {
        "up": { "ru": "удачи", "en": "of luck" },
        "down": { "ru": "джентльмены", "en": "gentlemen" }
    },
    {
        "up": { "ru": "утраченного ковчега", "en": "of the lost ark" },
        "down": { "ru": "в поисках", "en": "in search of" }
    },
    {
        "up": { "ru": "в никуда", "en": "to nowhere" },
        "down": { "ru": "шоссе", "en": "highway" }
    },
    {
        "up": { "ru": "справедливости", "en": "of justice" },
        "down": { "ru": "лига", "en": "league" }
    },
    {
        "up": { "ru": "будущего", "en": "of the future" },
        "down": { "ru": "грани", "en": "edges" }
    },
    {
        "up": { "ru": "из бундока", "en": "from the boondocks" },
        "down": { "ru": "святые", "en": "saints" }
    },
    {
        "up": { "ru": "к центру земли", "en": "to the center of the Earth" },
        "down": { "ru": "путешествие", "en": "journey" }
    },
    {
        "up": { "ru": "против всех", "en": "against all" },
        "down": { "ru": "Скотт Пилигрим", "en": "Scott Pilgrim" }
    },
    {
        "up": { "ru": "фавна", "en": "faun" },
        "down": { "ru": "лабиринт", "en": "labyrinth" }
    },
    {
        "up": { "ru": "и мир", "en": "and peace" },
        "down": { "ru": "война", "en": "war" }
    },
    {
        "up": { "ru": "шпионов", "en": "of spies" },
        "down": { "ru": "дети", "en": "children" }
    },
    {
        "up": { "ru": "в Венеции", "en": "in Venice" },
        "down": { "ru": "смерть", "en": "death" }
    },
    {
        "up": { "ru": "кобры", "en": "of cobras" },
        "down": { "ru": "бросок", "en": "throw" }
    },
    {
        "up": { "ru": "проклятых", "en": "of the damned" },
        "down": { "ru": "остров", "en": "island" }
    },
    {
        "up": { "ru": "рабства", "en": "of slavery" },
        "down": { "ru": "12 лет", "en": "12 years" }
    },
    {
        "up": { "ru": "в Париже", "en": "in Paris" },
        "down": { "ru": "полночь", "en": "midnight" }
    },
    {
        "up": { "ru": "и предубеждение", "en": "and prejudice" },
        "down": { "ru": "гордость", "en": "pride" }
    },
    {
        "up": { "ru": "у Тиффани", "en": "at Tiffany's" },
        "down": { "ru": "завтрак", "en": "breakfast" }
    },
    {
        "up": { "ru": "без причины", "en": "without cause" },
        "down": { "ru": "бунтарь", "en": "rebel" }
    },
    {
        "up": { "ru": "желания", "en": "of desire" },
        "down": { "ru": "этот смутный объект", "en": "that obscure object" }
    },
    {
        "up": { "ru": "в полосатой пижаме", "en": "in striped pajamas" },
        "down": { "ru": "мальчик", "en": "boy" }
    },
    {
        "up": { "ru": "весны", "en": "of spring" },
        "down": { "ru": "семнадцать мгновений", "en": "seventeen moments" }
    },
    {
        "up": { "ru": "пули", "en": "of bullets" },
        "down": { "ru": "быстрее", "en": "faster" }
    },
    {
        "up": { "ru": "игрушек", "en": "of toys" },
        "down": { "ru": "история", "en": "story" }
    },
    {
        "up": { "ru": "на границе Эббинга, Миссури", "en": "in Ebbing, Missouri" },
        "down": { "ru": "три билборда", "en": "three billboards" }
    },
    {
        "up": { "ru": "и доктор Ватсон", "en": "and Dr. Watson" },
        "down": { "ru": "Шерлок Холмс", "en": "Sherlock Holmes" }
    },
    {
        "up": { "ru": "и одни похороны", "en": "and a funeral" },
        "down": { "ru": "четыре свадьбы", "en": "four weddings" }
    },
    {
        "up": { "ru": "женщины", "en": "of women" },
        "down": { "ru": "запах", "en": "scent" }
    },
    {
        "up": { "ru": "сегодня", "en": "today" },
        "down": { "ru": "апокалипсис", "en": "apocalypse" }
    },
    {
        "up": { "ru": "дракона", "en": "of the dragon" },
        "down": { "ru": "путь", "en": "way" }
    },
    {
        "up": { "ru": "по имени Шон", "en": "named Shaun" },
        "down": { "ru": "зомби", "en": "zombie" }
    },
    {
        "up": { "ru": "милосердия", "en": "of mercy" },
        "down": { "ru": "квант", "en": "quantum" }
    },
    {
        "up": { "ru": "короля", "en": "of the king" },
        "down": { "ru": "возвращение", "en": "return" }
    },
    {
        "up": { "ru": "Каира", "en": "of Cairo" },
        "down": { "ru": "пурпурная роза", "en": "purple rose" }
    },
    {
        "up": { "ru": "с грязными лицами", "en": "with dirty faces" },
        "down": { "ru": "ангелы", "en": "angels" }
    },
    {
        "up": { "ru": "страны Оз", "en": "of Oz" },
        "down": { "ru": "волшебник", "en": "wizard" }
    },
    {
        "up": { "ru": "электроника", "en": "of electronics" },
        "down": { "ru": "приключения", "en": "adventures" }
    },
    {
        "up": { "ru": "леди Чаттерлей", "en": "Lady Chatterley" },
        "down": { "ru": "любовник", "en": "lover" }
    },
    {
        "up": { "ru": "с вампиром", "en": "with the vampire" },
        "down": { "ru": "интервью", "en": "interview" }
    },
    {
        "up": { "ru": "но это нормально", "en": "but that's okay" },
        "down": { "ru": "я киборг", "en": "I'm a cyborg" }
    },
    {
        "up": { "ru": "с кричащим мозгом", "en": "with a screaming brain" },
        "down": { "ru": "человек", "en": "man" }
    },
    {
        "up": { "ru": "только девушки", "en": "only girls" },
        "down": { "ru": "в джазе", "en": "in jazz" }
    },
    {
        "up": { "ru": "помидоров-убийц", "en": "of killer tomatoes" },
        "down": { "ru": "нападение", "en": "attack" }
    },
    {
        "up": { "ru": "из глубокого космоса", "en": "from deep space" },
        "down": { "ru": "геи-ниггеры", "en": "gayniggers" }
    },
    {
        "up": { "ru": "и лето", "en": "and summer" },
        "down": { "ru": "Дед Мороз", "en": "Santa Claus" }
    },
    {
        "up": { "ru": "попивая сок у себя в квартале", "en": "drinking juice in the hood" },
        "down": { "ru": "не грози Южному централу", "en": "Don't Be a Menace to South Central" }
    },
    {
        "up": { "ru": "бензоколонки", "en": "of gas stations" },
        "down": { "ru": "Королева", "en": "Queen" }
    },
    {
        "up": { "ru": "чистого разума", "en": "of spotless mind" },
        "down": { "ru": "вечное сияние", "en": "eternal sunshine" }
    }
];

// Звуки игры
const clickSound = new Audio('audio/click.mp3'); // Звук клика
// Ссылки на элементы для ускорения работы с DOM
const buttons = document.querySelectorAll(".button");
const popUpMenu = document.getElementById("popUpMenu");

// Игровые массивы
let shuffleMoviesDeck = []; // Перемешенные индексы карт с фильмами
let shufflePosReviewsDeck = []; // Перемешенные индексы карт с позитивными отзывами
let shuffleNegetReviewsDeck = [];// Перемешенные индексы карт с  негативными отзывами

// Игра и управление ходом
let languages = "ru";
let round = 0; // Текущий раунд игры
let players = null;

// Статусы и условаия игры
let coinPoint = 0;
let selectedPoints = 0;
let errorCount = 0;
let lastButtonClicked = null;
let requiredPoints = null;



// Функция для перемешивания индексов карт
function shuffleCards(array, shaffleArray) {
    shaffleArray.length = 0; // Очищаем перемешанный массив
    for (let i = 0; i < array.length; i++) {
        shaffleArray.push(i); // Заполняем массив индексами
    }
    simpleShuffle(shaffleArray);
    return shaffleArray;
}

// Функция Фишера-Йетса с многократным перемешиванием
function simpleShuffle(array) {
    // Генерируем случайное число от 7 до 22 для количества перемешиваний
    const times = ultraRandom(7, 22);

    // Запускаем алгоритм Фишера-Йетса несколько раз
    for (let t = 0; t < times; t++) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    return array;
}

// Функция для генерации случайного числа с учётом времени
function ultraRandom(min, max) {
    const now = Date.now();
    const timeBasedRandom = (now % 1000) / 1000;
    const randomValue = (Math.random() + Math.random() * timeBasedRandom - Math.random() * timeBasedRandom);

    // Гарантируем, что результат находится в пределах min и max
    return Math.floor((Math.abs(randomValue) % 1) * (max - min + 1)) + min;
}

// Функция для отображения случайных карт с фильмами
function openCards(selector, movies, shuffledIndexes, up, down) {
    const cards = document.querySelectorAll(selector);
    console.log(cards);

    const start = round * 10; // Начало выборки
    const end = start + 10;          // Конец выборки (следующие 8 карт)

    shuffledIndexes.slice(start, end).forEach((index, i) => {
        if (i < cards.length) {
            const movie = movies[index];
            const lang = languages === "ru" ? "ru" : "en";
            cards[i].querySelector(up).innerHTML = movie.up[lang];
            cards[i].querySelector(down).innerHTML = movie.down[lang];
        }
    });
}

function openAllCards() {
    // Вызовы функций с исправленными параметрами
    openCards(".card", namesMovies, shuffleMoviesDeck, '.textUp', '.textDown');
    openCards(".positive", reviews.filter(review => review.rating === "positive"), shufflePosReviewsDeck, '.name', '.text-review');
    openCards(".negative", reviews.filter(review => review.rating === "negative"), shuffleNegetReviewsDeck, '.name', '.text-review');
}

// Функция для воспроизведения звука
function playSound(sound) {
    // Перематываем аудио на начало (если требуется повторное воспроизведение)
    sound.currentTime = 0;
    // Воспроизводим звук
    sound.play();
}

function checkResult(coinPoint, players) {
    const playerRanges = {
        "2 players": [15, 21, 26, 36, 40],
        "3 players": [17, 22, 27, 37, 40],
        "4 players": [16, 21, 26, 36, 40],
        "5 players": [15, 20, 25, 35, 40],
        "6 players": [14, 18, 23, 34, 40],
        "7 players": [13, 17, 22, 33, 40]
    };

    const results = [
        "Кассовый провал!",
        "Кино на один вечер!",
        "Достойный фильм!",
        "Блокбастер!",
        "Лауреат 'Оскар'!"
    ];

    // Получаем диапазоны для указанного количества игроков
    const ranges = playerRanges[players];
    const starCount = [1, 2, 3, 4, 5]; // Количество звёзд для каждого результата

    // Определяем результат
    let finalResult = results[0]; // По умолчанию "Кассовый провал!"
    let stars = starCount[0]; // По умолчанию 1 звезда

    for (let i = 0; i < ranges.length; i++) {
        if (coinPoint <= ranges[i]) {
            finalResult = results[i];
            stars = starCount[i];
            break;
        }
    }

    // Отображаем результат
    console.log(finalResult);

    // Генерируем звёзды
    const starsContainer = document.querySelector('.stars-container');
    starsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых звёзд

    for (let i = 0; i < stars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        starsContainer.appendChild(star);
    }

    // Выводим результат на страницу
    document.querySelector('#result').textContent = `Это `;
    const zElement = document.createElement('z');
    zElement.textContent = finalResult;
    document.querySelector('#result').appendChild(zElement); document.querySelector('#point').textContent = `${coinPoint}`;
}

function finish() {
    const finish = document.querySelector(".finish");

    // Вызов функции
    checkResult(coinPoint, players);

    finish.classList.remove("hide");
}

function start() {
    playSound(clickSound);
    // Получаем элемент select
    const playerSelect = document.querySelector("#playerCount");
    const menu = document.querySelector(".menu");
    const game = document.querySelector(".game");

    // Получаем выбранное значение
    players = playerSelect.options[playerSelect.selectedIndex].value;
    if (players === "2 players") {
        requiredPoints = 6; // Для двух игроков
    } else {
        requiredPoints = 7; // Для одного игрока
    }

    console.log(players);
    game.classList.remove("hide");
    menu.classList.add("hide");
}

function handleCardClick(button) {
    playSound(clickSound);

    // Сохраняем последнее нажатие
    lastButtonClicked = button;

    if ((selectedPoints >= requiredPoints -1 && button.classList.contains("no"))|| errorCount >= 2 - 1) {
        if (button.classList.contains("img1")) {
            selectedPoints--;
        } else if (button.classList.contains("img2")) {
            errorCount--;
        }

        lastButtonClicked.className = "button movie no";

        openPopUp();
    } else {
        if (button.classList.contains("no")) {
            button.className = "button movie img1";
            selectedPoints++;
        } else if (button.classList.contains("img1")) {
            button.className = "button movie img2";
            selectedPoints--;
            errorCount++;
        } else if (button.classList.contains("img2")) {
            button.className = "button movie no";
            errorCount--;
        }
    }
    console.log("requiredPoints", requiredPoints, "selectedPoints", selectedPoints, "errorCount", errorCount, "lastButtonClicked", lastButtonClicked)
}

function chuse(img) {
    lastButtonClicked.className = "button movie";
    lastButtonClicked.classList.add(img);

    if (img === 'img1') {
        selectedPoints++;
    } else {
        errorCount++; // Увеличить количество ошибок
    }

    // Проверка выполнения условий
    if (selectedPoints >= requiredPoints || errorCount >= 2) {
        openNextRoundMenu(); // Вызов функции для открытия следующего раунда
        document.querySelector(".popup-next").classList.remove("hide");
    }
    closePopUp(); // Закрытие popup
}

// Функция для плавного отображения элемента
function openNextRoundMenu() {
    const popup = document.querySelector(".popup.round");
    let pointText = null;

    popup.style.opacity = 0; // Устанавливаем начальную непрозрачность
    popup.classList.remove("hide"); // Убираем класс hide для отображения popup

    if (round === 4) {
        document.getElementById("next-round").textContent = `Конец игры`;
        document.querySelector(".open-finish").textContent = `Результат`;
    } else {
        round++;
        if (selectedPoints === requiredPoints && errorCount <= 0) {
            selectedPoints === 8;
        }
        coinPoint += selectedPoints;
    }
    document.getElementById("next-round").textContent = `${round} раунд`;

    if (selectedPoints >= 6 || selectedPoints <= 0) {
        pointText = " очков";
    } else if (selectedPoints === 1) {
        pointText = " очко";
    } else {
        pointText = " очка";
    }

    document.getElementById("second").textContent = `Заработано ${selectedPoints} ${pointText}.`;

    // Плавное увеличение непрозрачности до 1
    let opacity = 0;
    const fadeIn = setInterval(() => {

        if (opacity < 1) {
            opacity += 0.01;
            popup.style.opacity = opacity;
        } else {
            clearInterval(fadeIn); // Остановка таймера, когда непрозрачность достигнет 1
        }
    }, 10); // Интервал плавного изменения
}

function openPopUp() {
    if (selectedPoints >= requiredPoints - 1 || errorCount >= 2 - 1) {
        document.querySelector(".popup-menu").classList.remove("hide");
    }
}

function goToNextRound() {
    playSound(clickSound);

    if (round === 4) {
        finish();
        document.querySelector(".finish").classList.remove("hide");
    }
    resetButtons();


    document.querySelector(".popup-next").classList.add("hide");
    document.querySelector(".popup.round").classList.add("hide");
    console.log("Победных чков: ", coinPoint, "Раунд номер: ", round);
}

function closePopUp() {
    playSound(clickSound);
    document.querySelector(".popup-menu").classList.add("hide");
    console.log("requiredPoints", requiredPoints, "selectedPoints", selectedPoints, "errorCount", errorCount, "lastButtonClicked", lastButtonClicked)
}

function resetButtons() {
    const allButtons = document.querySelectorAll(".movie");
    allButtons.forEach(button => button.className = "button movie no");
    selectedPoints = 0;
    errorCount = 0;
    lastButtonClicked = null;
    openAllCards();
}

window.onload = function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker зарегистрирован с областью:', registration.scope);
            })
            .catch(error => {
                console.error('Ошибка при регистрации Service Worker:', error);
            });
    }
    
    shuffleCards(namesMovies, shuffleMoviesDeck);
    shuffleCards(reviews.filter(review => review.rating === "positive"), shufflePosReviewsDeck);
    shuffleCards(reviews.filter(review => review.rating === "negative"), shuffleNegetReviewsDeck);

    openAllCards();

    // Автоматически добавляем обработчики на все элементы с классом "movie"
    document.querySelectorAll('.movie').forEach(button => {
        button.classList.add('no'); // Задаём начальное состояние "не выбрана"
        button.addEventListener('click', () => handleCardClick(button));
    });

    const load = document.querySelector('.overlay.load');
    load.classList.add('hide');
}
