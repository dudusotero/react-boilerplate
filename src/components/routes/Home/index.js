import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  useFormInput,
  useDocumentTitle,
  useRouter,
  useWindowWidth,
  useMedia,
} from '../../../hooks'
import Avatar from '../../commons/Avatar'
import { StyledAvatar } from './styles'

function Home() {
  const title = useFormInput('')

  const { t, i18n } = useTranslation('Home')

  const { history, location, match } = useRouter()

  useDocumentTitle(title.value)

  const width = useWindowWidth()

  const small = useMedia('(max-width: 400px)')

  const large = useMedia('(min-width: 800px)')

  return (
    <div style={{ color: 'white' }}>
      <Avatar src="https://picsum.photos/200" size="largest" showStatus />
      <StyledAvatar />
      <h1>{title.value}</h1>
      <p>
        <strong>Small - </strong>
        {small ? 'Yep' : 'Nope'}
      </p>
      <p>
        <strong>Large - </strong>
        {large ? 'Yep' : 'Nope'}
      </p>
      <p>
        <input value={title.value} onChange={title.onChange} />
      </p>
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
