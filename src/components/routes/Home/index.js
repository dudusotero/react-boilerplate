import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  useFormInput,
  useDocumentTitle,
  useRouter,
  useWindowWidth,
} from '../../../hooks'

function Home() {
  const title = useFormInput('Title Sucks!')

  const { t, i18n } = useTranslation('Home')

  const { history, location, match } = useRouter()

  useDocumentTitle(title.value)

  const width = useWindowWidth()

  return (
    <div style={{ color: 'white' }}>
      <h1>Title</h1>
      <p>
        <strong>translation:</strong>
        {t('Test')}
        <button type="button" onClick={() => i18n.changeLanguage('pt-BR')}>
          {t('Change Translation')}
        </button>
      </p>
      <p>
        <strong>width:</strong>
        {width}
      </p>
      <p>
        <strong>history:</strong>
        {JSON.stringify(history)}
      </p>
      <p>
        <strong>location:</strong>
        {JSON.stringify(location)}
      </p>
      <p>
        <strong>match:</strong>
        {JSON.stringify(match)}
      </p>
    </div>
  )
}
export default Home
