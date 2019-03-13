import React, { useState, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AuthCtxProvider } from './reducers'
import { GlobalStyle, darkTheme } from './themes'
import Routes from './Routes'

const App = () => {
  const [theme] = useState(darkTheme)

  return (
    <BrowserRouter>
      <AuthCtxProvider>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />
            <Routes />
          </Fragment>
        </ThemeProvider>
      </AuthCtxProvider>
    </BrowserRouter>
  )
}

export default App
