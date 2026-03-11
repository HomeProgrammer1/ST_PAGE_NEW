/* ========================================= */
/* 1. MULTI-LANGUAGE SYSTEM (EN / PL / UA)   */
/* ========================================= */

const translations = {
    en: {
        hero_title: "Not a Quiz. Not an Escape Room. An Investigation.",
        hero_subtitle: "A detective simulation that runs inside your office. Real physical evidence. A live police database. Your team does the rest.",
        hero_teaser: "A body found in the CEO's office. Three suspects. Two hours. Can your team close the case before the budget runs out?",
        hero_tribal: "For teams that take their work seriously — and know how to have fun doing it.",
        hero_btn: "See How It Works",

        nav_home: "Home",
        nav_features: "Features",
        nav_how_it_works: "How It Works",
        nav_gallery: "Gallery",
        nav_pricing: "Pricing",
        nav_reviews: "Reviews",
        nav_contact: "Contact",

        loss_aversion_text: "Most corporate team events follow the same script: everyone shows up, no one's excited, and by Monday it's forgotten. Trivia nights reward whoever memorizes the most. Escape rooms max out at 8 people. Training sessions — don't even start. You're not looking for entertainment. You're looking for something that actually changes how your team works together.",

        immersion_title: "Game as a Growth Tool",
        imm_1_title: "Critical Thinking",
        imm_1_text: "Forget boring lectures. In this detective simulation, your team faces unstructured data from real case files. The goal is to filter out the noise, verify sources, and build a causal chain based on facts to identify the suspect.",
        imm_2_title: "Digital Adaptability",
        imm_2_text: "The investigation demands speed. Our web interface turns your office into a police HQ, simulating high pressure where every minute counts. Participants learn to test hypotheses instantly and make data-driven decisions.",
        imm_3_title: "Team Synergy",
        imm_3_text: "To crack the case, a loud voice isn't enough. We create conditions where the team must move from chaotic debate to constructive dialogue. Success requires combining cold logic with creative intuition to solve the mystery.",

        features_title: "Why It's Effective",
        feat_2_title: "Zero Headache Policy",
        feat_2_text: "You send us the address. We show up 40 minutes early with everything: decor, sound, props, 4G router, and two hosts. You just put your team in the room.",
        feat_1_title: "Training, Not Just Play",
        feat_1_text: "VUCA environment simulation. We teach decision-making under pressure.",
        feat_3_title: "Financial Efficiency",
        feat_3_text: "Victory depends on the saved budget and the accuracy of your conclusions, not speed. Every mistake has a price, so quality of decisions matters more than haste.",

        hiw_title: "How It Works",
        hiw_subtitle: "You're running a detective agency. This is your most important case yet.",
        hiw_1_title: "The case lands on your desk",
        hiw_1_text: "Your team receives a physical case file: crime scene photos, interrogation transcripts, lab reports, and a city map. Something happened. Someone did it. The client is paying your agency to find out who — and why.",
        hiw_2_title: "Work the city from your table",
        hiw_2_text: "The web app is your dispatch center. The city is full of addresses: witnesses who saw something, crime scenes that still hold evidence, the morgue, the police station. Click an address to send an investigator there. Every trip costs from your honorarium — that's taxi fare. Some addresses hold critical evidence. Some are dead ends. You won't know until you go.",
        hiw_3_title: "Build your version",
        hiw_3_text: "As information comes in, your team builds a theory. Who did it? What was the motive? What was the weapon? The case ends when you're ready — or when the honorarium runs out. Each team submits their answers.",
        hiw_4_title: "The reveal",
        hiw_4_text: "The host runs a full debrief: here's what actually happened, step by step. Which teams got it right. Who over-investigated. Who nailed it on half the budget.",
        hiw_callout: "Every address costs money. Every wrong lead drains your fee.<br><strong>The winning team isn't the fastest — it's the most precise.</strong>",

        gallery_title: "Gallery",

        stat_1_num: "50+",
        stat_1_label: "Corporate Teams",
        stat_2_num: "100+",
        stat_2_label: "Events Delivered",
        stat_3_label: "Operating Throughout Poland",

        pricing_title: "Choose Your Format",
        price_3_title: "EXECUTIVE VIP",
        price_3_desc: "Employer Branding",
        price_3_per_person: "Includes HR Soft Skills report — turns the event into a development tool",
        price_3_list: "<li>👑 <strong>Everything in PRO +</strong></li><li>📷 Professional Photographer</li><li>📈 HR Report (Soft Skills)</li><li>🏷️ Branded Materials (Logo)</li><li>🎥 Video Report</li>",
        price_3_btn: "Book This Format",

        price_pop_badge: "BESTSELLER",
        price_2_title: "PRO INVESTIGATION",
        price_2_desc: "Training & Atmosphere",
        price_2_per_person: "Full event experience, fully managed",
        price_2_list: "<li>🔥 <strong>Everything in Office +</strong></li><li>📸 Photo Zone & Decor</li><li>🎩 Player Props</li><li>🎁 Prizes</li><li>🎵 Thematic Soundscape</li><li>📊 Debriefing</li>",
        price_2_btn: "Book This Format",

        price_1_title: "OFFICE DETECTIVE",
        price_1_desc: "Smart & Fast",
        price_1_per_person: "From ~90 PLN per person for a team of 20",
        price_1_list: "<li>🕵️ 2 Hosts</li><li>💻 Web Application</li><li>📂 Basic Case Files</li><li>⏱ Duration: 2 - 3h</li>",
        price_btn: "Book Your Investigation",

        urgency_text: "⚡ Popular dates fill 2–3 weeks in advance. We run one event per weekend.",

        reviews_title: "Client Reviews",
        review_1_text: "\"I've organized team events for 6 years. This is the first one where people asked 'when are we doing this again?' before we even finished packing up.\"",
        review_1_name: "Olena, HR Director",
        review_2_text: "\"We found out more about how our team actually operates in 2 hours than in six months of 1-on-1s. Who stays calm, who leads, who needs structure — all of it came out.\"",
        review_2_name: "Andrii, Team Lead",
        partners_title: "Trusted By",

        faq_title: "FAQ",
        faq_q1: "Is it hard to play without experience?",
        faq_a1: "Not at all! The game is designed to be engaging for everyone. Our web app guides you if you hit a dead end.",
        faq_q2: "How are teams formed?",
        faq_a2: "We recommend 5-7 detectives per team (table). If you have a larger group, we turn it into a tournament where teams compete against each other for the best investigation score.",
        faq_q3: "Can we customize the scenario?",
        faq_a3: "We do not rewrite the core storyline, as it is a complex narrative product. However, our case library is extensive. We will select a story that perfectly fits your industry context.",
        faq_q4: "Setup time?",
        faq_a4: "We work like ninjas. We need only 30-40 minutes to set up decor and sound before the game starts.",

        contact_title: "Contact Us",
        contact_desc: "Leave a request, and we will calculate the exact estimate for your team.",
        contact_vat: "📍 Operating throughout Poland. Prices Netto + 23% VAT.",
        form_name: "Your Name",
        form_company: "Company Name",
        form_phone: "Phone / WhatsApp / Telegram",
        form_btn: "Get a Custom Quote",
        copyright: "&copy; 2026 Saint Twins Detective. All rights reserved.",

        modal_title: "Order Request",
        modal_subtitle: "Selected Package:",
        modal_btn: "Submit Request",
        modal_success_title: "Application Received!",
        modal_success_desc: "We will contact you shortly to clarify the details."
    },
    pl: {
        hero_title: "Nie Quiz. Nie Escape Room. Śledztwo.",
        hero_subtitle: "Symulacja detektywistyczna w Twoim biurze. Prawdziwe fizyczne dowody. Baza danych policji na żywo. Twój zespół robi resztę.",
        hero_teaser: "Ciało znalezione w gabinecie CEO. Trzech podejrzanych. Dwie godziny. Czy Twój zespół zamknie sprawę zanim skończy się budżet?",
        hero_tribal: "Dla zespołów, które poważnie traktują pracę — i wiedzą, jak się przy tym bawić.",
        hero_btn: "Jak to działa",

        nav_home: "Główna",
        nav_features: "Zalety",
        nav_how_it_works: "Jak to działa",
        nav_gallery: "Galeria",
        nav_pricing: "Pakiety",
        nav_reviews: "Opinie",
        nav_contact: "Kontakt",

        loss_aversion_text: "Większość firmowych eventów integracyjnych wygląda tak samo: wszyscy przychodzą, nikt się nie ekscytuje, a w poniedziałek nikt już nie pamięta. Quizy nagradzają tych, którzy dużo zapamiętują. Escape roomy mieszczą max 8 osób. Szkolenia — nie zaczynajmy. Szukasz czegoś, co naprawdę zmienia sposób pracy Twojego zespołu.",

        immersion_title: "Gra jako narzędzie rozwoju",
        imm_1_title: "Myślenie Krytyczne",
        imm_1_text: "Zapomnij o nudnych wykładach. W tej **symulacji detektywistycznej** Twój zespół mierzy się z danymi z akt sprawy. Celem jest odsianie szumu, weryfikacja źródeł i zbudowanie ciągu przyczynowo-skutkowego, by wskazać sprawcę.",
        imm_2_title: "Adaptacyjność Cyfrowa",
        imm_2_text: "Śledztwo wymaga szybkości. Nasz interfejs zamienia biuro w **centrum dowodzenia**, symulując presję, gdzie liczy się każda minuta. Uczestnicy uczą się błyskawicznie testować hipotezy i podejmować decyzje oparte na danych.",
        imm_3_title: "Synergia Zespołu",
        imm_3_text: "Aby **rozwiązać zagadkę**, nie wystarczy krzyczeć. Tworzymy warunki, w których zespół musi przejść do konstruktywnego dialogu. Sukces wymaga połączenia chłodnej logiki z kreatywną intuicją, by zamknąć sprawę.",

        features_title: "Dlaczego to działa",
        feat_2_title: "Polityka Zero Headache",
        feat_2_text: "Podajesz nam adres. Przyjeżdżamy 40 minut wcześniej z wszystkim: dekoracjami, nagłośnieniem, rekwizytami, routerem 4G i dwoma prowadzącymi. Ty tylko wprowadzasz zespół do sali.",
        feat_1_title: "Szkolenie, nie tylko zabawa",
        feat_1_text: "Symulacja warunków niepewności (VUCA). Uczymy podejmowania decyzji pod presją.",
        feat_3_title: "Efektywność Finansowa",
        feat_3_text: "Zwycięstwo zależy nie od szybkości, ale od zaoszczędzonego budżetu i trafności wniosków. Każdy błąd ma swoją cenę, dlatego jakość decyzji jest ważniejsza niż pośpiech.",

        hiw_title: "Jak to działa",
        hiw_subtitle: "Prowadzisz agencję detektywistyczną. To Twoja najważniejsza sprawa.",
        hiw_1_title: "Sprawa trafia na Twoje biurko",
        hiw_1_text: "Twój zespół otrzymuje fizyczne akta: zdjęcia z miejsca zbrodni, protokoły przesłuchań, raporty laboratoryjne i mapę miasta. Coś się stało. Ktoś to zrobił. Klient płaci Twojej agencji za wyjaśnienie kto — i dlaczego.",
        hiw_2_title: "Pracujesz w mieście ze swojego stołu",
        hiw_2_text: "Aplikacja webowa to Twoje centrum dyspozytorskie. Miasto jest pełne adresów: świadkowie, miejsca zbrodni, kostnica, komisariat. Kliknij adres, by wysłać tam śledczego. Każda wizyta kosztuje z Twojego honorarium. Niektóre adresy kryją kluczowe dowody. Inne to ślepe zaułki.",
        hiw_3_title: "Budujesz swoją wersję",
        hiw_3_text: "Gdy napływają informacje, zespół buduje teorię. Kto to zrobił? Jaki motyw? Jakie narzędzie? Sprawa kończy się gdy jesteście gotowi — lub gdy honorarium się skończy. Każdy zespół składa swoje odpowiedzi.",
        hiw_4_title: "Ujawnienie",
        hiw_4_text: "Prowadzący przeprowadza pełny debrief: oto co naprawdę się stało, krok po kroku. Które zespoły miały rację. Kto prowadził za wiele dochodzeń. Kto trafił w sedno przy połowie budżetu.",
        hiw_callout: "Każdy adres kosztuje pieniądze. Każdy fałszywy trop drenuje Twoje honorarium.<br><strong>Zwycięski zespół to nie najszybszy — to najdokładniejszy.</strong>",

        gallery_title: "Galeria",

        stat_1_num: "50+",
        stat_1_label: "Zespołów Korporacyjnych",
        stat_2_num: "100+",
        stat_2_label: "Zrealizowanych Eventów",
        stat_3_label: "Działamy w całej Polsce",

        pricing_title: "Wybierz Format",
        price_3_title: "EXECUTIVE VIP",
        price_3_desc: "Employer Branding",
        price_3_per_person: "Zawiera raport HR Soft Skills — event staje się narzędziem rozwoju",
        price_3_list: "<li>👑 <strong>Wszystko z PRO +</strong></li><li>📷 Profesjonalny Fotograf</li><li>📈 Raport HR (Soft Skills)</li><li>🏷️ Branding materiałów (Logo)</li><li>🎥 Raport Wideo</li>",
        price_3_btn: "Rezerwuj Format",

        price_pop_badge: "BESTSELLER",
        price_2_title: "PRO INVESTIGATION",
        price_2_desc: "Training & Atmosphere",
        price_2_per_person: "Pełne doświadczenie eventowe, w pełni zarządzane",
        price_2_list: "<li>🔥 <strong>Wszystko z Office +</strong></li><li>📸 Strefa Foto i Dekoracje</li><li>🎩 Rekwizyty dla graczy</li><li>🎁 Nagrody</li><li>🎵 Tematyczna oprawa dźwiękowa</li><li>📊 Debriefing</li>",
        price_2_btn: "Rezerwuj Format",

        price_1_title: "OFFICE DETECTIVE",
        price_1_desc: "Smart & Fast",
        price_1_per_person: "Od ~90 PLN na osobę dla zespołu 20 osób",
        price_1_list: "<li>🕵️ 2 Prowadzących</li><li>💻 Aplikacja Webowa</li><li>📂 Podstawowe Materiały</li><li>⏱ Czas: 2 - 3h</li>",
        price_btn: "Zarezerwuj Śledztwo",

        urgency_text: "⚡ Popularne terminy rezerwowane są 2–3 tygodnie wcześniej. Prowadzimy jeden event w weekend.",

        reviews_title: "Opinie Klientów",
        review_1_text: "\"Organizuję eventy firmowe od 6 lat. To pierwszy, po którym ludzie pytali 'kiedy robimy to znowu?' jeszcze przed rozpakowaniem.\"",
        review_1_name: "Olena, HR Director",
        review_2_text: "\"W 2 godziny dowiedzieliśmy się więcej o tym jak naprawdę działa nasz zespół niż przez 6 miesięcy rozmów 1-na-1. Kto zachowuje spokój, kto prowadzi, kto potrzebuje struktury — wszystko wyszło na jaw.\"",
        review_2_name: "Andrii, Team Lead",
        partners_title: "Zaufali Nam",

        faq_title: "FAQ",
        faq_q1: "Czy trudno grać bez doświadczenia?",
        faq_a1: "Wcale nie! Gra jest zaprojektowana tak, by angażować każdego. Aplikacja daje wskazówki, jeśli utkniecie.",
        faq_q2: "Jak dzielimy się na zespoły?",
        faq_a2: "Zalecamy 5-7 detektywów na zespół (stolik). Jeśli grupa jest większa, tworzymy turniej, w którym zespoły rywalizują ze sobą o najlepszy wynik śledztwa.",
        faq_q3: "Czy możemy dostosować scenariusz?",
        faq_a3: "Nie przepisujemy głównej fabuły, ponieważ jest to złożony produkt narracyjny. Jednak nasza biblioteka spraw jest ogromna. Dobierzemy scenariusz, który idealnie pasuje do kontekstu Twojej branży.",
        faq_q4: "Ile czasu na przygotowanie?",
        faq_a4: "Działamy jak ninja. Potrzebujemy tylko 30-40 minut przed grą na rozstawienie dekoracji i dźwięku.",

        contact_title: "Skontaktuj się z nami",
        contact_desc: "Zostaw zgłoszenie, a obliczymy dokładny kosztorys dla Twojego zespołu.",
        contact_vat: "📍 Działamy w całej Polsce. Ceny Netto + 23% VAT.",
        form_name: "Twoje Imię",
        form_company: "Nazwa Firmy",
        form_phone: "Telefon / WhatsApp / Telegram",
        form_btn: "Zapytaj o wycenę",
        copyright: "&copy; 2026 Saint Twins Detective. Wszelkie prawa zastrzeżone.",

        modal_title: "Formularz Zamówienia",
        modal_subtitle: "Wybrany pakiet:",
        modal_btn: "Wyślij Zapytanie",
        modal_success_title: "Zgłoszenie Przyjęte!",
        modal_success_desc: "Skontaktujemy się z Tobą wkrótce w celu ustalenia szczegółów."
    },
    ua: {
        hero_title: "Не квіз. Не квест. Розслідування.",
        hero_subtitle: "Детективна симуляція у вашому офісі. Реальні речові докази. База даних поліції в реальному часі. Ваша команда робить все інше.",
        hero_teaser: "Тіло знайдено в кабінеті CEO. Троє підозрюваних. Дві години. Чи зможе ваша команда закрити справу до того, як скінчиться бюджет?",
        hero_tribal: "Для команд, які серйозно ставляться до роботи — і вміють при цьому отримувати задоволення.",
        hero_btn: "Як це працює",

        nav_home: "Головна",
        nav_features: "Переваги",
        nav_how_it_works: "Як це працює",
        nav_gallery: "Галерея",
        nav_pricing: "Пакети та Ціни",
        nav_reviews: "Відгуки та Клієнти",
        nav_contact: "Контакти",

        loss_aversion_text: "Більшість корпоративних тімбілдингів виглядають однаково: всі прийшли, ніхто не захоплений, а в понеділок вже ніхто не пам'ятає. Квізи нагороджують того, хто більше запам'ятав. Квести вміщають максимум 8 людей. Тренінги — навіть не починаймо. Ви шукаєте не розваги. Ви шукаєте те, що реально змінює те, як ваша команда працює разом.",

        immersion_title: "Гра як інструмент розвитку",
        imm_1_title: "Критичне мислення",
        imm_1_text: "Забудьте про нудні лекції. У цій **детективній симуляції** ваша команда працює з масивом даних з реальних матеріалів справи. Мета — відсіяти шум, перевірити джерела та побудувати логічний ланцюжок, щоб вирахувати злочинця.",
        imm_2_title: "Digital-адаптивність",
        imm_2_text: "Розслідування вимагає швидкості. Наш веб-інтерфейс перетворює офіс на **поліцейський штаб**, створюючи тиск часу. Учасники вчаться миттєво перевіряти гіпотези та приймати рішення на основі отриманих доказів.",
        imm_3_title: "Командна синергія",
        imm_3_text: "Щоб **розкрити справу**, недостатньо гучних суперечок. Ми створюємо умови, де команда мусить перейти до конструктивного діалогу. Успіх вимагає поєднання холодної логіки та креативної інтуїції для розгадки таємниці.",

        features_title: "Чому це ефективно",
        feat_2_title: "Політика Zero Headache",
        feat_2_text: "Ви надаєте нам адресу. Ми приїжджаємо за 40 хвилин до початку з усім: декором, звуком, реквізитом, 4G-роутером та двома ведучими. Вам залишається лише привести команду.",
        feat_1_title: "Тренінг, а не гра",
        feat_1_text: "Симуляція умов невизначеності (VUCA). Вчимо приймати рішення під тиском.",
        feat_3_title: "Фінансова ефективність",
        feat_3_text: "Перемога залежить не від швидкості, а від збереженого бюджету та точності висновків. Кожна помилка має свою ціну, тому якість рішень важливіша за поспіх.",

        hiw_title: "Як це працює",
        hiw_subtitle: "Ви керуєте детективним агентством. Це ваша найважливіша справа.",
        hiw_1_title: "Справа потрапляє на ваш стіл",
        hiw_1_text: "Ваша команда отримує фізичне досьє: фото з місця злочину, протоколи допитів, лабораторні звіти та карту міста. Щось сталося. Хтось це зробив. Клієнт платить вашому агентству, щоб з'ясувати хто — і чому.",
        hiw_2_title: "Опрацьовуйте місто за своїм столом",
        hiw_2_text: "Веб-додаток — ваш диспетчерський центр. Місто повне адрес: свідки, місця злочину, морг, поліцейський відділок. Клікніть на адресу, щоб відправити туди слідчого. Кожна поїздка коштує з вашого гонорару. Деякі адреси містять ключові докази. Деякі — тупики. Ви дізнаєтесь лише коли поїдете.",
        hiw_3_title: "Будуєте свою версію",
        hiw_3_text: "Коли надходить інформація, команда будує теорію. Хто це зробив? Який мотив? Яка зброя? Справа закінчується коли ви готові — або коли вичерпується гонорар. Кожна команда подає свої відповіді.",
        hiw_4_title: "Розв'язка",
        hiw_4_text: "Ведучий проводить повний дебрифінг: ось що насправді сталося, крок за кроком. Які команди вгадали. Хто провів забагато розслідувань. Хто вийшов у ціль при половині бюджету.",
        hiw_callout: "Кожна адреса коштує гроші. Кожна хибна зачіпка спустошує ваш гонорар.<br><strong>Команда-переможець — не найшвидша. Вона найточніша.</strong>",

        gallery_title: "Галерея",

        stat_1_num: "50+",
        stat_1_label: "Корпоративних команд",
        stat_2_num: "100+",
        stat_2_label: "Проведених заходів",
        stat_3_label: "По всій Польщі",

        pricing_title: "Оберіть свій формат",
        price_3_title: "EXECUTIVE VIP",
        price_3_desc: "Employer Branding",
        price_3_per_person: "Включає HR-звіт Soft Skills — захід стає інструментом розвитку",
        price_3_list: "<li>👑 <strong>Все з пакету PRO +</strong></li><li>📷 Професійний фотограф</li><li>📈 HR-звіт (Soft Skills)</li><li>🏷️ Брендування матеріалів (Лого)</li><li>🎥 Відео-звіт</li>",
        price_3_btn: "Обрати формат",

        price_pop_badge: "ХІТ ПРОДАЖУ",
        price_2_title: "PRO INVESTIGATION",
        price_2_desc: "Training & Atmosphere",
        price_2_per_person: "Повний івент-досвід, повністю керований",
        price_2_list: "<li>🔥 <strong>Все з пакету Office +</strong></li><li>📸 Фотозона та декор</li><li>🎩 Реквізит для гравців</li><li>🎁 Призи</li><li>🎵 Тематичний саунд-дизайн</li><li>📊 Дебрифінг</li>",
        price_2_btn: "Обрати формат",

        price_1_title: "OFFICE DETECTIVE",
        price_1_desc: "Smart & Fast",
        price_1_per_person: "Від ~90 PLN на людину для команди з 20 осіб",
        price_1_list: "<li>🕵️ 2 ведучих</li><li>💻 Веб-додаток</li><li>📂 Базові матеріали</li><li>⏱ Тривалість: 2 - 3 години</li>",
        price_btn: "Замовити розслідування",

        urgency_text: "⚡ Популярні дати бронюються за 2–3 тижні. Ми проводимо один захід на вихідних.",

        reviews_title: "Що кажуть клієнти",
        review_1_text: "\"Я організовую корпоративні заходи 6 років. Це перший, після якого люди питали 'коли робимо знову?' ще до кінця збирання.\"",
        review_1_name: "Olena, HR Director",
        review_2_text: "\"За 2 години ми дізналися про те, як реально працює наша команда, більше ніж за 6 місяців розмов 1-на-1. Хто зберігає спокій, хто веде, хто потребує структури — все вийшло назовні.\"",
        review_2_name: "Andrii, Team Lead",
        partners_title: "Нам довіряють",

        faq_title: "Часті запитання",
        faq_q1: "Чи складно грати без досвіду?",
        faq_a1: "Зовсім ні! Гра побудована так, щоб було цікаво всім. Веб-додаток дає підказки, якщо ви зайшли в глухий кут.",
        faq_q2: "Як ми ділимося на команди?",
        faq_a2: "Ми рекомендуємо 5-7 детективів на команду (стіл). Якщо вас більше — ми влаштовуємо турнір, де команди змагаються між собою за найкращий результат розслідування.",
        faq_q3: "Чи можна адаптувати сценарій?",
        faq_a3: "Ми не переписуємо сюжет гри, оскільки це складний сценарний продукт. Проте наша бібліотека справ дуже велика. Ми підберемо історію, яка ідеально резонуватиме з контекстом вашої сфери.",
        faq_q4: "Скільки часу на підготовку?",
        faq_a4: "Нам потрібно всього 30-40 хвилин до початку гри, щоб розставити декор та налаштувати звук.",

        contact_title: "Зв'яжіться з нами",
        contact_desc: "Залиште заявку, і ми розрахуємо точний кошторис для вашої команди.",
        contact_vat: "📍 Працюємо по всій Польщі. Ціни Netto + 23% VAT.",
        form_name: "Ваше ім'я",
        form_company: "Назва компанії",
        form_phone: "Телефон / WhatsApp / Telegram",
        form_btn: "Отримати пропозицію",
        copyright: "&copy; 2026 Saint Twins Detective. Всі права захищені.",

        modal_title: "Оформлення заявки",
        modal_subtitle: "Ви обрали пакет:",
        modal_btn: "Відправити запит",
        modal_success_title: "Ваша заявка прийнята!",
        modal_success_desc: "Ми зв'яжемося з вами найближчим часом для уточнення деталей."
    }
};

