/* ========================================= */
/* 1. MULTI-LANGUAGE SYSTEM (EN / PL / UA)   */
/* ========================================= */

const translations = {
    en: {
        hero_title: "SAINT TWINS DETECTIVE",
        hero_subtitle: "Intellectual training for team interaction",
        hero_btn: "Choose Format",

        nav_home: "Home",
        nav_features: "Features",
        nav_gallery: "Gallery",
        nav_pricing: "Pricing",
        nav_reviews: "Reviews",
        nav_contact: "Contact",

        immersion_title: "Game as a Growth Tool",
        imm_1_title: "Critical Thinking",
        imm_1_text: "Forget boring lectures. In this **detective simulation**, your team faces unstructured data from real case files. The goal is to filter out the noise, verify sources, and build a causal chain based on facts to identify the suspect.",
        imm_2_title: "Digital Adaptability",
        imm_2_text: "The investigation demands speed. Our web interface turns your office into a **police HQ**, simulating high pressure where every minute counts. Participants learn to test hypotheses instantly and make data-driven decisions.",
        imm_3_title: "Team Synergy",
        imm_3_text: "To **crack the case**, a loud voice isn't enough. We create conditions where the team must move from chaotic debate to constructive dialogue. Success requires combining cold logic with creative intuition to solve the mystery.",

        features_title: "Why It's Effective",
        feat_1_title: "Training, Not Just Play",
        feat_1_text: "VUCA environment simulation. We teach decision-making under pressure.",
        feat_2_title: "Zero Headache Policy",
        feat_2_text: "You provide the space—we create the event. Full technical provisioning, setup, and administration are included. Zero organizational hassle for you.",
        feat_3_title: "Financial Efficiency",
        feat_3_text: "Victory depends on the saved budget and the accuracy of your conclusions, not speed. Every mistake has a price, so quality of decisions matters more than haste.",

        gallery_title: "Gallery",

        pricing_title: "Choose Your Format",
        price_1_title: "OFFICE DETECTIVE",
        price_1_desc: "Smart & Fast",
        price_1_list: "<li>🕵️ 2 Hosts</li><li>💻 Web Application</li><li>📂 Basic Case Files</li><li>⏱ Duration: 2 - 3h</li>",
        price_btn: "Order Now",

        price_pop_badge: "BESTSELLER",
        price_2_title: "PRO INVESTIGATION",
        price_2_desc: "Training & Atmosphere",
        price_2_list: "<li>🔥 <strong>Everything in Office +</strong></li><li>📸 Photo Zone & Decor</li><li>🎩 Player Props</li><li>🎁 Prizes</li><li>🎵 Thematic Soundscape</li><li>📊 Debriefing</li>",
        price_2_btn: "Order PRO",

        price_3_title: "EXECUTIVE VIP",
        price_3_desc: "Employer Branding",
        price_3_list: "<li>👑 <strong>Everything in PRO +</strong></li><li>📷 Professional Photographer</li><li>📈 HR Report (Soft Skills)</li><li>🏷️ Branded Materials (Logo)</li><li>🎥 Video Report</li>",
        price_3_btn: "Order VIP",

        reviews_title: "Client Reviews",
        review_1_text: "\"It was incredible! The team really came together to crack the case. The best teambuilding in 3 years.\"",
        review_1_name: "Olena, HR Director",
        review_2_text: "\"Loved that it wasn't just fun, but soft skills training. We saw who makes decisions under stress.\"",
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
        form_phone: "Phone Number",
        form_btn: "Send Request",
        copyright: "&copy; 2026 Saint Twins Detective. All rights reserved.",

        modal_title: "Order Request",
        modal_subtitle: "Selected Package:",
        modal_btn: "Submit Request",
        modal_success_title: "Application Received!",
        modal_success_desc: "We will contact you shortly to clarify the details."
    },
    pl: {
        hero_title: "SAINT TWINS DETECTIVE",
        hero_subtitle: "Intelektualny trening współpracy zespołowej",
        hero_btn: "Wybierz Format",

        nav_home: "Główna",
        nav_features: "Zalety",
        nav_gallery: "Galeria",
        nav_pricing: "Pakiety",
        nav_reviews: "Opinie",
        nav_contact: "Kontakt",

        immersion_title: "Gra jako narzędzie rozwoju",
        imm_1_title: "Myślenie Krytyczne",
        imm_1_text: "Zapomnij o nudnych wykładach. W tej **symulacji detektywistycznej** Twój zespół mierzy się z danymi z akt sprawy. Celem jest odsianie szumu, weryfikacja źródeł i zbudowanie ciągu przyczynowo-skutkowego, by wskazać sprawcę.",
        imm_2_title: "Adaptacyjność Cyfrowa",
        imm_2_text: "Śledztwo wymaga szybkości. Nasz interfejs zamienia biuro w **centrum dowodzenia**, symulując presję, gdzie liczy się każda minuta. Uczestnicy uczą się błyskawicznie testować hipotezy i podejmować decyzje oparte na danych.",
        imm_3_title: "Synergia Zespołu",
        imm_3_text: "Aby **rozwiązać zagadkę**, nie wystarczy krzyczeć. Tworzymy warunki, w których zespół musi przejść do konstruktywnego dialogu. Sukces wymaga połączenia chłodnej logiki z kreatywną intuicją, by zamknąć sprawę.",

        features_title: "Dlaczego to działa",
        feat_1_title: "Szkolenie, nie tylko zabawa",
        feat_1_text: "Symulacja warunków niepewności (VUCA). Uczymy podejmowania decyzji pod presją.",
        feat_2_title: "Polityka Zero Headache",
        feat_2_text: "Udostępniasz tylko przestrzeń – my tworzymy wydarzenie. Pełne zaplecze techniczne, konfiguracja i administracja są w cenie. Zero problemów organizacyjnych dla klienta.",
        feat_3_title: "Efektywność Finansowa",
        feat_3_text: "Zwycięstwo zależy nie od szybkości, ale od zaoszczędzonego budżetu i trafności wniosków. Każdy błąd ma swoją cenę, dlatego jakość decyzji jest ważniejsza niż pośpiech.",

        gallery_title: "Galeria",

        pricing_title: "Wybierz Format",
        price_1_title: "OFFICE DETECTIVE",
        price_1_desc: "Smart & Fast",
        price_1_list: "<li>🕵️ 2 Prowadzących</li><li>💻 Aplikacja Webowa</li><li>📂 Podstawowe Materiały</li><li>⏱ Czas: 2 - 3h</li>",
        price_btn: "Zamów",

        price_pop_badge: "BESTSELLER",
        price_2_title: "PRO INVESTIGATION",
        price_2_desc: "Training & Atmosphere",
        price_2_list: "<li>🔥 <strong>Wszystko z Office +</strong></li><li>📸 Strefa Foto i Dekoracje</li><li>🎩 Rekwizyty dla graczy</li><li>🎁 Nagrody</li><li>🎵 Tematyczna oprawa dźwiękowa</li><li>📊 Debriefing</li>",
        price_2_btn: "Zamów PRO",

        price_3_title: "EXECUTIVE VIP",
        price_3_desc: "Employer Branding",
        price_3_list: "<li>👑 <strong>Wszystko z PRO +</strong></li><li>📷 Profesjonalny Fotograf</li><li>📈 Raport HR (Soft Skills)</li><li>🏷️ Branding materiałów (Logo)</li><li>🎥 Raport Wideo</li>",
        price_3_btn: "Zamów VIP",

        reviews_title: "Opinie Klientów",
        review_1_text: "\"To było niesamowite! Zespół naprawdę się zjednoczył, by rozwiązać sprawę. Najlepszy teambuilding od 3 lat.\"",
        review_1_name: "Olena, HR Director",
        review_2_text: "\"Podobało mi się, że to nie tylko zabawa, ale trening soft skills. Zobaczyliśmy, kto jak podejmuje decyzje w stresie.\"",
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
        form_phone: "Numer Telefonu",
        form_btn: "Wyślij Zgłoszenie",
        copyright: "&copy; 2026 Saint Twins Detective. Wszelkie prawa zastrzeżone.",

        modal_title: "Formularz Zamówienia",
        modal_subtitle: "Wybrany pakiet:",
        modal_btn: "Wyślij Zapytanie",
        modal_success_title: "Zgłoszenie Przyjęte!",
        modal_success_desc: "Skontaktujemy się z Tobą wkrótce w celu ustalenia szczegółów."
    },
    ua: {
        hero_title: "SAINT TWINS DETECTIVE",
        hero_subtitle: "Інтелектуальний тренінг командної взаємодії",
        hero_btn: "Обрати формат",

        nav_home: "Головна",
        nav_features: "Переваги",
        nav_gallery: "Галерея",
        nav_pricing: "Пакети та Ціни",
        nav_reviews: "Відгуки та Клієнти",
        nav_contact: "Контакти",

        immersion_title: "Гра як інструмент розвитку",
        imm_1_title: "Критичне мислення",
        imm_1_text: "Забудьте про нудні лекції. У цій **детективній симуляції** ваша команда працює з масивом даних з реальних матеріалів справи. Мета — відсіяти шум, перевірити джерела та побудувати логічний ланцюжок, щоб вирахувати злочинця.",
        imm_2_title: "Digital-адаптивність",
        imm_2_text: "Розслідування вимагає швидкості. Наш веб-інтерфейс перетворює офіс на **поліцейський штаб**, створюючи тиск часу. Учасники вчаться миттєво перевіряти гіпотези та приймати рішення на основі отриманих доказів.",
        imm_3_title: "Командна синергія",
        imm_3_text: "Щоб **розкрити справу**, недостатньо гучних суперечок. Ми створюємо умови, де команда мусить перейти до конструктивного діалогу. Успіх вимагає поєднання холодної логіки та креативної інтуїції для розгадки таємниці.",

        features_title: "Чому це ефективно",
        feat_1_title: "Тренінг, а не гра",
        feat_1_text: "Симуляція умов невизначеності (VUCA). Вчимо приймати рішення під тиском.",
        feat_2_title: "Політика Zero Headache",
        feat_2_text: "Ви надаєте лише простір — ми створюємо подію. Повне технічне забезпечення, налаштування та адміністрування процесу входять у вартість. Жодних організаційних клопотів для замовника.",
        feat_3_title: "Фінансова ефективність",
        feat_3_text: "Перемога залежить не від швидкості, а від збереженого бюджету та точності висновків. Кожна помилка має свою ціну, тому якість рішень важливіша за поспіх.",

        gallery_title: "Галерея",

        pricing_title: "Оберіть свій формат",
        price_1_title: "OFFICE DETECTIVE",
        price_1_desc: "Smart & Fast",
        price_1_list: "<li>🕵️ 2 ведучих</li><li>💻 Веб-додаток</li><li>📂 Базові матеріали</li><li>⏱ Тривалість: 2 - 3 години</li>",
        price_btn: "Замовити",

        price_pop_badge: "ХІТ ПРОДАЖУ",
        price_2_title: "PRO INVESTIGATION",
        price_2_desc: "Training & Atmosphere",
        price_2_list: "<li>🔥 <strong>Все з пакету Office +</strong></li><li>📸 Фотозона та декор</li><li>🎩 Реквізит для гравців</li><li>🎁 Призи</li><li>🎵 Тематичний саунд-дизайн</li><li>📊 Дебрифінг</li>",
        price_2_btn: "Замовити PRO",

        price_3_title: "EXECUTIVE VIP",
        price_3_desc: "Employer Branding",
        price_3_list: "<li>👑 <strong>Все з пакету PRO +</strong></li><li>📷 Професійний фотограф</li><li>📈 HR-звіт (Soft Skills)</li><li>🏷️ Брендування матеріалів (Лого)</li><li>🎥 Відео-звіт</li>",
        price_3_btn: "Замовити VIP",

        reviews_title: "Що кажуть клієнти",
        review_1_text: "\"Це було неймовірно! Команда справді об'єдналася, щоб розкрити справу. Найкращий тімбілдінг за останні 3 роки.\"",
        review_1_name: "Olena, HR Director",
        review_2_text: "\"Сподобалось, що це не просто розвага, а тренування soft skills. Ми побачили, хто як приймає рішення в стресі.\"",
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
        form_phone: "Номер телефону",
        form_btn: "Надіслати заявку",
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
            if (key.includes('list') || key.includes('text') || key.includes('copyright') || key.includes('desc')) {
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

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            const packageSelect = document.getElementById('package');
            const plan = packageSelect ? packageSelect.options[packageSelect.selectedIndex].text : '';

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