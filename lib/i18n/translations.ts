export type Locale = "en" | "es" | "ru";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es", "ru"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ru: "Русский",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  ru: "🇷🇺",
};

export type TranslationKeys = typeof en;

const en = {
  // Nav
  "nav.home": "Home",
  "nav.tours": "Tours",
  "nav.jewish_heritage": "Jewish Heritage",
  "nav.luxury": "Luxury Tours",
  "nav.destinations": "Destinations",
  "nav.gallery": "Gallery",
  "nav.about": "About Idrissi",
  "nav.reviews": "Reviews",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "nav.book": "Book a Tour",
  "nav.whatsapp": "WhatsApp",
  // Tours submenu
  "nav.tangier_private": "Tangier Private Tours",
  "nav.shore_excursions": "Shore Excursions",
  "nav.chefchaouen": "Chefchaouen Day Trip",
  "nav.camel": "Camel Ride Experience",
  "nav.transfers": "Private Transfers",
  // Hero
  "hero.badge": "Licensed & Certified Tour Guide — Morocco Ministry of Tourism",
  "hero.title1": "Your Expert Private Guide",
  "hero.title2": "in Tangier & Morocco",
  "hero.subtitle": "Experience the real Morocco — its ancient Medinas, rich Jewish heritage, Blue Mountains, and desert landscapes — with Idrissi, a certified local guide trusted by 500+ travellers from around the world.",
  "hero.book": "Book Your Tour",
  "hero.whatsapp": "WhatsApp Now",
  // Trust bar
  "trust.rating": "4.9★ (87 reviews)",
  "trust.licensed": "Licensed Guide",
  "trust.tours": "500+ Tours Led",
  "trust.experience": "15+ Years Experience",
  "trust.languages": "5 Languages",
  // Sections
  "section.tours.title": "Private Tours & Experiences",
  "section.tours.subtitle": "Every tour is fully private — no strangers, no rigid schedules. Your journey is tailored to your pace, your interests, and your story.",
  "section.reviews.label": "Testimonials",
  "section.reviews.title": "What Travellers Say",
  "section.reviews.cta": "Read All Reviews",
  "section.gallery.label": "In the Field",
  "section.gallery.title": "Morocco Through Our Lens",
  "section.gallery.subtitle": "Authentic photos from real tours — the places you'll visit, the moments you'll remember.",
  "section.gallery.cta": "View Full Gallery",
  "section.booking.label": "Ready to Explore?",
  "section.booking.title": "Book Your Morocco Experience",
  "section.booking.subtitle": "Every TangierTours experience is private, personalised, and fully flexible. Fill in the form and we'll get back to you within 2 hours.",
  // Booking form
  "form.title": "Request Your Tour",
  "form.subtitle": "We reply within 2 hours · No payment required to enquire",
  "form.name": "Full Name",
  "form.email": "Email Address",
  "form.phone": "Phone / WhatsApp",
  "form.group": "Group Size",
  "form.tour": "Tour of Interest",
  "form.date": "Preferred Travel Date",
  "form.cruise": "Cruise Ship Name",
  "form.message": "Special Requests or Questions",
  "form.submit": "Send Booking Request",
  "form.sending": "Sending...",
  "form.success.title": "Booking Request Received!",
  "form.success.text": "Thank you. We reply within 2 hours.",
  "form.whatsapp_hint": "Or contact us instantly:",
  // Footer
  "footer.tagline": "Your trusted, licensed private tour guide in Tangier and Morocco. Crafting unforgettable experiences since 2008.",
  "footer.our_tours": "Our Tours",
  "footer.jewish": "Jewish Heritage",
  "footer.company": "Company",
  "footer.why": "Why TangierTours?",
  "footer.rights": "All rights reserved. Licensed Tour Guide — Morocco Ministry of Tourism.",
  // WhatsApp
  "wa.default": "Hi Idrissi, I'd like to book a private tour in Morocco.",
  "wa.book": "Book via WhatsApp",
  // Common
  "common.learn_more": "Learn More",
  "common.view_tour": "View Tour",
  "common.read_more": "Read More",
  "common.back_on_time": "Back on board on time — guaranteed.",
} as const;
const es = {
  // Nav
  "nav.home": "Inicio",
  "nav.tours": "Tours",
  "nav.jewish_heritage": "Herencia Judía",
  "nav.luxury": "Tours de Lujo",
  "nav.destinations": "Destinos",
  "nav.gallery": "Galería",
  "nav.about": "Sobre Idrissi",
  "nav.reviews": "Opiniones",
  "nav.blog": "Blog",
  "nav.contact": "Contacto",
  "nav.book": "Reservar Tour",
  "nav.whatsapp": "WhatsApp",
  // Tours submenu
  "nav.tangier_private": "Tours Privados en Tánger",
  "nav.shore_excursions": "Excursiones desde el Puerto",
  "nav.chefchaouen": "Excursión a Chefchaouen",
  "nav.camel": "Paseo en Camello",
  "nav.transfers": "Traslados Privados",
  // Hero
  "hero.badge": "Guía Turístico Certificado — Ministerio de Turismo de Marruecos",
  "hero.title1": "Tu Guía Privado Experto",
  "hero.title2": "en Tánger y Marruecos",
  "hero.subtitle": "Descubre el Marruecos auténtico — sus antiguas Medinas, rica herencia judía, las Montañas Azules y paisajes desérticos — con Idrissi, guía local certificado de confianza para más de 500 viajeros.",
  "hero.book": "Reserva Tu Tour",
  "hero.whatsapp": "WhatsApp Ahora",
  // Trust bar
  "trust.rating": "4.9★ (87 opiniones)",
  "trust.licensed": "Guía Certificado",
  "trust.tours": "Más de 500 Tours",
  "trust.experience": "Más de 15 Años",
  "trust.languages": "5 Idiomas",
  // Sections
  "section.tours.title": "Tours y Experiencias Privadas",
  "section.tours.subtitle": "Cada tour es completamente privado — sin extraños, sin horarios rígidos. Tu viaje se adapta a tu ritmo, tus intereses y tu historia.",
  "section.reviews.label": "Testimonios",
  "section.reviews.title": "Lo Que Dicen los Viajeros",
  "section.reviews.cta": "Ver Todas las Opiniones",
  "section.gallery.label": "En el Terreno",
  "section.gallery.title": "Marruecos a Través de Nuestra Lente",
  "section.gallery.subtitle": "Fotos auténticas de tours reales — los lugares que visitarás, los momentos que recordarás.",
  "section.gallery.cta": "Ver Galería Completa",
  "section.booking.label": "¿Listo para Explorar?",
  "section.booking.title": "Reserva Tu Experiencia en Marruecos",
  "section.booking.subtitle": "Cada experiencia de TangierTours es privada, personalizada y completamente flexible. Rellena el formulario y te responderemos en 2 horas.",
  // Booking form
  "form.title": "Solicita Tu Tour",
  "form.subtitle": "Respondemos en 2 horas · No se requiere pago para consultar",
  "form.name": "Nombre Completo",
  "form.email": "Correo Electrónico",
  "form.phone": "Teléfono / WhatsApp",
  "form.group": "Tamaño del Grupo",
  "form.tour": "Tour de Interés",
  "form.date": "Fecha de Viaje Preferida",
  "form.cruise": "Nombre del Crucero",
  "form.message": "Solicitudes Especiales o Preguntas",
  "form.submit": "Enviar Solicitud",
  "form.sending": "Enviando...",
  "form.success.title": "¡Solicitud Recibida!",
  "form.success.text": "Gracias. Respondemos en 2 horas.",
  "form.whatsapp_hint": "O contáctenos al instante:",
  // Footer
  "footer.tagline": "Tu guía turístico privado certificado en Tánger y Marruecos. Creando experiencias inolvidables desde 2008.",
  "footer.our_tours": "Nuestros Tours",
  "footer.jewish": "Herencia Judía",
  "footer.company": "Empresa",
  "footer.why": "¿Por Qué TangierTours?",
  "footer.rights": "Todos los derechos reservados. Guía Turístico Certificado — Ministerio de Turismo de Marruecos.",
  // WhatsApp
  "wa.default": "Hola Idrissi, me gustaría reservar un tour privado en Marruecos.",
  "wa.book": "Reservar por WhatsApp",
  // Common
  "common.learn_more": "Más Información",
  "common.view_tour": "Ver Tour",
  "common.read_more": "Leer Más",
  "common.back_on_time": "De vuelta a tiempo — garantizado.",
} as const;
const ru = {
  // Nav
  "nav.home": "Главная",
  "nav.tours": "Туры",
  "nav.jewish_heritage": "Еврейское Наследие",
  "nav.luxury": "Люкс Туры",
  "nav.destinations": "Направления",
  "nav.gallery": "Галерея",
  "nav.about": "Об Идриси",
  "nav.reviews": "Отзывы",
  "nav.blog": "Блог",
  "nav.contact": "Контакты",
  "nav.book": "Забронировать",
  "nav.whatsapp": "WhatsApp",
  // Tours submenu
  "nav.tangier_private": "Частные туры в Танжере",
  "nav.shore_excursions": "Экскурсии с корабля",
  "nav.chefchaouen": "Однодневный тур в Шефшауэн",
  "nav.camel": "Прогулка на верблюдах",
  "nav.transfers": "Частные трансферы",
  // Hero
  "hero.badge": "Лицензированный гид — Министерство туризма Марокко",
  "hero.title1": "Ваш личный экспертный гид",
  "hero.title2": "в Танжере и Марокко",
  "hero.subtitle": "Откройте настоящее Марокко — древние медины, богатое еврейское наследие, Синие горы и пустынные пейзажи — с Идриси, сертифицированным местным гидом, которому доверяют более 500 путешественников со всего мира.",
  "hero.book": "Забронировать тур",
  "hero.whatsapp": "WhatsApp сейчас",
  // Trust bar
  "trust.rating": "4.9★ (87 отзывов)",
  "trust.licensed": "Лицензированный гид",
  "trust.tours": "500+ туров",
  "trust.experience": "15+ лет опыта",
  "trust.languages": "5 языков",
  // Sections
  "section.tours.title": "Частные туры и опыт",
  "section.tours.subtitle": "Каждый тур полностью приватный — без посторонних, без жёстких расписаний. Ваше путешествие адаптировано под ваш темп, интересы и историю.",
  "section.reviews.label": "Отзывы",
  "section.reviews.title": "Что говорят путешественники",
  "section.reviews.cta": "Читать все отзывы",
  "section.gallery.label": "На месте",
  "section.gallery.title": "Марокко через наш объектив",
  "section.gallery.subtitle": "Подлинные фотографии с реальных туров — места, которые вы посетите, моменты, которые запомните.",
  "section.gallery.cta": "Смотреть всю галерею",
  "section.booking.label": "Готовы исследовать?",
  "section.booking.title": "Забронируйте опыт в Марокко",
  "section.booking.subtitle": "Каждый тур TangierTours приватный, персонализированный и полностью гибкий. Заполните форму и мы ответим вам в течение 2 часов.",
  // Booking form
  "form.title": "Запросить тур",
  "form.subtitle": "Отвечаем в течение 2 часов · Оплата не требуется для запроса",
  "form.name": "Полное имя",
  "form.email": "Электронная почта",
  "form.phone": "Телефон / WhatsApp",
  "form.group": "Размер группы",
  "form.tour": "Интересующий тур",
  "form.date": "Предпочтительная дата",
  "form.cruise": "Название круизного судна",
  "form.message": "Особые пожелания или вопросы",
  "form.submit": "Отправить запрос",
  "form.sending": "Отправка...",
  "form.success.title": "Запрос получен!",
  "form.success.text": "Спасибо. Мы ответим в течение 2 часов.",
  "form.whatsapp_hint": "Или свяжитесь с нами мгновенно:",
  // Footer
  "footer.tagline": "Ваш надёжный лицензированный частный гид в Танжере и Марокко. Создаём незабываемые впечатления с 2008 года.",
  "footer.our_tours": "Наши туры",
  "footer.jewish": "Еврейское наследие",
  "footer.company": "Компания",
  "footer.why": "Почему TangierTours?",
  "footer.rights": "Все права защищены. Лицензированный гид — Министерство туризма Марокко.",
  // WhatsApp
  "wa.default": "Здравствуйте Идриси, я хотел бы забронировать частный тур в Марокко.",
  "wa.book": "Забронировать через WhatsApp",
  // Common
  "common.learn_more": "Подробнее",
  "common.view_tour": "Смотреть тур",
  "common.read_more": "Читать далее",
  "common.back_on_time": "Вернётесь вовремя — гарантировано.",
} as const;

export const translations = { en, es, ru } as const;
export function t(locale: Locale, key: keyof TranslationKeys): string {
  const dict = translations[locale] as Record<string, string>;
  const fallback = translations["en"] as Record<string, string>;
  return dict[key as string] ?? fallback[key as string] ?? String(key);
}