/* ========================================= */
/* 2. LOGIC: Language Switcher               */
/* ========================================= */

function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (key.includes('list') || key.includes('text') || key.includes('copyright') || key.includes('desc') || key.includes('callout')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update Buttons State
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

/* ========================================= */
/* 3. LOGIC: Initialization & Interactive    */
/* ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // A. Init Language
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    changeLanguage(savedLang);

    // Trigger Hero Animation
    // Trigger Hero Animation (Re-triggers every time it comes into view)
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroSection.classList.add('animate-active');
                } else {
                    heroSection.classList.remove('animate-active');
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% is visible
        heroObserver.observe(heroSection);
    }

    // B. Mobile Navigation
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuBtn && navOverlay) {
        menuBtn.addEventListener('click', () => navOverlay.classList.add('active'));
    }
    if (closeBtn && navOverlay) {
        closeBtn.addEventListener('click', () => navOverlay.classList.remove('active'));
    }
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navOverlay) navOverlay.classList.remove('active');
        });
    });

    // C. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });

    // D. Scroll Reveal Animation (Re-triggers every time)
    const revealElements = document.querySelectorAll('.reveal-row');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // E. MODAL POPUP (Fixes Freezing Issue)
    const modal = document.getElementById('order-modal');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeModalBtn = document.querySelector('.close-modal');
    const planNameSpan = document.getElementById('selected-plan-name');
    const planInput = document.getElementById('modal-plan-input');

    if (modal) {
        // Open Logic
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const plan = btn.getAttribute('data-plan');
                if (planNameSpan) planNameSpan.textContent = plan;
                if (planInput) planInput.value = plan;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock scroll
            });
        });

        // Close Logic (X button)
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Unlock scroll
            });
        }

        // Close Logic (Click Outside)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Unlock scroll
            }
        });
    }

    // F. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- GALLERY INFINITE SLIDER LOGIC ---
    const slider = document.querySelector('.steps-gallery');
    if (slider) {
        // 1. Duplicate content for infinite loop illusion
        const originalContent = slider.innerHTML;
        slider.innerHTML = originalContent + originalContent + originalContent;

        // 2. Center the scroll view to middle set
        setTimeout(() => {
            const setWidth = slider.scrollWidth / 3;
            slider.scrollLeft = setWidth;
        }, 50);

        // 3. Variables
        let isDown = false;
        let startX;
        let scrollLeft;
        let isHovered = false;
        let autoScrollSpeed = 1;

        // 4. Mouse Events
        slider.addEventListener('mouseenter', () => {
            isHovered = true;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            isHovered = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Touch Events for Mobile Support
        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchend', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        // 5. Infinite Loop Animation
        function infiniteLoop() {
            const setWidth = slider.scrollWidth / 3;

            // Auto-scroll if not interacting
            if (!isDown && !isHovered) {
                slider.scrollLeft += autoScrollSpeed;
            }

            // Seamless Jump Logic
            if (slider.scrollLeft >= setWidth * 2) {
                slider.scrollLeft -= setWidth;
            } else if (slider.scrollLeft <= 0) {
                slider.scrollLeft += setWidth;
            }

            requestAnimationFrame(infiniteLoop);
        }

        // Start the loop
        infiniteLoop();
    }

    // H. Form Submission with Telegram Integration
    const orderModal = document.getElementById('order-modal');
    const modalFormContent = document.getElementById('modal-form-content');
    const modalSuccessContent = document.getElementById('modal-success-content');
    const modalOrderForm = document.getElementById('modal-order-form');
    const footerForm = document.getElementById('orderForm');

    // Telegram Bot Config
    const BOT_TOKEN = "8298720235:AAFGLTJDhHwrTEDDCNqkYugHK6wB7igS6fg";
    const CHAT_ID = "5080160016";

    // Helper to reset modal to initial state
    const resetModalState = () => {
        if (modalFormContent && modalSuccessContent) {
            modalFormContent.style.display = 'block';
            modalSuccessContent.style.display = 'none';
        }
    };

    // Function to send data to Telegram
    async function sendToTelegram(name, phone, email, company, plan) {
        const message = `<b>Нове замовлення (${plan || 'Загальний запит'}):</b>
👤 <b>Ім'я:</b> ${name}
📱 <b>Телефон:</b> ${phone}
📧 <b>Email:</b> ${email}
🏢 <b>Компанія:</b> ${company}`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            });
            return response.ok;
        } catch (error) {
            console.error('Telegram send error:', error);
            return false;
        }
    }

    // Modal Form Submit Handler
    if (modalOrderForm) {
        modalOrderForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('modal-name').value;
            const phone = document.getElementById('modal-phone').value;
            const email = document.getElementById('modal-email').value;
            const company = document.getElementById('modal-company').value;
            const plan = document.getElementById('modal-plan-input').value;

            const success = await sendToTelegram(name, phone, email, company, plan);

            if (success) {
                alert("Дякуємо! Ваша заявка прийнята.");
                if (modalFormContent && modalSuccessContent) {
                    modalFormContent.style.display = 'none';
                    modalSuccessContent.style.display = 'block';
                }
                modalOrderForm.reset();
            } else {
                alert("Помилка при відправці. Спробуйте ще раз.");
            }
        });
    }

    // Footer Form Submit Handler
    if (footerForm) {
        footerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const packageSelect = document.getElementById('package');
            const plan = packageSelect ? packageSelect.options[packageSelect.selectedIndex].text : '';
            const name = '';
            const company = '';

            const success = await sendToTelegram(name, phone, email, company, plan);

            if (success) {
                alert("Дякуємо! Ваша заявка прийнята.");
                if (orderModal) {
                    orderModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
                if (modalFormContent && modalSuccessContent) {
                    modalFormContent.style.display = 'none';
                    modalSuccessContent.style.display = 'block';
                }
                footerForm.reset();
            } else {
                alert("Помилка при відправці. Спробуйте ще раз.");
            }
        });
    }

    // Reset Modal State when closing
    if (orderModal) {
        // Hook into existing close buttons
        const closeBtn = orderModal.querySelector('.close-modal');
        if (closeBtn) {
            // We need to attach this listener carefully not to duplicate default closing logic
            // But since default logic just removes 'active', we can add this as a side effect
            closeBtn.addEventListener('click', resetModalState);
        }
        // Also reset when clicking outside
        orderModal.addEventListener('click', (e) => {
            if (e.target === orderModal) resetModalState();
        });
    }

});