import i18n from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'
import enUs from './en-us'
import ptBr from './pt-br'

i18n.use(LngDetector).init({
  resources: {
    'en-US': enUs,
    'pt-BR': ptBr,
  },
  fallbackLng: 'en-US',
  debug: true,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
})

export default i18n
