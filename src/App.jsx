import { useState, useMemo } from 'react'
import './App.css'
import ThemeContext, { themes } from './context.js'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Body from './components/Body';

const App = () => {

  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
  }

  const providerValue = useMemo(() => ({
    theme,
    handleChangeTheme
  }), [theme, handleChangeTheme])

  return (
    <ThemeContext.Provider value={providerValue}>
      <Layout>
        <Navbar />
        <Body />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default App

