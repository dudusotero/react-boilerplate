import React, { useState, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'

import { AuthCtxProvider } from './reducers'
import i18n from './i18n'
import { GlobalStyle, darkTheme } from './themes'
import Routes from './Routes'

const App = () => {
  const [theme] = useState(darkTheme)

  return (
    <BrowserRouter>
      <AuthCtxProvider>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <Fragment>
              <GlobalStyle />
              <Routes />
            </Fragment>
          </ThemeProvider>
        </I18nextProvider>
      </AuthCtxProvider>
    </BrowserRouter>
  )
}

export default App
