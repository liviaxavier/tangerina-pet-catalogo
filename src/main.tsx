import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import { createTheme,  ThemeProvider } from '@mui/material';
import { Auth0Provider  } from '@auth0/auth0-react';
// import TagManager from 'react-gtm-module'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
const theme = createTheme({
  typography: {
    fontFamily: [
      "Space Grotesk", 'sans-serif',
    ].join(','),
  },
  palette:{
  primary:{
    main: "#F78F57"
  }
  }
});
// const tagManagerArgs = {
//   gtmId: 'GTM-PSRSHBJQ'
// }

// TagManager.initialize(tagManagerArgs)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <CssBaseline /> */}
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
