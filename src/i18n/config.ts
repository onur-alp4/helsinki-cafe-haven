import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          nav: {
            about: 'About Us',
            contact: 'Contact',
          },
          hero: {
            title: 'Café Helena',
            subtitle: 'A cozy corner in Helsinki serving artisanal coffee and Nordic-inspired cuisine',
            cta: 'View Menu',
          },
          about: {
            title: 'Our Story',
            description1: 'Welcome to Café Helena, where Nordic traditions meet modern gastronomy. Founded by Helena Virtanen in 2020, our café has become a beloved spot in Helsinki\'s vibrant food scene.',
            description2: 'We take pride in sourcing local ingredients and creating seasonal menus that reflect the pure flavors of Finnish cuisine. Whether you\'re joining us for a morning coffee or planning a catered event, we bring the same dedication to quality and service.',
          },
          menu: {
            title: 'Menu',
            breakfast: 'Breakfast',
            lunch: 'Lunch',
          },
          services: {
            title: 'Our Services',
            cafe: {
              title: 'Café Dining',
              description: 'Join us for breakfast, lunch, or coffee and pastries in our cozy café space.',
            },
            catering: {
              title: 'Catering Services',
              description: 'Let us bring our Nordic flavors to your special events and corporate functions.',
            },
          },
          contact: {
            title: 'Visit Us',
            address: 'Address',
            hours: 'Hours',
            weekdays: 'Monday - Friday: 8:00 - 18:00',
            saturday: 'Saturday: 9:00 - 17:00',
            sunday: 'Sunday: 10:00 - 16:00',
            phone: 'Phone',
            email: 'Email',
          },
          testimonials: {
            title: 'What Our Customers Say',
          },
          booking: {
            title: 'Book Catering',
            form: {
              name: 'Your Name',
              email: 'Email Address',
              guests: 'Number of Guests',
              message: 'Tell us about your event...',
              submit: 'Send Inquiry',
              success: 'Inquiry Sent',
              successMessage: 'We\'ll get back to you within 24 hours.',
            },
          },
        },
      },
      fi: {
        translation: {
          nav: {
            about: 'Meistä',
            contact: 'Yhteystiedot',
          },
          hero: {
            title: 'Café Helena',
            subtitle: 'Viihtyisä kahvila Helsingissä, jossa tarjoillaan käsintehtyä kahvia ja pohjoismaista ruokaa',
            cta: 'Katso Menu',
          },
          about: {
            title: 'Tarinamme',
            description1: 'Tervetuloa Café Helenaan, jossa pohjoismaiset perinteet kohtaavat modernin gastronomian. Helena Virtasen vuonna 2020 perustamasta kahvilasta on tullut rakastettu osa Helsingin eloisaa ruokakulttuuria.',
            description2: 'Olemme ylpeitä käyttäessämme paikallisia raaka-aineita ja luodessamme kausiluonteisia menuja, jotka heijastavat suomalaisen keittiön puhtaita makuja. Oli kyseessä sitten aamukahvi tai catering-tilaisuus, tuomme saman omistautumisen laatuun ja palveluun.',
          },
          menu: {
            title: 'Menu',
            breakfast: 'Aamiainen',
            lunch: 'Lounas',
          },
          services: {
            title: 'Palvelumme',
            cafe: {
              title: 'Kahvilapalvelut',
              description: 'Tule nauttimaan aamiaisesta, lounaasta tai kahvista ja leivonnaisista viihtyisään kahvilaamme.',
            },
            catering: {
              title: 'Catering-palvelut',
              description: 'Tuomme pohjoismaiset maut erityistilaisuuksiisi ja yritystapahtumiin.',
            },
          },
          contact: {
            title: 'Käy meillä',
            address: 'Osoite',
            hours: 'Aukioloajat',
            weekdays: 'Maanantai - Perjantai: 8:00 - 18:00',
            saturday: 'Lauantai: 9:00 - 17:00',
            sunday: 'Sunnuntai: 10:00 - 16:00',
            phone: 'Puhelin',
            email: 'Sähköposti',
          },
          testimonials: {
            title: 'Asiakkaidemme kokemuksia',
          },
          booking: {
            title: 'Varaa catering',
            form: {
              name: 'Nimesi',
              email: 'Sähköpostiosoite',
              guests: 'Vieraiden määrä',
              message: 'Kerro tapahtumastasi...',
              submit: 'Lähetä tiedustelu',
              success: 'Tiedustelu lähetetty',
              successMessage: 'Vastaamme sinulle 24 tunnin kuluessa.',
            },
          },
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;