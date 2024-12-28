import { StrictMode } from 'react'
import { ConfigProvider as ThemeProvider, theme } from 'antd';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// const selectedTheme = 'defaultAlgorithm';
const selectedTheme = 'darkAlgorithm';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      theme={{
      algorithm: theme[selectedTheme],
      "token": {
        fontFamily: '"Maven Pro", "Bebas Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
        "colorPrimary": "#bb30ff",
        "colorInfo": "#bb30ff",
        "colorSuccess": "#3ec71a",
      },
    }}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
